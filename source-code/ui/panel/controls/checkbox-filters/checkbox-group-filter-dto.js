/**
* jPList - jQuery Data Grid Controls ##VERSION## - http://jplist.com 
* Copyright 2014 Miriam Zusin. All rights reserved.
* For non-commercial, personal, or open source projects and applications, you may use jPList for free under the terms of the GPL V3 License (https://gnu.org/licenses/gpl.html)
* If your project generates any type of income, e.g. sells products, ads, services or just represents a commercial company, you should get a commercial license at http://www.binpress.com
*/
(function(){
	'use strict';		
	
	/** 
	* Checkbox Group Filter Model
	* @constructor
	* @param {Array.<string>} pathGroup - list of paths
	*/
	jQuery.fn.jplist.ui.controls.CheckboxGroupFilterDTO = function(pathGroup){
		
		return {
			pathGroup: pathGroup
			,filterType: 'pathGroup'
		};
	};	
		
})();

