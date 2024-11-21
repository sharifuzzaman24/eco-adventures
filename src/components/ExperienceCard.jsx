import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ExperienceCard = ({experience}) => {

    console.log(experience)
    return (
        <div className="card bg-[#FDFEFE] w-96 shadow-lg rounded-lg transform scale-100 hover:scale-105 transition duration-300">
            <figure>
                <img className='w-[384px] h-[215px]'
                    src={experience.image} />
            </figure>
            <div className="card-body p-5">
                <h2 className="card-title text-[#2ECC71] text-xl font-bold">{experience.title}</h2>
                <ul className="my-2 space-y-2">
                {
                    experience.ecoFriendlyFeatures.map((feature, idx) => <li key={idx} className="flex items-center space-x-2">
                        <FaLeaf className="text-green-500" /> {/* Leaf Icon */}
                        <span className="text-gray-700">{feature}</span>
                      </li>)
                }
                </ul>
                <div className="card-actions justify-end">
                    <Link to={`/adventure/${experience.id}`} className="btn btn-primary text-white border-none bg-[#3498DB] w-full hover:bg-[#F39C12]">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;