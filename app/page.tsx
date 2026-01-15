import Image from "next/image";
import ExploreBtn from "@/components/Explorebtn";
import EventCard from "@/components/EventCard";


const events = [
  {image : '/images/event1.png', title: 'Github-A Journey' , slug: 'event-1' , location: 'New York' , date: '2023-10-15',time:'10:00 AM'},
  {image : '/images/event2.png', title: 'Connecting Software Engineers', slug: 'event-2', location: 'Los Angeles', date: '2023-10-16',time:'11:00 AM'},
  {image : '/images/event3.png', title: 'Time and Money', slug: 'event-3', location: 'Chicago', date: '2023-10-17',time:'12:00 PM'},
  {image : '/images/event4.png', title: 'Sports Enthusiast', slug: 'event-4', location: 'Miami', date: '2023-10-18',time:'1:00 PM'},
  {image : '/images/event5.png', title: 'User Summit', slug: 'event-5', location: 'Seattle', date: '2023-10-19',time:'2:00 PM'},
  {image : '/images/event6.png', title: 'Tech Innovators', slug: 'event-6', location: 'Austin', date: '2023-10-20',time:'3:00 PM'},
]

export default function Page() {

  return (
   <section>
    <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
    <p className="text-center mt-5">Discover and connect with the most exciting developer events happening around the world.</p>
    <ExploreBtn />
    <div className="mt-20 space-y-7">
    
    <h3>Featured Events</h3>
      <ul className="events">
        {events.map((events)=>{
          return(<li key={events.title}><EventCard {...events} /></li>)
        })}
     </ul>
    </div>
    
   </section>
  );
}

