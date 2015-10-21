
	// SLIDER CREATED BY EDWARD MULLER, TTUISD's MARKETING DEPT
	// FOR USE IN THE NEW OU-CAMPUS TTUISD SITE - 8/8/2013 
		
	currentBackground = 0;
	var slides= 6 ;
	var backgrounds = [];
	var desc = [];
	var desc_text = [];
	var changers = [];
	var go;
	var enroll = '/ttuisd/login.php';

backgrounds[0] = '/ttuisd/news/images/2015-08-17_Lisa_Stone_slide.jpg';
backgrounds[1] = '/ttuisd/news/images/2015-08-07_BrendaShupe_slide.jpg';
backgrounds[2] = '/ttuisd/news/images/2015-08-03_Amber_East_slide.jpg';
backgrounds[3] = '/ttuisd/news/images/2015-07-03_BaileyTonoreSlide.jpg';
backgrounds[4] = '/ttuisd/news/images/2015-06-05_Meet_Wesley_Savoy.jpg';
backgrounds[5] = '/ttuisd/news/images/2015-05-27-DeutschSlide.jpg';






	desc[0] = '';
	desc[1] = '';
	desc[2] = '';
	desc[3] = '';
	desc[4] = '';
	desc[5] = '';


	desc_text[0] = '<a href="/ttuisd/news/2015-08_Lisa_Stone.php  ">Meet the Advisor<br><h1>Lisa Stone</h1></a>';

	desc_text[1] = '<a href="/ttuisd/news/2015-08_Brenda_Shupe.php">Meet the Advisor<br><h1>Brenda Shupe</h1></a>';

	desc_text[2] = '<a href="/ttuisd/news/2015-08-03_Amber_East.php">Meet the Advisor<br><h1>Amber East</h1></a>';
	desc_text[3] = '<a href="/ttuisd/news/2015-07-03_Bailey_Tonore.php">Meet our Student<br><h1>Bailey Tonore</h1></a>';
	desc_text[4] = '<a href="/ttuisd/news/2015-06-05_Wesley_Savoy.php">Meet our Student<br><h1>Wesley Savoy</h1></a>';
	desc_text[5] = '<a href="/ttuisd/news/2015-05-26_German_Course.php">New Course<br><h1>German Language</h1></a>';
	
	
	
	

	changers[0] = "#slider_changer_1";
	changers[1] = "#slider_changer_2";
	changers[2] = "#slider_changer_3";
	changers[3] = "#slider_changer_4";
	changers[4] = '#slider_changer_5';
	changers[5] = "#slider_changer_6";
	function changeBackground(stat,givenValue) {
		if(stat=="yes"){
			currentBackground = givenValue;
$("#slider_desc").html(desc_text[currentBackground]);
	$("a.slider_changer").removeClass("selected");
$(changers[currentBackground]).addClass("selected");
$("#slider_bg").fadeOut(0);
			$("#slider_bg").css({'background-image':"url('"+backgrounds[currentBackground]+"')"});
			$("#slider_bg").fadeIn(500);
			clearTimeout(go);
		}
		else{
			currentBackground++;
			if(currentBackground > (slides-1)){currentBackground = 0;}
$("#slider_desc").html(desc_text[currentBackground]);
$("a.slider_changer").removeClass("selected");
$(changers[currentBackground]).addClass("selected");
			$("#slider_bg").fadeOut(0);
			$("#slider_bg").css({'background-image':"url('"+backgrounds[currentBackground]+"')"});
			$("#slider_bg").fadeIn(500);
		}
		go=setTimeout(changeBackground, 10000);
	}
	function halt_timeout(){ clearTimeout(go); }
	function start_timeout(){ go=setTimeout(changeBackground, 10000); }
	$(document).ready(function() {
		$("#slider_bg").css({'background-image':"url('"+backgrounds[currentBackground]+"')"});
$(changers[currentBackground]).addClass("selected");
		$("#slider_desc").html(desc_text[0]);
		go=setTimeout(changeBackground, 10000);
		$(".slider_changer").click(function(){
			changeBackground("yes",($(this).text()));
		});
		$("#slider_desc").mouseover(function() { halt_timeout();
		});
		$("#slider_desc").mouseout(function() {
			start_timeout();
		});
	});
