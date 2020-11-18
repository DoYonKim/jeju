import React, { Component } from 'react';
import styled from "styled-components";

import LeftMainContainer from './LeftContainer/LeftMainContainer'
import CenterMainContainer from './CenterContainer/CenterMainContainer'

class MainContainer extends Component {
    render() {
        return (
            <MainContainerDiv>
                <LeftMainContainer/>
                <CenterMainContainer/>
            </MainContainerDiv>
        );
    }
}

const MainContainerDiv = styled.div`
display: flex;
background-color: blue;
flex-direction: row;
height: 100vh;
`;

export default MainContainer;