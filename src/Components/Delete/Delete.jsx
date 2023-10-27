import firebase from '../Firebase'

import { getDatabase, ref, remove } from 'firebase/database';

const deleteNoteFromFirebase = (userId, noteId) => {
  const db = getDatabase(firebase); // Get the database instance

  // Construct the reference to the note
  const noteRef = ref(db, `users/${userId}/notes/${noteId}`);

  // Remove the note from the database
  remove(noteRef)
    .then(() => {
      console.log(`Note with ID ${noteId} successfully deleted from Firebase for user ${userId}.`);
    })
    .catch((error) => {
      console.error(`Error deleting note: ${error}`);
    });
};

export default deleteNoteFromFirebase;