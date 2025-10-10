import React, { type JSX } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type ArticleCardProps = {
    image: string,
    genre: string,
    title1: string,
    title2: string
};

const ArticleCard = ( {image, genre, title1, title2}: ArticleCardProps): JSX.Element => {
  return (
    <>
        <div className='flex flex-1 relative'>
            <img src={image} className='rounded-2xl' />
            
            <div className='absolute flex flex-col left-4 bottom-4 gap-4'>
                <div className='gap-2.5'>
                    <p className='text-white text-sm'>{genre}</p>
                    <h3 className='text-white font-bold text-lg'>
                        {title1} <br />
                        {title2}
                    </h3>
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-5 cursor-pointer'>
                        <p className='text-white text-sm'>LEARN MORE</p>
                        <FontAwesomeIcon icon={faArrowRight} className='text-white text-sm' />
                    </div>
                    <hr className='border-t-2 border-gray-200 w-full my-3 '/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ArticleCard