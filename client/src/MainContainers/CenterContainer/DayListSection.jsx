import React, { Component } from 'react';
import styled from "styled-components";

import DayListComponent from './DayListComponent';

class DayListSection extends Component {
    render() {
        return (
            <DayList>
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
            </DayList>
        );
    }
}
        
        const DayList = styled.div`
            height: 200px;
            width: 300%;
            overflow: auto;

            background-color: pink;
            margin-top: 20px;
            padding-left: 40px;
        `;

export default DayListSection;