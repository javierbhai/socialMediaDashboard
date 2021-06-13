import styled from "styled-components";

const Header = styled.header`
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 135px;
`;

const Title = styled.h1`
    font-size: 30px;
    color: ${props => props.theme.primeryColor};
    margin: 0;
`;

const SubTitle = styled.h2`
    font-size: 14px;
    color: ${props => props.theme.secondaryColor};
    margin: 0;
`;

export {
    Header,
    Title,
    SubTitle
}
