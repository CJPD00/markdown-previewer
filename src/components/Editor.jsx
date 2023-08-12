import { faMinimize, faMaximize } from "../helpers/fontAwesome"
import { useState } from "react"
import { marked} from "marked"
import { useContext } from "react"
import { HtmlContext } from "../contexts/HtmlContext"
import { initialEditorState } from "../helpers/initialEditorState"
import { useEffect } from "react"

export const Editor = ({ state, set }) => {

    const [clas, setclas] = useState(faMaximize)
    const [editorClass, seteditorClass] = useState(null)
    const [stateArea, setstateArea] = useState(initialEditorState)
    const {sethtml} = useContext(HtmlContext)

    const click = () => {

        set(!state)

        if (editorClass === null) seteditorClass('maximize')
        if (editorClass === 'maximize') seteditorClass(null)

        if (clas === faMaximize) setclas(faMinimize)
        if (clas === faMinimize) setclas(faMaximize)

    }

    useEffect(() => {
      
        sethtml(marked(stateArea))
    
    })
    

    const handleChange=({target})=>{

        setstateArea(target.value)
        sethtml(marked(stateArea))

    }

    return (

        <div className={`editorWrap ${editorClass}`}>

            <div className="toolbar edit-tool">
                <i className="g-color">Editor</i>
                <i className={clas} onClick={click}></i>
            </div>

            <textarea id="editor" 
            value={stateArea}
            onChange={handleChange}></textarea>


        </div>
    )
}
