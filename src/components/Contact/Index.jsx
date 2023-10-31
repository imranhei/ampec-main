import React from 'react';
import Contact from './Contact';
import MediaPlatform from './MediaPlatform';
import Quotation from './Quotation';
import Visit from './Visit';
import CallUs from '../Shared/CallUs';

const Index = () => {
    return (
        <div className='sm:py-20 py-10 z-10 relative'>
            <Contact />
            <CallUs />
            <MediaPlatform />
            <Quotation />
            <Visit />
        </div>
    );
}

export default Index;
