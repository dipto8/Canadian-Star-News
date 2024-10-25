import React from 'react';
import Header from './shared/Header/Header';
import LeftNavbar from './shared/LeftNavbar/LeftNavbar';
import RightNavbar from './shared/RightNavbar/RightNavbar';

const Home = () => {
    return (
        <div>
        <Header></Header>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className=""><LeftNavbar></LeftNavbar></div>
                <div className=" md:col-span-2 text-4xl text-red-500"> News Coming soon....</div>
                <div className=""><RightNavbar></RightNavbar></div>
            </div>
        </div>
    );
};

export default Home;