import Image from "next/image";
import Link from "next/link";
import { activeNav, setActiveState } from "../entity";
import logo from "./assets/vectors/logo.svg";

export const Navbar = () => {
  const arr = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "FAQs", link: "/faqs" },
    { title: "Contact Us", link: "/" },
  ];
  const activeState = activeNav.use();

  return (
    <div className="sticky top-1 pt-2 bg-white">
      <nav className="flex items-center justify-between text-[#2D2D2D] font-medium text-[21px] pb-4   bg-white">
        <Image width={197} height={48} src={logo} alt="logo" />
        <div className="flex items-center gap-24">
          {arr.map(({ title, link }, index) => (
            <div className="-mb-2">
              <Link
                onClick={() => setActiveState(index)}
                className={`${activeState === index && "text-[#00C567]"}`}
                href={link}
              >
                {title}
              </Link>
              <div
                className={`mx-auto mt-1 w-[10px] h-[10px] rounded-full ${
                  activeState === index && "bg-[#00C567]"
                }`}
              ></div>
            </div>
          ))}
          <div className="relative">
            <button className="text-white bg-[#2D3652] px-2 py-1">
              Our Product
            </button>
            <div className="absolute"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};
