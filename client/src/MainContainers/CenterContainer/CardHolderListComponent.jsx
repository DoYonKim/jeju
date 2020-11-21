import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

import Map03 from '../../CardItem/Map03'
import Review from '../../CardItem/Review03'

class CardListComponent extends Component {


    render() {
        const { location, pics, comments } = this.props;

        return (
            <OneComponent>
                <Map03 cardID/>
                <Review title = {pics} stars = "별다섯개" location = "제주도 서귀포시 강서구 마곡나루역 근처" contents = {comments}/>
            </OneComponent>
        );
    }
}

CardListComponent.propTypes = {

    location: PropTypes.string,
    pics: PropTypes.string,
    comments: PropTypes.string,
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