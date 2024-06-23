import './sass/form.sass'
import Bot from "../bot.json"

const token = Bot.token
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`
const chatId = Bot.chatId

export default function Form() {
    return (
        <div className="form" id="contact">
            <div className="container">
                <form action="#" onSubmit={async (e) => {
                    e.preventDefault();
                    const [name, email, phone] = [e.target[0].value, e.target[1].value, e.target[2].value]
                    const text = `Name: ${name}\nemail: ${email}\nPhone: ${phone}\nwhen and where: ${new Date()}`
                    await fetch(URL_API, {
                        method:'POST',
                        headers: {"Content-type": "application/json"},
                        body: JSON.stringify({chat_id: chatId, text})
                    })
                    e.target[0].value = ''
                    e.target[1].value = ''
                    e.target[2].value = ''
                }}>
                        <div className="form__head">
                            Become a volunteer
                        </div>
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
                    <button className="submit" type="submit">Get Started</button>
                </form>
            </div>
        </div>
    )
}