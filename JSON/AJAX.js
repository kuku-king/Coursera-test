(function(global){
	var ajaxUtiles = {};
	
	//returns an HTTP request object
	function getRequestObject(){
		if (window.XMLHttpRequest){
			return(new XMLHttpRequest());
		}
		else if (window.ActiveXObject){
			//For very old IE browsers
			return(new ActiveXObject("Microsoft.XMLHTTp"))
		}
		else{
			global.alert("Ajax is not supported")
			return(null)
		}
	}
	
	//makes an AJAX GET request to 'requestUrl'
	ajaxUtiles.sendGetRequest = 
		function(requestUrl, responseHandler, isJsonResponse){
			var request = getRequestObject();
			request.onreadystatechange = 
			function (){
				handleResponse(request, responseHandler, isJsonResponse);
			};
			request.open("GET", requestUrl, true);
			request.send(null);//for Post only
		};
		//Only calls user provided 'responseHandler'
		//function if response is ready
		//and not an error
		function handleResponse(request, responseHandler, isJsonResponse){
			if ((request.readyState == 4) && 
			(request.status == 200)){
				//default to isJsonResponse = true
				if(isJsonResponse == undefined){
					isJsonResponse = true;
				}
				if(isJsonResponse){
					responseHandler(JSON.parse(request.responseText))
				}
				else{
					responseHandler(request.responseText)
				}
			}
		}
		
		//Expose utility to the global object
		global.$ajaxUtiles = ajaxUtiles;
})(window);