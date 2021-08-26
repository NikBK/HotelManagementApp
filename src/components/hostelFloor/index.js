import React from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";


export const hostelFloor = () => {
    return (
        <>
            <div className="App-header">
                <h2><center>Choose a Floor</center></h2>
                <select id="mySelect" style={{ backgroundColor: "#b0a8a8" }}>
                    <option>1st Floor</option>
                    <option>2nd Floor</option>
                    <option>3rd Floor</option>
                    <option>4th Floor</option>
                    <option>5th Floor</option>
                </select>
                <div className="buttons-container">
                    <RoomNumber number="1" />
                    <RoomNumber number="2" />
                    <RoomNumber number="3" />
                    <RoomNumber number="4" />
                    <RoomNumber number="5" />
                    <RoomNumber number="6" />
                    <RoomNumber number="7" />
                    <RoomNumber number="8" />
                    <RoomNumber number="9" />
                    <RoomNumber number="10" />
                </div>
            </div>
        </>
    );
};


export const RoomNumber = (props) => {
    return (
        <>
            <Link to="BookingCompleted" style={{ textDecoration:"none" }}>
                <div onClick={e => saveMe(props.number)} className="button-number-container">
                        <button style={{ color: "#FFF" }}>{props.number}</button>
                </div>
            </Link>
        </>
    );
};

function saveMe(roomNumber){
    let floor = document.getElementById('mySelect').value;
    localStorage.setItem('floor', JSON.stringify(floor));
    localStorage.setItem('roomNumber', JSON.stringify(roomNumber));
    console.log("I chose ", floor, "with room Number", roomNumber);
}
