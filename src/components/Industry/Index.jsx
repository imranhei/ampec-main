import React, { useEffect } from 'react';
import Industries from './Industries';
import Partner from '../Shared/PartnerWithUs';

const Index = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="w-full relative z-10 lg:pt-44 sm:pt-36 pt-24">
            <Industries />
            <div className='container mx-auto lg:px-20 md:px-10 px-6'>
                <Partner />
            </div>
        </div>
    );
}

export default Index;
