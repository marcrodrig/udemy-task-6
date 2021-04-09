import { NoteData } from "../../components/Notes/interface";
import { Action } from "../actions/actions";

export interface NotesState {
  notes: NoteData[]
}

const initialState: NotesState = {
  notes: [
    {
      id: 0,
      title: "Title 1",
      content: "Content 1",
      created: new Date(),
      modified: new Date()
    },
    {
      id: 1,
      title: "Title 2",
      content: "Content 2",
      created: new Date(),
      modified: new Date()
    }
  ]
}

export const notesReducer = (state:NotesState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_NOTE": {
      return {
        ...state,
        notes: [...state.notes, action.payload]}
    }
    case "EDIT_NOTE": {
      return {
        ...state,
        notes: state.notes.map((item, index) => {
          // Find the item with the matching id
          if(item.id === action.payload.id) {
            // Return a new object
            return {
              ...item,  // copy the existing item
              title: action.payload.title,
              content: action.payload.content,
              modified: action.payload.modified
            }
          }
          // Leave every other item unchanged
          return item
        })
      }
    }
    case "DELETE_NOTE": {
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload.id)
      }
    }
    default:
      return state
  }
}