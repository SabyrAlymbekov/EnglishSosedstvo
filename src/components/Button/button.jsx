
// eslint-disable-next-line react/prop-types
import {Link} from "react-scroll";

export default function Button({children}) {
    return(
        <Link to='contact' smooth={true} duration={800} href='#' className='button' style={{color: "white", cursor:"pointer"}} data-aos="fade-up">{children}</Link>
    )
}