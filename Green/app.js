window.onload = function(){

    $(".menu>li>ul>li").hide();
    $(".popup").hide();

    $(".menu").hover(()=>{
        $(".menu>li>ul>li").stop().slideDown();
    },
    ()=>{
        $(".menu>li>ul>li").stop().slideUp();
    });

    var slide = $(".slide > img");
    var sno = 0;
    var eno = slide.lenght - 1;

    var slide = $(".slide > img");
    var sno = 0;
    var eno = slide.length - 1;
    

    setInterval(function(){
        $(slide[sno]).animate({
            left:"-100%"
        },1000,function(){
            $(this).css({left:"100%"});
        });
        sno++;
        if(sno > eno) sno = 0;
        $(slide[sno]).animate({
            left:"0"
        },1000);

    },3000);
    
    $(".open").click(function(){
        $(".popup").show();
    });
    $(".close").click(()=>{
        $(".popup").hide();
    })
}