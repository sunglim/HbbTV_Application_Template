function hbbtvlib_initialize(){
	//should be called show() function, if not the application will not be shown;
	var app = document.getElementById("oipfAppMan").getOwnerApplication(document);
	app.show();
	
	//set keyset, only defined keys can be triggered on application.
	// RED, GREEN, YELLOW, BLUE, NAVIGATION, VCR, NUMERIC
	//app.private.keyset.setValue(0x1+0x2+0x4+0x8+0x10+0x20+0x100);  // official
	app.privateData.keyset.setValue(0x1+0x2+0x4+0x8+0x10+0x20+0x100);
};