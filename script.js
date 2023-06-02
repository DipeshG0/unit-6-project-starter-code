// Declare your genre arrays here

// Make sure to declare your HTML elements as variables! 

// Submit Button 
let submitButton = document.querySelector("button");
submitButton.onclick = function() {
};

let horror=["https://oyster.ignimgs.com/mediawiki/apis.ign.com/until-dawn/d/d9/UNTIL_DAWN.PS4.HD_SCREENCAPS.BUTTERFLYEFFECT.TITLE.1.jpg", "https://www.residentevil.com/village/assets/images/common/share.png"];


let action=["https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png","https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"];

let sport=["https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000047794/40f9e2f6d344d2607d4be72c6c4ebd3c18717ff87a56d6bbc303c42e58dd570d","https://assets.2k.com/1a6ngf98576c/2RNTmC7iLr6YVlxBSmE4M3/11177cffa2bdbedb226b089c4108726a/NBA23-WEBSITE-PRE_ORDER-HOMPAGE-MODULE2-RETAIL_CAROUSEL-CROSSGEN_EDITION-425x535.jpg"];
// Make sure to declare the shows div as a variable
let shows = document.querySelector(".shows"); 

//Submit Button 
let sButton = document.querySelector(".submit-button"); 
submitButton.onclick = function() {
	let genreInput = document.querySelector(".get-suggestions").value;
	if (genreInput === "horror") {
		for (let show of horror) {
        	shows.insertAdjacentHTML("afterbegin", "<img src='" + show + "'/>");
        } 
	} else if (genreInput === "action") {
    	for (let show of action) {
        shows.insertAdjacentHTML("afterbegin", "<img src='" + show + "'/>");
        }
    } else if (genreInput === "sport") {
    	for (let show of sport) {
        shows.insertAdjacentHTML("afterbegin", "<img src='" + show + "'/>"); 
        }
    }
}; 

// Suggestion Button
let suggestionButton = document.querySelector(".suggestion-button"); 
suggestionButton.onclick = function() {
	let suggestion = document.querySelector(".give-suggestions").value; 
    shows.append("Thanks for your suggestion! Check the console to see that it was added!"); 
    horror.push(suggestion); 
    sport.push(suggestion);
    action.push(suggestion); 
    console.log(horror);
    console.log(sport);
    console.log(action); 
}; 