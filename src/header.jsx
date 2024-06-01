import './css/hamburger.css'
import './css/header.css'
import './css/logo.css'
export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="#" className="logo header__logo">
                    <h1 className="logo__text">PrimeAdvertising</h1>
                </a>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__element1">What we do</li>
                        <li className="header__element2">Why us</li>
                        <li className="header__element3">Trusted by</li>
                        <li className="header__element4">Contact us</li>
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
                        <li className="header__element2">Why us</li>
                        <li className="header__element3">Trusted by</li>
                        <li className="header__element4">Contact us</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}