import React from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import firebase from "firebase";
import { BrowserRouter as Router} from "react-router-dom";

export const BookingCompleted = () => {
    return (
        <>
            <div className="App-header">
                <div className="successPage">
                    <h2><center>Success &#9989;</center></h2>
                    <p>{firebase.auth().currentUser.displayName}, Your room has been booked successfully.</p>
                    <p>Your room details are as follows:</p>
                    <table>
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
                    </table>
                    <div style={{ justifyContent:"center", textAlign: "center"}}>
                        <Router>
                            <Link to="/">
                                <button onClick={cancelBooking} className="logout-btn">Cancel Booking</button>
                            </Link>
                        </Router>
                    </div>
                    <div style={{ justifyContent:"center", textAlign: "center"}}>
                        <Router>
                            <Link to="/">
                                <button onClick={logout} className="logout-btn">Logout</button>
                            </Link>
                        </Router>
                    </div>
                </div>
            </div>
        </>
    );
};

const logout = () => {
    firebase.auth().signOut();
}
const cancelBooking = () => {
    localStorage.clear();
}