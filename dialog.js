window.addEventListener("load", function(e) {
	var removeDialog = document.querySelector('#dialogRemovedUSB');
	document.querySelector('#removeClose').addEventListener("click", function(evt) {
	  removeDialog.close("thanks!");
	});

	// called when the user Cancels the dialog, for example by hitting the ESC key
	removeDialog.addEventListener("cancel", function(evt) {
		removeDialog.close("canceled");
	});

	
	var insertDialog = document.querySelector('#dialogInsertUSB');
	document.querySelector('#insertClose').addEventListener("click", function(evt) {
	  insertDialog.close("thanks!");
	});

	// called when the user Cancels the dialog, for example by hitting the ESC key
	insertDialog.addEventListener("cancel", function(evt) {
		insertDialog.close("canceled");
	});
});
