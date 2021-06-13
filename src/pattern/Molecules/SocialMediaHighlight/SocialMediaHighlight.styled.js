import styled from "styled-components";

const Article = styled.article`
    background-color: ${props => props.theme.cardBackground};
    border-radius: 8px;
    overflow: hidden;
`;
const Liner = styled.span`
    height: 4px;
    display: block;
    background: ${props => {        
        let netIcon;
        let compare = props.className;
        switch (compare) {
            case 'facebook':
                netIcon = 'hsl(195, 100%, 50%)'
                break;
            case 'twitter':
                netIcon = 'hsl(203, 89%, 53%)'
                break;
            case 'instagram':
                netIcon = 'linear-gradient(90deg, rgba(253,196,104,1) 0%, rgba(223,73,150,1) 100%);'
                break;
            case 'youtube':
                netIcon = 'hsl(348, 97%, 39%)'
                break;            
            default:
                netIcon = 'hsl(195, 100%, 50%)'
                break;
        }
        return netIcon
    }};
`;
const NetworkCont = styled.div`
    padding: 28px 20px 20px 20px;
    box-sizing: border-box;
`;

export {
    Article,
    Liner,
    NetworkCont
}
