import 'jsdom-global/register'
import { expect } from 'chai'

import renderAlbumInfo from '../src/album-info'

describe('AlbumInfo', () => {

  const data = {
    'album_type' : 'album',
    'artists' : [ {
      'name' : 'Deftones',
      'id' : '1GjjBpY2iDwSQs5bykQI5e',
    } ],
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
  }

  const markup = `
    <img class="album-image" src="https://i.scdn.co/image/ab67616d0000b27372c2145d48f68917a7361b15" alt="Diamond Eyes">
    <p class="album-title">Diamond Eyes</p>
    <p class="album-artist"><a href="https://open.spotify.com/artist/1GjjBpY2iDwSQs5bykQI5e" target="_blank">Deftones</a></p>
    <p class="album-counter">11 Músicas</p>
  `

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div')
    renderAlbumInfo(data, element)

    expect(element.innerHTML).to.be.eql(markup)
  })

  it('should return the data', () => {
    const element2 = document.createElement('div')
    expect(renderAlbumInfo(data, element2)).to.be.eql(data)
  })
})
