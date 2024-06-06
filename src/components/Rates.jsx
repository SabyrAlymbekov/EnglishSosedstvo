import Stars from "./stars.jsx";
import '../css/rates.css'
import Button from "./Button/button.jsx";
// eslint-disable-next-line react/prop-types
function Rates({URL, amount}) {
    return (
        <div className={"rate"}>
            <div className="container">
                <div className="rate__img" data-aos="fade-up">
                    <img
                        src={URL}
                        alt="girl"/>
                </div>
                <div className="rate__inner" >
                    <div className="rate__inner__quotation__mark" data-aos="fade-right"></div>
                    <Stars amount={amount} ></Stars>
                    <p data-aos="fade-up">
                        “Start AI came at the right time when started to scale our agency. This tool is saving us a lot of time and we are more efficient than ever. No more back and forth and now we can scale our operations easier than ever.”
                    </p>
                    {/*<Button>More</Button>*/}
                </div>
            </div>
        </div>
    );
}


export default Rates;