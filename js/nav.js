$(document).ready(function() {
	$("#primaryNavMobile").change(function() {
	  window.location = $(this).find("option:selected").val();
	});
	$("#mobileMoreButton").click(function() {
		$("ul#utilityNavigation, ul#utilityNavigation li, .headerInfo").toggleClass("mobileVisible");
		$("#mobileMoreButton").toggleClass('mobileMenuVisible');
	});
if ($(window).width() < 481) {
	$("body").addClass("width-480");
	$(".width-480 #secondaryNav>div>ul.breadcrumbs li#current dt, .width-480 #secondaryNav>div>ul#breadcrumbs li#current dt").addClass("mobileSecNavLink").css("cursor", "pointer");
	secondaryNavDropDown();	
	storeSecNavLink();
	} 
});	

$(window).bind('resize', function(){
	storeSecNavLink();
if ($(window).width() < 481)		{
	$("body").addClass("width-480");
	$(".width-480 #secondaryNav>div>ul.breadcrumbs li#current dt, .width-480 #secondaryNav>div>ul#breadcrumbs li#current dt").addClass("mobileSecNavLink").css("cursor", "pointer");
	secondaryNavDropDown();	
	}
if ($(window).width() > 480) {
	$(".width-480 #secondaryNav>div>ul.breadcrumbs li#current dt, .width-480 #secondaryNav>div>ul#breadcrumbs li#current dt").removeClass("mobileSecNavLink");		
	$("body").removeClass("width-480");	
	$("div#secondaryNav dd, div#secondaryNav dt, div#secondaryNav li#current dl, li#ContactUs, div#secondaryNav h2").removeClass('mobileSecNavVisible');	
	restoreSecNavLink();		
	$('div#secondaryNav li#current dl').css("border-bottom", "1px solid #7785AF");						
}
});

function secondaryNavDropDown() {
	$("body").undelegate(".mobileSecNavLink", "click");
	$("body").delegate(".mobileSecNavLink", "click", function(){
		$(".width-480 div#secondaryNav dd, .width-480 div#secondaryNav dt, .width-480 div#secondaryNav li#current dl, .width-480 li#ContactUs, .width-480 div#secondaryNav h2").toggleClass('mobileSecNavVisible');
		 if	($('.width-480 div#secondaryNav li#current dl').hasClass('mobileSecNavVisible')) {
			$('.width-480 div#secondaryNav li#current dl').has('dd').css("border-bottom", "none");
		} else {
			$('.width-480 div#secondaryNav li#current dl').has('dd').css("border-bottom", "1px solid #7785AF");
		}
	});
}

function storeSecNavLink() {
	var $this = $("#secondaryNav>div>ul.breadcrumbs li#current dt a, #secondaryNav>div>ul#breadcrumbs li#current dt a");
    $this.data('href', $this.attr('href'));
    $this.removeAttr('href');
}

function restoreSecNavLink() {
	var $this = $("#secondaryNav>div>ul.breadcrumbs li#current dt a, #secondaryNav>div>ul#breadcrumbs li#current dt a");	
	if(($this).attr("href") !== "undefined") {
    $this.attr('href', $this.data('href'));
	}
}

if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
if (viewportmeta) {
viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
document.body.addEventListener('gesturestart', function() {
viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
}, false);
}
}
