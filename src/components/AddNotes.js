import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext" 

const AddNotes = () => {
    const context = useContext(noteContext)
    const {notes, addNote} = context;
    const [note, setNote] = useState({title: "",description : "",tag: "Default"})
    
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                    Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        aria-describedby="TitleHelp"
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                        Tag
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="tag"
                        name="tag"
                        onChange={onChange}
                    />
                </div>
                
                <button type="submit" onClick={handleClick} className="btn btn-primary mb-3">
                    Add Note
                </button>
            </form>

        </>
    )
}

export default AddNotes
