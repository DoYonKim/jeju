import React, { Component } from 'react';
import styled from "styled-components";

import CardListComponent from './CardHolderListComponent'

class CardHolderListSection extends Component {


    constructor(props){
        super(props);
        this.state = {
            post: []
        }
    }

    componentDidMount(){

        
        //fetch("http://localhost:3001/api/getCardHoderIdByCondition", {
            fetch("http://52.79.160.44:3001/api/getCardHoderIdByCondition", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
              date: "2020-11-23",
              category: "카페",
              location: "성산일출봉"
            })
            
            })
            .then(res => res.json())
            .then(data => this.setState({post: data}));
    }

    render() {
        return (
            <CardList>
                <CardListComponent cardHolderId = "1"/>
                {/* <CardListComponent location = "25289072" pics= "3213" comments= "31231"/>
                <CardListComponent location = "25282073" pics= "123123" comments= "d3123d"/>
                <CardListComponent location = "25281074" pics= "d3222d" comments= "32323dd"/>
                <CardListComponent location = "25285075" pics= "dd" comments= "dd"/>
                <CardListComponent location = "25289076" pics= "3213" comments= "31231"/>
                <CardListComponent location = "25282077" pics= "123123" comments= "d3123d"/>
                <CardListComponent location = "25281078" pics= "d3222d" comments= "32323dd"/> */}
            </CardList>
        );
    }
}

const CardList = styled.div`
background-color: yellow;
display: flex;
flex-direction: column;
width: 100%;

flex-direction: column;
flex-wrap: nowrap;
overflow: auto;
`;

export default CardHolderListSection;