import React, { Component } from 'react';
import styled from "styled-components";

import CardListComponent from './CardListComponent'

class CardListSection extends Component {
    render() {
        return (
            <CardList>
                <CardListComponent location = "dd" pics= "dd" comments= "dd"/>
                <CardListComponent location = "d2323" pics= "3213" comments= "31231"/>
                <CardListComponent location = "dd" pics= "123123" comments= "d3123d"/>
                <CardListComponent location = "dd11" pics= "d3222d" comments= "32323dd"/>
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