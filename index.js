window.addEventListener("scroll",function(){
    //window تعرف طول الشاشةوالعرض

    var header=document.querySelector("header");
      header.classList.toggle("svt",scrollY>0);

})