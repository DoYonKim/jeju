/*global kakao*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

class Map03 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            post: []
        }
    }

    drawMap() {

        if(this.state.post.length > 0) {
    
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=7ff05a710dd0c87927ab04e55b9fdeb6&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById(this.state.post[0].locationX);
                let options = {
                    center: new kakao.maps.LatLng(
                        33.387141837922634,
                        126.56413842811448
                    ),
                    level: 11,
                };

                let map = new window.kakao.maps.Map(container, options);

                //마커 등록
                // 마커가 표시될 위치입니다
                var markerPosition = new kakao.maps.LatLng(
                    parseFloat(this.state.post[0].locationX),
                    parseFloat(this.state.post[0].locationY)
                );

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition,
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);
            });
        };

        }
    }
    componentDidMount(){
        fetch("http://localhost:3001/api/getMap")
            .then(res => res.json())
            .then(data => this.setState({post: data}));
    }

    render() {

        this.drawMap();

        var isMapLoad = (this.state.post.length>0);
        if(isMapLoad){
            return (
                <Item id={this.state.post[0].locationX} />
                )
        }else{
            return (
                <h4>loading..</h4>
            )
        }
    }
}

const Item = styled.div`
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    width: 390px;
    height: 200px;
`;

Map03.propTypes = {
    id: PropTypes.string,
};

export default Map03;