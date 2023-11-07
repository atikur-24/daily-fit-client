import OfferImg from "../../../assets/banner/dumbbells.jpg";

const Offer = () => {
  return (
    <section className="relative">
      <img className="lg:h-[600px] h-[400px] w-full" src={OfferImg} alt="banner" />
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#f34e3a] bg-opacity-70 p-4 lg:p-8 rounded-md tracking-wide absolute top-1/3 text-center space-y-2 lg:space-y-6">
          <h4 className="text-white text-2xl lg:text-4xl font-medium lg:font-semibold">FINAL CALL, UP TO 70% OFF SALE.</h4>
          <h4 className="text-white text-2xl lg:text-4xl font-medium lg:font-semibold">LET’S GET MOVING</h4>
        </div>
      </div>
    </section>
  );
};

export default Offer;
