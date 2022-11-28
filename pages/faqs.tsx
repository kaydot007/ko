import FaqComponent from "../components/faqs";
import NewsLetter from "../components/NewsLetter";
import PageLayout from "../components/PageLayout";

const faqs = () => {
  return (
    <PageLayout>
      <>
        {" "}
        <div className="grid grid-cols-2 mt-16 gap-5 items-center">
          <div className=" relative pt-6 grid-cols-3 ">
            <h3 className=" text-gray-600 text-2xl ml-8">THE FAQS</h3>
            <h1 className="text-5xl font-bold mt-3 ml-8 ">HELP CENTER</h1>
            <h3 className=" text-gray-600 mt-4 text-2xl ml-8">
              Everything you need to know about the product and billing
            </h3>
            <div className="mt-6">
              {" "}
              <img src="../images/Vector 3.png" alt="pic" />
            </div>
            <div className="absolute top-0 right-20 ">
              <img src="../images/Vector 1.png" alt="" />
            </div>
          </div>

          <div className="">
            {" "}
            <img
              src="../images/App_questions_re_1fy7 1 (2).png"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                
                // backgroundColor: "rgb(218,243,198)",
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2  py-16 gap-5  ">
          <div className="">
            <h2 className="text-3xl">You have questions?</h2>
            <h2 className="text-3xl mt-1 flex ">
              We have{" "} 
              <span className="text-green-500 flex ml-2 ">
                answers <img className="h-3 mt-4 ml-1 " src="../images/Vector.png" alt=""  />
              </span>
            </h2>
            <p>
              Everything you need to know about the product , offers and billing
              . Can't find what you're looking for? feel free to{" "}
              <a href="">send a message to our friendly team.</a>{" "}
            </p>
            <p className="text-green-500">#letsappreciate</p>
          </div>
          <FaqComponent />
        </div>
        <div className="flex justify-center">
          <NewsLetter faq />
        </div>
      </>
    </PageLayout>
  );
};

export default faqs;
