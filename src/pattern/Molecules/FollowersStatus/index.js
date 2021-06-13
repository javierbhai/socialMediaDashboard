import { FollowersStatusNumber, FollowersStatusType } from './FollowersStatus.styled';

const FollowersStatus = ({ number = 0, type }) => {
    let typeTitle = type === 'youtube' ? 'Subscribers' : 'Followers'

    return (
        <>
            <FollowersStatusNumber>{number}</FollowersStatusNumber>
            <FollowersStatusType>{typeTitle}</FollowersStatusType>
        </>
    )
}

export default FollowersStatus
