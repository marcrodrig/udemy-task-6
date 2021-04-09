import { NoteData } from "../../components/Notes/interface";
export type Action = { type: "ADD_NOTE" | "EDIT_NOTE" | "DELETE_NOTE"; payload: NoteData }

export const addNote = (note: NoteData): Action => ({
  type: "ADD_NOTE",
  payload: note,
});

export const editNote = (note: NoteData): Action => ({
  type: "EDIT_NOTE",
  payload: note,
});

export const deleteNote = (note: NoteData): Action => ({
  type: "DELETE_NOTE",
  payload: note,
});