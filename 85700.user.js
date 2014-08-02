// ==UserScript==
// @name        e-hentai tags
// @description Show all tags
// @include     http://g.e-hentai.org/*
// @exclude     http://g.e-hentai.org/g/*
// @exclude     http://g.e-hentai.org/s/*
// @include     http://exhentai.org/*
// @exclude     http://exhentai.org/g/*
// @exclude     http://exhentai.org/s/*
// @require    http://code.jquery.com/jquery-latest.min.js
// @downloadURL   https://github.com/RikisX/ehentai/raw/master/85700.user.js
// @updateURL     https://github.com/RikisX/ehentai/raw/master/85700.user.js
// @version       2014.8.2
// @author      Rikis
// ==/UserScript==

    function TagIt(k) {    
        var all = $('div.tfl[style*="-'+(17*k+1)+'px"]');
        if (all.length == 0) {
            all = $('div.tft[style*="-'+(17*k+1)+'px"]');
        }
        all.each(function () {
            
            var imgx = $(this);
				    function proccolor() {
				        switch (imgx[0].style.backgroundPosition) {
				        case "0px -1px":
				            return ('Red');
				        case "0px -18px":
				            return ('Coral');
				        case "0px -35px":
				            return ('Olive');
				        case "0px -52px":
				            return ('#00a000');
				        case "0px -69px":
				            return ('Blue');
				        case "0px -86px":
				            return ('Magenta');
				        }
				    }	            
				            var btf = imgx.attr("title").split(/,[ ]*/);
            var newlist = new Array();
            btf.forEach(function (item) {
                newlist.push(
                  item.split(':').pop().trim()
                );
            });
            var el = imgx[0].parentNode.parentNode.parentNode;
            $(el.getElementsByClassName("it5")[0]).append(' <font color=' + proccolor() + '>[' + newlist.join(', ') + ']</font>');
            $(el.getElementsByClassName("id2")[0]).prepend('<font color=' + proccolor() + '>[' + newlist.join(', ') + ']</font> ');
            imgx.detach();
        })
    }
    $(".it5").css("height", "auto"); 
    TagIt(0);
    TagIt(1);
    TagIt(2);
    TagIt(3);
    TagIt(4);
    TagIt(5);
