import React, { Component } from 'react';
import styled from "styled-components";

import LogoSection from "./LogoSction"
import ConditionToggleConatiner from './ConditionToggleContainer'
import SearchByLocationSection from './SearchByLocationSection'

class LeftMainContainer extends Component {
    render() {
        return (
            <LeftMainContainerDiv>
                <LogoSection/>
                <ConditionToggleConatiner/>
                <SearchByLocationSection/>
           </LeftMainContainerDiv>
        );
    }
}

const LeftMainContainerDiv = styled.div`
display: flex;
flex-direction: column;
width: 25%;
height: 100%;
`;

export default LeftMainContainer;