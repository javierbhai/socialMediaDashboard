import Image from '../../Atoms/Image'
import Statistics from '../Statistics'
import facebookIcon from '../../../img/icon-facebook.svg';
// import twitterIcon from '../../../img/icon-twitter.svg';
// import instagramIcon from '../../../img/icon-instagram.svg';
// import youtubeIcon from '../../../img/icon-youtube.svg';
import { DailyCard, NetworkContainer, NetworkInfo, FollowersStatus, FollowersStatusNumber } from './SocialMediaDaily.styled';

const SocialMediaDaily = () => (
    <DailyCard>
        <NetworkContainer>
            <NetworkInfo>
                Page Views
            </NetworkInfo>
            <Image src={facebookIcon} alt='Social Network Icon' />
        </NetworkContainer>
        <FollowersStatus>
            <FollowersStatusNumber>
                87
            </FollowersStatusNumber>
            <Statistics upDown='up' value='8%' />
        </FollowersStatus>
    </DailyCard>
);

export default SocialMediaDaily
