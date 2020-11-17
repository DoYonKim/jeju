import React, { Component } from 'react';
import styled from "styled-components";

class ConditionToggleConatiner extends Component {
    render() {
        return (
            <ToggleList>
                <button>날짜별로 보기</button>
                <button>음식점 보기</button>
                <button>카페 보기</button>
                <button>관광지 보기</button>
                <button>일기 보기</button>
            </ToggleList>
        );
    }
}

const ToggleList = styled.div`
background-color: yellow;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`;

export default ConditionToggleConatiner;