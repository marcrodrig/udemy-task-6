export type NoteData = {
  id: number;
  title: string;
  content: string;
  created: Date;
  modified: Date;
}

export interface NoteProps {
  className: string;
  onClick(): void;
  note: NoteData;
  deleteNote(note: NoteData): void;
}

export interface NotesProps {
  editNote(note: NoteData): void;
  deleteNote(note: NoteData): void;
}