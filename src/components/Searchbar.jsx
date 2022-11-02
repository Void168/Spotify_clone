import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

const Searchbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search/${searchTerm}`)
  }
  return (
    <form
      autoComplete="off"
      className="p-2 text-white focus-with:text-gray-600"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search-field" className="sr-only">
        Tìm kiếm
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 mx-4" />
        <input
          name="search-field"
          autoComplete="off"
          type="search"
          id="search-field"
          placeholder="Tìm kiếm bài hát"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent ouline-none placeholder-white text-base text-white p-4 border-2 rounded-lg"
        />
      </div>
    </form>
  )
}

export default Searchbar
