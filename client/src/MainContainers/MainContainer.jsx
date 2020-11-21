import React, { Component } from 'react';
import styled from "styled-components";

import LeftMainContainer from './LeftContainer/LeftMainContainer'
import CenterMainContainer from './CenterContainer/CenterMainContainer'

class MainContainer extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         insertData: null
    //     }
    //   }

    // componentDidMount() {

    //     console.log("mounted");
    //     fetch('http://localhost:3001/api/testInsert')
    //       .then(res => res.json())
    //       .then(testInsert => this.setState({insertData: testInsert.insertData}));
    //   }

    render() {
        return (
            <MainContainerDiv>
                {/* <h1>{this.state.insertData}</h1> */}
                <LeftMainContainer/>
                <CenterMainContainer/>
            </MainContainerDiv>
        );
    }
}

const MainContainerDiv = styled.div`
display: flex;
background-color: blue;
flex-direction: row;
height: 100vh;
`;

export default MainContainer;