import React from 'react';
//
const ServiceCard = ({pic, count, title}) => {
    return (
        <div className='p-10 rounded-2xl bg-[#0F0F0F0D] space-y-3 lg:text-left place-items-center lg:place-items-baseline'>
            <img src={pic} alt="" />
            <h3 className='text-4xl font-black'>{count}+</h3>
            <p>{title}</p>
        </div>
    );
};

export default ServiceCard;