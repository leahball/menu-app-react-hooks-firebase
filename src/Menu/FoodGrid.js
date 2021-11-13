import styled from 'styled-components';
import { Title } from '../Styles/title';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`
export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, .8);
    padding: 5px;
`

export const Food = styled(Title)`
    height: 300px;
    padding: 30px;
    font-size: 30px;
    background-image: ${({img}) => `url(${img});` }
    background-position: center;
    background-size: cover;
    border-radius: 7px;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`
