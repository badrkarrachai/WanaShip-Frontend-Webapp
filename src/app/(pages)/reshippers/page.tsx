import { FC } from "react";
import HeaderCard from "./reshippersHeaderCard";
import BodyCard from "./reshippersBodyCard";

interface ReshippersProps {}

const Reshippers: FC<ReshippersProps> = ({}) => {
  return (
    <section id="reshippers" className="flex flex-col gap-6 xl:gap-8">
      <HeaderCard title="Reshippers" />
      <BodyCard />
    </section>
  );
};

export default Reshippers;
