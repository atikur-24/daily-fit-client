import OfferImg from '../../../assets/banner/dumbbells.jpg'

const Offer = () => {
    return (
        <section className='relative'>
            <img className='lg:h-[600px] h-[400px] w-full' src={OfferImg} alt="banner" />
            <h2 className='text-white text-3xl lg:text-5xl absolute top-1/2 w-full traking- font-medium lg:font-bold text-center'>FINAL CALL, UP TO 70% OFF SALE. <br /> LET’S GET MOVING</h2>
        </section>
    );
};

export default Offer;