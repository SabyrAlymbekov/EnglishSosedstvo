
// eslint-disable-next-line react/prop-types
export default function Button({children}) {
    return(
        <a href='#' className='button' style={{color: "white", cursor:"pointer"}}>{children}</a>
    )
}