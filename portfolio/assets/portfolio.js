function upDate(previewPic){
  var divTarget = document.getElementById("portfolio");
  var original = previewPic.src;
  divTarget.style.backgroundImage = 'url(' + original + ')';

  document.getElementById("description").innerHTML = previewPic.alt;
}

function unDo(){
  document.getElementById("portfolio").style.backgroundImage = 'url()';
	document.getElementById("description").textContent = "Hover over an image below to display here."; 	
}