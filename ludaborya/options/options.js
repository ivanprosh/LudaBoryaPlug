/*! iNikolayev - v1.1.2 - 2015-01-13 */ ! function() {
 self = {
        init: function() {
            document.title = chrome.i18n.getMessage("optionsHeader");
            for (var a = ["optionsPageActivate", "optionsPageContextLink","optionsPageLudaOn"], b = 0; b < a.length; b++) {
                var c = chrome.i18n.getMessage(a[b]);
                document.getElementById(a[b]).textContent = c
            }
            document.addEventListener("DOMContentLoaded", self.restoreOptions), 
			document.getElementById("chkActivate").addEventListener("change", self.saveOptions), 
			document.getElementById("chkUseContextMenu").addEventListener("change", self.saveOptions),
			document.getElementById("chkLuda").addEventListener("change", self.saveOptions)
        },
        saveOptions: function() {
            var a = document.getElementById("chkActivate").checked,
                b = document.getElementById("chkUseContextMenu").checked,
				d = document.getElementById("chkLuda").checked,
                c = {
                    activate: a,
                    contextmenu: b,
					luda: d
                };
            chrome.storage.sync.set(c, function() {
                self.setStatus(d), setTimeout(function() {}, 750)
            }), chrome.runtime.sendMessage({
                type: "options",
                items: c
            }, function() {})
        },
        restoreOptions: function() {
            chrome.storage.sync.get({
                activate: !0,
                contextmenu: !0,
				luda: !0
            }, function(a) {
                document.getElementById("chkActivate").checked = a.activate, 
				document.getElementById("chkUseContextMenu").checked = a.contextmenu, 
				document.getElementById("chkLuda").checked = a.luda, 
				self.setStatus(a.luda)
            })
        },
        setStatus: function(a) {
            var b;
            b = chrome.extension.getURL(a ? "ludaborya/options/on.jpg" : "ludaborya/options/off.jpg"),
			console.log("url is", b),
			document.querySelector(".options__image").src = b
        }
    }, self.init()
}();