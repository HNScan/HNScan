import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px;
  width: 100%;
`;

// --------- Map styles ---------- //
export const MapHeader = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const MapWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  margin: 0 0 48px;
  border: 1px solid red;
`;

export const Map = styled.span`
   width: 100%;
   height: 100%;
   border: 1px solid #696969;
   z-index: 0;
`;

// --------- Info List styles ---------- //
export const StatsWrapper = styled.div`
  margin-top: 48px;
  width: 100%;
`;
