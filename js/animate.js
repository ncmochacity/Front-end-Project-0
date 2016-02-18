$(document).ready(function(){
	$(window).scroll(function(event){
		var x=$(this).scrollTop();
		if(x >=80){
			setTimeout(function(){
				$(".my-picture").addClass("animate");
			},100);
		}
		if(x >=100){
			$("#fadein").addClass("scroll-down");
			setTimeout(function(){
				$(".iama").addClass("scroll-down");
			},200);
			setTimeout(function(){
				$(".my-name").addClass("scroll-down");
			},300);
			setTimeout(function(){
				$(".my-info").addClass("scroll-down");
			},400);
		}
		if(x>=300){
			setTimeout(function(){
				$(".job").addClass("scroll-down");
			},500);
		}
		if(x>=500){
			setTimeout(function(){
				$(".location").addClass("scroll-down");
			},600);
		}
		if(x>=600){
			setTimeout(function(){
				$(".work").addClass("scroll-down");
			},700);

		}
		if(x>=650){
			setTimeout(function(){
				$(".interests").addClass("scroll-down");
			},800);
		}
		
	})
})