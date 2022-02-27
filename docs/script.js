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
    line += fileData[i];

    if (fileData[i] == "\n"){
      word_list.push(line);
      line = "";
    }
  }
  }
});

	return word_list;
}


function getRandomMessage() {
	
    var index = Math.floor(Math.random()*messages.length);
    var message = messages[index];

    document.getElementById("messageTextArea").innerHTML = message;
    document.getElementById("messageTextArea").style.display = "block";
}


let messages = fileToList("messages.txt");

getRandomMessage();