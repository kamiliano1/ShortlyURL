import { useState, useEffect } from "react"
import { nanoid } from 'nanoid'
import Link from "./Link"
export default function Links() {
    // localStorage.clear()
    const [links, setLinks] = useState(()=> JSON.parse(localStorage.getItem("links")) || [])
    const [typedLink, setTypedLink] = useState("")
    const [inputEmptyParagraph, setInputEmptyParagraph] = useState("toggledNav")
    const [inputEmptyClass, setInputEmptyClass] = useState("")
    const [errorText, setErrorText] = useState("Please add a link")
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        localStorage.setItem("links",JSON.stringify(links))
    },[links])


    function setErrorMessage(errorText) {
        setErrorText(errorText)
        setInputEmptyClass("link__input__empty")
        setInputEmptyParagraph("link__input__empty__info")
        setIsError(true)
    }

    function handleChange(e) {
        const {value} = e.target
        setTypedLink(value)
    }
    function shortLink() {
        if (typedLink.length === 0) {
            setErrorMessage("Please add a link")
        } else {
            fetch(`https://api.shrtco.de/v2/shorten?url=${typedLink}`)
            .then(res=>{
                if (!res.ok) {
                    setErrorMessage("Wrong link adress")
                    throw Error("Wrong link adress")
                }
                return res.json()
                })
            .then(data=>{
                console.log(data)
                setLinks(prevLinks=>{
                        const isLinkInArray = prevLinks.some(link=>{
                        return link.originalLink === data.result.original_link
                    })
                    console.log
                    if (isLinkInArray) {
                        setErrorMessage("Link already in the list")
                        return prevLinks
                    } else {
                        setTypedLink("")
                        return [{
                            id: nanoid(),
                            originalLink: data.result.original_link,
                            shortLink: data.result.short_link,
                            isCopied: false
                        }, ...prevLinks]
                    }
   
                })
                setInputEmptyParagraph("toggledNav")
                setInputEmptyClass("")
                setIsError(false)
            })
            .catch((error) => {
                console.error('Error:', error)
              })
        }
    }

    function enterConfirm(e) {
        if (e.keyCode === 13) {
            e.preventDefault()
            shortLink()
        }
    }

    function isClicked(id) {
        setLinks(prevLinks=>{
            return prevLinks.map(link=>{
                if (link.id === id) {
                    navigator.clipboard.writeText(link.shortLink)
                    return {...link, isCopied: true}
                } else {
                   return {...link, isCopied: false}
                }
            })
        })
    }

    function delLink(id) {
        setLinks(prevLinks=>{
            return prevLinks.filter(link=>{
                return link.id !== id
            })
        })
    }

    const linksElement = links.map(link=>{
        return <Link 
            key={link.id}
            id={link.id}
            originalLink={link.originalLink}
            shortLink={link.shortLink}
            isCopied={link.isCopied}
            isClicked={()=>isClicked(link.id)}
            delLink={()=>delLink(link.id)}
        />
    })

    return (
        <div className="container link">
                <div className="col">
                    <form className="link__form">
                        <div className="row">
                            <input type="text" 
                                className={`link__input ${inputEmptyClass} `}
                                placeholder="Shorten a link here..."
                                onChange={handleChange}
                                name="Link"
                                value={typedLink}
                                onKeyDown={(e) => enterConfirm(e)}

                            />
                        <p className={` ${inputEmptyParagraph} link__small__screen__error`}>{errorText}</p>
                        <input type="button" className="button link__button" onClick={shortLink} value="Shorten It!" />
                        </div>
                        {isError && <p className={`${inputEmptyParagraph} link__big__screen__error`}>{errorText}</p>}
                    </form>
                        {linksElement}
            </div>
        </div>
    )
}