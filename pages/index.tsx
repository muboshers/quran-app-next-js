import {
  ArabicOneBook,
  HeartIcon,
  LogoutIcon,
  SettingsIcon,
  ShareIcon,
} from "@/src/icons";
import type { NextPage } from "next";
import { BaseLayout } from "../src/layout/base-layout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <ShareIcon />
      <SettingsIcon />
      <LogoutIcon />
      <ArabicOneBook />
      <HeartIcon />
    </BaseLayout>
  );
};

export default Home;
