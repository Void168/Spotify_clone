import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from '../redux/services/shazamCore'

import { setActiveSong, playPause } from '../redux/features/playerSlice'
const SongDetails = () => {
  const dispatch = useDispatch()
  const { songid } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
  } = useGetSongDetailsQuery({ songid })
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid })

  if (isFetchingSongDetails || isFetchingRelatedSongs) {
    return <Loader title="Đang tải bài hát" />
  }

  if (error) return <Error />

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lời bài hát</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Không tìm thấy lời bài hát
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  )
}

export default SongDetails
