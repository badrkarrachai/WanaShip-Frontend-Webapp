import { FC } from "react";
import AddressesHeaderCard from "./addressesHeaderCard";
import AddressesBodyCard from "./addressesBodyCard";

interface AddressesProps {}

export const Addresses: FC<AddressesProps> = ({}) => {
  return (
    <>
      <section id="addresses" className="flex flex-col gap-6 xl:gap-8">
        <AddressesHeaderCard title="My Addresses" />
        <AddressesBodyCard />
      </section>
    </>
  );
};

export default Addresses;
