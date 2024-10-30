import { FC } from "react";
import HeaderCard from "./settingsHeaderCard";

interface SettingsProps {}

export const Settings: FC<SettingsProps> = ({}) => {
  return (
    <>
      <HeaderCard title="Settings" />
    </>
  );
};

export default Settings;
