const mainContainer = document.querySelector("main");
const headContainer = document.querySelector("head");

/* <h1>...<h1>   Main title*/
let mainTitle = document.createElement("h1");
let mainTitleText = document.createTextNode("The best How I Met Your Mother episode (according to fans)");
mainTitle.appendChild(mainTitleText);
mainContainer.appendChild(mainTitle);

/* Intro paragraph */ 
let para = document.createElement("p");
let paraText = document.createTextNode("As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it...");
para.appendChild(paraText)
mainContainer.appendChild(para);

/* Section title */ 
let sectionTitle = document.createElement("h2");
let sectionTitleText = document.createTextNode("The Slap Bet (Season 2, Episode 9)");
sectionTitle.appendChild(sectionTitleText);
mainContainer.appendChild(sectionTitle);

/* IMDB */
para = document.createElement("p");
paraText = document.createTextNode("IMDB Rating: 9.5");
para.appendChild(paraText);
mainContainer.appendChild(para);

/* Picture */
let imgContainer = document.createElement("img");
mainContainer.appendChild(imgContainer); 
imgContainer.src = "images/robin-sparkles.jpg";
imgContainer.alt = "Robin Sparkles";

/* Paragraph 1*/
para = document.createElement("p");
paraText = document.createTextNode("In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.");
para.appendChild(paraText);
mainContainer.appendChild(para); 

/* Paragraph 2*/
para = document.createElement("p");
paraText = document.createTextNode("In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).");
para.appendChild(paraText);
mainContainer.appendChild(para); 

/* Source link */
let sourceLink = document.createElement("a");
let sourceText = document.createTextNode("Source");
sourceLink.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
sourceLink.appendChild(sourceText);
mainContainer.appendChild(sourceLink);

/* Add CSS */
let newStylesheet = document.createElement("link");
newStylesheet.rel = "stylesheet";
newStylesheet.href = "styles.css";
headContainer.appendChild(newStylesheet); 


