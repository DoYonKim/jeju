import React, { Component } from 'react';
import styled from "styled-components";


class LeftMainContainer extends Component {
    render() {
        return (
            <LeftMainContainerDiv>
                레프트 메인 컨테이너입니다.
            </LeftMainContainerDiv>
        );
    }
}

const LeftMainContainerDiv = styled.div`
background-color: green;
display: flex;
flex-direction: column;
width: 25%;
height: 100%;
`;

export default LeftMainContainer;