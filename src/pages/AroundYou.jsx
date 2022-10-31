import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Error, Loader, SongCard } from '../components'
import { useSelector } from 'react-redux'

const AroundYou = () => {
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  useEffect(() => {}, [country])
  return <div>CountryTracks</div>
}

export default AroundYou
