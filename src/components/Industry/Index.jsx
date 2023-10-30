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
            <Partner />
        </div>
    );
}

export default Index;
