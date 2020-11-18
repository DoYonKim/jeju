import React, { Component } from 'react';
import styled from "styled-components";


class LogoSction extends Component {
    render() {
        return (
            <LogoOuterDiv>
                <img src={process.env.PUBLIC_URL + '/image/logo.png'} alt = "제주에 살아요. 오늘도, 내일도"/>
            </LogoOuterDiv>
        );
    }
}

const LogoOuterDiv = styled.div`
    margin: 50px;
    display:flex;
    justify-content:center;
    align-items:center;

`;


export default LogoSction;