import styled from "styled-components";

const NetworkContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    height: 20px;
`;
const NetworkContentProfile = styled.p`
    font-size: 13px;
    font-weight: 700;
    margin: 0 0 0 5px;
    color: ${props => props.theme.secondaryColor};
`;

export {
    NetworkContent,
    NetworkContentProfile
}
