import React from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";

export const BoyshostelNumber = () => {
    return (
        <>
            <div className="App-header">
                <h2><center>Choose your Hostel</center></h2>
                <div className="buttons-container">
                    <HostelNumber number="B1" />
                    <HostelNumber number="B2" />
                    <HostelNumber number="B3" />
                    <HostelNumber number="B4" />
                    <HostelNumber number="B5" />
                    <HostelNumber number="B6" />
                </div>
            </div>
        </>
    );
};

export const GirlshostelNumber = () => {
    return (
        <>
            <div className="App-header">
                <h2><center>Choose your Hostel</center></h2>
                <div className="buttons-container">
                    <HostelNumber number="G1" />
                    <HostelNumber number="G2" />
                    <HostelNumber number="G3" />
                    <HostelNumber number="G4" />
                    <HostelNumber number="G5" />
                    <HostelNumber number="G6" />
                </div>
            </div>
        </>
    );
};

export const HostelNumber = (props) => {
    return (
        <>
            <Link to="selectFloor" style={{ textDecoration:"none" }}>
                <div onClick={e => saveMe(props.number)} className="button-number-container">
                        <button style={{ color: "#FFF" }}>{props.number}</button>
                </div>
            </Link>
        </>
    );
};

function saveMe(building){
    localStorage.setItem('building', JSON.stringify(building));
    console.log("I chose building number", building);
}
