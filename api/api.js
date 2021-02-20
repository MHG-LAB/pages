	$(document).ready(function () {
	    var getProductHeight = $('.product.active').height();
	    $('.products').css({ height: getProductHeight });
	    function calcProductHeight() {
	        getProductHeight = $('.product.active').height();
	        $('.products').css({ height: getProductHeight });
	    }
	    function animateContentColor() {
	        var getProductColorA = $('.product.active').attr('product-color-a');
	        var getProductColorB = $('.product.active').attr('product-color-b');
	        var getProductColorC = $('.product.active').attr('product-color-c');
	        $('body').css({ 
            background: getProductColorA,
            background: getProductColorB,
            background: getProductColorC,
          });
	        $('.title').css({ 
            color: getProductColorA
          });
	        $('.btn').css({ 
            color: getProductColorA
          });
	    }
	    var productItem = $('.product'), productCurrentItem = productItem.filter('.active');
	    $('#next').on('click', function (e) {
	        e.preventDefault();
	        var nextItem = productCurrentItem.next();
	        productCurrentItem.removeClass('active');
	        if (nextItem.length) {
	            productCurrentItem = nextItem.addClass('active');
	        } else {
	            productCurrentItem = productItem.first().addClass('active');
	        }
	        calcProductHeight();
	        animateContentColor();
	    });
	    $('#prev').on('click', function (e) {
	        e.preventDefault();
	        var prevItem = productCurrentItem.prev();
	        productCurrentItem.removeClass('active');
	        if (prevItem.length) {
	            productCurrentItem = prevItem.addClass('active');
	        } else {
	            productCurrentItem = productItem.last().addClass('active');
	        }
	        calcProductHeight();
	        animateContentColor();
	    });
	    $('[ripple]').on('click', function (e) {
	        var rippleDiv = $('<div class="ripple" />'), rippleSize = 60, rippleOffset = $(this).offset(), rippleY = e.pageY - rippleOffset.top, rippleX = e.pageX - rippleOffset.left, ripple = $('.ripple');
	        rippleDiv.css({
	            top: rippleY - rippleSize / 2,
	            left: rippleX - rippleSize / 2,
	            background: $(this).attr('ripple-color')
	        }).appendTo($(this));
	        window.setTimeout(function () {
	            rippleDiv.remove();
	        }, 1900);
	    });
	});