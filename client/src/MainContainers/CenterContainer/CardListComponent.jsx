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
                <Map03 location = {location}/>
                <Review title = {pics} stars = "별다섯개" location = "제주도 서귀포시 강서구 마곡나루역 근처" contents = "comments"/>
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
    border-radius: 5px;
    background:white;

    display: flex;
    flex-direction: row;
`;

export default CardListComponent;