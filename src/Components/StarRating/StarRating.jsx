import React from 'react';

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = (num) => {
    const stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars(filledStars)}
      {hasHalfStar && <HalfStarIcon />}
      {renderStars(5 - filledStars - (hasHalfStar ? 1 : 0))}
    </div>
  );
};

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#f39c12"
    width="15"
    height="16"
  >
    <path d="M12 2l2.5 6h6l-4.7 3.5L18.5 18l-4.7-3.5L9 18l1.2-6.5L6.5 8H12zm0-2a1 1 0 01.8.4l3.3 5.7 5.8.8a1 1 0 01.5 1.7l-4.3 4.2 1 .6a1 1 0 01-.5 1.7l-5.3-2.8-5.3 2.8a1 1 0 01-1.4-1.1l1-.6-4.3-4.2a1 1 0 01.5-1.7l5.8-.8 3.3-5.7a1 1 0 011.2-.5zm0 2a1 1 0 01.2.02l5.5.8-4.2 4.1a1 1 0 01-.6.2L12 6.3V2zm-2.5 6.9a1 1 0 01.3 0l5.5.9-3.9 3.9a1 1 0 01-1.4 0L6.5 9.8l5.5-.9zM12 6a1 1 0 011 1v3.7l3.3 2a1 1 0 01-.6 1.9l-3.9-.6V18l-1.7-3.5a1 1 0 01-.3-.8V7a1 1 0 011-1z"></path>
  </svg>
);

const HalfStarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#f39c12"
    width="10"
    height="10"
  >
    <path d="M12 2l2.5 6h6l-4.7 3.5L18.5 18l-4.7-3.5L9 18l1.2-6.5L6.5 8H12zm0-2a1 1 0 01.8.4l3.3 5.7 5.8.8a1 1 0 01.5 1.7l-4.3 4.2 1 .6a1 1 0 01-.5 1.7l-5.3-2.8-5.3 2.8a1 1 0 01-1.4-1.1l1-.6-4.3-4.2a1 1 0 01.5-1.7l5.8-.8 3.3-5.7a1 1 0 011.2-.5zm-2.5 6.9a1 1 0 01.3 0l5.5.9-3.9 3.9a1 1 0 01-1.4 0L6.5 9.8l5.5-.9zM12 6a1 1 0 011 1v3.7l3.3 2a1 1 0 01-.6 1.9l-3.9-.6V18l-1.7-3.5a1 1 0 01-.3-.8V7a1 1 0 011-1z"></path>
  </svg>
);

export default StarRating;
