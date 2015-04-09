var frame = document.getElementById("mainFrame");

var timer = setInterval(function(){ 
	var t = frame.children[1].contentWindow.document.children[0].children[1].children[26].children[1].children[0].innerHTML;

	if(t=="00:00:00") {
		frame.children[1].contentWindow.document.children[0].children[1].children[26].children[2].children[2].click();
	}
	
}, 1000);