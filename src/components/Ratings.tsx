import Star from "@/assets/SVG/icons/Star";
import React from "react";

interface RatingProps {
  rating: number;
}

const Ratings: React.FC<RatingProps> = ({ rating }) => {
  const totalStars = 5;
  const newRating = Math.round(rating);

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star fill={index < newRating ? "#FFCE22" : "gray"} key={index} />
      ))}
    </div>
  );
};

export default Ratings;
