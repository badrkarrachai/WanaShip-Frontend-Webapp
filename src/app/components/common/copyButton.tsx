import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Check, Copy } from "lucide-react";

interface AnimatedCopyContentProps {
  value: string; // The value to be copied
}

const AnimatedCopyContent = ({ value }: AnimatedCopyContentProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      // Use Clipboard API to copy the value
      await navigator.clipboard.writeText(value);

      // Set copied state to true to show the Check icon
      setIsCopied(true);

      // Reset the copied state after a timeout (if needed)
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Show Check for 2 seconds then revert to Copy
    } catch (error) {
      console.error("Failed to copy: ", error);
      // Handle any errors, such as if the clipboard is not supported
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        isIconOnly
        className="mb-[-3px] bg-transparent border-none"
        onClick={handleCopyClick}
      >
        {isCopied ? (
          <Check className="text-gray-600 cursor-pointer" size={14} />
        ) : (
          <Copy className="text-gray-600 cursor-pointer" size={14} />
        )}
      </Button>
    </motion.div>
  );
};

export default AnimatedCopyContent;
