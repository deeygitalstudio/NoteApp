import React, { useEffect, useState, useRef } from 'react';
import deleteIcon from '../Assest/delete.png';
import createIcon from '../Assest/edit.png';
import firebase from "../Firebase";
import { getDatabase, set,  ref, remove, onValue, push } from 'firebase/database';
import { getAuth} from 'firebase/auth';
import './Notes.css';




const Notes = () => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Clean up the listener when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, []);

  // Function to fetch user's notes from the database
  useEffect(() => {
    if (user) {
      const uid = user.uid;
    const db = getDatabase();
      const userNotesRef = ref(db, 'users/' + uid + '/notes');

      onValue(userNotesRef, (snapshot) => {
        const notesData = snapshot.val();
        if (notesData) {
          const notesList = Object.entries(notesData).map(([key, value]) => ({
            id: key,
            ...value
          }));
          setNotes(notesList);
        } else {
          setNotes([]);
        }
      });
    }
  }, [user]);

  const handleCreateNote = () => {
    try {
      if (user) {
        const uid = user.uid;
         const db = getDatabase(); 
        const userNotesRef = ref(db, 'users/' + uid + '/notes');

        const noteRef = push(userNotesRef);
        const noteKey = noteRef.key;

        // Set initial note content to the newNoteContent state
        set(ref(db, 'users/' + uid + '/notes/' + noteKey), {
          noteText: newNoteContent
        });

        // Clear the input box after creating the note
        setNewNoteContent('');

        console.log('New note created:', noteKey);
      } else {
        console.log('User is not logged in');
      }
    } catch (error) {
      console.log('Error creating note: ', error);
    }
  };

  // Ref to track if the onBlur event has already been handled
  const onBlurHandledRef = useRef(false);

  const handleNoteChange = (noteId, newContent) => {
    try {
      if (!onBlurHandledRef.current) {
        onBlurHandledRef.current = true;
        if (user) {
          const uid = user.uid;
          const db = getDatabase();
          const noteRef = ref(db, 'users/' + uid + '/notes/' + noteId);

          set(noteRef, {
            noteText: newContent
          });

          console.log('Note updated:', noteId, newContent);
        } else {
          console.log('User is not logged in');
        }
      }
    } catch (error) {
      console.log('Error updating note: ', error);
    }
  };

  // Reset the onBlurHandledRef when the input is focused again
  const handleNoteFocus = () => {
    onBlurHandledRef.current = false;
  };


  
const deleteNote = (noteId) => {
    if (user) {
   
       const uid = user.uid;
          const db = getDatabase();
          const notesRef = ref(db, 'users/' + uid + '/notes/' + noteId);

      remove(notesRef)
        .then(() => {
          console.log('Note deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting note:', error);
        });
    }
  };

  return (
    <div className="container-fluid Note cont">
    
      <button class="btn  btn-primary mt-3" onClick={handleCreateNote} id="createNoteBtn"><img src={createIcon} class="im" alt=""/>Create Note</button>
      {user && (
        <div className="notes-cont mt-2">
          
          {notes.map((note) => (
            <p
              key={note.id}
              className="input form-control"
              contentEditable="true"
              onBlur={(e) => handleNoteChange(note.id, e.target.textContent)}
              onFocus={handleNoteFocus} placeholder='Enter your note' // Add onFocus event listener
            >
              {note.noteText}
              <img src={deleteIcon} onClick={() => deleteNote(note.id)} alt="" />
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;