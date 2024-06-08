import './css/App.css'
import Header from './header.jsx'
import Main from './nmain.jsx'
import Numbers from "./nums.jsx";
import About from "./about.jsx";
import Howwework from "./howwework.jsx";
import Whyus from "./whyus.jsx";
import Footer from "./footer.jsx";
import Rate from "./rate.jsx";
import Form from "./form.jsx"


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Numbers/>
            <About/>
            <Howwework/>
            <Whyus/>
            <Footer/>
            <Howwework></Howwework>
            <Whyus></Whyus>
            <Rate/>
            <Form></Form>
            <Footer></Footer>
        </>
    );
}

export default App
