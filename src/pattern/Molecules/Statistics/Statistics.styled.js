import styled from "styled-components";

const FollowersToday = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: ${props => props.className === 'down' ? 'hsl(356, 69%, 56%)' : 'hsl(163, 72%, 41%)'};
`;
const FollowersTodayStadistic = styled.p`
    font-size: 13px;
    font-weight: 700;
    margin: 0 0 0 5px;
`;

export {
    FollowersToday,
    FollowersTodayStadistic
}
