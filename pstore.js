var pstore;

// init functions
(function() {
	
	pStore = {
		init: function() {
			var url = "/pstore.manifest";
		    $.ajax({
			  url: url,
			  success: function(data){
			  	pStore.layouts = JSON.parse(data).layouts;
			  	pStore.themes  = JSON.parse(data).themes;
			  	$(window).trigger('data-ready');
			  }
			})
		},
	}
})();
pStore.init();

