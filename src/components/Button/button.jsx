// import '../../css/App.css'

export default function Button({children}) {
    return(
        <button disabled className='button' style={{color: "white", cursor:"pointer"}}>{children}</button>
    )
}