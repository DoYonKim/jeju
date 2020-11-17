import React, { Component } from 'react';
import styled from "styled-components";

import DayListSection from './DayListSection';
import CardListSection from './CardListSection'

class CenterMainContainer extends Component {
    render() {
        return (
            <CenterMainContainerDiv>
                <DayListSection/>
                <CardListSection/>
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