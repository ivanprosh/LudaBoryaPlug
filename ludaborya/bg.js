 /*! iNikolayev - v1.1.2 - 2015-01-13 */ ! function() {
 var a = {
        init: function() {
            chrome.storage.sync.get({
                activate: !0,
                contextmenu: !0,
				luda: !0
			}
			, function(b) {
                a.updateContextMenu(b)
            })
			, chrome.runtime.onInstalled.addListener(a.onInstalled), chrome.runtime.onMessage.addListener(a.onMessageReceived)
        },
        onInstalled: function(b) {
            "install" == b.reason && a.openOptions()
        },
        onMessageReceived: function(b) {
            "options" == b.type && a.updateContextMenu(b.items)
        },
        updateContextMenu: function(b) {
			console.log("Parametrs are: ",b.activate, b.contextmenu, b.luda),
            b.contextmenu && b.activate ? chrome.contextMenus.create({
                id: "LudaBoryaInactivate",
                title: chrome.i18n.getMessage("contextMenuInactivate"),
                contexts: ["page"],
                onclick: function() {
                    a.openOptions()
                }
            }) : chrome.contextMenus.remove("LudaBoryaInactivate")
        },
        openOptions: function() {
            var a = chrome.extension.getURL("ludaborya/options/options.html");
            chrome.tabs.query({
                url: a
            }, function(b) {
                b.length ? (chrome.tabs.update(b[0].id, {
                    active: !0
                }), chrome.windows.update(b[0].windowId, {
                    focused: !0
                })) : chrome.tabs.create({
                    url: a
                })
            })
        }
    };
    a.init()
}();