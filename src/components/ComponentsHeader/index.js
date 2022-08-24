import React from 'react';
import SubHeading from './SubHeading';
import Heading from './Heading';
import Navbar from './Navbar';
import UserNavBar from '../UserNavBar';

function ComponentsHeader() {
    return (
        <>
            <SubHeading />
            <Heading />
            <Navbar />
            <UserNavBar />
        </>
    );
}

export default ComponentsHeader;
