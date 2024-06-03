import './sass/main.sass'
import {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Main() {
    useEffect(()=>{
        AOS.init({
            delay: 0,
            duration: 1000
        })
    }, [])
    return (
        <main className="main">
            <div className="blur"></div>
            <div className="container">
                <div className="main__content">
                    <p className="main__upper">HELPING AGENCIES STAND OUT IN THE RED OCEAN MARKET WE ARE IN WITH A.I</p>
                    <h1 className="main__text" data-aos="fade-up">
                        JOIN THE 3,000+ AGENCIES AND
                        <br/>
                        CONSULTANTS SELLING THEIR SERVICES
                        <br/>
                        AS "AI GROWTH INFRASTRUCTURES"</h1>
                    <a href="#" className="button">Click me bro, please</a>
                </div>
            </div>
        </main>
    )
}