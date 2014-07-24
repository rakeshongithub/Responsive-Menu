
	
;(function($, window, document, undefined){
		
		// Configuring options
		var defaults = 	{ select : $("select.select") };
		
		// Respo-menu 
		$.fn.respomenu = function(options){
			
			// Getting defaults values.
			var settings = $.extend({}, defaults, options);
		    
			$(this).clone().children("ul").children("li").each(function(){
				
				var $this = $(this),
					$anchor = $this.children("a"),
					$href = $anchor.attr("href"),
					$text = $anchor.text();
				
				settings.select.append("<option value='"+$href+"'>"+$text+"</option>");
				
				// Second Level Menu
				if($this.children().length > 0){
					$this.children("ul").children("li").each(function(){
						var $this = $(this),
							$subHref = $this.children("a").attr("href"),
							$subText = $this.children("a").text();
						
						settings.select.append("<option value='"+$subHref+"'>--"+$subText+"</option>");
					});
				}
		   });
		   
		   //Jump page
		   settings.select.on("change", function(){ location = $(this).prop("value"); })
		   
		   // Select Menu as per current page
			var loc = window.location.href,
			    locIndex = loc.lastIndexOf("/");
			    pageName =  loc.substr(locIndex + 1);
			
			settings.select.find('option').each(function(){
				var $this = $(this);
				if( $this.attr('value') == pageName){
					$this.prop('selected', true);
				}
			});
			
		}   
}(jQuery, window, document))
