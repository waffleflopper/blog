import { auth, firestore } from "../lib/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

interface IUserData {
  username: string;
  user: string;
}

export const useUserData = () => {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState<IUserData | null>(null);

  useEffect(() => {
    let unsubscribe: () => void;

    if (user) {
      const ref = firestore.collection("users").doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
};
