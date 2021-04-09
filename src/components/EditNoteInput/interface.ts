import { NoteData } from "../Notes/interface";

export interface NewNoteInputProps {
  show: boolean;
  onClose(): void;
  note: NoteData;
  editNote(note: NoteData): void;
}