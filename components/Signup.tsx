import Image from 'next/image';
import Button from './Button';
import ComingSoon from './ComingSoon';
import InputField from './Input';
import logo from '/public/vectors/logowhite.svg';

const SignUp = () => {
  return (
    <section className="flex p-3">
      <div className="w-[45%] bg-[#00C567] text-white px-8 pt-10 pb-16">
        <Image width={147} height={30} src={logo} alt="/" />
        <p className="mt-24 mb-12 font-semibold text-6xl max-w-[30rem]">
          Start earning from Real Estate.
        </p>
        <p className="max-w-[27rem] text-2xl">
          Discover amazing investment oppurtunities and invest with the twinkle
          of an eye.
        </p>
        <div className="flex gap-1 mt-12 mb-28 justify-center">
          {Array(4)
            .fill(null)
            .map((a, i) => (
              <div
                className={`rounded-full ${
                  i === 0 ? 'w-[1.3rem]' : 'w-[0.625rem]'
                } h-[0.625rem] bg-white`}
              ></div>
            ))}
        </div>
        <div className="flex justify-center text-center">
          <ComingSoon signup />
        </div>
      </div>
      <div className="px-[4.687rem] pt-8">
        <h2 className="text-[40px] font-medium">Sign Up!</h2>
        <p className="text-xl mt-3 mb-28">
          Sign up to be a member of the APPreciate family
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputField label="Full Name" />
          <InputField label="Email" />
          <Button style="px-12 py-1 mx-auto" text="Submit" />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
