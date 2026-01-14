
'use client';
import React from 'react';
import Image from 'next/image';




export default function ExploreBtn() {
    return (
        <button id="explore-btn" type="button" className="mt-7 mx-auto"
        
        onClick={()=> console.log('button clicked')}>
            <a href="#events">
                 Explore Events
                 <Image src="/icons/arrow-down.svg" alt="Arrow Icon" width={20} height={20} />
            </a>
        </button>
    );
}