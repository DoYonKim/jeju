import React, { Component } from 'react';
import styled from "styled-components";

class ConditionToggleSection extends Component {
    render() {
        return (
            <ToggleList>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
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

export default ConditionToggleSection;