import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesState } from '../../redux/reducer/notesReducer'
import Button from '../Button'
import Input from '../Input'
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../Modal'
import { NoteData } from '../Notes/interface'
import Textarea from '../Textarea'
import { NewNoteInputProps } from './interface'

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [inputTitle, setInputTitle] = useState<string>('')
  const [inputContent, setInputContent] = useState<string>('')
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)

  const generateId = () : number => {
    const notesIds = notes.map(n => n.id)
    const maxId = notesIds.length ? Math.max(...notesIds) : 0
    const newId = maxId + 1
    return newId
  }

  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => {
    setShowModal(false)
    setInputTitle('')
    setInputContent('')
  }
  const handleAddNote = () => {
    const newNote : NoteData = {
      id: generateId(),
      title: inputTitle,
      content: inputContent,
      created: new Date(),
      modified: new Date()
    }
    addNote(newNote)
    handleCloseModal()
  }
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setInputTitle(e.target.value)
  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInputContent(e.target.value)

  return (
    <>
      <Button type='primary' onClick={handleShowModal}>Add Note</Button>
      <Modal show={showModal} onClickOutsideModalBody={handleCloseModal}>
        <ModalHeader>Add Note</ModalHeader>
        <ModalBody>
          <Input label='Title' placeholder='Title' onChange={(e) => handleChangeTitle(e)} value={inputTitle}></Input>
          <Textarea label='Content' placeholder='Content' onChange={(e) => handleChangeContent(e)} value={inputContent}></Textarea>
        </ModalBody>
        <ModalFooter>
          <Button type="primary" onClick={handleAddNote}>Save</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default NewNoteInput