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
        const note = await response.json();
        setNotes(notes.concat(note))
    }

    //Delete a Notes
    const deleteNote = async (id) => {
        //API Calls.
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYzVlOGY1MWMzZTQ2Y2ZhZjY3NjhiIn0sImlhdCI6MTYzOTc1NTYzMn0.OGx7dzyjxHsqhiX9kxiFb4wh3ReAtYTirjK8GWtR8nc"
            },
        });
        const json = await response.json();
        console.log(json);

        console.log("Deleting the note with  id: " + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
        
    }
    //Edit a Notes.
    const editNote = async (id, title, description, tag) => {
        //Api Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiYzVlOGY1MWMzZTQ2Y2ZhZjY3NjhiIn0sImlhdCI6MTYzOTc1NTYzMn0.OGx7dzyjxHsqhiX9kxiFb4wh3ReAtYTirjK8GWtR8nc"
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = await response.json();
        console.log(json);

         let newNotes = JSON.parse(JSON.stringify(notes))    
        //Logic to edit in the client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        console.log(newNotes);
        setNotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
