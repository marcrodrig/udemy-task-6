import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NotesState } from '../../redux/reducer/notesReducer'
import Button from '../Button'
import Input from '../Input'
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../Modal'
import { NoteData } from '../Notes/interface'
import Textarea from '../Textarea'
import { NewNoteInputProps } from './interface'

const EditNoteInput: React.FC<NewNoteInputProps> = ({ show, editNote, note, onClose }) => {
  const [inputTitle, setInputTitle] = useState<string>('')
  const [inputContent, setInputContent] = useState<string>('')

  useEffect(() => {
    setInputTitle(note.title)
    setInputContent(note.content)
    return () => {
      setInputTitle('')
      setInputContent('')
    };
  }, [note])

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setInputTitle(e.target.value)
  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInputContent(e.target.value)
  const handleEditNote = () => {
    const modifiedNote : NoteData = {
      id: note.id,
      title: inputTitle,
      content: inputContent,
      created: note.created,
      modified: new Date()
    }
    editNote(modifiedNote)
    onClose()
  }

  return (
    <>
      <Modal show={show} onClickOutsideModalBody={onClose}>
        <ModalHeader>Edit Note "{note.title}"</ModalHeader>
        <ModalBody>
          <Input label='Title' placeholder='Title' onChange={(e) => handleChangeTitle(e)} value={inputTitle}></Input>
          <Textarea label='Content' placeholder='Content' onChange={(e) => handleChangeContent(e)} value={inputContent}></Textarea>
        </ModalBody>
        <ModalFooter>
          <Button type="primary" onClick={handleEditNote}>Save</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default EditNoteInput