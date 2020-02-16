import 'jsdom-global/register'
import { expect } from 'chai'
import renderAlbums from '../src/album-list'

describe('AlbumList', () => {
  it('should exist', () => {
    expect(renderAlbums).to.exist
  })

  const data = [
    {
      'album_type' : 'album',
      'artists' : [ {
        'name' : 'Deftones',
      } ],
      'id' : '1GjjBpY2iDwSQs5bykQI5e',
      'images' : [ {
        'height' : 640,
        'url' : 'https://i.scdn.co/image/ab67616d0000b27372c2145d48f68917a7361b15',
        'width' : 640
      }, {
        'height' : 300,
        'url' : 'https://i.scdn.co/image/ab67616d00001e0272c2145d48f68917a7361b15',
        'width' : 300
      }, {
        'height' : 64,
        'url' : 'https://i.scdn.co/image/ab67616d0000485172c2145d48f68917a7361b15',
        'width' : 64
      } ],
      'name' : 'Diamond Eyes',
      'type' : 'album',
      'tracks': {
        'total': 11
      }
    },
  ]

  const markup = `
    <div class="list-item" data-album-id="${data[0].id}">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image" data-album-id="${data[0].id}">
      <div class="list-description" data-album-id="${data[0].id}">
        <p class="list-title" data-album-id="${data[0].id}">${data[0].name}</p>
        <p class="list-subtitle" data-album-id="${data[0].id}">${data[0].artists[0].name}</p>
      </div>
    </div>`

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div')
    renderAlbums(data, element)
    expect(element.innerHTML).to.eql(markup)
  })

})
