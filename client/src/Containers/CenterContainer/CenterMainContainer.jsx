import React, { Component } from 'react';
import styled from "styled-components";

class CenterMainContainer extends Component {
    render() {
        return (
            <CenterMainContainerDiv>
                센터 메인 컨테이너입니다.
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