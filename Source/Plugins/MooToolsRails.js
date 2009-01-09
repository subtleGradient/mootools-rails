/*
Script: MooToolsRails.js
    MooToolsRails

License:
	MIT-style license.

Copyright:
	Copyright (c) 2009 [copyright holders](http://).

*/
var MooToolsRails = new Class({
	
	Implements: [Options, Events],
	
	options: {
		
	},
	
	initialize: function(options){
		this.setOptions(options);
		
		$$('p').setStyle('background','blue');
		
		this.fireEvent("initialize");
	}
	
});
