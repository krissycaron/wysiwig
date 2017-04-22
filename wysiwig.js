// Create an array of objects that represents famous people
var outputEl = document.getElementById("container");
var inputTextFromDOM = document.getElementById("inputEl");
//Stored input text from user input? 
var userTextBox;
var selectedBio; 
var famousPeople = [
		{
		  title: "Singer",
		  name: "Elvis Presley",
		  bio: "Elvis Aaron Presley was an American singer and actor. Regarded as one of the most significant cultural icons of the 20th century, he is often referred to as the 'King of Rock and Roll', or simply 'the King'.",
		  image: "https://www.graceland.com/!userfiles/Biography/Bio3_VerticalResponsive.jpg",
		  lifespan: {
		    birth: 1935,
		    death: 1977
		  }
		},
			{
		  title: "President of the United States",
		  name: "Barack Obama",
		  bio: "Barack Hussein Obama II is an American politician who served as the 44th President of the United States from 2009 to 2017. He is the first African American to have served as president, as well as the first born outside the contiguous United States.",
		  image: "http://img.wennermedia.com/article-leads-vertical-300/1250529817_barack_obama_290x402.jpg",
		  lifespan: {
		    birth: 1961,
		    death: "present"
		  }
		},
			{
		  title: "All Around Wonder Woman",
		  name: "Oprah Winfrey",
		  bio: "Oprah Gail Winfrey is an American media proprietor, talk show host, actress, producer, and philanthropist.",
		  image: "http://thesource.com/wp-content/uploads/2016/06/oprah1.jpeg",
		  lifespan: {
		    birth: 1954,
		    death: "present"
		  }
		}
];

// Create a DOM element for each of the objects inside the container. Style your person elements however you like.

function printPeopleToDom () {
	for(var i=0; i<famousPeople.length; i++){
		outputEl.innerHTML += `<div id="person-${i}" class="person">
		<header class="child">
			<h3 class="grandChild">${famousPeople[i].name}</h3>
			<h6 class="grandChild">${famousPeople[i].title}</h6>
		</header>
		<section class="child">
			<p class="grandChild">${famousPeople[i].bio}</p>
			<img class="grandChild" src="${famousPeople[i].image}">
		</section>
		<footer class="child">
			<p class="grandChild">${famousPeople[i].lifespan.birth} to ${famousPeople[i].lifespan.death}</p>
		</footer>
	</div>`
	}

}

function selectedFamousPerson(e) {
	var peopleCards = document.getElementsByClassName("person");
  for (var i = 0; i < famousPeople.length; i++) {
  	peopleCards[i].classList.remove("selected")
  }
	if (e.target.classList.contains("person")) {
  		e.target.classList.add("selected");
  		selectedBio = e.target.childNodes[3].childNodes[1];
	} else if (e.target.classList.contains("child")) {
		e.target.parentNode.classList.add("selected");
		selectedBio = e.target.parentNode.childNodes[3].childNodes[1];
	} else if (e.target.classList.contains("grandChild")) {
		e.target.parentNode.parentNode.classList.add("selected");
		selectedBio = e.target.parentNode.parentNode.childNodes[3].childNodes[1];
	} 
	// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
	inputTextFromDOM.focus();
}


outputEl.addEventListener("click", selectedFamousPerson);

// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

inputTextFromDOM.addEventListener("keypress", function (event) {
	var	editBio=selectedBio
		editBio.innerHTML= "";
	var mimickText=inputTextFromDOM.value;
	editBio.innerHTML += mimickText;
	console.log(editBio);
	// inputTextFromDOM.value=== "";
});

inputTextFromDOM.addEventListener("keypress", clearInput); 
function clearInput(event){
	if (event.keyCode === 13) {
		inputTextFromDOM.value = "";
	}
}
// inputTextFromDOM.addEventListener("keypress", mirrorText);

printPeopleToDom();


