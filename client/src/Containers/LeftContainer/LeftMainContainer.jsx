import React, { Component } from 'react';
import styled from "styled-components";

import LogoSection from "./LogoSction"
import ConditionToggleSection from './ConditionToggleSection'


class LeftMainContainer extends Component {
    render() {
        return (
            <LeftMainContainerDiv>
                <LogoSection/>
                <ConditionToggleSection/>
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