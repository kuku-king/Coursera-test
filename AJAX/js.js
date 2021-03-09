document.addEventListener("DOMContentLoaded",
	function(event){
		document.querySelector("button").
		addEventListener("click", function () {

				
				//call server to get the name
				$ajaxUtiles.sendGetRequest("Data.txt", 
				function (request){
					var name = request.responseText;
					document.getElementById("content")
				.innerHTML = "<h2>Hello " + name 
				+ "!</h2>"
				});
				
		});
	}
);