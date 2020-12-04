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

        if (this.state.post.length > 0) {
            const script = document.createElement("script");
            script.async = true;
            script.src =
                "https://dapi.kakao.com/v2/maps/sdk.js?appkey=7ff05a710dd0c87927ab04e55b9fdeb6&autoload=false";
            document.head.appendChild(script);

            script.onload = () => {
                kakao.maps.load(() => {
                    let container = document.getElementById(
                        this.state.post[0].cardId
                    );
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
                        (parseFloat(this.state.post[0].locationX)).toFixed(6),
                        (parseFloat(this.state.post[0].locationY)).toFixed(6)
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

        console.log(this.props.id);
        fetch("http://52.79.160.44:3001/api/getMAP03Data", {
        //fetch("http://localhost:3001/api/getMAP03Data", {
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

        this.drawMap();
        var isMapLoad = (this.state.post.length>0);

        if(isMapLoad){
            return (
                <Item id={this.state.post[0].cardId} />
                )
        }else{
            return (
                <h4>loading..</h4>
            )
        }
    }
}

Map03.propTypes = {
    id: PropTypes.string,
};

const Item = styled.div`
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
    width: 390px;
    height: 200px;
`;

export default Map03;