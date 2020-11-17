import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

class CardListComponent extends Component {
    render() {
        const { location, pics, comments } = this.props;

        return (
            <OneComponent>
                <p>주소: {location}<br/>사진: {pics}<br/>내용: {comments}</p>
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
    margin: 10px;
    padding: 20px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    background: #4584b1;

    display: flex;
    flex-direction: row;
`;

export default CardListComponent;