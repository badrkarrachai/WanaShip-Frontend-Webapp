import { FC } from "react";
import { NotepadText } from "lucide-react";
import BodyCard from "./inventoryBodyCard";
import HeaderCard from "./inventoryHeaderCard";

interface pageProps {}

const Inventory: FC<pageProps> = ({}) => {
  return (
    <>
      <section id="inventory" className="flex flex-col gap-6 xl:gap-8">
        <HeaderCard title="Purchase Orders" />
        <BodyCard />
      </section>
    </>
  );
};

export default Inventory;
