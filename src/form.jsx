import './sass/form.sass'
import Calendar from "./components/calendar.jsx";
export default function Form() {
    return (
        <div className="form" id="contact">
            <div className="container">
            <div className="form__left">
                <div className="form__head">
                    Contact us
                </div>
                <form action="#">
                    <div className="input">
                        <input type="text" className="input-field" required/>
                        <label className="input-label">Full name</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" required/>
                        <label className="input-label">Email</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" required/>
                        <label className="input-label">Phone</label>
                    </div>
                    <div className="input-time">
                        <input type="time" className="input-field-time" required/>
                        <label className="input-label-time">Time</label>
                    </div>
                </form>
            </div>
                <div className="form__right">
                    <Calendar></Calendar>
                    <button className="submit" type="submit">Get Started</button>
                </div>
            </div>
        </div>
    )
}