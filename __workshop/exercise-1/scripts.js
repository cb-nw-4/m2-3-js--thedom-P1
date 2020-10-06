// Add your code here!

let newElement = document.createElement('h1');
const h1Content = document.createTextNode('The best How I Met Your Mother episode according to fans');
newElement.appendChild(h1Content)
// document.body.appendChild(newElement);
document.querySelector('main').appendChild(newElement)
// document.getElementsByName('main').appendChild(newElement);
// First P Element
let firstP = document.createElement('p');
const firstPContent = document.createTextNode('As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…');
firstP.appendChild(firstPContent);
document.querySelector('main').appendChild(firstP)

//First h2 Element
let bestEpisode = document.createElement('h2')
const bestEpisodeContent = document.createTextNode('The Slap Bet (Season 2, Episode 9)');
bestEpisode.appendChild(bestEpisodeContent);
document.querySelector('main').appendChild(bestEpisode)
// Rating

let rating = document.createElement('p')
const ratingContent = document.createTextNode('IMDB Rating: 9.5')
rating.appendChild(ratingContent)
document.querySelector('main').appendChild(rating)
// image

let robinImage = document.createElement('img')
robinImage.setAttribute("src", "images/robin-sparkles.jpg")
robinImage.setAttribute("alt", "Robin Sparkles")
document.querySelector('main').appendChild(robinImage)


// Second P
let secondP = document.createElement('p')
const secondPContent = document.createTextNode('In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.')
secondP.appendChild(secondPContent)
document.querySelector('main').appendChild(secondP)

// Third p
let thirdP = document.createElement('p')
const thirdPContent = document.createTextNode('In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).')
thirdP.appendChild(thirdPContent)
document.querySelector('main').appendChild(thirdP)