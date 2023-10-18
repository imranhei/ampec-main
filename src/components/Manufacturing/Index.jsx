import React from 'react';
import Manufacturing from './Manufacturing';
import UniqueFacility from './UniqueFacility';

const Index = () => {
    return (
        <div className="w-full relative z-10 lg:pt-44 sm:pt-36 pt-24">
            <Manufacturing />
            <UniqueFacility />
        </div>
    );
}

export default Index;
