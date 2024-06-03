import './css/about.css'
import Button from "./components/Button/button.jsx";
// import './css/main.css'


export default function About() {
    return (
        <div className="about_us">
            <div className="container">
                <div className="about_us__pict"><img
                    src="https://framerusercontent.com/images/zcLg4RPWgAiMGicF1uhMoBgMJWI.png?scale-down-to=512"
                    alt="analitics"/></div>
                <div className="about_us__inner">
                    {/*<p className="main__upper">HELPING AGENCIES STAND OUT IN THE RED OCEAN MARKET WE ARE IN WITH A.I</p>*/}
                    <h2 className="about_us__inner__header">About us</h2>
                    <div className="about_us__inner__description">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Delectus dignissimos dolore ea id maxime mollitia nemo optio voluptates. Accusamus
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid beatae consequuntur deleniti dolorem doloremque doloribus ea error explicabo facilis id, in incidunt, inventore ipsum iste laborum magni minus mollitia necessitatibus nemo neque numquam possimus provident quam quibusdam quisquam ratione rem repellendus sequi soluta suscipit unde voluptatem voluptatibus. Aspernatur, nam.
                        <br/>
                        <br/>
                        sequi similique vel! Amet blanditiis cum dolores enim est facere id in, laborum minima officiis
                        quas rerum.
                    </div>
                    {/*<Button>More...</Button>*/}
                </div>
            </div>
        </div>
    )
}