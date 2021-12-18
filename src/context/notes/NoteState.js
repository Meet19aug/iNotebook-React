import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //Get all Notes
    const getNotes = async () => {
        //Api Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYzVlOGY1MWMzZTQ2Y2ZhZjY3NjhiIn0sImlhdCI6MTYzOTc1NTYzMn0.OGx7dzyjxHsqhiX9kxiFb4wh3ReAtYTirjK8GWtR8nc"
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }
    //Add a Notes
    const addNote = async (title, description, tag) => {
        // TODO: API Call
        //Api Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYzVlOGY1MWMzZTQ2Y2ZhZjY3NjhiIn0sImlhdCI6MTYzOTc1NTYzMn0.OGx7dzyjxHsqhiX9kxiFb4wh3ReAtYTirjK8GWtR8nc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        console.log("addd Note..")
        const note = {
            _id: "91bdxb3ceaca2dve474a32b8",
            user: "61bc5e8f51c3e46cfaf6768b",
            title: title,
            description: description,
            tag: tag,
            __v: 0,
        };
        setNotes(notes.concat(note))
    }

    //Delete a Notes
    const deleteNote = (id) => {
        console.log("Deleting the note with  id: " + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    //Edit a Notes.
    const editNote = async (id, title, description, tag) => {
        //Api Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYzVlOGY1MWMzZTQ2Y2ZhZjY3NjhiIn0sImlhdCI6MTYzOTc1NTYzMn0.OGx7dzyjxHsqhiX9kxiFb4wh3ReAtYTirjK8GWtR8nc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        //Logic to edit in the client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
