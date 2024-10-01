import { FC } from "react";
import AddressBodyCard from "./addressCard";

const AddressesBodyCard: FC = () => {
  return (
    <>
      <div className="grid pb-32 grid-cols-1 items-start sm:grid-cols-2  gap-6 xl:gap-8  ">
        <AddressBodyCard Flag="ma" />
        <AddressBodyCard Flag="in" />
        <AddressBodyCard Flag="us" />
        <AddressBodyCard Flag="gb" />
        <AddressBodyCard Flag="fr" />
        <AddressBodyCard Flag="de" />
        <AddressBodyCard Flag="es" />
        <AddressBodyCard Flag="it" />
        <AddressBodyCard Flag="ru" />
      </div>
    </>
  );
};

export default AddressesBodyCard;
