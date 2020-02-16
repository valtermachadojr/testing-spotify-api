import spotify from './spotify'
import renderAlbums from './album-list'

const searchInput = document.getElementById('search-input')
const searchForm = document.getElementById('search-form')
const albumInfo = document.getElementById('album-info')
const albumList = document.getElementById('album-list')
const albumTracks = document.getElementById('album-tracks')

function makeRequest() {
  while (albumList.hasChildNodes()) {
    albumList.removeChild(albumList.firstChild)
  }
  albumTracks.innerHTML = ''
  albumInfo.innerHTML = ''
  spotify.search.albums(searchInput.value)
    .then(data => renderAlbums(data.albums.items, albumList))
    .catch(error => window.console.error(`[Oops. We got an error...] ${error}`))
}

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    makeRequest()
  })
}
