import Statistics from '../Statistics'
import NetworkUser from '../NetworkUser'
import FollowersStatus from '../FollowersStatus'
import { Article, Liner, NetworkCont } from './SocialMediaHighlight.styled';

const SocialMediaHighlight = ({ userName, network, number, upDown, value }) => (
    <Article>
        <Liner className={`${network}`}></Liner>
        <NetworkCont>
            <NetworkUser userName={userName} network={network}  />
            <FollowersStatus type={network} number={number}/>
            <Statistics upDown={upDown} value={value} />
        </NetworkCont>
    </Article>
);

export default SocialMediaHighlight
