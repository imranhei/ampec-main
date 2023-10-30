import React, { useEffect } from 'react';
import Hero from './Hero';
import KeyFeatures from './KeyFeatures';
import Partner from '../../Shared/PartnerWithUs';

const Index = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='w-full overflow-hidden relative z-10'>
            <Hero />
            <KeyFeatures />
            <Partner />
        </div>
    );
}

export default Index;
