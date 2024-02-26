import { useState } from "react";
import { Star } from "react-feather";
import styled from "styled-components";

function StarRating({ stars = 5, size = 40 }) {
  const [rating, setRating] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  function handleStarClick(currentStarIndex) {
    if (currentStarIndex === rating) {
      setRating((currentRating) => currentRating - 1);
      return;
    }

    setRating(currentStarIndex);
  }

  function handleMouseEnter(currentStarIndex) {
    setHoverIndex(currentStarIndex);
  }

  function handleMouseLeave() {
    setHoverIndex(rating);
  }

  return (
    <Wrapper>
      {[...Array(stars)].map((_, index) => {
        index++;
        return (
          <RatingStar
            key={index}
            active={index <= (hoverIndex || rating) ? 1 : 0}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={size}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingStar = styled(Star)`
  color: ${({ active }) => active && "gold"};
`;

export default StarRating;
