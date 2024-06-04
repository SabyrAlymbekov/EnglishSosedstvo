import './css/App.css'
import Header from './header.jsx'
import Main from './nmain.jsx'
import Numbers from "./nums.jsx";
import About from "./about.jsx";
import Howwework from "./howwework.jsx";
import Whyus from "./whyus.jsx";
import Footer from "./footer.jsx";


function App() {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <Numbers></Numbers>
            <About/>
            <Howwework></Howwework>
            <Whyus></Whyus>
            <Footer></Footer>
        </>
    );
}

export default App
