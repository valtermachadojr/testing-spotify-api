function createMarkup(data) {
  const artistsLink = `https://open.spotify.com/artist/${data.artists[0].id}`
  return (`
    <img class="album-image" src="${data.images[0].url}" alt="${data.name}">
    <p class="album-title">${data.name}</p>
    <p class="album-artist"><a href="${artistsLink}" target="_blank">${data.artists[0].name}</a></p>
    <p class="album-counter">${data.tracks.total} Músicas</p>
  `)
}

export default function renderAlbumInfo(data, element) {
  const markup = data ? createMarkup(data) : data = []
  element.innerHTML = markup
  return data
}
