// How to add photos:
// 1. Share the album in Google Photos (keep it shared or URLs break)
// 2. Open a photo in the shared album, right-click the image → "Copy image address"
// 3. Paste the URL below and append =w1600 for full size, =w800 for thumbnail
//    e.g. url: 'https://lh3.googleusercontent.com/pw/XXXX=w1600'
// 4. Set aspect: 'landscape' | 'portrait' | 'square' — controls masonry column flow
// 5. caption and location are optional

export const photos = [
  {
    id: 'photo-1',
    url: 'https://lh3.googleusercontent.com/pw/AP1GczNt87NAygeeLlJAotJ6FJ4b1UXUWyyJNCQ1zWFVzC-WcQk8jcdsb73Nh1tXjCvEU6km6A9U4AWz9FEAP_NLi6B7ZbrYnnY1JIP-ZifVH1LQCoj0VHr2ONJPPLjibZqOEP3BsCs4mNRODkd24kmfkk1zg',
    category: 'Nature',
    aspect: 'landscape',
    caption: '',
    location: '',
  },
]

export const CATEGORIES = ['All', 'Fencing', 'Travel', 'Street', 'Portrait', 'Nature']
