import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NotesState } from '../../redux/reducer/notesReducer'
import Button from '../Button'
import EditNoteInput from '../EditNoteInput'
import Modal, { ModalFooter, ModalHeader } from '../Modal'
import { NoteProps, NotesProps } from './interface'
import './style.css'

const Note: React.FC<NoteProps> = ({onClick, className, note, deleteNote }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const handleDeleteNote = () => {
    deleteNote(note)
    handleCloseModal()
  }

  // La fecha puede formatearse con "new Intl.DateTimeFormat..."
  return (
    <>
      <div className="delete-button" onClick={handleShowModal}>X</div>
      <div className={className} onClick={onClick}>
        <div className="note-title">{note.title}</div>
        <div className="note-date">Last Modified Date: {note.modified.toString()}</div>
      </div>
      <Modal show={showModal} onClickOutsideModalBody={handleCloseModal}>
        <ModalHeader>
          Are you sure you want to delete "{note.title}"?
        </ModalHeader>
        <ModalFooter>
          <Button type="primary" onClick={handleDeleteNote}>Yes</Button>
          <Button onClick={handleCloseModal}>No</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

const Notes: React.FC<NotesProps> = ({editNote, deleteNote}) => {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  const [selected, setSelected] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSelection = (index: number) => {
    setSelected(index)
    //console.log(index)
    handleShowModal()
  }

  return (
    <>
      <div className='notes-container'>
        {notes.map((note, index) => {
          const selectedClassName = selected === index ? 'note selected' : 'note'
          return <Note key={note.id} className={selectedClassName} onClick={() => handleSelection(index)} note={note} deleteNote={deleteNote} />
        })}
      </div>
      {notes.length > 0 && <EditNoteInput show={showModal} editNote={editNote} note={notes[selected]} onClose={handleCloseModal} />}
  </>
  )
}

export default Notes
