const img1 = "https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80";
const img2 = "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80";
const img3 = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";

const Banner = () => {
    return (
        <section>
            <div className="carousel w-full relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-[#f34e3a] border-[#f34e3a] text-white hover:text-black">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle bg-[#f34e3a] border-[#f34e3a] text-white hover:text-black">
                            ❯
                        </a>
                    </div>
                    <div className="absolute top-16 md:top-32 space-y-4 lg:space-y-10 w-1/2 ml-16 md:ml-20">
                        <h2 className="text-2xl md:text-7xl font-bold tracking-wide lg:leading-tight text-[#f34e3a]">The Best Fitness In Town</h2>
                        <p className="md:tracking-wide lg:leading-10 capitalize text-sm md:text-[18px] md:font-medium text-white">
                            Unleash your potential, achieve unmatched results. Join Daily Fit for transformative fitness experiences that go beyond expectations
                        </p>
                        <button className="my-btn-outline md:tracking-wide md:ml-28">Join Us Now</button>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-[#f34e3a] border-[#f34e3a] text-white hover:text-black">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle bg-[#f34e3a] border-[#f34e3a] text-white hover:text-black">
                            ❯
                        </a>
                    </div>
                    <div className="absolute top-16 md:top-32 space-y-4 lg:space-y-16 w-1/2 ml-16 md:ml-20">
                        <h2 className="text-2xl md:text-7xl font-bold tracking-wide lg:leading-tight text-[#f34e3a]">Join Daily Fit for Unmatched Results</h2>
                        <p className="md:tracking-wide lg:leading-10 capitalize text-sm md:text-[18px] md:font-medium text-white">
                            Transform your fitness journey with Daily Fit: Join us today for unparalleled results and a healthier, stronger you
                        </p>
                        <button className="my-btn-outline md:tracking-wider md:ml-28">Join Us Now</button>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-[#f34e3a] border-[#f34e3a] text-white hover:text-black">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle bg-[#f34e3a] border-[#f34e3a] text-white hover:text-black">
                            ❯
                        </a>
                    </div>
                    <div className="absolute top-16 md:top-32 space-y-4 lg:space-y-16 w-1/2 ml-16 md:ml-20">
                        <h2 className="text-2xl md:text-7xl font-bold tracking-wide lg:leading-tight text-[#f34e3a]">Discover the Ultimate Fitness Destination</h2>
                        <p className="md:tracking-wide lg:leading-10 capitalize text-sm md:text-[18px] md:font-medium text-white">
                            Discover the Ultimate Fitness Destination: Unleash Your Potential at Daily Fit for Unmatched Workout Experiences
                        </p>
                        <button className="my-btn-outline md:tracking-wider md:mr-20 md:ml-28">Join Us Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
