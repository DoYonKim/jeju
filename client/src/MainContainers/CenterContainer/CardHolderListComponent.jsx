import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

import Map03 from '../../CardItem/Map03'
import Review from '../../CardItem/Review03'

class CardListComponent extends Component {

    //to do: card 테이블에서 card_order에 따라 배열되는 기능 추가하기

    render() {
        const { cardHolderId } = this.props;

        return (
            <OneComponent>
                <Map03  id = {this.props.cardHolderId}/>
                <Review id = {this.props.cardHolderId}/>
            </OneComponent> 
        );
    }
}

CardListComponent.propTypes = {

    cardHolderId: PropTypes.string,
};

const OneComponent = styled.div`
    margin: 5px;
    padding: 0px;
    color: black;
    text-align: center;
    background:white;

    display: flex;
    flex-direction: row;

    border: 1px solid rgba(228, 228, 228, 0.6);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
`;

export default CardListComponent;