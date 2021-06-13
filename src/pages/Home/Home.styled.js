import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;
const Fonter = styled.div`
  top: 0;
  height:200px;
  width: 100%;
  position: absolute;
  background-color: ${props => props.theme.topBackground};
  z-index: -1;
  border-radius: 0 0 30px 30px;
`;
const Backer = styled.div`
  top: 0;
  height:100%;
  width: 100%;
  position: fixed;
  background-color: ${props => props.theme.pageBackground};
  z-index: -2;
`;

export {
  Wrapper,
  Fonter,
  Backer
}