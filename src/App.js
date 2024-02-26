import styled from "styled-components";
import StarRating from "./StarRating";

function App() {
  return (
    <Wrapper>
      <StarRating />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
`;
export default App;
