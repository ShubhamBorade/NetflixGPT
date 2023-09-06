import React from 'react'

const VideoTitle = ({title,overview}) => {
    return (
        <div className='pt-36 px-12'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className=''>
                <button className='px-6 py-2 bg-gray-500 text-white rounded-lg'>▶️ Play</button>
                <button className='mx-2 px-6 py-2 bg-gray-500 text-white rounded-lg'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle