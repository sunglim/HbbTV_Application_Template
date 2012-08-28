function hbbtvlib_initialize(){
	//should be called show() function, if not the application will not be shown;
	var app = document.getElementById("oipfAppMan").getOwnerApplication(document);
	app.show();
};