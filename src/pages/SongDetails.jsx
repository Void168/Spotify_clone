import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'

import { setActiveSong, playPause } from '../redux/features/playerSlice'
const SongDetails = () => {
  const dispatch = useDispatch()
  const { songid } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  return (
    <div className="flex flex-col">
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lời bài hát</h2>
      </div>
    </div>
  )
}

export default SongDetails
