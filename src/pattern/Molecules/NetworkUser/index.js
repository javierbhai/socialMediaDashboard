import Image from '../../Atoms/Image'

import facebookIcon from '../../../img/icon-facebook.svg';
import twitterIcon from '../../../img/icon-twitter.svg';
import instagramIcon from '../../../img/icon-instagram.svg';
import youtubeIcon from '../../../img/icon-youtube.svg';
import { NetworkContent, NetworkContentProfile } from './NetworkUser.styled';

const NetworkUser = ({ network, userName }) => {
    let netIcon;

    switch (network) {
        case 'facebook':
            netIcon = facebookIcon
            break;
        case 'twitter':
            netIcon = twitterIcon
            break;
        case 'instagram':
            netIcon = instagramIcon
            break;
        case 'youtube':
            netIcon = youtubeIcon
            break;            
        default:
            break;
    }

    return(
        <NetworkContent>
            <Image src={netIcon} alt='icon' />
            <NetworkContentProfile>{userName}</NetworkContentProfile>
        </NetworkContent>
    );
}

export default NetworkUser
