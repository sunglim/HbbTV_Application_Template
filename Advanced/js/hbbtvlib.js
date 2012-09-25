/*
 * To use This library, You need to add the OIPF application manager objects to your HTML page,
 * 
 *	<object id="oipfAppMan" type="application/oipfApplicationManager"></object>
 */
 
function hbbtvlib_initialize(){
	//should be called show() function, if not the application will not be shown;
	var appManager = document.getElementById("oipfAppMan").getOwnerApplication(document);
	appManager.show();
	
	//set keyset, only defined keys can be triggered on application.
	// RED, GREEN, YELLOW, BLUE, NAVIGATION, VCR, NUMERIC
	//app.private.keyset.setValue(0x1+0x2+0x4+0x8+0x10+0x20+0x100);  // official
	appManager.privateData.keyset.setValue(0x1+0x2+0x4+0x8+0x10+0x20+0x100);
};