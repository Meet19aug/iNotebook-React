import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNotes = () => {
    const context = useContext(noteContext)
    const { notes, addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "Default" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description : "", tag:""})
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
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
                        value={note.title}
                        minLength={5}
                        required
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
                        value={note.description}
                        minLength={5}
                        required
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
                        value={note.tag}
                        minLength={5}
                        required

                    />
                </div>

                <button disabled={note.title.length<5 ||note.description.length<5} type="submit" onClick={handleClick} className="btn btn-primary mb-3">
                    Add Note
                </button>
            </form>

        </>
    )
}

export default AddNotes
