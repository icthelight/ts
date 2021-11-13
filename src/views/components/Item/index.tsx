import React from 'react';
import styled from 'styled-components';

import { ItemData } from '../../../interfaces/ItemData';

interface Props {
    item: ItemData
}

const Item = ({item} : Props) => {
    return (
        <Container>
            <Title>{item.title}</Title>
            {
                item.subTitle && <SubTitle>{item.subTitle}</SubTitle>
            }
            <p>{item.completed}</p>
        </Container>
    )
}

const Container = styled.div`

`;

const Title = styled.div`
    
`;

const SubTitle = styled.div`
    
`;

export default Item;
