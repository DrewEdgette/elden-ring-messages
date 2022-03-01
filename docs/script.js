String.prototype.format = function () {
  var args = arguments;
  return this.replace(/{([0-9]+)}/g, function (match, index) {

    return typeof args[index] == 'undefined' ? match : args[index];
  });
};

function fileToList(fileName) {
	
	  word_list = [];
	  var scriptUrl = fileName;
	$.ajax({
	  url: scriptUrl,
	  type: 'get',
	  dataType: 'html',
	  async: false,
	  success: function(fileData) {
	  var line = "";
	  for (var i=0;i<fileData.length;i++) {
		  if (fileData[i] == "\n") {
	      	  word_list.push(line);
	          line = "";
	      }
	
		  else {
			  line += fileData[i];
		  }
    
  	  }
  }
});

	return word_list;
}


function getRandomMessage(templates, words, conjunctions) {
	// if word2 is empty, template2 and conjunction have to be as well and the first message cant be
	let word2Index = Math.floor(Math.random()*words.length);
	let word2 = words[word2Index];

	let template2Index = (word2.length > 0) ? Math.floor(Math.random()*templates.length) : 21;
	let template2 = templates[template2Index];

	let conjunctionIndex = (words[word2Index].length > 0) ? Math.floor(Math.random()*(conjunctions.length-1)+1) : 0;
	let conjunction = conjunctions[conjunctionIndex];

	let word1Index = Math.floor(Math.random()*(words.length-1)+1);
	let word1 = words[word1Index];
	
	let template1Index = Math.floor(Math.random()*templates.length);
	let template1 = templates[template1Index];

	let message = template1.format(word1) + " " + conjunction + " " + template2.format(word2);


    document.getElementById("messageTextArea").innerHTML = message;
    document.getElementById("messageTextArea").style.display = "block";
}


let templates = fileToList("templates.txt");
let words = fileToList("words.txt");
let conjunctions = fileToList("conjunctions.txt");

getRandomMessage(templates, words, conjunctions);
