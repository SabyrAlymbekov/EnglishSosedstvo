import "./sass/howwework.sass"
import {useEffect, useState, useRef} from "react";
import AOS from "aos";

export default function Howwework() {
    useEffect(()=>{
        AOS.init({
            delay: 0,
            duration: 1000
        })
    }, [])
    const [heightn, setHeightn] = useState(0);
    const [heightn2, setHeightn2] = useState(0);
    const myref = useRef(null);
    const myref2 = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            let curh = ((window.scrollY + window.innerHeight / 2) - myref.current.offsetTop);
            let ofh = myref.current.offsetHeight;
            let prop = curh / ofh * 100
            if (prop >= 0 && prop <= 100) setHeightn(prop)
            else if (prop < 0) setHeightn(0)
            else setHeightn(100)

            let curh2 = ((window.scrollY + window.innerHeight / 2) - myref2.current.offsetTop);
            let ofh2 = myref2.current.offsetHeight;
            let prop2 = curh2 / ofh2 * 100
            if (prop2 >= 0 && prop2 <= 100) setHeightn2(prop2)
            else if (prop2 < 0) setHeightn2(0)
            else setHeightn2(100)
        })
    }, []);
    return (
        <div className="hww">
            <div className="container">
                <div className="hww__slogan">
                    <h1 className="hww__slhead">How we work</h1>
                    <p className="hww__subtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="hww__con1">
                    <div className="hww__united" >
                        <h1 className="hww__num">
                            01
                        </h1>
                        <div className="hww__progress_bar" ref={myref}>
                            <div className="hww__line" style={{height: heightn + "%"}}></div>
                        </div>
                    </div>
                    <div className="hww__block">
                        <h1 className="hww__head" data-aos="fade-up" data-aos-delay="100">CONTACT US</h1>
                        <p className="hww__desc" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
                            facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante
                            placerat.</p>
                        <div className="hww__button" data-aos="fade-up" data-aos-delay="300">contact us</div>
                    </div>
                </div>
                <div className="hww__con2">
                    <div className="hww__united" >
                        <h1 className="hww__num">
                            02
                        </h1>
                        <div className="hww__progress_bar" ref={myref2}>
                            <div className="hww__line" style={{height: heightn2 + "%"}}></div>
                        </div>
                    </div>
                    <div className="hww__block">
                        <h1 className="hww__head" data-aos="fade-up" data-aos-delay="100">WE WORK</h1>
                        <p className="hww__desc" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
                            facilisis dui.</p>
                        <p className="hww__desc" data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
                            facilisis dui. Donec at eros elementum, auctor lectus sed, vestibulum leo. Nam eget ante
                            placerat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}