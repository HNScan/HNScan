import styled from "styled-components";

const ContentContainer = styled.div`
  width: 95%;
  margin: 50px auto 60px;
  background: ${props => props.theme["--background"]};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 460px);
  @media (min-width: 1024px) {
    width: 90%;
    max-width: 1216px;
  }
`;

export default ContentContainer;
