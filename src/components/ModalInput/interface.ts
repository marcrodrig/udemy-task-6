import { NoteData } from "../Notes/interface";

export interface ModalInputProps {
  show: boolean;
  onClose(): void;
  note?: NoteData;
  addNote?(note: NoteData): void;
  editNote?(note: NoteData): void;
}