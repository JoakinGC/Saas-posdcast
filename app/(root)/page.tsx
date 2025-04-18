"use client";
import { Button } from '@/components/ui/button'
import PodcastCard from '@/components/PodcastCard'
import { useQuery } from "convex/react";
import { api } from '@/convex/_generated/api';
import LoaderSpinner from '@/components/LoaderSpinner';


const Home = ()=>{
  const trendingPodcast = useQuery( api.podcasts.getTrendingPodcasts);

  if(!trendingPodcast) return <LoaderSpinner/>
  return(
    <div className='mt-9 flex flex-col gap-9 md:overflow-hidden'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Posdcast</h1>
        
        <div className="podcast_grid">
        {trendingPodcast?.map(({_id,podcastDescription,podcastTitle,imageUrl}) =>{
          return (
            <PodcastCard
              key={_id}
              imgUrl={imageUrl!}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            />
          );
        })}
        </div>
      </section>
    </div>
  )
}

export default Home