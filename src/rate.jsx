
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Rates from "./components/Rates.jsx";
// import { Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./css/rate_slider.css"
import CustomButtonSwiper from "./components/CustomButtonSwiper.jsx";
// import 'swiper/swiper-bundle.css';

const Rate = () => {

    // useEffect(() => {
    //     new Swiper('.swiper', {
    //         // modules: [Navigation, Pagination],
    //         pagination: {
    //             el: '.rate_swiper__inner__wrapper__pagination',
    //         },
    //         navigation: {
    //             nextEl: 'swiper-button-next',
    //             prevEl: 'swiper-button-prev',
    //         },
    //         scrollbar: {
    //             el: '.rate_swiper__inner__wrapper__scrollbar',
    //         },
    //     });
    // }, []);


    return (
        <div className="Rate">
            <div className="container">
                <div >
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                            className="swiper"

                            loop={true}
                        // navigation={true}
                        // pagination={true}
                    >
                        <SwiperSlide>
                            <Rates
                                amount={1}
                                URL={`https://assets-global.website-files.com/662cfa87c5ae0d51e509acbd/662cfa88c5ae0d51e509ad4a_Testimonial%2520member1-p-500.png`}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Rates
                                amount={3}
                                URL={`https://assets-global.website-files.com/662cfa87c5ae0d51e509acbd/662cfa88c5ae0d51e509ad4b_Testimonial%2520member2-p-500.png`}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Rates
                                amount={5}
                                URL={`https://assets-global.website-files.com/662cfa87c5ae0d51e509acbd/662cfa88c5ae0d51e509ad48_Testimonial%2520member4-p-500.png`}/>
                        </SwiperSlide>
                        <CustomButtonSwiper/>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Rate;