const albumTracks = document.getElementById('album-tracks')
let audioObject = null

export default function playlistTrigger() {
  albumTracks.addEventListener('click', (e) => {
    const target = e.target.parentNode
    const trackPreview = target.getAttribute('data-track-preview')

    if (target.classList.contains('active')) {
      audioObject.pause()
    } else if (trackPreview) {
      if (audioObject) {
        audioObject.pause()
      }

      audioObject = new Audio(trackPreview)

      audioObject.play()

      target.classList.add('active')

      audioObject.addEventListener('ended', () => {
        target.classList.remove('active')
      })

      audioObject.addEventListener('pause', () => {
        target.classList.remove('active')
      })
    } else {
      window.console.error('Oh no!!! There is not a preview available :(')
    }
  })
}
