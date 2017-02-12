$(document).ready(function(){
    $(".mainArrow").hover(function(){
        $(this).find("img").fadeOut(200);
    }, function(){
        $(this).find("img").fadeIn(200);
    })
    
    $(".sec2Gal").hover(function(){
        $(".slide").find("div").css("opacity", "0.1");
    }, function(){
        $(".slide").find("div").css("opacity", "0.05")
    }
                       
    )
    
    $(".slide").find("div").hover(function(){
        $(this).css("opacity", "0.6");
        $(this).css("transition-duration", "0.6s");
    }, function(){
        $(this).css("opacity", "0.1");
    }
    )
    
    $(".toggle").find("div").click(function(){
        
        if(this.id == "toggle1"){
            $("#toggle2").removeClass("white");
            $(this).addClass("white");
            
        }else if(this.id == "toggle2"){
            $("#toggle1").removeClass("white");
            $(this).addClass("white");
            
        };
        
        
    
        
    })
    
    
    
})


//5:41
    $(document).ready(function(){
        var pic1 = "<img src=\"pictures/Futuristic%20Mobile%20PhoneEdited%20.jpg\" class=\"pic1\">";
        var pic2 = "<img src=\"pictures/future%20phone.png\" class=\"pic2\">";
        var pic3 = "<img src=\"http://stratus-3c99.kxcdn.com/stratus/wp-content/uploads/2015/12/prod2_buy3.jpg\" class=\"pic3\">";
        var pic4 = "<img src=\"http://stratus-3c99.kxcdn.com/stratus/wp-content/uploads/2015/12/prod2_buy.jpg\" class=\"pic4\">"; 
        var pic5 = "<img src=\"http://media02.hongkiat.com/futuristic-phones/earphone.jpg\" class=\"pic5\">";
        var pic6 = "<img src=\"http://img07.deviantart.net/ca16/i/2013/012/d/7/future_phone__by_illusiondesignshd-d5rc04m.png\" class=\"pic6\">" ; 
        var pic7 = "<img src=\"https://akshaykumarmakana.files.wordpress.com/2015/03/mobile-phone-see-thru.jpg\" class=\"pic7\">";
        
        
        var sec2picArr = [pic1, pic2];
        var sec2picArrStr = ["pic1", "pic2"];
        
        var sec5picArr = [pic1, pic2];
        var sec5picArrStr = ["pic1", "pic2"];
        
        var sec8picArr = [pic3, pic4, pic5, pic6, pic7];
        var sec8picArrStr = ["pic3","pic4","pic5","pic6","pic7"];
        
        
        var twoPicsSec2 = $(".sec2").find(".twoPics");
        var twoPicsSec5 = $(".sec5").find(".twoPics");
        var twoPicsSec8 = $(".sec8").find(".twoPics");
        var horiBar = $(".sec8").find(".horiBar");
        
        twoPicsSec2.append(sec2picArr[0]);
        twoPicsSec5.append(sec2picArr[0]);
        twoPicsSec8.append(sec8picArr[0]);
        
        for(var i=0; i<sec8picArr.length; i++){
            horiBar.append(sec8picArr[i]);
        }
        $(".sec8PopUp").append(horiBar.clone(false));
        horiBar.find(".pic3").addClass("current");
        $(".sec8PopUp").addClass("hide");
        $(".fullScreenOverlay").addClass("hide");
        //$(".fullScreenOverlay").addClass("hide");
        $(".sec8PopUp").hover(function(){
            $(".sec8PopUp").find(".horiBar").removeClass("hiddenHoribar");
        }, function(){
               $(".sec8PopUp").find(".horiBar").addClass("hiddenHoribar");
        })
        
        
        
        
        
        //slide buttons for sec2, sec5, sec8
        var sec2SlideR = $(".sec2").find(".slideR");
        var sec2SlideL = $(".sec2").find(".slideL");
        var sec5SlideR = $(".sec5").find(".slideR");
        var sec5SlideL = $(".sec5").find(".slideL");
        var sec8SlideR = $(".sec8").find(".slideR");
        var sec8SlideL = $(".sec8").find(".slideL");
        
        
        //toggle sec8PopUp
        horiBar.find("img").click(function(){
            var clickedClass = this.className;
            $(".sec8PopUp").removeClass("hide");
            $(".fullScreenOverlay").removeClass("hide");
            $("body").css("overflow", "hidden");
            //for(var i=0; i<sec8picArr.length; i++){
              //  if()
            //}
            $(this).clone().appendTo(".popUpGal");
            
            
            
            
        })
        
        $(".sec8PopUp").find(".horiBar").find("img").click(function(){
            $(".popUpGal").empty();
            $(this).clone().appendTo(".popUpGal");
        })
        
        
        
        
        //slide button functions for sec2, sec5, sec8
        function slideRFunc(secNum){
            //check which section this is
            switch(secNum){
                case 2:
                    slideRight(sec2picArr, sec2picArrStr);
                    break;
                case 5:
                    slideRight(sec5picArr, sec5picArrStr);
                    break;
                case 8:
                    slideRight(sec8picArr, sec8picArrStr);
                    //toggle class
                    horiBar.find("img").removeClass("current");
                    var currentClass = $(".sec8").find(".twoPics").find("img").attr('class');
                    horiBar.find("."+currentClass).addClass("current");
                    break;
            }
            var img;
            
            function slideRight(Arr, Str){
                  img = eval("twoPicsSec"+secNum).find("img");
                  //find picture index
                  //replace picture with next picture
                  //if next picture index is larger than total
                  //replace with the first picture
                for(var i=0; i<Str.length; i++){
                    //alert("lol") worked till here
                    var checkClass = img.hasClass(Str[i]);
                    if(checkClass){
                        if(i+1 < Arr.length){
                           img.replaceWith(Arr[i+1]);
                        }else {
                           img.replaceWith(Arr[0]);
                        }
                    }
                }
            }
        }
            function slideLFunc(secNum){
                
                //check which section this is
            switch(secNum){
                case 2:
                    slideLeft(sec2picArr, sec2picArrStr);
                    break;
                case 5:
                    slideLeft(sec5picArr, sec5picArrStr);
                    break;
                case 8:
                    slideLeft(sec8picArr, sec8picArrStr);
                    horiBar.find("img").removeClass("current");
                    var currentClass = $(".sec8").find(".twoPics").find("img").attr('class');
                    horiBar.find("."+currentClass).addClass("current");
                    break;
            }
            var img;
            function slideLeft(Arr, Str){
                img = eval("twoPicsSec"+secNum).find("img");
                //find picture index
              //replace picture with next picture
              //if next picture index is larger than total
              //replace with the first picture
                for(var i=0; i<Str.length; i++){
                    var checkClass = img.hasClass(Str[i]);
                    if(checkClass){
                        if(i-1 >= 0){
                            img.replaceWith(Arr[i-1]);
                        }else {
                            img.replaceWith(Arr[Str.length-1]);
                        }
                    }
                }
            }
              
        }
        
        
        
        //slide buttons on click
        //sec2SlideR.click(slideRFunc(2));
        sec2SlideR.click(function(){
            slideRFunc(2);
        })
        sec2SlideL.click(function(){
            slideLFunc(2);
        });
        sec5SlideR.click(function(){
            slideRFunc(5);
        })
        sec5SlideL.click(function(){
            slideLFunc(5);
        });
        sec8SlideR.click(function(){
            slideRFunc(8);
        })
        sec8SlideL.click(function(){
            slideLFunc(8);
        });
        
        
        //toggle ball
        $(".toggle").hover(function(){
            $(".toggleBar").css("border-color", "black");
            $(".toggleBall").css("background-color", "black");
        }, function(){
            $(".toggleBar").css("border-color", "#3e4042");
            $(".toggleBall").css("background-color", "#3e4042");
        })
        
        $(".toggle").click(function(){
            $(".toggleBall").toggleClass("ballR");
            var parent = $(this).parent();
            if(parent.hasClass("sec2Gal")){
                slideRFunc(2);
            }else if(parent.hasClass("sec5Gal")){
                slideRFunc(5);
            }
            
            
        })
        
        
        //reveal film play button
        $(".playButton").click(function(){
            
            $(".hiddenFilm").fadeIn("slow");
            $("html").addClass("filmed");
            $("body").addClass("filmed");
            $("iframe").attr("src", "https://www.youtube.com/embed/6jiNS_4CEug?autoplay=1");
            
        })
        
        $(".closex").click(function(){
            $("iframe").attr("src", "https://www.youtube.com/embed/6jiNS_4CEug?autoplay=0");
            $(".hiddenFilm").fadeOut("slow");
            $("body").removeClass("filmed");
            $("html").removeClass("filmed");
            $(".fullScreenOverlay").addClass("hide");
            $(".sec8PopUp").addClass("hide");
            $("body").css("overflow-y", "scroll");
        })
        
        //dropdown menu
        
        $(".dropDownButton").click(function(){
            $(".dropDownMenu").toggle(300);
            $(".li1").toggleClass("slideIn1");
            $(".li2").toggleClass("slideIn2");
            $(".li3").toggleClass("slideIn3");
            
            
            
        })
        //dropdown menu finished
        
        
        //8:55pm Feb6
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            var elementOffSet = $(".mainHeader").offset().top;
            var distance = (scrollTop - elementOffSet);
            var dis = Math.floor(distance);
            for(i=120; i<2900; i+=5){
                if(dis == i){
                    $("nav").addClass("scr");
                }
           }
            
            for(j=0; j<120; j++){
                if(dis == j){
                    $("nav").removeClass("scr");
                }
            }
            
        })
        
        $(".navSlide").css("display", "none");
        $(".navButt").click(function(){
            $(".navSlide").slideToggle(600, "easeOutCirc");
        })
        
        function navSlide(){
            var winScr = $(window).scrollTop();
            console.log("winScr: "+winScr);
            $(".navSlide").css("top", winScr+60+"px");
            
        }
        
        $(window).scroll(function(){
            navSlide();
        })
        
        var firText = "<p>Next-generation virtual reality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien metus, lobortis non mollis in, sollicitudin nec ex. Cras rhoncus tempor ornare. Aliquam urna est, tempus id dapibus a, blandit quis ipsum. <br>Next-generation virtual reality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien metus, lobortis non mollis in, sollicitudin nec ex.<p>";
        var secText = "<p>Q: Morbi tristique senectus? <br>A: Et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>"
        
        $(".article").append(firText);
        
        $(".secDiv").click(function(){
                    $(".firDiv").addClass("none");
                    $(".secDiv").addClass("click");
                    $(".article").empty().append(secText);
                    
            })
        $(".firDiv").click(function(){
                    $(".firDiv").removeClass("none");
                    $(".secDiv").removeClass("click");
                    $(".article").empty().append(firText);
        })
        
        $(".incTri").click(function(){
            increment();
        })
        var intervalId;
        $(".incTri").mousedown(function(){
            intervalId = setInterval(increment,150);
        }).mouseup(function(){
            clearInterval(intervalId);
        })
        $(".decTri").click(function(){
            decrement();
        })
        $(".decTri").mousedown(function(){
            invervalId = setInterval(decrement,150);
        }).mouseup(function(){
            clearInterval(invervalId);
        })
        
        
        
        
        function increment(){
            var curNum = $(".spinner").find("input").attr("value");
            var nextNum = Number(curNum)+1;
            $(".spinner").find("input").attr("value", nextNum);
        }
        
        function decrement(){
            var curNum = $(".spinner").find("input").attr("value");
            if(Number(curNum) >= 2){
                var nextNum = Number(curNum)-1;
                $(".spinner").find("input").attr("value", nextNum);
            }
            //var nextNum = Number(curNum)-1;
            //$(".spinner").find("input").attr("value", nextNum);
            
        }
        
        $(".spinner").hover(function(){
            $(".incre").addClass("show");
        }, function(){
            $(".incre").removeClass("show");
        })
        
        $("footer").hover(function(){
            $(".footerSp").addClass("hover");
        }, function(){
            $(".footerSp").removeClass("hover");
        })
        
        
        })
       
        
        
        
        
        
        
         
    
    
    
    
        
        
        
        
        
    



