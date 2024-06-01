import '/css/hamburger.css'
import '/css/header.css'
import '/css/logo.css'
export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="#" className="logo header__logo">
                    <!--            <img src="assets/Chess.com_2012_%2528Icon%2529.webp" alt="pawn" class="logo__image">-->

                    <h1 className="logo__text">PrimeAdvertising</h1>
                </a>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__element1">What we do</li>
                        <!-- about us-->
                        <li className="header__element2">Why us</li>
                        <!--цифры, why us -->
                        <li className="header__element3">Trusted by</li>
                        <!--companies, отзывы-->
                        <li className="header__element4">Contact us</li>
                        <!-- form and calendar, social medias phone-->
                    </ul>
                </nav>
                <div className="hamburger">
                    <input className="hamburger__checkbox" type="checkbox" name="" id=""/>
                    <div className="hamburger__lines">
                        <span className="hamburger__line hamburger__line1"></span>
                        <span className="hamburger__line hamburger__line2"></span>
                        <span className="hamburger__line hamburger__line3"></span>
                    </div>
                </div>
                <div className="header__menu">
                    <ul className="header__list">
                        <li className="header__element1">What we do</li>
                        <!-- about us-->
                        <li className="header__element2">Why us</li>
                        <!--цифры, why us -->
                        <li className="header__element3">Trusted by</li>
                        <!--companies, отзывы-->
                        <li className="header__element4">Contact us</li>
                        <!-- form and calendar, social medias phone-->
                    </ul>
                </div>
            </div>
        </header>
    )
}