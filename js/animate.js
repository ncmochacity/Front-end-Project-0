$(document).ready(function(){
	$(window).scroll(function(event){
		var x=$(this).scrollTop();
		if(x >=80){
			setTimeout(function(){
				$(".my-picture").addClass("animate");
			},100);
		}
		if(x >=200){
			$("#fadein").addClass("scroll-down");
			setTimeout(function(){
				$(".iama").addClass("scroll-down");
			},200);
			setTimeout(function(){
				$(".my-name").addClass("scroll-down");
			},600);
			setTimeout(function(){
				$(".my-info").addClass("scroll-down");
			},900);
		}
	})
})