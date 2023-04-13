import React from 'react';
import FooterBottom from './components/FooterBottom';
import FooterTop from './components/FooterTop';

const Footer = () => {
    return (
        <div className='bg-[#3C6E71] w-full  mx-auto h-fit flex-col rounded-md'>
            <FooterTop/>
            <FooterBottom/>
        </div>
    );
};

export default Footer;