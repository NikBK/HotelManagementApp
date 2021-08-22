import React from 'react';
import { Link } from 'react-router-dom';
import "../../../src/App.css";

const Home = () => {
    return (
        <div className="App-header" >
           <div>
                <h1>Welcome to our Hostel.</h1>
                <p>Please Login to book your Favorite room.</p>
            </div>
            <div>
                <br />
                <Link to='/login'>
                        <button className='login-btn'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Home