import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function CreatePaste() {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });

  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  const aToken = useAuthStore((state) => state.accessToken);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/pastes/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${aToken}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to create paste");
      }

      const data = await response.json();
      setNotification("Paste created successfully");
      setTimeout(() => navigate("/home/"), 2000);
    } catch (error) {
      setNotification("Failed to create paste");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8">Create Paste</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold mb-2">Title</label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-semibold mb-2">Content</label>
            <textarea
              id="content"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create Paste
          </button>
        </form>
        {notification && (
          <div className="mt-4 p-2 text-center rounded-lg bg-gray-700">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}
