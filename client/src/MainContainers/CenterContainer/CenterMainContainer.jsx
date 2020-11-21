import React, { Component } from 'react';
import styled from "styled-components";

import DayListSection from './DayListSection';
import CardHolderListSection from './CardHolderListSection'

class CenterMainContainer extends Component {
    render() {
        return (
            <CenterMainContainerDiv>
                <DayListSection/>
                <CardHolderListSection/>
            </CenterMainContainerDiv>
        );
    }
}

const CenterMainContainerDiv = styled.div`
background-color: red;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`;

export default CenterMainContainer;