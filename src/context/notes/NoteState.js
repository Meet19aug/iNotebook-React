import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "61bcc0ea2cfc562de900e134",
      user: "61bc5e8f51c3e46cfaf6768b",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      __v: 0,
    },
    {
      _id: "61bd6b3ceaca2d8e474532b8",
      user: "61bc5e8f51c3e46cfaf6768b",
      title: "My Title2",
      description: "Please wake up early2",
      tag: "personal",
      __v: 0,
    },
    {
      _id: "61bd6b3ceaca2d8e474532b8",
      user: "61bc5e8f51c3e46cfaf6768b",
      title: "My Title2",
      description: "Please wake up early2",
      tag: "personal",
      __v: 0,
    },
    {
      _id: "61bcc0ea2cfc562de900e134",
      user: "61bc5e8f51c3e46cfaf6768b",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      __v: 0,
    },
    {
      _id: "61bd6b3ceaca2d8e474532b8",
      user: "61bc5e8f51c3e46cfaf6768b",
      title: "My Title2",
      description: "Please wake up early2",
      tag: "personal",
      __v: 0,
    },
    {
      _id: "61bd6b3ceaca2d8e474532b8",
      user: "61bc5e8f51c3e46cfaf6768b",
      title: "My Title2",
      description: "Please wake up early2",
      tag: "personal",
      __v: 0,
    },
    {
      _id: "61bcc0ea2cfc562de900e134",
      user: "61bc5e8f51c3e46cfaf6768b",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      __v: 0,
    },
    {
      _id: "61bd6b3ceaca2d8e474532b8",
      user: "61bc5e8f51c3e46cfaf6768b",
      title: "My Title2",
      description: "Please wake up early2",
      tag: "personal",
      __v: 0,
    },
    {
      _id: "61bd6b3ceaca2d8e474532b8",
      user: "61bc5e8f51c3e46cfaf6768b",
      title: "My Title2",
      description: "Please wake up early2",
      tag: "personal",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
