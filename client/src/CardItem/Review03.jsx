import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

class Review03 extends Component {
    render() {
        
        const {title, stars, location, contents} = this.props;

        return (
            <Item>
                <h1>
                    {title}
                </h1>
                <p>
                    별점: {stars}
                    <br/>
                    위치:  {location}
                    <br/>
                    내용: {contents}
                </p>
                
            </Item>
        );
    }
}

Review03.propTypes = {
    title: PropTypes.string,
    stars: PropTypes.string,
    location: PropTypes.string,
    contents: PropTypes.string,
};

const Item = styled.div`
    margin: 10px;
    padding: 20px;
    text-align: left;
    border-radius: 5px;
    width: 300px;
    height: 200px;
`;

export default Review03;