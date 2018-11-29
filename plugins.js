$(document).ready(function(){
    
    
    /*****************start of slider*******************/
    var i = 1;
    function slider()
    {
      $(".slider div ul").animate({marginLeft: "-=100%"},300,function(){
        i++;
        if (i >= 5)
            {
                i=1;
                $(".slider div ul").css("margin-left","0px");
            }
      });
        
    }
    
    setInterval(slider,5000);
    
    //right
    $(".next").click(function(){
        $(".slider div ul").animate({marginLeft:"-=100%"},300,function(){
          i++;
        if (i >= 5)
            {
                i=1;
                $(".slider div ul").css("margin-left","0px");
            }  
        });
    });
    
    //left
    $(".prev").click(function(){
        $(".slider div ul").animate({marginLeft:"+=100%"},300,function(){
          i--;
        if (i <= 1)
            {
                i=4;
                $(".slider div ul").css("margin-left","0px");
            }  
        });
    });
    
    
    /*****************end of slider*******************/
    
    
    /***************start of variety*******************/
    $(".list ul li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var a = $(this).index() + 1;
        
        $(".display"+a).css({display:"block"});
        $(".display"+a).siblings().css({display:"none"});
    });
    
    var li = document.getElementsByTagName("li");
    
    
    $(".variety .list1 ul li").click(function(){
        $(this).addClass("active1");
        $(this).siblings().removeClass("active1");
    
        var a = $(this).index();
        
        
    });
    
    
    
    
    /***************end of variety*******************/
    
    
    /*********start gallary*****************/
    var img = document.getElementsByTagName("img");
    var div = document.createElement("div");
    div.style.transition = "all 0.5s ease-in-out";
    div.style.transform = "scale(0)";
    var source = [];
    
    
    for(var i = 16 ;i < img.length ; i++)
            {
                source.push(img[i].src);
                 img[i].onclick = function()
                    {
                       var src_img = this.src;
                     var div = document.createElement("div");
                     div.style.width = "100%";
                     div.style.height = "100%";
                     div.style.position = "fixed";
                     div.style.top = "0px";
                     div.style.left = "0px";
                     div.style.background = "rgba(219,112,147,0.5)";
                     div.style.transform = "scale(1)";
                     div.style.transition = "all 0.5s ease-in-out";
                     document.body.appendChild(div);
                     
                     //image
                     var im = document.createElement("img");
                     im.setAttribute("src",src_img);
                     im.style.width = "600px";
                     im.style.height = "500px";
                     im.style.marginLeft = "29%";
                     im.style.marginTop = "5%";
                     im.style.border = "10px solid white";
                     im.style.borderRadius = "10px";
                     div.appendChild(im);
                     
                     //close
                     var close = document.createElement("div");
                    
                     close.style.color = "white";
                     close.innerHTML = "&times";
                     close.style.padding = "0px 15px";
                     close.style.position = "absolute";
                     close.style.top = "4%";
                     close.style.right = "330px";
                     close.style.backgroundColor = "black";
                     close.style.fontSize = "40px";
                     close.style.borderRadius = "50%";
                     close.style.border = "6px solid white";
                     close.style.cursor = "pointer";
                     close.onclick = function ()
                     {
                         div.style.transform = "scale(0)";
                         div.style.transition = "all 0.5s ease-in-out";
                     }
                     
                     div.appendChild(close);
                     
                     
                     //next button
                     var next = document.createElement("div");
                     next.style.color = "white";
                     next.innerHTML = "<i class='glyphicon glyphicon-chevron-right'></i>";
                     next.style.padding = "10px 10px";
                     next.style.position = "absolute";
                     next.style.top = "45%";
                     next.style.right = "200px";
                     next.style.backgroundColor = "black";
                     next.style.fontSize = "30px";
                     next.style.borderRadius = "50%";
                     next.style.border = "6px solid white";
                     next.style.cursor = "pointer";
                     next.onclick = function()
                     {
                         var a = source.indexOf(im.src);
                         alert(a);
                     }
                     div.appendChild(next);
                     
                     
                     
                     //prev button
                     var prev = document.createElement("div");
                     prev.style.color = "white";
                     prev.innerHTML = "<i class='glyphicon glyphicon-chevron-left'></i>";
                     prev.style.padding = "10px 10px";
                     prev.style.position = "absolute";
                     prev.style.top = "45%";
                     prev.style.left = "200px";
                     prev.style.backgroundColor = "black";
                     prev.style.fontSize = "30px";
                     prev.style.borderRadius = "50%";
                     prev.style.border = "6px solid white";
                     prev.style.cursor = "pointer";
                     div.appendChild(prev);
                     
                     
                    }
            }
    
    /*********end gallary*****************/
  
    
})