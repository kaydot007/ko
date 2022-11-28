import Image from 'next/image';

const EachData = ({
  title,
  text,
  img,
  order,
}: {
  title: string;
  text: string;
  img: any;
  order: string | boolean;
}) => {
  return (
    <section className="flex justify-between items-center mb-24">
      <div className={`max-w-[52.4rem] ${order}`}>
        <h1 className="text-[40px] font-medium mb-[1.875rem]">{title}</h1>
        <p className="text-3xl text-[#2D2D2D]">{text}</p>
      </div>
      <Image alt="Phone Image" src={img} />
    </section>
  );
};

export default EachData;
