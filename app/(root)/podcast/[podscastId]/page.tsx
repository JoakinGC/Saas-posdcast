import React from "react";

const PosdcastDetails = ({params}:{params:{podcastId:string}}) =>{
    return(
        <p className='text-white-1'>PodcastDatails {params.podcastId}</p>
    )
}

export default PosdcastDetails