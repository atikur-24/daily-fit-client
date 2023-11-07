import OfferImg from "../../../assets/banner/dumbbells.jpg";

const Offer = () => {
  return (
    <section className="relative">
      <img className="lg:h-[600px] h-[400px] w-full" src={OfferImg} alt="banner" />
      <div className="bg-[#f34e3a] absolute top-1/2 text-center">
        <h4 className="text-white text-2xl lg:text-4xl font-medium lg:font-semibold">FINAL CALL, UP TO 70% OFF SALE.</h4>
        <h4 className="text-white text-2xl lg:text-4xl font-medium lg:font-semibold">LET’S GET MOVING</h4>
      </div>
      {/* <h2 className=" absolute top-1/2 font-medium lg:font-bold text-center">
         <br /> 
      </h2> */}
    </section>
  );
};

export default Offer;
