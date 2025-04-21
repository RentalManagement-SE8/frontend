import React, { useState } from "react";
import placeholderImage from "../assets/placeholder.jpg";

const PostItemForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Cars");
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem = {
      title,
      description: desc,
      price,
      category,
      image, // 🔧 backend should handle file (e.g., multipart/form-data)
    };

    console.log("Submitted Item:", newItem);
    alert("Item posted (simulated)");

    // RESET
    setTitle("");
    setDesc("");
    setPrice("");
    setCategory("Cars");
    setImage(null);
    setPreviewUrl("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto text-black bg-white shadow-md rounded p-6 space-y-4"
    >
      <h2 className="text-2xl text-black font-bold text-center mb-4">Post Item for Rent</h2>

      <input
        type="text"
        placeholder="Item Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        rows={4}
        required
      />

      <input
        type="number"
        placeholder="Price (per day)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      >
        {[
          "Cars", "Homes", "Tools", "Electronics", "Furniture",
          "Rooms", "Travel", "Event Items",
        ].map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full"
      />

      <div className="mt-2 text-center">
        <img
          src={previewUrl || placeholderImage}
          alt="Preview"
          className="h-40 object-cover mx-auto rounded border"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full"
      >
        Post Item
      </button>
    </form>
  );
};

export default PostItemForm;
