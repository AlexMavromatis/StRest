
(function (root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define(['jquery'], function ($) {
			return (root.waitingDialog = factory($));
		});
	}
	else {
		root.waitingDialog = root.waitingDialog || factory(root.jQuery);
	}

}(this, function ($) {
	'use strict';

	
	function constructDialog($dialog) {
		if ($dialog) {
			$dialog.remove();
		}
		return $(
			'<div class="modal fade" data-backdrop="static" data-keyboard="false"  role="dialog" aria-hidden="true" style="padding-top:15%;">' +
				'<div class="modal-dialog modal-m">' +
					'<div class="modal-content">' +
						'<div class="modal-header" style="display: none;"></div>' +
						'<div class="modal-body">' +
							'<div class="progress progress-striped active" style="margin-bottom:0;">' +
								'<div class="progress-bar" style="width: 200%"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>'
		);
	}

	// Dialog object
	var $dialog,config,cache={};
        
	return {
		
		show: function (message, options) {
			// Assigning defaults
			if (typeof options === 'undefined') {
				options = {};
			}
			if (typeof message === 'undefined') {
				message = 'Loading';
			}
			var settings = $.extend({
				
				headerText: '<center>Running Monte Carlo Simulation</center>',
				headerSize: 3,
				headerClass: '',
				dialogSize: 'm',
				progressType: '',
				contentElement: 'p',
				contentClass: '',
				rtl:false,
				timer:500, //useful for animate function
				timeout:0,//useful for animate function
				onHide: null // This callback runs after the dialog was hidden
			}, options),
			$headerTag, $contentTag;
                        config=  settings;
			$dialog = constructDialog($dialog);

			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
			$dialog.find('.progress-bar').attr('class', 'progress-bar');
			if (settings.progressType) {
				$dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
			}
                       if(settings.rtl){
                       	      $dialog.find('.progress-bar').css('float','right').end().attr('dir','rtl')
                       }
			// Generate header tag
			$headerTag = $('<h' + settings.headerSize + ' />');
			$headerTag.css({ 'margin': 0 });
			if (settings.headerClass) {
				$headerTag.addClass(settings.headerClass);
			}

			// Generate content tag
			$contentTag = $('<' + settings.contentElement + ' />');
			if (settings.contentClass) {
				$contentTag.addClass(settings.contentClass);
			}

			if (settings.headerText === false) {
				$contentTag.html(message);
				$dialog.find('.modal-body').prepend($contentTag);
			}
			else if (settings.headerText) {
				$headerTag.html(settings.headerText);
				$dialog.find('.modal-header').html($headerTag).show();

				$contentTag.html(message);
				$dialog.find('.modal-body').prepend($contentTag);
			}
			else {
				$headerTag.html(message);
				$dialog.find('.modal-header').html($headerTag).show();
			}

			// Adding callbacks
			if (typeof settings.onHide === 'function') {
				$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
					settings.onHide.call($dialog);
				});
			}
			// Opening dialog
			$dialog.modal();
		},
		
		hide: function () {
			if (typeof $dialog !== 'undefined') {
				$dialog.modal('hide');
			}
		},
		
		message: function (newMessage) {
			if (typeof $dialog !== 'undefined') {
				if (typeof newMessage !== 'undefined') {
					return $dialog.find('.modal-header>h'+config.headerSize).html(newMessage);
				}
				else {
					return $dialog.find('.modal-header>h'+config.headerSize).html();
				}
			}
		}
		
		,animate:function(messages,timer,timeout){
			timer=timer ||config.timer;
			timeout=timeout||config.timeout;
			
			messages=messages||$dialog.find('.modal-header>h'+config.headerSize).html();
			cache.animate=cache.animate || [];
			if(typeof messages ==='string'){
			     	
			   	
			     messages=['..','....','......'].map(function(e){
			     	return messages+e;
			     })	;
			}
			
			if(typeof messages ==='object' && messages instanceof Array){
				var old=messages;
				messages=function(container){
					var current=old.indexOf(container.html());
					if(current<0){
						container.html(old[0]);
					}else{
					      var indx=(current+1>=old.length)?0:current+1	
					       container.html(old[indx]);	
						
					}
				}
				
			}
		
			if(typeof messages ==="function"){
				if(timeout<timer){
				        setTimeout(function(){
					     messages.call($dialog,$dialog.find('.modal-header>h'+config.headerSize))
				        },timeout)
			        }
				var job= setInterval(function(){
					messages.call($dialog,$dialog.find('.modal-header>h'+config.headerSize))
				},timer);
				cache.animate.push(job);
				return job;
			}
			
			
			
		},
		
		stopAnimate:function(id){
			 id=id || cache.animate[cache.animate.length-1];
			 clearInterval(id);
			 delete cache.animate[cache.animate.indexOf(id)];
			return $dialog;
		},
	
		progress:function(percentOrCurrent,total){
			if(!arguments.length){
				return parseInt($dialog.find('.progress-bar')[0].style.width);
			}
			if(total){
				percentOrCurrent=parseInt(percentOrCurrent/total*100);
			}
			$dialog.find('.progress-bar').css('width',percentOrCurrent+'%');
			return $dialog;
		}		
	};

}));
