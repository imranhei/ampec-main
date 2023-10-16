import React from 'react';
import Contact from './Contact';
import MediaPlatform from './MediaPlatform';
import Quotation from './Quotation';
import Visit from './Visit';

const Index = () => {
    return (
        <div className='sm:my-20 my-16 z-10 relative'>
            <Contact />
            <MediaPlatform />
            <Quotation />
            <Visit />
        </div>
    );
}

export default Index;
