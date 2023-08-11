import { useState } from 'react'
import { Editor } from './components/Editor'
import { Previewer } from './components/Previewer'
import { HtmlProvider } from './contexts/HtmlProvider'

function App() {

  const [windowState, setwindowState] = useState(false)

  return (

    <HtmlProvider>

      <div className='container responsive-h'>
        <h1 className='text-center g-color header'>Markdown Previewer</h1>
        <Editor set={setwindowState} state={windowState}></Editor>
        {windowState == false && <Previewer></Previewer>}
      </div>
    </HtmlProvider>
  )
}

export default App
