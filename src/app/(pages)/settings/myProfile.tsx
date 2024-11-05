import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Pencil, PencilLine } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface MyProfileProps {}

export const MyProfile: FC<MyProfileProps> = ({}) => {
  return (
    <>
      <Card
        shadow="sm"
        className={`flex justify-between relative cards-dark w-full mb-32`}
      >
        <CardBody className="p-8 flex flex-col items-start justify-stretch gap-5 w-full">
          <h3 className="text-xl font-medium">My Profile</h3>
          <div id="myProfile" className="flex flex-col gap-5 w-full">
            <Card
              className="bg-transparent dark:border-WaBorderDark border p-6 w-full flex flex-row items-center justify-between"
              shadow="none"
            >
              <div className="flex flex-row gap-5 items-center">
                <div
                  id="Avatar"
                  className="flex relative group justify-center items-center"
                >
                  <Image
                    src="https://imagizer.imageshack.com/img922/4831/rqmbNX.jpg"
                    alt="WanaShip-logo"
                    width={80}
                    height={80}
                    className="rounded-full cursor-pointer"
                  />
                  <div className="w-[80px] h-[80px] cursor-pointer hidden group-hover:block rounded-full bg-slate-950 bg-opacity-35 dark:bg-white dark:bg-opacity-65 absolute inset-0"></div>
                  <Pencil
                    className="absolute text-white dark:text-black hidden group-hover:block"
                    size={20}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base sm:text-xl font-medium">
                    Badr Karrachai
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    User/Clinet
                  </p>
                  <p className="text-sm text-gray-400">
                    badrkarrachai@gmail.com
                  </p>
                </div>
              </div>
              <Button
                radius="full"
                className="sm:flex hidden bg-transparent dark:border-WaBorderDark border text-[9.7pt] p-5 text-gray-600"
              >
                Edit
                <PencilLine className="" size={15} />
              </Button>
            </Card>
            <Card
              className="bg-transparent dark:border-WaBorderDark border p-6 w-full flex flex-row "
              shadow="none"
            >
              <div className="flex flex-row gap-5 items-center w-full">
                <div
                  id="Personal-Information"
                  className="flex flex-col gap-6 relative group justify-center items-start w-full"
                >
                  <h4 className="text-lg font-normal">Personal Information</h4>
                  <div className="grid  grid-cols-1 items-start sm:grid-cols-2 w-[100%] xl:w-[55%] gap-6 ">
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-500 ">First Name</span>
                      <p className="text-[10pt]">Badr</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-500 ">Last Name</span>
                      <p className="text-[10pt]">Karrachai</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-500 ">Email Address</span>
                      <p className="text-[10pt]">Badrkarrachai1999@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-500 ">Phone</span>
                      <p className="text-[10pt]">+2126578900</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-500 ">Bio</span>
                      <p className="text-[10pt]">
                        Software developer based in morocco
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                radius="full"
                className="sm:flex hidden bg-transparent dark:border-WaBorderDark border text-[9.7pt] p-5 text-gray-600"
              >
                Edit
                <PencilLine className="" size={15} />
              </Button>
            </Card>
            <Card
              className="bg-transparent dark:border-WaBorderDark border p-6 w-full flex flex-row "
              shadow="none"
            >
              <div className="flex flex-row gap-5 items-center w-full">
                <div
                  id="Personal-Information"
                  className="flex flex-col gap-6 relative group justify-center items-start w-full"
                >
                  <h4 className="text-lg font-normal">Address</h4>
                  <div className="grid  grid-cols-1 items-start sm:grid-cols-2 w-[100%] xl:w-[55%] gap-6 ">
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-500 ">Country</span>
                      <p className="text-[10pt]">Morocco</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-500 ">City/State</span>
                      <p className="text-[10pt]">Guelmim</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-500 ">Postal Code</span>
                      <p className="text-[10pt]">81003</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-500 ">TAX ID</span>
                      <p className="text-[10pt]">68464616</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                radius="full"
                className="sm:flex hidden bg-transparent dark:border-WaBorderDark border text-[9.7pt] p-5 text-gray-600"
              >
                Edit
                <PencilLine className="" size={15} />
              </Button>
            </Card>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default MyProfile;
