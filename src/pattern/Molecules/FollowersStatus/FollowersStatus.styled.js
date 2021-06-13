import styled from "styled-components";

const FollowersStatusNumber = styled.h2`
    font-size: 58px;
    margin: 0;
    letter-spacing: -3px;
    line-height: 50px;
    color: ${props => props.theme.primeryColor};
`;
const FollowersStatusType = styled.p`
    font-size: 13px;
    margin: 10px 0 30px 0;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${props => props.theme.secondaryColor};
`;

export {
    FollowersStatusNumber,
    FollowersStatusType
}
