import {
  DocumentData,
  DocumentReference,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "./Firebase";
import { User } from "firebase/auth";
import useFetchNotes from "./fetchNotes";
import { IFly } from "./interfaces";

export const handleCreateNote = async (user: User, vuelo: IFly) => {
  const { fetchNotes } = useFetchNotes();

  try {
    if (user) {
      const userRef: DocumentReference<DocumentData> = doc(
        db,
        "users",
        user.uid
      );
      let value: number = 0;

      if (fetchNotes?.notas) {
        let cantidadNotes = Object.keys(fetchNotes.notas);
        value = cantidadNotes.length + 1;
      }

      await setDoc(
        userRef,
        {
          notas: {
            [value]: vuelo,
          },
        },
        { merge: true }
      );
    }

    return "/reservas";
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return "/inicio";
  }
};
