import { faMinimize, faMaximize } from "../helpers/fontAwesome"
import { useState } from "react"

export const Editor = ({ state, set }) => {

    const [clas, setclas] = useState(faMaximize)
    const [editorClass, seteditorClass] = useState(null)

    const click = () => {

        set(!state)

        if (editorClass === null) seteditorClass('maximize')
        if (editorClass === 'maximize') seteditorClass(null)

        if (clas === faMaximize) setclas(faMinimize)
        if (clas === faMinimize) setclas(faMaximize)

    }

    return (

        <div className={`editorWrap ${editorClass}`}>

            <div className="toolbar edit-tool">
                <i className="g-color">Editor</i>
                <i className={clas} onClick={click}></i>
            </div>

            <textarea id="editor" ></textarea>


        </div>
    )
}
