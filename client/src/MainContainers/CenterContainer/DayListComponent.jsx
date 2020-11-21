import React, { Component } from 'react';
import styled from "styled-components";

class DayListComponent extends Component {
    render() {
        return (
            <OneComponent>
                <P>Day 1</P>
                <P>10월 31일</P>
            </OneComponent>
        );
    }
}

const OneComponent = styled.div`
    /* margin: 10px;
    padding: 20px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    background: #4584b1; */

    /* Secondary/White */

    width: 153px;
    height: 72px;

    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.15));

    background: #FFFFFF;
    border-radius: 12px;

    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    /* identical to box height */


    float: left;
    margin-top: 40px;
    margin-right: 20px;
    /* Secondary/Dark Grey */

    color: #484848;
    `;

    const P = styled.div`
     margin-left: 10px;
     margin-top: 10px;
    `;

export default DayListComponent;