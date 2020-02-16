import spotify from './spotify'
import renderAlbumInfo from './album-info'
import renderAlbumTracks from './album-tracks'

const listAlbums = document.getElementById('album-list')
const albumInfo = document.getElementById('album-info')
const albumTracks = document.getElementById('album-tracks')

function makeRequest(albumId) {
  spotify.album.getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracks))
    .catch(error => window.console.error(`[Oops. We got an error...] ${error}`))
}

export default function selectAlbumTrigger() {
  listAlbums.addEventListener('click', (e) => {
    const { target } = e
    makeRequest(target.getAttribute('data-album-id'))
  })
}
