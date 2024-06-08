import './sass/footer.sass'
export default function Footer() {
    return (
        <>
            <div className="footer__shadow"></div>
            <footer className="footer">
                {/*<div className="footer__top">*/}
                {/*    /!*<div className="footer__icons">*!/*/}
                {/*    /!*    <a href="#" className="footer__icon"><img className="footer__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" alt="instagram"/></a>*!/*/}
                {/*    /!*    <a href="#" className="footer__icon"><img className="footer__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png" alt="telegram"/></a>*!/*/}
                {/*    /!*    <a href="#" className="footer__icon"><img className="footer__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png" alt="whatsapp"/></a>*!/*/}
                {/*    /!*    <a href="#" className="footer__icon"><img className="footer__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="linkedIn"/></a>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}
                <div className="footer__bottom">
                    <p>PrimeAdvertising @2024. All rights reserved.</p>
                    <a href="#" className="footer__privacy">Privacy</a>
                    <a href="#" className="footer__privacy">Terms</a>
                </div>
            </footer>
        </>
    )
}