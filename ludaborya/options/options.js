function() {
 self = {
        init: function() {
            document.title = chrome.i18n.getMessage("optionsHeader");
            for (var a = ["optionsPageActivate", "optionsPageContextLink"], b = 0; b < a.length; b++) {
                var c = chrome.i18n.getMessage(a[b]);
                document.getElementById(a[b]).textContent = c
            }
            document.addEventListener("DOMContentLoaded", self.restoreOptions), 
			document.getElementById("chkActivate").addEventListener("change", self.saveOptions), 
			document.getElementById("chkUseContextMenu").addEventListener("change", self.saveOptions)
        },
        saveOptions: function() {
            var a = document.getElementById("chkActivate").checked,
                b = document.getElementById("chkUseContextMenu").checked,
                c = {
                    activate: a,
                    contextmenu: b
                };
            chrome.storage.sync.set(c, function() {
                self.setStatus(a), setTimeout(function() {}, 750)
            }), chrome.runtime.sendMessage({
                type: "options",
                items: c
            }, function() {})
        },
        restoreOptions: function() {
            chrome.storage.sync.get({
                activate: !0,
                contextmenu: !0
            }, function(a) {
                document.getElementById("chkActivate")
                    .checked = a.activate, document.getElementById("chkUseContextMenu")
                    .checked = a.contextmenu, self.setStatus(a.activate)
            })
        },
        setStatus: function(a) {
            var b;
            b = chrome.extension.getURL(a ? "ludaborya/options/on.jpg" : "ludaborya/options/off.jpg"), document.querySelector(".options__image").src = b
        }
    }, self.init()
}();