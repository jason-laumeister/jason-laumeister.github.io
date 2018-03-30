if(typeof (jlcom) == "undefined" || !jlcom) jlcom = {};
if(typeof (jlcom.maps) == "undefined" || !jlcom.maps) jlcom.maps = {};

jlcom.maps = {
	init: function(){
		$('.pgTitle').text(window.location);
		$('.pgParentAnchor').prop("href", "/examples");
		$('.pgParentAnchor').text("examples");
	},
};

$(document).ready(function(){
	jlcom.maps.init();
});