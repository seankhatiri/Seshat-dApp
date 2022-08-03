import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Layout } from "../components/layout";
import { PageHeader, SwapBox } from "../components/swap";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Axelar Satellite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.svg" />
      </Head>

      <Layout>
        <div className="fixed top-0 left-0 object-cover w-screen h-screen opacity-50 aspect-video -z-10">
          <Image src="/assets/ui/bg.png" layout="fill" objectFit="cover" />
        </div>
        <div className="z-10 grid h-full grid-cols-1 pt-48 md:grid-cols-2">
          <div>
            <PageHeader />
          </div>
          <div className="h-full pt-16 justify-self-center md:justify-self-end">
            <SwapBox />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
