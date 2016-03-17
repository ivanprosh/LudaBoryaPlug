var active = !0,
	luda = !0;
chrome.storage.sync.get({
    activate: !0
	luda: !0
}, function(a) {
    if (active = a.activate) {
        var b = {
			ludaImgs: ["http://www.livestory.com.ua/images/igor_nikolaev_2.jpg"],
			boryaImgs: ["http://www.livestory.com.ua/images/igor_nikolaev_2.jpg"],
            handleImages: function(a, c) {
                for (var d = document.getElementsByTagName("img"), e = d.length, f = 0; e > f; f++) {
                    var g = d[f],
                        h = g.src;
                    b.replaceImages(a, g, h)
                }
                c > 0 && setTimeout(function() {
                    b.handleImages(a, c)
                }, c)
            },
            replaceImages: function(a, c, d) {
                if (-1 == a.indexOf(d)) {
                    var e = c.clientHeight,
                        f = c.clientWidth;
                    e > 0 && f > 0 && b.handleImg(c, a)
                } else c.onload = function() {
                    -1 == a.indexOf(d) && b.handleImg(c, a)
                }
            },
            handleImg: function(a, c) {
                a.onerror = function() {
                    b.handleBrokenImg(a, c)
                }, b.setRandomImg(a, c)
            },
            setRandomImg: function(a, b) {
                var c = a.clientWidth,
                    d = a.clientHeight;
                a.style.width = c + "px", a.style.height = d + "px", a.src = b[Math.floor(Math.random() * b.length)]
            },
            handleBrokenImg: function(a, c) {
                var d = a.src,
                    e = c.indexOf(d);
                e > -1 && c.splice(e, 1), b.setRandomImg(a, c)
            }
        };
        document.addEventListener("DOMContentLoaded", b.handleImages(luda=a.luda ? b.boryaImgs : b.ludaImgs, 3e3))
    }
});