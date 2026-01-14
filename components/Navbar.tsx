'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
    return (
    <header>
        <nav className=''>
            <Link href='/' className='logo'>
            <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
            </Link>
            <ul className="">
                <Link href="/">Home</Link>
                <Link href="/">Events</Link>
                <Link href="/">Create Events</Link>
            </ul>
        </nav>
    </header>
    )
};