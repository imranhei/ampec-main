import React, { useEffect, useRef } from 'react';
import Contact from './Contact';
import MediaPlatform from './MediaPlatform';
import Quotation from './Quotation';
import Visit from './Visit';
import CallUs from '../Shared/CallUs';
// import { animateScroll as scroll } from 'react-scroll';

const Index = () => {
    // console.log(animateScroll)
    // useEffect(() => {
    //     if (animateScroll) {
    //       // Scroll to the component with the specified ID with animation
    //       scroll.scrollTo('Quotation', {
    //         duration: 800,
    //         smooth: 'easeInOutQuart',
    //       });
    //     } else {
    //         console.log('scrolling');
    //       // Scroll to the top without animation
    //       scroll.scrollToTop();
    //     }
    //   }, [animateScroll]);

    return (
        <div className='sm:py-20 py-10 z-10 relative'>
            <Contact />
            <CallUs />
            <MediaPlatform />
            <Quotation id='quotation'/>
            <Visit />
        </div>
    );
}

export default Index;
