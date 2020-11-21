/*global kakao*/
import React, { Component } from 'react';
import styled from "styled-components";

class Map03 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            post: []
        }
    }

    drawMap() {
        console.log("state");
        console.log(this.state.locationX);
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=7ff05a710dd0c87927ab04e55b9fdeb6&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById(this.props.locationX);
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
                    parseFloat(this.state.post.locationX),
                    parseFloat(this.state.post.locationY)
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
    componentDidMount(){
        console.log("getData");
        fetch("http://localhost:3001/api/getMap")
            .then(res => res.json())
            // .then(data=>console.log(data));
            .then(data => this.setState({post: data}))
            //.then(this.drawMap());
    }

    render() {

        console.log("렌더");
        console.log(this.state);
        return (
        <h4>{this.state.post.locationX}</h4>

            // <Item id={this.state.locationX} />

        )
        
    }
}

const Item = styled.div`
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    width: 300px;
    height: 200px;
`;

export default Map03;