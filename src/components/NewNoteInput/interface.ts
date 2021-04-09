import { NoteData } from "../Notes/interface";

export interface NewNoteInputProps {
  addNote(note: NoteData): void;
}