import Image from 'next/image';
import Coming from '../components/Coming';
import EachData from '../components/EachHomeData';
import PageLayout from '../components/PageLayout';
import { homeCardArr, homeData } from '../data/HomeData';
import Graph from '/public/images/graph.png';
import Arrow from '../components/assets/vectors/ArrowOut';
import HomeCard from '../components/HomeCard';
import Button from '../components/Button';
import NewsLetter from '../components/NewsLetter';
import { useState } from 'react';
import Modal from '../components/Modal';
import SignUp from '../components/Signup';

const index = () => {
  const [cardModal, setCardModal] = useState(false);
  return (
    <PageLayout>
      <>
        <div className="flex flex-col items-center">
          <p className="text-[63px] mt-20 mb-12 font-semibold">
            The best way to invest in Real Estate
          </p>
          <p className="text-2xl mb-[3.125rem]">
            We make investment in real estate so profitable, simple, and
            enjoyable.
          </p>
          <Button
            onClick={() => setCardModal(true)}
            text="Sign Up Now!"
            iconn={
              <div className="bg-white rounded-full p-[10px]">
                <Arrow />
              </div>
            }
          />
          <div className="flex mt-16 gap-16">
            {homeCardArr.map((data, indx) => (
              <HomeCard
                style={`${
                  indx === 0
                    ? 'top-8 -left-10'
                    : indx === 1
                    ? '-top-16'
                    : 'w-[23rem] -top-6 -left-8'
                } `}
                {...data}
              />
            ))}
          </div>
          <p className="max-w-[41rem] mb-24 mt-24 text-2xl text-center">
            With APPreciate, we nurture your money through high-quality real
            estate assets to help you grow
            <span className="text-green-400">financially</span> and achieve your
            goals.
          </p>
          <p className="text-[63px] font-semibold">
            #lets<span className="text-green-400">APPreciate</span>
          </p>
          <NewsLetter />
          <section className="w-full">
            {homeData.map((data, index) => (
              <EachData
                order={index % 2 === 0 && 'order-1'}
                key={data.title}
                {...data}
              />
            ))}
          </section>
          <section className="py-10">
            <p className="text-[40px] text-center font-medium">
              Enjoy Multiple Benefits
            </p>
            <Image src={Graph} alt="graph" />
          </section>
        </div>
        <div className="mt-32 px-10">
          <Coming home />
        </div>
        <Modal closeModal={() => setCardModal(false)} openModal={cardModal}>
          <SignUp />
        </Modal>
      </>
    </PageLayout>
  );
};

export default index;
