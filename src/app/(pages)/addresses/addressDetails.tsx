import AnimatedCopyContent from "@/app/components/common/copyButton";
import WaInput from "@/app/components/common/input";
import PhoneInputWithCountryCode from "@/app/components/common/phoneNumberInput";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import {
  Bookmark,
  Building2,
  Check,
  CircleX,
  Copy,
  Download,
  Hash,
  Mail,
  MapPin,
  MonitorDot,
  Pin,
  Save,
  ScrollText,
  UserRound,
  X,
} from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";

interface AddressDetailsProps {
  isOpen: boolean;
  onOpenChange: any;
}

const AddressDetailsModal: FC<AddressDetailsProps> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <>
      <Modal
        className="cards-dark sm:h-auto h-[80%]"
        scrollBehavior="inside"
        size="4xl"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Reshipper Details
              </ModalHeader>
              <ModalBody className="flex flex-col gap-6">
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-row items-center justify-start gap-5 flex-wrap">
                    <div className="relative">
                      <Image
                        src="https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg"
                        alt="WanaShip-logo"
                        width={80}
                        height={80}
                        className={` rounded-2xl`}
                      />
                      <div className="absolute -bottom-0 -right-0 border-2 border-white dark:border-[#191D30] inline-flex items-center justify-center px-[0.4rem] py-[0.4rem] text-xs font-semibold leading-none text-white dark:text-black bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-gray-700 text-lg font-bold">
                        Tony Reichert
                      </h3>
                      <div className="flex flex-row items-center gap-2">
                        <Image
                          src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/ma.svg"
                          alt="Country Flag"
                          width={20}
                          height={16}
                          className={` `}
                        />
                        <p className="text-gray-500">Morocco</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 flex-wrap items-center">
                    <div className="flex flex-row gap-2 items-center ">
                      <span className="font-medium text-xs bg-gray-100 p-2 rounded-full">
                        <MonitorDot className="text-gray-400" size={15} />
                      </span>
                      <div className="flex flex-col w-full">
                        <span className="text-gray-500 font-medium text-xs">
                          STATUS
                        </span>
                        <p className="font-semibold text-base line-clamp-2">
                          Available
                          {/* Not Available */}
                          {/* Unavailable from
                      <br />
                      28/05/2024 → 28/06/2024 */}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center ">
                      <span className="font-medium text-xs bg-gray-100 p-2 rounded-full">
                        <Pin className="text-gray-400" size={15} />
                      </span>
                      <div className="flex flex-col w-full">
                        <span className="text-gray-500 font-medium text-xs">
                          TYPE
                        </span>
                        <p className="font-semibold text-base line-clamp-2">
                          Unclimed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <WaInput
                    type="text"
                    label="Name"
                    defaultValue="Badr Karrachai"
                    isReadOnly
                    startContent={
                      <UserRound className=" text-gray-600" size={17} />
                    }
                  />
                  <WaInput
                    type="text"
                    label="Email"
                    defaultValue="BadrKarrachai@gmail.com"
                    isReadOnly
                    startContent={<Mail className=" text-gray-600" size={17} />}
                  />
                  <PhoneInputWithCountryCode />
                  <WaInput
                    type="text"
                    label="Country"
                    defaultValue="USA"
                    isReadOnly
                    startContent={
                      <MapPin className=" text-gray-600" size={17} />
                    }
                  />
                  <WaInput
                    type="text"
                    label="State"
                    defaultValue="New York State"
                    isReadOnly
                    startContent={
                      <MapPin className=" text-gray-600" size={17} />
                    }
                  />
                  <WaInput
                    type="text"
                    label="City"
                    defaultValue="New York"
                    isReadOnly
                    startContent={
                      <Building2 className=" text-gray-600" size={17} />
                    }
                  />
                  <WaInput
                    type="text"
                    label="Address Line 1"
                    defaultValue="123 Main Street, New York, NY 10012"
                    isReadOnly
                    startContent={
                      <MapPin className=" text-gray-600" size={17} />
                    }
                  />
                  <WaInput
                    type="text"
                    label="Address Line 2"
                    defaultValue="123 Main Street, New York, NY 10012"
                    isReadOnly
                    startContent={
                      <MapPin className=" text-gray-600" size={17} />
                    }
                  />

                  <WaInput
                    type="text"
                    label="Zip Code"
                    defaultValue="10012"
                    isReadOnly
                    startContent={<Hash className=" text-gray-600" size={17} />}
                  />
                  <Textarea
                    label="Note"
                    startContent={
                      <ScrollText className=" text-gray-600" size={17} />
                    }
                    placeholder="No notes"
                    isReadOnly
                    minRows={3}
                    maxRows={4}
                    classNames={{
                      inputWrapper: "clickable-dark",
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-start sm:justify-end gap-3 flex-wrap-reverse">
                <Button
                  className="py-5 sm:px-6 text-gray-600 dark:text-gray-900 bg-[#e6e6e6] font-medium clickable-dark"
                  onPress={onClose}
                >
                  <CircleX size={16} className="" /> Close
                </Button>
                <Button className="py-5 sm:px-6 text-gray-600 dark:text-gray-900 bg-[#e6e6e6] font-medium clickable-dark">
                  <Copy size={16} className="" /> Copy All
                </Button>
                <Button className="py-5 sm:px-6 text-gray-600 dark:text-gray-900 bg-[#e6e6e6] font-medium clickable-dark">
                  <Download size={16} className="" /> Export as CSV
                </Button>
                <Button className="py-5 sm:px-6 text-gray-50 dark:text-gray-900 bg-[#e6e6e6] font-medium clickable-dark">
                  <Save size={16} className="" /> Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddressDetailsModal;
