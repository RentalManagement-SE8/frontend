import React from "react";

interface Review {
  user: string;
  rating: number;
  comment: string;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="border rounded p-4 shadow-sm bg-white mb-2">
      <div className="font-semibold text-lg">{review.user}</div>
      <div className="text-yellow-500 text-sm">
        {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
      </div>
      <p className="text-gray-700 mt-2">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
