import { useContext } from "react"
import { HtmlContext } from "../contexts/HtmlContext"

export const Previewer = () => {

    const {html} = useContext(HtmlContext)

    return (
        <div className="previewWrap">

            <div className="toolbar">
                <i className="fa-solid fa-magnifying-glass fa-sm g-color"></i>
            </div>

            <div id="preview" dangerouslySetInnerHTML={{__html:html}} className='container'></div>

        </div>
    )
}
