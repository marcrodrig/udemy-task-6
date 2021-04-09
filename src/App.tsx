import React from 'react'
import './App.css'
import Notes from './components/Notes'
import { addNote, editNote, deleteNote } from './redux/actions/actions'
import { NoteData } from './components/Notes/interface'
import NewNoteInput from './components/NewNoteInput'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  const onAddNote = (note: NoteData) => {
    dispatch(addNote(note))
  }

  const onEditNote = (note: NoteData) => {
    dispatch(editNote(note))
  }

  const onDeleteNote = (note: NoteData) => {
    dispatch(deleteNote(note))
  }

  return (
    <div className="App">
      <h1>My Notes</h1>
      <Notes editNote={onEditNote} deleteNote={onDeleteNote} />
      <NewNoteInput addNote={onAddNote}/>
    </div>
  )
}

export default App
