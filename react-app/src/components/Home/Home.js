import React from 'react';
import AllPost from '../AllPosts/AllPosts'

import './Home.css';


function Home(){
    
    return (
        <div className="home-main-container">
            <div className='home-posts-container'>
                <AllPost />
            </div>
        </div>
    )
}

export default Home;