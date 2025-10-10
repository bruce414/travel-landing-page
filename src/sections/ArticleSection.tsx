import React from 'react'
import ArticleCard from '../components/ArticleCard';
import article1 from '../assets/article1.jpg'
import article2 from '../assets/article2.jpg'
import article3 from '../assets/article3.jpg'

const ArticleSection = () => {
  const articleCardItems = [
    {id: 1, image: article1, genre: 'Nature', title1: 'MUST VISIT DESTINATION', title2: 'IN 2025'},
    {id: 2, image: article2, genre: 'Beach', title1: 'MALDIVES VIRTUAL', title2: 'TRAVEL FAIR MARCH 2025'},
    {id: 3, image: article3, genre: 'City', title1: 'A PEEK INTO HONG KONGS', title2: 'CITY LANDSCRAPE'},
  ];

  return (
    <>
        <section className='pt-40 flex flex-col'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold text-3xl'>
                        Although a picture <br />
                        is worth a thousand words.
                    </p>
                    <p className='text-sm'>
                        Let's dive into the world of travel
                    </p>
                </div>
                <p className='text-sm'>
                    For you people who experience wanderlust, to understand <br />
                    your destination, to know the adventure that is about to <br />
                    come, head to the blog for more information.
                </p>
            </div>

            <div className='pt-10 flex gap-6 pb-10'>
                {articleCardItems.map((item) => 
                    <ArticleCard key={item.id} image={item.image} genre={item.genre} title1={item.title1} title2={item.title2} />
                )}
            </div>
        </section>
    </>
  )
}

export default ArticleSection