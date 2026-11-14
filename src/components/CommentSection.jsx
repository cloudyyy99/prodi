import { useEffect, useState } from "react";
import { auth, db, provider } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { format } from "timeago.js";

export const CommentSection = () => {
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => setUser(user));
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
    const unsubscribeComments = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubscribeAuth();
      unsubscribeComments();
    };
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert("Login gagal: " + error.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    await addDoc(collection(db, "comments"), {
      name: user.displayName,
      picture: user.photoURL,
      text: comment.trim(),
      timestamp: serverTimestamp(),
    });

    setComment("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-40">
      <h2 className="font-serif text-4xl font-bold text-[#04396C]">
        COMMENTS
      </h2>

      <div className="bg-gray-100 rounded-xl px-8 py-10 shadow-lg space-y-8">
        {/* Login / User Info */}
        {!user ? (
          <div>
            <button
              onClick={handleLogin}
              className="bg-[#04396C] hover:bg-pink-500 text-white px-6 py-3 rounded-lg text-lg shadow"
            >
              Login untuk mengirim Comment
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 rounded-full border"
              />
              <span className="font-semibold text-gray-800 text-lg">
                {user.displayName}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="text-base font-extrabold text-red-500 hover:text-[#04396C]"
            >
              Logout
            </button>
          </div>
        )}

        {/* Form Komentar */}
        {user && (
          <form onSubmit={handleSubmit}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tulis komentar dengan sopan ^^"
              className="w-full p-5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg dark:bg-gray-200 dark:text-black dark:border-white"
              rows="5"
              required
            />
            <div className="flex justify-end mt-3">
              <button
                type="submit"
                className="bg-[#04396C] hover:bg-pink-500 text-white px-6 py-2 rounded-xl text-lg font-semibold"
              >
                Kirim
              </button>
            </div>
          </form>
        )}

        {/* Komentar Ditampilkan */}
        <div className="divide-y divide-gray-300 ">
          {comments.length === 0 && (
            <p className="text-gray-500 text-base italic text-center py-6">
              Belum ada komentar.
            </p>
          )}
          {comments.map((c) => (
            <div key={c.id} className="flex gap-6 items-start py-6">
              <img
                src={c.picture}
                alt={c.name}
                className="w-11 h-11 rounded-full border"
              />
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-base font-semibold text-[#04396C]">
                    {c.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {c.timestamp?.seconds
                      ? format(c.timestamp.toDate())
                      : "Mengirim..."}
                  </div>
                </div>
                <p className="text-base text-black">
                  {c.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
