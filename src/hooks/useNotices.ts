import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
  createdAt?: any;
}

export const useNotices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const noticesRef = collection(db, "notices");
    const q = query(noticesRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const noticesData: Notice[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Notice[];
        setNotices(noticesData);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching notices:", err);
        setError("Failed to load notices");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { notices, loading, error };
};
