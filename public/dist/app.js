"use strict";$(function(){}),$(function(){$(".cart__list--remove").click(function(t){t.preventDefault(),$.ajax({type:"DELETE",url:t.target.href,success:function(){location.reload()}})})}),$(function(){$(".footer__change-language select").on("change",function(){var t=$(this).val();return t&&(window.location=t),!1})}),$(function(){$(".products__meta--size li").on("click",function(t){var e=$(t.target),a=$(".products__meta--size li"),i=$('[name="size_variation_id"]');a.removeClass("current"),e.addClass("current"),$(".products__meta--size li").not(".current").removeClass("selected"),e.toggleClass("selected"),e.hasClass("selected")?i.val(e.attr("value")):i.val(0)}),$("#products__addtocart").on("submit",function(t){if(t.preventDefault(),"0"==$('[name="size_variation_id"]').val())return void alert("please select size!");$.ajax({type:"PUT",url:"/cart",data:$(t.target).serialize(),error:function(t){alert(t.status+": "+t.statusText)},success:function(t){window.location.replace("/cart")}})}),$(".products__gallery--thumbs").length&&$(".products__gallery--thumbs").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,itemWidth:80,itemMargin:16,asNavFor:".products__gallery--top"}),$(".products__gallery--top").length&&$(".products__gallery--top").flexslider({animation:"slide",controlNav:!1,directionNav:!1,animationLoop:!1,slideshow:!1,sync:".products__gallery--thumbs"});$(".products__featured--slider").width(),window.matchMedia("only screen and (max-width: 760px)").matches;$(".products__featured--slider").length&&$(".products__featured--slider").flexslider({animation:"slide",animationLoop:!1,controlNav:!1,itemWidth:200,itemMargin:16})});