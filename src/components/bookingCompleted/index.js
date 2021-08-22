import React from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import firebase from "firebase";

export const bookingCompleted = () => {
    return (
        <>
            <div className="App-header">
                <div className="successPage">
                    <h2><center>Success &#9989;</center></h2>
                    <p>Your room has been booked successfully.</p>
                    <p>Your room details are as follows:</p>
                    <tbody>
                        <tr>
                            <td>Hostel No: </td>
                            <td> <span>{JSON.parse(localStorage.getItem('building'))}, {JSON.parse(localStorage.getItem('floor'))}</span></td>
                        </tr>
                        <tr>
                            <td>Room No: </td>
                            <td> <span>{JSON.parse(localStorage.getItem('roomNumber'))}</span></td>
                        </tr>
                    </tbody>
                    <div style={{ justifyContent:"center", textAlign: "center"}}>
                        <Link to="/">
                            <button onClick={logout} className="logout-btn">Logout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export const logout = () => {
    firebase.auth().signOut();
}