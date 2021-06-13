import { Header, Title, SubTitle } from './Header.styled';

const pageHeader = ({ title, subTitle, mode }) => {
    return (
        <Header>
            <div>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </div>
            {mode}
        </Header>
    );
}

export default pageHeader;
