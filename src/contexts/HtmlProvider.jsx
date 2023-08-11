import { HtmlContext } from "./HtmlContext"
import { useState } from "react"

export const HtmlProvider = ({children}) => {

const [html, sethtml] = useState('')

  return (
    <HtmlContext.Provider value={{html,sethtml}}>
         {children}
    </HtmlContext.Provider>
  )
}
