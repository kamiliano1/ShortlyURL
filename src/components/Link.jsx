import { useState } from "react"
export default function Link(props) {

    const [isHover, setIsHover] = useState(false)

    const copyButtonText = props.isCopied ? "Copied!" : "Copy"
    const copyClassName = props.isCopied ? "copied__button" : ""

    return (
        <div className="link__generated row"
          onMouseEnter={()=>setIsHover(true)}
          onMouseLeave={()=>setIsHover(false)}
        >   <div className="trash__icon__big__screen">
              {isHover && <i className="fa-solid fa-trash trash__icon" onClick={props.delLink}></i>}
            </div>  
            <div className="trash__icon__small_screen">
              <i className="fa-solid fa-trash trash__icon trash__icon__small_screen" onClick={props.delLink}></i>
            </div>
            <a className="link__full__link" href={props.originalLink}>{props.originalLink}</a>
            <a className="link__short__link" href={`https://${props.shortLink}`}>{props.shortLink}</a>
            <button className={`button copy__button ${copyClassName}`} id={props.id} onClick={props.isClicked}>{copyButtonText}</button>
        </div>
    )
}