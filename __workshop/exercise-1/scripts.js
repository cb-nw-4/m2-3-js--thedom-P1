// Add your code here!

const linkStyle = document.createElement("LINK");

linkStyle.setAttribute("rel", "stylesheet");
linkStyle.setAttribute("href", "styles.css");
document.head.appendChild(linkStyle);

//

let mainContainer = document.querySelector("main");

const title = document.createElement("h1");
title.innerHTML = "The best How I Met Your Mother episode(according to fans)";
mainContainer.appendChild(title);

const p1 = document.createElement("p");
p1.innerHTML = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it… "
mainContainer.appendChild(p1);

const subTitle = document.createElement("h2");
subTitle.innerHTML = "The Slap Bet (Season 2, Episode 9)";
mainContainer.appendChild(subTitle);

const p2 = document.createElement("p");
p2.innerHTML = "IMDB Rating: 9.5"
mainContainer.appendChild(p2);

const img = document.createElement("IMG");
img.setAttribute("src", "images/robin-sparkles.jpg");
img.setAttribute("alt", "Robin Sparkles");
mainContainer.appendChild(img);

const p3 = document.createElement("p");
p3.innerHTML = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is  right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner,as long as she promises to be unbiased."
mainContainer.appendChild(p3);

const p4 = document.createElement("p");
p4.innerHTML = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney)."
mainContainer.appendChild(p4);

const link1 = document.createElement("A");
link1.innerHTML = "Source";
link1.setAttribute("href", "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/");
mainContainer.appendChild(link1);