import { ReactElement } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const PageLayout = ({ children }: { children?: ReactElement }) => {
  return (
    <main className="px-[3.8rem] pt-[3rem] overflow-hidden h-screen flex flex-col pb-[1rem]">
      <Navbar />
      <div className="overflow-y-scroll">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default PageLayout;
