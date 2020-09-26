// Add your code here!

// grab the main tag + header for reference
const getMain = document.querySelector("main");
const getHead = document.querySelector("head")

// creating the elements

const mainHeader = document.createElement("h1");
const mainHeaderText = document.createElement("p");
const mainSecondaryHeader = document.createElement("h2");
const imdbText = document.createElement("p");
const mainImage = document.createElement("img");
const mainHeaderText2 = document.createElement("p");
const mainHeaderText3 = document.createElement('p')
const mainLink = document.createElement('a')
const styleRef = document.createElement('link')

// adding the inner text to the elements

mainHeader.innerText = `The best How I Met Your Mother episode (according to
  fans)`;
mainHeaderText.innerText = `As impossible as it seems to name just 1 of the 208
legendary episodes as the “best”, the fans have
spoken and the highest rated episode is… wait for
it…`;
mainSecondaryHeader.innerText = `The Slap Bet (Season 2, Episode 9)`;
imdbText.innerText = `IMDB Rating: 9.5`;
mainImage.setAttribute("src", "images/robin-sparkles.jpg");
mainImage.setAttribute("alt", "Robin Sparkles");
mainHeaderText2.innerText = ` In this episode, Ted is learning a few secrets about
Robin, namely that she has an unexplained aversion
to the mall. Robin refuses to tell Ted and the
others why she won’t go to the mall, so the gang
forms their own theories. Marshall believes it’s
because she got married in a mall and is still
married. Barney believes it has something to do with
Robin having performed in a porn video. The two of
them make a slap bet with each other: whoever is
right gets to slap the other across the face as hard
as he can. Lily is named the Slap Bet Commissioner,
as long as she promises to be unbiased.`;
mainHeaderText3.innerText = ` In the end, Robin’s big secret was revealed- she was
a Canadian, teen pop sensation named Robin Sparkles.
Barney finds the music video for her hit single
“Lets Go To The Mall”. The slap bet takes a few
turns throughout the episode, but ends with Marshall
having the right to slap Barney 5 times- available
for all of eternity (horrible call Barney).`
mainLink.setAttribute('href', '"https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"')
mainLink.innerText = `Source`
styleRef.setAttribute('rel', 'stylesheet')
styleRef.setAttribute('href', 'styles.css')

// append children to the main tag

getMain.appendChild(mainHeader);
getMain.appendChild(mainHeaderText);
getMain.appendChild(mainSecondaryHeader);
getMain.appendChild(imdbText);
getMain.appendChild(mainImage);
getMain.appendChild(mainHeaderText2)
getMain.appendChild(mainHeaderText3)
getMain.appendChild(mainLink)
getHead.appendChild(styleRef)