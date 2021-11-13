import React from 'react';
import styled from 'styled-components';

import List from './views/components/List';
import {initialListData} from "./data/initialData";

function App() {

    return (
        <Container>
            <List data={initialListData}/>
        </Container>
    );
}

const Container = styled.div`

`;

export default App;
