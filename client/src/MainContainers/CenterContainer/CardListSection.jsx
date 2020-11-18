import React, { Component } from 'react';
import styled from "styled-components";

import CardListComponent from './CardListComponent'

class CardListSection extends Component {
    render() {
        return (
            <CardList>
                <CardListComponent location = "25285071" pics= "dd" comments= "dd"/>
                <CardListComponent location = "25289072" pics= "3213" comments= "31231"/>
                <CardListComponent location = "25282073" pics= "123123" comments= "d3123d"/>
                <CardListComponent location = "25281074" pics= "d3222d" comments= "32323dd"/>
                <CardListComponent location = "25285075" pics= "dd" comments= "dd"/>
                <CardListComponent location = "25289076" pics= "3213" comments= "31231"/>
                <CardListComponent location = "25282077" pics= "123123" comments= "d3123d"/>
                <CardListComponent location = "25281078" pics= "d3222d" comments= "32323dd"/>
            </CardList>
        );
    }
}

const CardList = styled.div`
background-color: yellow;
display: flex;
flex-direction: column;
width: 70%;

flex-direction: column;
flex-wrap: nowrap;
overflow: auto;
`;

export default CardListSection;