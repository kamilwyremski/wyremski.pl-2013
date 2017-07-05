$(document).ready(function(){

	start();
	
	$("#facebook2_2").hover(function(){$(this).stop(true,false).animate({right: "0px"}, 500 );},
		function(){$("#facebook2_2").stop(true,false).animate({right: "-304px"}, 500 );});
		
	function rozmiar(){
		$('.fb-like-box').attr('data-height',$('#facebook2_2').height());
	}
	rozmiar();
	$( window ).resize(function() {rozmiar();})
	
	$(function(){	
		$('.scroll-pane').jScrollPane({
		mouseWheelSpeed: 50 });
	});
	
	slideshow();
	
	$("#menu a").click(function() { 
		var adr;
		$this = $(this);
		if ($this.hasClass('active')) {
			$('.content').stop().transition({scale: 1.02}).transition({scale: 1});
		}else{		
			$this.transition({scale: 0.8}).transition({scale: 1});
			$(".menu").removeClass("active");
			$this.addClass("active").blur();
			$(".content").css("opacity", "1").fadeOut(500);
			adr=$this.attr('href');
			$(adr).delay(600).fadeIn(500);
		}
		return false;
	});
	
	$("#leftSectionUp img").click(function() {
		if ($("#menu0").hasClass('active')) {
			$('.content').stop().transition({scale: 1.02}).transition({scale: 1});
		}else{		
			$(".menu").removeClass("active");
			$("#menu0").addClass("active").blur();
			$(".content").css("opacity", "1").fadeOut(500);
			$("#profile").delay(600).fadeIn(500);	
		}
	});

	var language; // 0-polish, 1-english
		
	$("#pl").click(function() {
		if (language!=0){		
			language = 0;
			$(".english").hide();
			$(".polish").show();
			$("#name").attr("placeholder", " Imię i nazwisko").blur();
			$("#mail").attr("placeholder", " Adres e-mail").blur();
			$("#message").attr("placeholder", "Wiadomość").blur();
			$("#field_clear").val("Usuń");
			$("#field_send").val("Wyślij");
			$("#english").css("display", "none");
			$("#polish").css("display", "inline").fadeOut(3000);}
	});
	
	$("#en").click(function() {
		if (language!=1){		
			language = 1;
			$(".polish").hide();
			$(".english").show();
			$("#name").attr("placeholder", " Name...").blur();
			$("#mail").attr("placeholder", " Email...").blur();
			$("#message").attr("placeholder", "Message...").blur();
			$("#field_clear").val("Clear");
			$("#field_send").val("Send");
			$("#polish").css("display", "none");
			$("#english").css("display", "inline").fadeOut(3000);}
	});
	
	$(document).on('click', '#field_clear', function(){
		$("#jquery_message span").hide();
		if (language==0){
			$('#mes0').show().find(".polish").show();	
		}else{
			$('#mes0').show().find(".english").show();	
		}
	});
	
	$(document).on('click', '#field_send', function(){

		var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
		var validate = true;
				
		if(regex.test($('#mail').val()) === false){
			validate = false;
			$("#jquery_message span").hide();
			if (language==0){
				$('#mes1').show().find(".polish").show();	
			}else{
				$('#mes1').show().find(".english").show();	
			}
		}
		
		if($('#name').val() == ''){ 
			validate = false;
			$("#jquery_message span").hide();
			if (language==0){
				$('#mes2').show().find(".polish").show();	
			}else{
				$('#mes2').show().find(".english").show();	
			}
		}
		
		if($('#message').val() == ''){ 
			validate = false;
			$("#jquery_message span").hide();
			if (language==0){
				$('#mes2').show().find(".polish").show();	
			}else{
				$('#mes2').show().find(".english").show();	
			}
		}
		
		if(validate == true){
			if (language==0){
				$("#field_send").val('Przesyłanie w toku...');
			}else{
				$("#field_send").val('Transfer in progress...');
			}
			$.post('php/mail.php', {
				'name' : $('#name').val(),
				'mail' : $('#mail').val(),
				'content' : $('#message').val(),
				'send': 'ok'}, function() {
					$('#name').val('');
					$('#mail').val('');
					$('#message').val('');
					$('#keepInTouchForm form').hide();
					$('.send').show();
			});
		}
	});
});

function slideshow() {
    var allofEm = $('#profileImg img');
    var $active = allofEm.eq(0);
    $active.show();
    var $next = $active.next();
    var timer = setInterval(function() {
        $next.fadeIn();
        $active.hide();
        $active = $next;
        $next = (allofEm.last().index() == allofEm.index($active)) ?
            $next = allofEm.eq(0):$active.next();
    }, 6000);
}

function start() {
	$("#loader").show().delay(1200).fadeOut(100);
	$("#site").css("opacity", "0.01").delay(400).animate({opacity: "1"}, 800);
	$("#leftSection").css("top", "1000px").delay(500).animate({top: "0px", bottom: "0px"}, 800);
	$("#rightSection").css("opacity", "0.01").delay(1200).animate({opacity: "1"}, 700);
	$(".menu").css("display", "none");
	$("#menu0").delay(1300).fadeIn(400);
	$("#menu1").delay(1550).fadeIn(400);
	$("#menu2").delay(1800).fadeIn(400);
	$("#menu3").delay(2050).fadeIn(400);
	$("body").css("overflow", "hidden").animate({marginTop:'0px'},1300, function() {
		$(".content").not("#profile").fadeOut();
		}).animate({marginTop:'0px'},1000, function() {
		$("body").css("overflow", "visible");
	});
	$(".content").css({"height": "66%",	"max-height": "600px"}).not("#profile").css("opacity", "0.01");
	$("#leftSectionDown").transition({rotateY: '360deg', duration: 3000});
}

//facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pl_PL/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));