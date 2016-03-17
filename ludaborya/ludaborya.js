var active = !0;
chrome.storage.sync.get({
    activate : !0,
	luda : !0 
}, function(a) {
	console.log('Loaded!', a.activate, a.luda);
    if (active = a.activate) {
        var b = {
			ludaImgs: ["http://cs540105.vk.me/c627923/v627923363/3b459/VYozucEvxqs.jpg",
			           "http://cs540105.vk.me/c627923/v627923363/3b3b0/igXPfxLQdxQ.jpg",
			           "http://cs631716.vk.me/v631716363/159d/bxNwI-Bn2jU.jpg",
			           "http://cs627617.vk.me/v627617363/3165b/lBnFjboQNdk.jpg",
			           "http://cs622031.vk.me/v622031363/531af/pQ3OeWJc3vM.jpg",
			           "http://cs622621.vk.me/v622621363/3bf5c/-IHqURSNgh0.jpg",
			           "http://cs622621.vk.me/v622621363/39c82/qzNBV8tr_qo.jpg",
			           "http://cs622621.vk.me/v622621363/393ba/22zbiEVv9fo.jpg",
			           "http://cs622621.vk.me/v622621363/37e8e/DnLNEYSkga0.jpg",
			           "http://cs622926.vk.me/v622926363/3411c/AeNAzUNGP14.jpg",
			           "http://cs623222.vk.me/v623222363/132d2/Y43athAwcbc.jpg",
			           "http://cs616816.vk.me/v616816363/1646c/onJ0IFyXFk4.jpg",
			           "http://cs311222.vk.me/v311222363/7d79/YmG_1hidjxI.jpg",
			           "http://cs308330.vk.me/v308330363/1d2d/vOA_f517bqw.jpg",
			           "http://cs305809.vk.me/v305809363/3741/QYdAyRB37eI.jpg",
					  "http://cs9703.vk.me/u7272038/125203929/z_ef6da9df.jpg",
					  "http://cs11067.vk.me/u7272038/118617840/z_5cf2d3d6.jpg",
					  "http://cs241.vk.me/v241038/45d/WgK6t5MF6MQ.jpg",
					  "http://cs9930.vk.me/u7272038/109930115/x_e9da66c0.jpg",
					  "http://cs9703.vk.me/u7272038/125203929/z_c6918286.jpg"
					   ],
				
			boryaImgs: ["http://cs417028.vk.me/v417028242/4d69/ppxe1lCKiyE.jpg",
			            "http://cs312124.vk.me/v312124363/81b7/7KOMLhgnbos.jpg",
			            "http://cs10117.vk.me/u7272038/-6/z_b540d518.jpg",
			            "http://cs11282.vk.me/u7272038/-6/z_d2149dea.jpg",
			            "http://cs5532.vk.me/u7272038/-6/z_fed15468.jpg",
			            "http://cs4689.vk.me/u7272038/-6/z_5a42833c.jpg",
			            "http://cs9309.vk.me/u7272038/-6/z_a6464910.jpg",
			            "http://cs5027.vk.me/u7272038/-6/z_64318112.jpg"
					    "http://cs535.vk.me/u7272038/118617840/z_783f2d1c.jpg",
					    "http://cs241.vk.me/v241038/467/vhXLpl1zTP0.jpg",
					    "http://cs9930.vk.me/u7272038/109832800/x_932d9d84.jpg",
					    "http://cs625622.vk.me/v625622038/34223/Ljcgh75ML-g.jpg"
						],

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
        document.addEventListener("DOMContentLoaded", b.handleImages( a.luda ? b.boryaImgs : b.ludaImgs, 3e3))
    }
});