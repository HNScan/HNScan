import styled from "styled-components";

import { breakpoint } from "@urkellabs/ucl";

const ContentContainer = styled.div`
  width: 95%;
  margin: 50px auto 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 460px);
  ${breakpoint.upToDesktop} {
    width: 90%;
    max-width: 1216px;
  }
`;

export default ContentContainer;
