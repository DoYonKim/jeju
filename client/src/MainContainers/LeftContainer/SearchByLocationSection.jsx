import React, { Component } from 'react';
import styled from "styled-components";

class SearchByLocationSection extends Component {
    render() {
        return (
            <LoctionSecton>
                <h2>장소별로 보기</h2>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
                <button>버튼1</button>
            </LoctionSecton>
        );
    }
}

const LoctionSecton = styled.div`
background-color: violet;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`;

export default SearchByLocationSection;