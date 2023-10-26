import styled from 'styled-components';
import ProductCard from './../component/ProductCard/ProductCard';
import { worker } from '../__mock/browser';

function Main() {
    if(process.env.NODE_ENV === 'development') {
        worker.start();
    }
    return (
        <ListWrapper>
            
        </ListWrapper>
    );
}

const ListWrapper = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
`;

export default Main;
