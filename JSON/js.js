document.addEventListener("DOMContentLoaded",
	function(event){
		document.querySelector("button").
		addEventListener("click", function () {

				
				//call server to get the name
				$ajaxUtiles.sendGetRequest("name.json", 
				function (res){
					var message = res.firstName + "" + res.LastName;
					if (res.LikesChineseFood){
						message+= " likes Chinese food";
					}
					else{
						message+=" doesn't like Chinese food."
					}
					message+=" and uses "
					message+= numberOfDisplays
					message+= " displays for coding."
					
					document.getElementById("content")
				.innerHTML = "<h2>" + message + "</h2>"
				});
				
		});
	}
);