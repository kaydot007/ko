import Coming from "../components/Coming";
import PageLayout from "../components/PageLayout";
import Coma from "../components/assets/Coma";
import UpComa from "../components/assets/UpComa";
import Image from "next/image";
import hero from "/public/images/hero.png";
import MultiColorArrow from "../components/MultiColorArrow";
import styles from "../styles/Values.module.css";
import CoreValues from "../components/CoreValues";
import { coreValueData, personData } from "../data/AboutData";
import styless from "../styles/Team.module.css";

export default function Home() {
  return (
    <PageLayout>
      <div className="py-16">
        <section className="flex flex-col items-center gap-10">
          <p className="font-semibold text-6xl">
            We are changing the Real Estate game
          </p>
          <p className="text-2xl">
            We are a team of highly skilled professionals making big moves in
            the Industry
          </p>
          <Image
            alt="/"
            className="my-10"
            width={550}
            src={hero}
            height={550}
          />
          <MultiColorArrow text="Mission" />
          <p className="text-[#2D2D2D] text-2xl max-w-[40rem]">
            To become indispensable to our users by creating a simple,
            enjoyable, and profitable investment experience in real estate.
          </p>
          <p className="text-right mr-24 w-full text-[#2D3652] font-semibold">
            #lets<span className="text-[#00C567]">APPreciate</span>
          </p>
        </section>
        <section className={`${styles.wrapper}`}>
          <MultiColorArrow text="Core Values" />
          <aside className={`${styles.container}`}>
            {coreValueData.map((item) => (
              <CoreValues {...item} />
            ))}
          </aside>
        </section>
        <section className="text-center mt-36 relative">
          <div className="flex gap-2 justify-center">
            <MultiColorArrow text="Team" arr />
            <MultiColorArrow text="Super Power" />
          </div>
          <p className="max-w-[50rem] mt-5 mb-10 mx-auto text-2xl text-[#2D2D2D]">
            Behind APPreciate is a close-knit of people who love and respect
            each other. Our first priority is ensuring our team is loved and
            cared for. A team that is valued gives its best.
          </p>
          <div className={styless.team}>
            {personData.map((data) => (
              <div className="mx-auto">
                <Image src={data.img} width={250} height={250} alt="pic" />
                <p>{data.text}</p>
              </div>
            ))}
          </div>
          <p className="absolute right-48 bottom-60 text-[#00C567] font-medium">
            #letsappreciate
          </p>
        </section>
        <div className="max-w-[44rem] relative my-32 mx-auto">
          <div className="flex gap-1 absolute -left-5">
            <UpComa />
            <UpComa />
          </div>
          <p className="text-[55px] text-center font-medium">
            We’re creating a whole new different wealth building experience
          </p>
          <div className="flex gap-1 absolute right-44 bottom-10">
            <Coma />
            <Coma />
          </div>
        </div>
        <div className="py-14">
          <Coming />
        </div>
      </div>
    </PageLayout>
  );
}


