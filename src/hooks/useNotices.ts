import { useState, useEffect } from "react";
import { collection, query, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
  createdAt?: Timestamp;
}

export const useNotices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const noticesRef = collection(db, "notices");
    // Don't use orderBy to avoid requiring createdAt field
    const q = query(noticesRef);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        console.log("Firebase snapshot received:", snapshot.size, "documents");
        snapshot.docs.forEach((doc) => {
          console.log("Document ID:", doc.id, "Data:", doc.data());
        });
        const noticesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Notice[];
        console.log("Processed notices:", noticesData);
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
