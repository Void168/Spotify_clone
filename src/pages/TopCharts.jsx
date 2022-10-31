import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '../components'

import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const TopCharts = () => {
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <Loader title="Đang tải xu hướng" />

  if (error) return <Error />
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Khám phá xu hướng
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default TopCharts
