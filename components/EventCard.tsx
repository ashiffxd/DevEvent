import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
    title:string,
    image:string 
    slug:string,
    location:string
    date:string
    time:string
    // Add your props here
}

const EventCard: React.FC<EventCardProps> = ({title , image , slug, location , date , time}) => {
    return (
        <Link href={`/events/${slug}`} id="event-card">
            <Image src={image} alt={title} width={410} height={300} className='poster'/>
                
                <div className=' flex flex-row gap-2'>
                    <Image src="/icons/pin.svg" alt="Location pin" width={16} height={16} />
                 {location} 
                </div>
                <p className='title'>{title}</p>
                <div className='flex flex-row gap-3'>
                    <div className='flex flex-row gap-2'>
                    <Image src="/icons/calendar.svg" alt="date" width={16} height={16} />
                    <p className='date'>{date}</p>  
                </div>

                <div className='flex flex-row gap-2'>
                    <Image src="/icons/clock.svg" alt="time" width={16} height={16} />
                    <p className='time'>{time}</p>
                </div>

                </div>
               
                
        </Link>
    );
};
export default EventCard;