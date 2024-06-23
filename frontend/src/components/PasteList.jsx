import { useState, useEffect } from "react";
import { useAuthStore } from "../stores/authStore";

export default function PasteList() {
  const [pastes, setPastes] = useState([]);
  const [error, setError] = useState(null);
  const aToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const fetchPastes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/pastes/all/", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${aToken}`
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch pastes");
        }

        const data = await response.json();
        setPastes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPastes();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">All Pastes</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="w-full max-w-md">
          {pastes.map((paste) => (
            <li key={paste.id} className="mb-4 p-4 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold">{paste.title}</h3>
              <p>{paste.content.substring(0, 100)}...</p>
              <p className="text-sm text-gray-400">By {paste.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
