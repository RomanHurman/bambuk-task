$(document).ready(function(){
    $('.section_third').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      dotsClass: "img_dots",
      autoplay: false
    });
    const slider = $(".wrapper");
    slider
      .slick({
      vertical: true,
      infinite: false,
      arrows:false,
      dots: true,
      
      dotsClass: "pic_dots"
      });
    
    slider.on('wheel', (function(e) {
      e.preventDefault();
    
      if (e.originalEvent.deltaY > 0) {
        $(this).slick('slickNext'); 
      } 
      else {
        console.log('up')
        $(this).slick('slickPrev');
      } 
    $('.wrapper').on('afterChange', function(event, slick, currentSlide){
    const slickItem = $('.wrapper .slick-slide:not(".slick-cloned")').length;
    if (currentSlide == 0) {
      alert('First Slide');
    }
    else if (currentSlide == 2) {
      alert('Last Slide');
    }
  });
}));
})