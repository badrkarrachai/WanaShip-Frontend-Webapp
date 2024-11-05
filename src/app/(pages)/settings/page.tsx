import { FC } from "react";
import HeaderCard from "./settingsHeaderCard";
import MyProfile from "./myProfile";

interface SettingsProps {}

export const Settings: FC<SettingsProps> = ({}) => {
  return (
    <>
      <section id="settings" className="flex flex-col gap-6 xl:gap-8">
        <HeaderCard title="Settings" />
        <MyProfile />
      </section>
    </>
  );
};

export default Settings;
