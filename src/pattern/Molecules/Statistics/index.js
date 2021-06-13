import Image from '../../Atoms/Image'
import arrowUp from '../../../img/icon-up.svg';
import arrowDown from '../../../img/icon-down.svg';
import { FollowersToday, FollowersTodayStadistic } from './Statistics.styled';
import './Statistics.styled';

const Statistics = ({ upDown = 'up', value }) => {
    return (
        <FollowersToday className={upDown}>
            <Image src={upDown === 'up' ? arrowUp : arrowDown} alt='icon' />
            <FollowersTodayStadistic>
                {value}
            </FollowersTodayStadistic>
        </FollowersToday>
    );
}

export default Statistics
