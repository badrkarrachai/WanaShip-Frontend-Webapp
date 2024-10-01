import { FC } from "react";
import ReshipperBodyCard from "./reshipperCard";

const BodyCard: FC = () => {
  return (
    <>
      <div className="grid pb-32 grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8  ">
        <ReshipperBodyCard Flag="ma" />
        <ReshipperBodyCard Flag="in" />
        <ReshipperBodyCard Flag="us" />
        <ReshipperBodyCard Flag="gb" />
        <ReshipperBodyCard Flag="fr" />
        <ReshipperBodyCard Flag="de" />
        <ReshipperBodyCard Flag="es" />
        <ReshipperBodyCard Flag="it" />
        <ReshipperBodyCard Flag="ru" />
        <ReshipperBodyCard Flag="cn" />
      </div>
    </>
  );
};

export default BodyCard;
