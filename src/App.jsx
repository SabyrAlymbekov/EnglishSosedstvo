import './css/App.css'
import Header from './header.jsx'
import Main from './nmain.jsx'
import Numbers from "./nums.jsx";
import About from "./about.jsx";
import Howwework from "./howwework.jsx";
import Whyus from "./whyus.jsx";
import Footer from "./footer.jsx";
import Rate from "./rate.jsx";



function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Numbers/>
            <About/>
            <Howwework/>
            <Whyus/>
            {/*<Rates amount={5} URL={`https://assets-global.website-files.com/662cfa87c5ae0d51e509acbd/662cfa88c5ae0d51e509ad49_Testimonial%20member3.png`}/>*/}
            <Rate/>
            <Footer/>
        </>
    );
}

export default App
