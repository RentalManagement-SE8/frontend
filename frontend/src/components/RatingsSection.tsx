import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";
import demoImage from "../assets/sample.jpg";

const RatingsSection = () => {
  const [reviews, setReviews] = useState([
    {
      user: "Alice",
      rating: 5,
      comment: "Amazing experience! Will rent again.",
    },
    {
      user: "Bob",
      rating: 4,
      comment: "Smooth transaction, item was in good condition.",
    },
  ]);

  const addReview = (review: { user: string; rating: number; comment: string }) => {
    setReviews((prev) => [review, ...prev]);
    // 🔧 You can later send `review` to backend API here
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <img
        src={demoImage}
        alt="Demo Item"
        className="w-full text-black h-64 object-cover rounded mb-4 shadow"
      />
      <ReviewForm onSubmit={addReview} />
      <h3 className="text-xl text-black font-semibold mb-3">Reviews</h3>
      {reviews.map((r, idx) => (
        <ReviewCard key={idx} review={r} />
      ))}
    </div>
  );
};

export default RatingsSection;
