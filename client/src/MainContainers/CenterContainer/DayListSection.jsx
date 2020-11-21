import React, { Component } from 'react';
import styled from "styled-components";

import DayListComponent from './DayListComponent';

class DayListSection extends Component {
    render() {
        return (
            <DayList>
                <DayListContainer>
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                    <DayListComponent />
                </DayListContainer>
            </DayList>
        );
    }
}
        
        const DayList = styled.div`
            height: 150px;
            overflow-y: hidden;
            overflow-x: scroll;
            margin-top: 20px;
            padding-left: 40px;
            background-color: #fefefe;
        `;

        const DayListContainer = styled.div`
        height: 150px;
        width: 300%;
        `;


export default DayListSection;