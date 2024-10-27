import React from 'react';
import Header from './shared/Header/Header';
import LeftNavbar from './shared/LeftNavbar/LeftNavbar';
import RightNavbar from './shared/RightNavbar/RightNavbar';
import BreakingNews from './BreakingNews';
import Navbar from './Navbar/Navbar';
import MainContent from './shared/MainContent/MainContent';

const Home = () => {
    return (
        <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className=""><LeftNavbar></LeftNavbar></div>
                <div className=" md:col-span-2 text-4xl text-red-500"><MainContent></MainContent> </div>
                <div className=""><RightNavbar></RightNavbar></div>
            </div>
        </div>
    );
};

export default Home;