import React, { useEffect, useState } from 'react';
import ExperienceCard from './ExperienceCard';

const Experiences = () => {


    const [experiencesdata, setExperiencesData] = useState([]);

    useEffect(() => {
        fetch('/adventure.json')
            .then(res => res.json())
            .then(data => setExperiencesData(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    return (
        <>
            <div>
                <h1 className='text-2xl font-bold text-center mb-10 text-[#2ECC71] mt-20'>Explore Our Eco-Adventure</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center items-center'>
                {
                    experiencesdata.map(experience => (
                        <ExperienceCard key={experience.id} experience={experience} />
                    ))
                }
            </div>
        </>
    );
};

export default Experiences;
