import Apple from './assets/Apple';
import Android from './assets/Android';

const arr = [
  { num: '03', date: 'Months' },
  { num: '15', date: 'Days' },
  { num: '09', date: 'Hours' },
];

const ComingSoon = ({ signup }: { signup?: boolean }) => {
  return (
    <div>
      <h1 className="text-4xl font-medium">Coming Soon!</h1>
      <p className="text-[0.68rem] mt-4 mb-3">Get on </p>
      <div
        className={`${
          signup && 'bg-white py-2 px-5 rounded-[19px]'
        } flex gap-4 w-fit mx-auto`}
      >
        <div className="cursor-pointer">
          <Android />
        </div>{' '}
        <div className="cursor-pointer">
          <Apple />
        </div>
      </div>
      <div className="font-medium mt-7 flex gap-11 mx-auto">
        {arr.map((data) => (
          <aside
            className={`${signup && 'text-black'} bg-[#CCF3E1] rounded-lg px-2`}
          >
            <p className="text-4xl">{data.num}</p>
            <p className="text-sm">{data.date}</p>
          </aside>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
