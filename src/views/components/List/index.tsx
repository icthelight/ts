import React from 'react';
import styled from 'styled-components';

import Item from '../Item';
import {ItemData} from "../../../interfaces/ItemData";

interface Props {
    data: ItemData[]
}

const List = ({data} : Props) => {
    return (
        <Container>
            {
                data.map((item, index) => <Item item={item}/>)
            }
        </Container>
    )
}

const Container = styled.div`

`;
export default List;
