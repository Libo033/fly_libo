import { AuthContext } from "@/context/AuthContext";
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "./Firebase";
import { INotes } from "./interfaces";

const useFetchNotes = (): {
  loaded: boolean;
  fetchNotes: Array<INotes> | null;
} => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [fetchNotes, setFetchNotes] = useState<Array<INotes> | null>(null);
  const { user, loaded: authLoaded } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      if (authLoaded) {
        try {
          if (user === null) {
            throw new Error("User isn't loaded!");
          }
          const docRef: DocumentReference<DocumentData> = doc(
            db,
            "users",
            user.uid
          );
          const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);

          if (docSnap.exists()) {
            setFetchNotes(docSnap.data().notas);
          }
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message);
          }
        } finally {
          setLoaded(false);
        }
      }
    }
    fetchData();
  }, [user]);

  return {loaded, fetchNotes};
};

export default useFetchNotes;
