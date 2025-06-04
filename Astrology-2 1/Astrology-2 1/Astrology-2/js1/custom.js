
   $(document).ready(function(){
     $(".alert .close span").click(function(){
       $(".alert").hide();
     });
   });

   window.addEventListener(
    "scroll",
    () => {
   document.body.style.setProperty(
     "--scroll",
     window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
   );
    },
    false
   );





 $(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    slideSpeed: 2000,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
  })
      .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    dots: false,
    autoplay: true,
    nav: true,
    slideSpeed: 200,
    slideBy: 5,
     responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
  
});



 $(document).ready(function() {
  var bigimage = $("#new_one");
  var thumbs = $("#new_two");
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    slideSpeed: 2000,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
  })
      .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    dots: false,
    autoplay: true,
    nav: true,
    slideSpeed: 200,
    slideBy: 5,
     responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});



 $(document).ready(function() {
 var bigimage = $("#new_you");
  var thumbs = $("#new_you_two");
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    slideSpeed: 2000,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
  })
      .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    dots: false,
    autoplay: true,
    nav: true,
    slideSpeed: 200,
    slideBy: 5,
     responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
 });


 $('.testimonial').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  center:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})




$('.new-service-box').owlCarousel({
loop: true,
margin: 10,
nav: true,
autoplay: true,
responsive: {
  0: {
      items: 1
  },
  600: {
      items: 1
  },
  1000: {
      items: 1
  }
}
})


  window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
} else {
  header.classList.remove("sticky");
}
}


$( document ).ready(function() {
 $('.new_counter').counterUp({
     delay: 10,
     time: 2000
 });
 $('.new_counter').addClass('animated fadeInDownBig');
 $('.new_box_img_text p').addClass('animated fadeIn');
});


//owl2row plugin

;(function ($, window, document, undefined) {
Owl2row = function (scope) {
  this.owl = scope;
  this.owl.options = $.extend({}, Owl2row.Defaults, this.owl.options);
  //link callback events with owl carousel here

  this.handlers = {
      'initialize.owl.carousel': $.proxy(function (e) {
          if (this.owl.settings.owl2row) {
              this.build2row(this);
          }
      }, this)
  };

  this.owl.$element.on(this.handlers);
};

Owl2row.Defaults = {
  owl2row: false,
  owl2rowTarget: 'item',
  owl2rowContainer: 'owl2row-item',
  owl2rowDirection: 'utd' // ltr
};

//mehtods:
Owl2row.prototype.build2row = function(thisScope){

  var carousel = $(thisScope.owl.$element);
  var carouselItems = carousel.find('.' + thisScope.owl.options.owl2rowTarget);

  var aEvenElements = [];
  var aOddElements = [];

  $.each(carouselItems, function (index, item) {
      if ( index % 2 === 0 ) {
          aEvenElements.push(item);
      } else {
          aOddElements.push(item);
      }
  });

  carousel.empty();

  switch (thisScope.owl.options.owl2rowDirection) {
      case 'ltr':
          thisScope.leftToright(thisScope, carousel, carouselItems);
          break;

      default :
          thisScope.upTodown(thisScope, aEvenElements, aOddElements, carousel);
  }

};

Owl2row.prototype.leftToright = function(thisScope, carousel, carouselItems){

  var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
  var owlMargin = thisScope.owl.options.margin;

  var carouselItemsLength = carouselItems.length;

  var firsArr = [];
  var secondArr = [];

  //console.log(carouselItemsLength);

  if (carouselItemsLength %2 === 1) {
      carouselItemsLength = ((carouselItemsLength - 1)/2) + 1;
  } else {
      carouselItemsLength = carouselItemsLength/2;
  }

  //console.log(carouselItemsLength);

  $.each(carouselItems, function (index, item) {


      if (index < carouselItemsLength) {
          firsArr.push(item);
      } else {
          secondArr.push(item);
      }
  });

  $.each(firsArr, function (index, item) {
      var rowContainer = $('<div class="' + o2wContainerClass + '"/>');

      var firstRowElement = firsArr[index];
          firstRowElement.style.marginBottom = owlMargin + 'px';

      rowContainer
          .append(firstRowElement)
          .append(secondArr[index]);

      carousel.append(rowContainer);
  });

};

Owl2row.prototype.upTodown = function(thisScope, aEvenElements, aOddElements, carousel){

  var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
  var owlMargin = thisScope.owl.options.margin;

  $.each(aEvenElements, function (index, item) {

      var rowContainer = $('<div class="' + o2wContainerClass + '"/>');
      var evenElement = aEvenElements[index];

      evenElement.style.marginBottom = owlMargin + 'px';

      rowContainer
          .append(evenElement)
          .append(aOddElements[index]);

      carousel.append(rowContainer);
  });
};

/**
* Destroys the plugin.
*/
Owl2row.prototype.destroy = function() {
  var handler, property;

  for (handler in this.handlers) {
      this.owl.dom.$el.off(handler, this.handlers[handler]);
  }
  for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] !== 'function' && (this[property] = null);
  }
};

$.fn.owlCarousel.Constructor.Plugins['owl2row'] = Owl2row;
})( window.Zepto || window.jQuery, window,  document );
//end of owl2row plugin

//init carousel
$(".new_one_i").owlCarousel({
loop: true,
autoplay: true,
nav:true,
owl2row: true,
responsive:{
  0:{
      items:2
  },
  600:{
      items:3
  },
  1000:{
      items:5
  }
}
});

//init carousel
var owl = $('.new_client_slider');
$(".new_client_slider").owlCarousel({
loop: true,
autoplay: true,
nav:true,
owl2row: true,
responsive:{
  0:{
      items:1
  },
  600:{
      items:2
  },
  1000:{
      items:2
  }
}
});

owl.on('mousewheel', '.owl-stage', function (e) {
if (e.deltaY>0) {
  owl.trigger('next.owl');
} else {
  owl.trigger('prev.owl');
}
e.preventDefault();
});
