import React from 'react';

function Advantages(point) {
    return (
        <>
            <div className='main-advantages__point'>
                <div><img src={point.img} alt='img2' /></div>
                <div className='main-advantages__subtitle'> {point.subtitle}</div>
                <div className='main-advantages__text'>{point.text}</div>
            </div>
        </>
    );
}

export default Advantages