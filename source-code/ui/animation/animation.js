/**
* jPList - jQuery Data Grid Controls ##VERSION## - http://jplist.com 
* Copyright 2014 Miriam Zusin. All rights reserved.
* For non-commercial, personal, or open source projects and applications, you may use jPList for free under the terms of the GPL V3 License (https://gnu.org/licenses/gpl.html)
* If your project generates any type of income, e.g. sells products, ads, services or just represents a commercial company, you should get a commercial license at http://www.binpress.com
*/
(function(){
	'use strict';
	
	/**
	* Animation Service
	* @type {Object}
	* @class Animation Service
	*/
	jQuery.fn.jplist.animation = {};
			
	/**
	* Draw items	
	* @param {Object} options - user options
	* @param {jQueryObject} $itemsBox - items container element
	* @param {jQueryObject} $dataitems - all items
	* @param {jQueryObject} $dataview - new items
	* @param {string} effect - animation effect
	* @param {Object} timeline - timeline object
	* @param {Function} endCallback
	* @param {Object} observer
	*/
	jQuery.fn.jplist.animation.drawItems = function(options, $itemsBox, $dataitems, $dataview, effect, timeline, endCallback, observer){
		
		var effectClass
			,beforeMethod
			,afterMethod
			,effectMethod;
		
		//get effect class
		effectClass = jQuery.fn.jplist.animation[effect];	
		
		if(effectClass){
					
			//init methods
			beforeMethod = effectClass['before'];
			effectMethod = effectClass['effect'];
			afterMethod = effectClass['after'];
					
			//call 'before' method
			if(jQuery.isFunction(beforeMethod)){
				
				beforeMethod(options, $itemsBox, $dataitems, $dataview);
			}
			
			if(jQuery.isFunction(effectMethod)){
				
				observer.on(observer.events.animationStepEvent, function(e, progress, data){
					
					//call 'effect' method
					effectMethod(options, $itemsBox, $dataitems, $dataview, progress);
				});				
			}
				
			observer.on(observer.events.animationCompleteEvent, function(e){
				
				//after method
				if(jQuery.isFunction(afterMethod)){
				
					//call after method
					afterMethod(options, $itemsBox, $dataitems, $dataview);
				}
				
				observer.off(observer.events.animationStepEvent);
				observer.off(observer.events.animationCompleteEvent);
				
				if(jQuery.isFunction(endCallback)){
					endCallback();
				}
			});
						
			//start effect
			timeline.play(options.duration);
		}
		else{
			if(jQuery.isFunction(endCallback)){
				endCallback();
			}
		}
	};
	
})();	