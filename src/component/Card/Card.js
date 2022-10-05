import React from 'react';

const Card = ({ data }) => {
    const { slug, brand, image, phone_name } = data;



    const part = slug.split('-');
    const price = part[1];

    return (
        <div className='border border-solid bg-white rounded-md flex flex-col justify-center text-center p-5'>
            <h1 className='text-xl font-semibold'>{brand}</h1>
            <img className='mt-2' src={image} alt={phone_name} />
            <p className='mt-2'>{phone_name}</p>
            <p>{price}</p>
        </div>
    );
};

export default Card;