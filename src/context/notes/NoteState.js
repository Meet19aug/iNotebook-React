import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name" : "Meet",
        "class" : "10A"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(()=> {
            setState({
                "name" : "Geet",
                "class" : "10B"
            })
        }, 1000)
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;