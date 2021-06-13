import styled from "styled-components";

const DailyCard = styled.div`
    background-color: ${props => props.theme.cardBackground};
    border-radius: 8px;
    overflow: hidden;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 125px;
    box-sizing: border-box;
`;
const NetworkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NetworkInfo = styled.p`
    font-size: 13px;
    font-weight: 700;
    line-height: 0;
    margin: 0;
    color: ${props => props.theme.secondaryColor};
`;
const FollowersStatus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;
const FollowersStatusNumber = styled.div`
    font-size: 32px;
    font-weight: 700;
    line-height: 0;
    margin: 0;
    color: ${props => props.theme.primeryColor};
`;

export {
    DailyCard,
    NetworkContainer,
    NetworkInfo,
    FollowersStatus,
    FollowersStatusNumber
}
