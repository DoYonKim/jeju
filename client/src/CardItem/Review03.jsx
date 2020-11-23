import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

class Review03 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            post: []
        }
    }
    
    componentDidMount(){

        fetch("http://localhost:3001/api/getREVIEW03Data", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
              cardId: this.props.id
            })
            
            })
            .then(res => res.json())
            .then(data => this.setState({post: data}));
    }

    render() {

        const spanStyle={
            marginLeft: 5
            }
            
        var isDataLoaded = (this.state.post.length>0);
        if(isDataLoaded){
            return (
                <Item>
                    <h3>
                        {this.state.post[0].title}
                    </h3>
                    <img src={process.env.PUBLIC_URL + '/image/stars'+ this.state.post[0].stars +'.png'} alt = "별점입니다~"/>
                    <br/>

                    <OneRow>
                        <img src={process.env.PUBLIC_URL + '/image/location.png'} alt = "위치입니다~"/>
                        <span style={spanStyle}>{this.state.post[0].location}</span>
                    </OneRow>

                    <OneRow>
                        <img src={process.env.PUBLIC_URL + '/image/edit.png'} alt = "내용입니다~"/>
                        <span style={spanStyle}>{this.state.post[0].contents}</span>
                    </OneRow>
                </Item>
            );
        }else{
            return (
                <h4>loading..</h4>
            )
        }
        
    }
}

Review03.propTypes = {
    id: PropTypes.string,
};

const Item = styled.div`
    margin: 10px;
    padding: 20px;
    text-align: left;
    border-radius: 5px;
    width: 390px;
    height: 200px;
`;

const OneRow = styled.div`
    margin: 10px;
`;

export default Review03;