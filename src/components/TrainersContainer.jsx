import React from 'react'
import TrainerImage1 from '../assets/Trainers/TrainerImage1.png';
import TrainerImage2 from '../assets/Trainers/TrainerImage2.png';
import TrainerImage3 from '../assets/Trainers/TrainerImage3.png';
import TrainerImage4 from '../assets/Trainers/TrainerImage4.png';
import TrainerImage5 from '../assets/Trainers/TrainerImage5.png';
import TrainerImage6 from '../assets/Trainers/TrainerImage6.png';
import TrainerImage7 from '../assets/Trainers/TrainerImage7.png';
import TrainerImage8 from '../assets/Trainers/TrainerImage8.png';
import TrainerImage9 from '../assets/Trainers/TrainerImage9.png';
import TrainerImage10 from '../assets/Trainers/TrainerImage10.png';
import TrainerImage11 from '../assets/Trainers/TrainerImage11.png';
import TrainerImage12 from '../assets/Trainers/TrainerImage12.png';
import TrainerImage13 from '../assets/Trainers/TrainerImage13.png';
import TrainerImage14 from '../assets/Trainers/TrainerImage14.png';
import TrainerImage15 from '../assets/Trainers/TrainerImage15.png';
import TrainerImage16 from '../assets/Trainers/TrainerImage16.png';
import TrainerImage17 from '../assets/Trainers/TrainerImage17.png';
import TrainerImage18 from '../assets/Trainers/TrainerImage18.png';
import TrainerImage19 from '../assets/Trainers/TrainerImage19.png';
import TrainerImage20 from '../assets/Trainers/TrainerImage20.png';


import TrainersCard from "./TrainersCard.jsx";

const trainersData = [
    {
        id: 1,
        name: "Sophia Carter",
        expertise: "Leadership & Management",
        experience: "10+ years",
        rating: 4.8,
        location: "New York, USA",
        image: TrainerImage1,
    },
    {
        id: 2,
        name: "James Anderson",
        expertise: "Business Strategy",
        experience: "8+ years",
        rating: 4.7,
        location: "London, UK",
        image: TrainerImage2,
    },
    {
        id: 3,
        name: "Olivia Brown",
        expertise: "Soft Skills & Communication",
        experience: "6+ years",
        rating: 4.6,
        location: "Toronto, Canada",
        image: TrainerImage3,
    },
    {
        id: 4,
        name: "William Johnson",
        expertise: "AI & Machine Learning",
        experience: "7+ years",
        rating: 4.9,
        location: "San Francisco, USA",
        image: TrainerImage4,
    },
    {
        id: 5,
        name: "Emma Wilson",
        expertise: "Corporate Training",
        experience: "9+ years",
        rating: 4.7,
        location: "Sydney, Australia",
        image: TrainerImage5,
    },
    {
        id: 6,
        name: "Michael Davis",
        expertise: "Technology & Innovation",
        experience: "8+ years",
        rating: 4.5,
        location: "Berlin, Germany",
        image: TrainerImage6,
    },
    {
        id: 7,
        name: "Emily Garcia",
        expertise: "Public Speaking",
        experience: "5+ years",
        rating: 4.4,
        location: "Paris, France",
        image: TrainerImage7,
    },
    {
        id: 8,
        name: "Daniel Martinez",
        expertise: "Data Science",
        experience: "6+ years",
        rating: 4.8,
        location: "Madrid, Spain",
        image: TrainerImage8,
    },
    {
        id: 9,
        name: "Isabella Thomas",
        expertise: "Sales & Marketing",
        experience: "7+ years",
        rating: 4.7,
        location: "Los Angeles, USA",
        image: TrainerImage9,
    },
    {
        id: 10,
        name: "Ethan Harris",
        expertise: "Human Resources",
        experience: "9+ years",
        rating: 4.6,
        location: "Singapore",
        image: TrainerImage10,
    },
    {
        id: 11,
        name: "Ava Clark",
        expertise: "Emotional Intelligence",
        experience: "5+ years",
        rating: 4.3,
        location: "Dubai, UAE",
        image: TrainerImage11,
    },
    {
        id: 12,
        name: "Mason Lewis",
        expertise: "Project Management",
        experience: "8+ years",
        rating: 4.9,
        location: "Amsterdam, Netherlands",
        image: TrainerImage12,
    },
    {
        id: 13,
        name: "Mia Walker",
        expertise: "Workplace Productivity",
        experience: "6+ years",
        rating: 4.5,
        location: "Dublin, Ireland",
        image: TrainerImage13,
    },
    {
        id: 14,
        name: "Logan Hall",
        expertise: "Cybersecurity",
        experience: "10+ years",
        rating: 4.8,
        location: "Austin, USA",
        image: TrainerImage14,
    },
    {
        id: 15,
        name: "Charlotte Allen",
        expertise: "Finance & Investments",
        experience: "7+ years",
        rating: 4.6,
        location: "Zurich, Switzerland",
        image: TrainerImage15,
    },
    {
        id: 16,
        name: "Lucas Young",
        expertise: "Design Thinking",
        experience: "8+ years",
        rating: 4.7,
        location: "Stockholm, Sweden",
        image: TrainerImage16,
    },
    {
        id: 17,
        name: "Harper Scott",
        expertise: "Psychology & Motivation",
        experience: "9+ years",
        rating: 4.7,
        location: "Bangkok, Thailand",
        image: TrainerImage17,
    },
    {
        id: 18,
        name: "Elijah King",
        expertise: "Supply Chain Management",
        experience: "6+ years",
        rating: 4.5,
        location: "New Delhi, India",
        image: TrainerImage18,
    },
    {
        id: 19,
        name: "Amelia Rodriguez",
        expertise: "Negotiation Skills",
        experience: "7+ years",
        rating: 4.4,
        location: "São Paulo, Brazil",
        image: TrainerImage19,
    },
    {
        id: 20,
        name: "Benjamin Perez",
        expertise: "Blockchain & Web3",
        experience: "5+ years",
        rating: 4.6,
        location: "Tokyo, Japan",
        image: TrainerImage20,
    },
];

const TrainersContainer = () => {
    return (
        <div
            className="py-8 px-4 grid grid-cols-1 place-items-center gap-8 md:grid-cols-[300px_300px]  justify-center lg:pt-0"
        >
            {
                trainersData.map((trainer) =>  <TrainersCard key={trainer.id} {...trainer} />)
            }



        </div>
    )
}
export default TrainersContainer
