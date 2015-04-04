//================================================
/*

Turn Off the Lights
The entire page will be fading to dark, so you can watch the videos as if you were in the cinema.
Copyright (C) 2015 Stefan vd
www.stefanvd.net
www.turnoffthelights.com

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


To view a copy of this license, visit http://creativecommons.org/licenses/GPL/2.0/

*/
//================================================

// main script
// TurnOfftheLights namespace.
if ("undefined" == typeof(TurnOfftheLights)) {
  var TurnOfftheLights = {};
};

(function(ns) {
    ns.extension_id = "Turn Off the Lights (Firefox) extension";
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

    ns.init = function () {
// welcome page
var firstrun = Services.prefs.getBoolPref("extensions.TurnOfftheLights.firstrun");
// Firefox 4 and later; Mozilla 2 and later
var curVersion;
try {
	Components.utils.import("resource://gre/modules/AddonManager.jsm");
	AddonManager.getAddonByID("stefanvandamme@stefanvd.net", function(addon) {
	curVersion = addon.version;
})
} catch (ex) {} // silently fail

if (firstrun) {
// Adding button by default ------------
  var myId    = "TurnOfftheLights-button"; // ID of button to add
  var afterId = "urlbar-container";    // ID of element to insert after
  var navBar  = document.getElementById("nav-bar");
  var currentSet = navBar.getAttribute("currentset");
    if (!currentSet)
        currentSet = navBar.currentSet;

    var curSet = currentSet.split(",");
    if (curSet.indexOf(myId) == -1){
		var set = curSet.concat(myId);
		navBar.setAttribute("currentset", set.join(","));
		navBar.currentSet = set.join(",");
		document.persist(navBar.id, "currentset");
    try {
      BrowserToolboxCustomizeDone(true);
    }
    catch (e) {}
  }
//------------
  Services.prefs.setBoolPref("extensions.TurnOfftheLights.firstrun", false);
  Services.prefs.setCharPref("extensions.TurnOfftheLights.installedVersion", curVersion);
  /* Code related to firstrun */
  window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("http://www.turnoffthelights.com/extension/firefoxguide.html"); }, 1000);
  window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("http://www.turnoffthelights.com/extension/firefoxwelcome.html"); }, 1000);
} else {
  try {
    var installedVersion = Services.prefs.getCharPref("extensions.TurnOfftheLights.installedVersion");
    if (curVersion > installedVersion) {
      Services.prefs.setCharPref("extensions.TurnOfftheLights.installedVersion", curVersion);
      /* Code related to upgrade */  
    }
	else if ("3.0.0.15" > installedVersion) {
		Services.prefs.setCharPref("extensions.TurnOfftheLights.installedVersion", curVersion);
		// for v3 release
		window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("http://turnoffthelights.com/extension/firefoxupgrade.html"); }, 1000);
	}
  } catch (ex) {
    /* Code related to a reinstall */
  }
}

	// For accessing browser window from sidebar code.
    var mainWindow = window.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
               .getInterface(Components.interfaces.nsIWebNavigation)
               .QueryInterface(Components.interfaces.nsIDocShellTreeItem)
               .rootTreeItem
               .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
               .getInterface(Components.interfaces.nsIDOMWindow);
    var gBrowser = mainWindow.gBrowser;
    if (gBrowser.addEventListener) {
        gBrowser.addEventListener("DOMContentLoaded",pageLoaded,true);
    }

	function pageLoaded(aEvent) {
		// if ((aEvent.originalTarget.nodeName == '#document') && (aEvent.originalTarget.defaultView.location.href == gBrowser.currentURI.spec)){
		// var doc = aEvent.originalTarget; // loaded document
		var doc = aEvent.target;
		var win = doc.defaultView; // loaded window
		if (win.frameElement) return; // ignore frames
		
		var browser = gBrowser.getBrowserForDocument(doc);
		var tab = documentToTab(browser.contentDocument);

		//check if not on firefox "about" or "chrome" page
		var checktaburl = browser.contentWindow.location.protocol;
		if(checktaburl != "chrome:"){
		firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/injected.js"});
		firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/content.js"});
		}

		var contextmenus = prefManager.getBoolPref("extensions.TurnOfftheLights.contextmenus");
		if (contextmenus) {
			actionmenu();
		} else {
			document.getElementById("TurnOfftheLightspage").style.display = "none";
			document.getElementById("TurnOfftheLightsvideo").style.display = "none";
		}
		// } // end close content script
	}

function actionmenu() {
	// context menu
	var AreaContextMenu = document.getElementById("contentAreaContextMenu");
	if (AreaContextMenu) {AreaContextMenu.addEventListener("popupshowing", ShowHideItems, false);}
					
		function ShowHideItems(event)
		{
			if (document.popupNode.localName.toUpperCase() == "VIDEO") {
				document.getElementById("TurnOfftheLightspage").style.display = "none";
				document.getElementById("TurnOfftheLightsvideo").style.display = "block";
			}
			else if (document.popupNode.localName.toUpperCase() != "VIDEO") {
				document.getElementById("TurnOfftheLightspage").style.display = "block";
				document.getElementById("TurnOfftheLightsvideo").style.display = "none";
			}
		}
}

        firefox.extension.onRequest.addListener(function(request, sender, sendResponse) {
            if ( request.name == "totlrequest" ) {
				sendResponse({interval: prefManager.getCharPref("extensions.TurnOfftheLights.interval"), lightcolor: prefManager.getCharPref("extensions.TurnOfftheLights.lightcolor"),
				pageaction: prefManager.getBoolPref("extensions.TurnOfftheLights.pageaction"), autoplay: prefManager.getBoolPref("extensions.TurnOfftheLights.autoplay"),
				playlist: prefManager.getBoolPref("extensions.TurnOfftheLights.playlist"), flash: prefManager.getBoolPref("extensions.TurnOfftheLights.flash"),
				head: prefManager.getBoolPref("extensions.TurnOfftheLights.head"), fadein: prefManager.getBoolPref("extensions.TurnOfftheLights.fadein"),
				fadeout: prefManager.getBoolPref("extensions.TurnOfftheLights.fadeout"), infobar: prefManager.getBoolPref("extensions.TurnOfftheLights.infobar"),
				sharebutton: prefManager.getBoolPref("extensions.TurnOfftheLights.sharebutton"), likebutton: prefManager.getBoolPref("extensions.TurnOfftheLights.likebutton"),
				readera: prefManager.getBoolPref("extensions.TurnOfftheLights.readera"), readern: prefManager.getBoolPref("extensions.TurnOfftheLights.readern"),
				shortcutlight: prefManager.getBoolPref("extensions.TurnOfftheLights.shortcutlight"), eyea: prefManager.getBoolPref("extensions.TurnOfftheLights.eyea"),
				eyen: prefManager.getBoolPref("extensions.TurnOfftheLights.eyen"), suggestions: prefManager.getBoolPref("extensions.TurnOfftheLights.suggestions"), 
				videoheadline: prefManager.getBoolPref("extensions.TurnOfftheLights.videoheadline"), eastereggs: prefManager.getBoolPref("extensions.TurnOfftheLights.eastereggs"),
				contextmenus: prefManager.getBoolPref("extensions.TurnOfftheLights.contextmenus"), readerlargestyle: prefManager.getBoolPref("extensions.TurnOfftheLights.readerlargestyle"), 
				viewcount: prefManager.getBoolPref("extensions.TurnOfftheLights.viewcount"), lightimage: prefManager.getCharPref("extensions.TurnOfftheLights.lightimage"), 
				lightimagea: prefManager.getBoolPref("extensions.TurnOfftheLights.lightimagea"), lightimagen: prefManager.getBoolPref("extensions.TurnOfftheLights.lightimagen"),
				eyealist: prefManager.getBoolPref("extensions.TurnOfftheLights.eyealist"), excludedDomains: prefManager.getCharPref("extensions.TurnOfftheLights.excludedDomains"),
				mousespotlighto: prefManager.getBoolPref("extensions.TurnOfftheLights.mousespotlighto"), mousespotlighta: prefManager.getBoolPref("extensions.TurnOfftheLights.mousespotlighta"), 
				mousespotlightc: prefManager.getBoolPref("extensions.TurnOfftheLights.mousespotlightc"), nighttime: prefManager.getBoolPref("extensions.TurnOfftheLights.nighttime"), 
				begintime: prefManager.getCharPref("extensions.TurnOfftheLights.begintime"), endtime: prefManager.getCharPref("extensions.TurnOfftheLights.endtime"), 
				addvideobutton: prefManager.getBoolPref("extensions.TurnOfftheLights.addvideobutton"), likebar: prefManager.getBoolPref("extensions.TurnOfftheLights.likebar"),
				ambilight: prefManager.getBoolPref("extensions.TurnOfftheLights.ambilight"), ambilightrangeblurradius: prefManager.getCharPref("extensions.TurnOfftheLights.ambilightrangeblurradius"), 
				ambilightrangespreadradius: prefManager.getCharPref("extensions.TurnOfftheLights.ambilightrangespreadradius"),
				mousespotlightt: prefManager.getBoolPref("extensions.TurnOfftheLights.mousespotlightt"), ambilightfixcolor: prefManager.getBoolPref("extensions.TurnOfftheLights.ambilightfixcolor"), 
				ambilightvarcolor: prefManager.getBoolPref("extensions.TurnOfftheLights.ambilightvarcolor"), ambilightcolorhex: prefManager.getCharPref("extensions.TurnOfftheLights.ambilightcolorhex"),
				ambilight4color: prefManager.getBoolPref("extensions.TurnOfftheLights.ambilight4color"), ambilight1colorhex: prefManager.getCharPref("extensions.TurnOfftheLights.ambilight1colorhex"), 
				ambilight2colorhex: prefManager.getCharPref("extensions.TurnOfftheLights.ambilight2colorhex"), ambilight3colorhex: prefManager.getCharPref("extensions.TurnOfftheLights.ambilight3colorhex"),
				ambilight4colorhex: prefManager.getCharPref("extensions.TurnOfftheLights.ambilight4colorhex"), password: prefManager.getBoolPref("extensions.TurnOfftheLights.password"), 
				enterpassword: prefManager.getCharPref("extensions.TurnOfftheLights.enterpassword"), noflash: prefManager.getBoolPref("extensions.TurnOfftheLights.noflash"), 
				hardflash: prefManager.getBoolPref("extensions.TurnOfftheLights.hardflash"), ecosaver: prefManager.getBoolPref("extensions.TurnOfftheLights.ecosaver"), 
				ecosavertime: prefManager.getCharPref("extensions.TurnOfftheLights.ecosavertime"), dynamic: prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic"),
				dynamic1: prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic1"), dynamic2: prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic2"), 
				dynamic3: prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic3"), dynamic4: prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic4"),
				dynamic5: prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic5"), hoveroptiondyn5: prefManager.getBoolPref("extensions.TurnOfftheLights.hoveroptiondyn5"), 
				autoplayonly: prefManager.getBoolPref("extensions.TurnOfftheLights.autoplayonly"), autoplayDomains: prefManager.getCharPref("extensions.TurnOfftheLights.autoplayDomains"),
				blur: prefManager.getBoolPref("extensions.TurnOfftheLights.blur"), maxquality: prefManager.getCharPref("extensions.TurnOfftheLights.maxquality"), 
				autowidthyoutube: prefManager.getBoolPref("extensions.TurnOfftheLights.autowidthyoutube"), customqualityyoutube: prefManager.getBoolPref("extensions.TurnOfftheLights.customqualityyoutube"), 
				cinemaontop: prefManager.getBoolPref("extensions.TurnOfftheLights.cinemaontop"), alllightsoff: prefManager.getBoolPref("extensions.TurnOfftheLights.alllightsoff"), 
				spotlightradius: prefManager.getCharPref("extensions.TurnOfftheLights.spotlightradius"), atmosphereonly: prefManager.getBoolPref("extensions.TurnOfftheLights.atmosphereonly"),
				atmosphereDomains: prefManager.getCharPref("extensions.TurnOfftheLights.atmosphereDomains"), countremember: prefManager.getCharPref("extensions.TurnOfftheLights.countremember"), 
				nighttheme: prefManager.getBoolPref("extensions.TurnOfftheLights.nighttheme"), nightonly: prefManager.getBoolPref("extensions.TurnOfftheLights.nightonly"),
				nightDomains: prefManager.getCharPref("extensions.TurnOfftheLights.nightDomains"), nightenabletheme: prefManager.getBoolPref("extensions.TurnOfftheLights.nightenabletheme"),
				nightonly: prefManager.getBoolPref("extensions.TurnOfftheLights.nightonly"), autoplaydelay: prefManager.getBoolPref("extensions.TurnOfftheLights.autoplaydelay"), 
				autoplaydelaytime: prefManager.getCharPref("extensions.TurnOfftheLights.autoplaydelaytime"), motion: prefManager.getBoolPref("extensions.TurnOfftheLights.motion"),
				lightimagelin: prefManager.getBoolPref("extensions.TurnOfftheLights.lightimagelin"), linearsq: prefManager.getCharPref("extensions.TurnOfftheLights.linearsq"),
				colora: prefManager.getCharPref("extensions.TurnOfftheLights.colora"), intervallina: prefManager.getCharPref("extensions.TurnOfftheLights.intervallina"), 
				colorb: prefManager.getCharPref("extensions.TurnOfftheLights.colorb"), intervallinb: prefManager.getCharPref("extensions.TurnOfftheLights.intervallinb"), 
				speech: prefManager.getBoolPref("extensions.TurnOfftheLights.speech"), speechlang: prefManager.getCharPref("extensions.TurnOfftheLights.speechlang"), 
				speechcountry: prefManager.getCharPref("extensions.TurnOfftheLights.speechcountry"), atmosvivid: prefManager.getBoolPref("extensions.TurnOfftheLights.atmosvivid"), 
				cammotiononly: prefManager.getBoolPref("extensions.TurnOfftheLights.cammotiononly"), speechonly: prefManager.getBoolPref("extensions.TurnOfftheLights.speechonly"), 
				autoplaychecklistwhite: prefManager.getBoolPref("extensions.TurnOfftheLights.autoplaychecklistwhite"), autoplaychecklistblack: prefManager.getBoolPref("extensions.TurnOfftheLights.autoplaychecklistblack"), 
				cammotionDomains: prefManager.getCharPref("extensions.TurnOfftheLights.cammotionDomains"), speechDomains: prefManager.getCharPref("extensions.TurnOfftheLights.speechDomains"), 
				slideeffect: prefManager.getBoolPref("extensions.TurnOfftheLights.slideeffect"), autostop: prefManager.getBoolPref("extensions.TurnOfftheLights.autostop"),
				autostoponly: prefManager.getBoolPref("extensions.TurnOfftheLights.autostoponly"), autostopchecklistwhite: prefManager.getBoolPref("extensions.TurnOfftheLights.autostopchecklistwhite"),
				autostopchecklistblack: prefManager.getBoolPref("extensions.TurnOfftheLights.autostopchecklistblack"), nighthover: prefManager.getBoolPref("extensions.TurnOfftheLights.nighthover"),
				nightmodechecklistwhite: prefManager.getBoolPref("extensions.TurnOfftheLights.nightmodechecklistwhite"), nightmodechecklistblack: prefManager.getBoolPref("extensions.TurnOfftheLights.nightmodechecklistblack"),
				nmtopleft: prefManager.getBoolPref("extensions.TurnOfftheLights.nmtopleft"), nmtopright: prefManager.getBoolPref("extensions.TurnOfftheLights.nmtopright"),
				nmbottomright: prefManager.getBoolPref("extensions.TurnOfftheLights.nmbottomright"), nmbottomleft: prefManager.getBoolPref("extensions.TurnOfftheLights.nmbottomleft"),
				nmcustom: prefManager.getBoolPref("extensions.TurnOfftheLights.nmcustom"), nmcustomx: prefManager.getCharPref("extensions.TurnOfftheLights.nmcustomx"),
				nmcustomy: prefManager.getCharPref("extensions.TurnOfftheLights.nmcustomy"), nightactivetime: prefManager.getBoolPref("extensions.TurnOfftheLights.nightactivetime"),
				nmbegintime: prefManager.getCharPref("extensions.TurnOfftheLights.nmbegintime"), nmendtime: prefManager.getCharPref("extensions.TurnOfftheLights.nmendtime"),
				lampandnightmode: prefManager.getBoolPref("extensions.TurnOfftheLights.lampandnightmode"), eyechecklistwhite: prefManager.getBoolPref("extensions.TurnOfftheLights.eyechecklistwhite"),
				eyechecklistblack: prefManager.getBoolPref("extensions.TurnOfftheLights.eyechecklistblack"), autostopDomainsBox: prefManager.getCharPref("extensions.TurnOfftheLights.autostopDomains")
				});
			}
			else if ( request.name == "automatic" ) {
				var tab = documentToTab(gBrowser.contentDocument);
				firefox.tabs.executeScript(sender.tab, {file: "chrome://TurnOfftheLights/content/js/light.js"});
			}
			else if ( request.name == "readersaveme" ) { Services.prefs.setCharPref("extensions.TurnOfftheLights.interval", request.value); }
			else if ( request.name == "readerlargestyle" ) { Services.prefs.setBoolPref("extensions.TurnOfftheLights.readerlargestyle", request.value); }
			else if ( request.name == "readerlargestyle" ) { Services.prefs.setBoolPref("extensions.TurnOfftheLights.readerlargestyle", request.value); }
			else if ( request.name == "currenttabforblur" ) {
        // chrome.tabs.captureVisibleTab(null, {format: "jpeg", quality: 50}, function(dataUrl) {
            // sendResponse({ screenshotUrl: dataUrl });
        // });
			}
			else if ( request.name == "emergencyalf" ) {
				var num = gBrowser.browsers.length;
				for (var i = 0; i < num; i++) {
					var b = gBrowser.getBrowserAtIndex(i);
					try {
						var tab = documentToTab(b.contentDocument);
						firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/light.js"});
					} catch(e) {
					Components.utils.reportError(e);
					}
				}
			}
			else if ( request.name == "eyesavemeOFF" ) {
				if(request.value == true){Services.prefs.setBoolPref("extensions.TurnOfftheLights.eyea", true);Services.prefs.setBoolPref("extensions.TurnOfftheLights.eyen", false);}
				else{Services.prefs.setBoolPref("extensions.TurnOfftheLights.eyea", false);Services.prefs.setBoolPref("extensions.TurnOfftheLights.eyen", true);}
				var num = gBrowser.browsers.length;
				for (var i = 0; i < num; i++) {
					var b = gBrowser.getBrowserAtIndex(i);
					try {
						var tab = documentToTab(b.contentDocument);
						firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/removelight.js"});
					} catch(e) {
					Components.utils.reportError(e);
					}
				}
			}
			else if ( request.name == "eyesavemeON" ) {
				if(request.value == true){Services.prefs.setBoolPref("extensions.TurnOfftheLights.eyea", true);Services.prefs.setBoolPref("extensions.TurnOfftheLights.eyen", false);}
				else{Services.prefs.setBoolPref("extensions.TurnOfftheLights.eyea", false);Services.prefs.setBoolPref("extensions.TurnOfftheLights.eyen", true);}
				var num = gBrowser.browsers.length;
				for (var i = 0; i < num; i++) {
					var b = gBrowser.getBrowserAtIndex(i);
					try {
						var tab = documentToTab(b.contentDocument);
						firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/reloadlight.js"});
					} catch(e) {
					Components.utils.reportError(e);
					}
				}
			}
			else if ( request.name == "adddarkyoutube" ) {
				// var tab = documentToTab(gBrowser.contentDocument);
				// firefox.tabs.executeScript(sender.tab, {file: "chrome://TurnOfftheLights/content/js/youtubedark.js"});
				var iframes = gBrowser.contentDocument.getElementsByTagName("iframe");
				for (var i=0; i < iframes.length; i++) {
					var tab = documentToTab(iframes[i].contentDocument);
					firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/youtubedark.js"});
				}
			}
			else if ( request.name == "addnormalyoutube" ) {
				// var tab = documentToTab(gBrowser.contentDocument);
				// firefox.tabs.executeScript(sender.tab, {file: "chrome://TurnOfftheLights/content/js/youtubewhite.js"});
				var iframes = gBrowser.contentDocument.getElementsByTagName("iframe");
				for (var i=0; i < iframes.length; i++) {
					var tab = documentToTab(iframes[i].contentDocument);
					firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/youtubewhite.js"});
				}
			}
			else if ( request.name == "nmcustomx" ) { Services.prefs.setCharPref("extensions.TurnOfftheLights.nmcustomx", request.value); }
			else if ( request.name == "nmcustomy" ) { Services.prefs.setCharPref("extensions.TurnOfftheLights.nmcustomy", request.value); }
			else if (request.name == "mastertabdark") {
				if(request.value == true){
					var num = gBrowser.browsers.length;
					for (var i = 0; i < num; i++) {
						var b = gBrowser.getBrowserAtIndex(i);
						try {
							var tab = documentToTab(b.contentDocument);
							firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/removelight.js"});
						} catch(e) {
						Components.utils.reportError(e);
						}
					}	
				}
				else{
					var num = gBrowser.browsers.length;
					for (var i = 0; i < num; i++) {
						var b = gBrowser.getBrowserAtIndex(i);
						try {
							var tab = documentToTab(b.contentDocument);
								firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/golight.js"});
						} catch(e) {
						Components.utils.reportError(e);
						}
					}
				}
			}
        });
    };

    ns.onToolbarButtonClick = function(event) {
	switch(event.button) {
    case 0:
		// Left click
		if(event.originalTarget.id == 'TurnOfftheLights-button' && event.button == 0) {
		var alllightsoff = prefManager.getBoolPref("extensions.TurnOfftheLights.alllightsoff");
		if (alllightsoff) {
			var tab = documentToTab(gBrowser.contentDocument);
			firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/mastertab.js"});		
		} else {
			var tab = documentToTab(gBrowser.contentDocument);
			firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/light.js"});
		}
		}
    break;
    case 1:
		// Middle click
		break;
    case 2:
		// Right click
		event.preventDefault();
		document.getElementById('rightclickmenu').openPopup(document.getElementById('TurnOfftheLights-button'), 'after_start', 0, 0, false, false);
		
		break;
	}
    };

//---
// Right click menu	
	ns.productnameClick = function() {window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("http://www.turnoffthelights.com/"); }, 100);}
	ns.optionpageClick = function() {window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("chrome://turnoffthelights/content/options.html"); }, 100);}
	ns.welcomeguidepageClick = function() {window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("http://www.turnoffthelights.com/extension/firefoxguide.html"); }, 100);}
	ns.donatepageClick = function() {window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("http://www.turnoffthelights.com/donate.html"); }, 100);}
	ns.ratepageClick = function() {window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("https://addons.mozilla.org/firefox/addon/turn-off-the-lights/reviews/"); }, 100);}
	ns.tellafriendpageClick = function() {window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("mailto:youremail?subject=Turn Off the Lights Firefox addon&body=Hé, This is amazing. I just tried today this Turn Off the Lights Firefox addon https://addons.mozilla.org/en-US/firefox/addon/turn-off-the-lights/"); }, 100);}
	ns.tweetpageClick = function() {window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("http://twitter.com/home?status=Try%20self%20this%20amazing%20Turn%20Off%20the%20Lights%20Firefox%20addon%20addons.mozilla.org/firefox/addon/turn-off-the-lights"); }, 100);}
	ns.facebookpageClick = function() {window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("https://www.facebook.com/sharer/sharer.php?u=addons.mozilla.org/firefox/addon/turn-off-the-lights"); }, 100);}
	ns.googlepluspageClick = function() {window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("https://plus.google.com/share?url=addons.mozilla.org/firefox/addon/turn-off-the-lights"); }, 100);	}
	ns.managepageClick = function() {window.setTimeout(function(){ gBrowser.selectedTab = gBrowser.addTab("about:addons"); }, 100);	}
//---	
	
    ns.shortcut = function() {
		var shortcutlight = prefManager.getBoolPref("extensions.TurnOfftheLights.shortcutlight");
		if (shortcutlight) {
			var tab = documentToTab(gBrowser.contentDocument);
			firefox.tabs.executeScript(tab, {file: "chrome://TurnOfftheLights/content/js/light.js"});
		}
    };
	
    ns.keytheater = function() {
        var tab = documentToTab(gBrowser.contentDocument);
		firefox.tabs.sendRequest(tab, {name: "theater"});
    };
	
    ns.shortcutdefaultopacity = function() {
        var tab = documentToTab(gBrowser.contentDocument);
		firefox.tabs.sendRequest(tab, {name: "shortcutdefaultopacity"});
    };

    ns.shortcutsaveopacity = function() {
        var tab = documentToTab(gBrowser.contentDocument);
		firefox.tabs.sendRequest(tab, {name: "shortcutsaveopacity"});
    };
	
    ns.shortcutopacityincrease = function() {
        var tab = documentToTab(gBrowser.contentDocument);
		firefox.tabs.sendRequest(tab, {name: "shortcutopacityincrease"});
    };	

    ns.shortcutopacitydecrease = function() {
        var tab = documentToTab(gBrowser.contentDocument);
		firefox.tabs.sendRequest(tab, {name: "shortcutopacitydecrease"});
    };		
	
    ns.shortcutalllightstab = function() {
        var tab = documentToTab(gBrowser.contentDocument);
		firefox.tabs.sendRequest(tab, {name: "shortcutalllightstab"});
    };		

    ns.shortcuteyeprotection = function() {
        var tab = documentToTab(gBrowser.contentDocument);
		firefox.tabs.sendRequest(tab, {name: "shortcuteyeprotection"});
    };
	
    var documentToTab = function(doc) {
        return {
            document: doc,
            url: doc.location.href
        }
    };

    var evalInSandbox = function(code, codebase, sandbox ){
        if (Components.utils && Components.utils.Sandbox) {
            // DP beta+
            Components.utils.evalInSandbox(code, sandbox);
        } else if (Components.utils && Components.utils.evalInSandbox) {
            // DP alphas
            Components.utils.evalInSandbox(code, codebase, sandbox);
        } else if (Sandbox) {
            // 1.0.x
            evalInSandbox(code, sandbox, codebase);
        } else {
            throw new Error("Could not create sandbox.");
        }
    };

    var getFileContent = function( file ) {
        var ioService=Components.classes["@mozilla.org/network/io-service;1"]
            .getService(Components.interfaces.nsIIOService);
        var scriptableStream=Components
            .classes["@mozilla.org/scriptableinputstream;1"]
            .getService(Components.interfaces.nsIScriptableInputStream);
        var unicodeConverter=Components
            .classes["@mozilla.org/intl/scriptableunicodeconverter"]
            .createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
        unicodeConverter.charset="UTF-8";

        var channel=ioService.newChannel( file, "UTF-8", null);
        var input=channel.open();
        scriptableStream.init(input);
        var str=scriptableStream.read(input.available());
        scriptableStream.close();
        input.close();

        try {
            return unicodeConverter.ConvertToUnicode(str);
        } catch (e) {
            return str;
        } 
    };

    var console = {};
    console._service = Components.classes["@mozilla.org/consoleservice;1"]
        .getService(Components.interfaces.nsIConsoleService);
    console.log = function(msg) {
        console._service.logStringMessage(msg);
    };

    var firefox = {};

    firefox.tabs = {};
    firefox.tabs.executeScript = function(tab, details) {
        var unsafeWin = tab.document.defaultView;
		//unsafeWin.__exposedProps__ = { unsafeWin: "wr" }; // not needed
        var safeWin = new XPCNativeWrapper(unsafeWin);
		//safeWin.__exposedProps__ = { safeWin: "wr" }; // not needed
		//var sandbox = new Components.utils.Sandbox(safeWin);
		var systemPrincipal = Cc["@mozilla.org/systemprincipal;1"]  // fix for __exposedProps__
                              .createInstance(Ci.nsIPrincipal); 
        var sandbox = new Components.utils.Sandbox( systemPrincipal );
        sandbox.window = safeWin;
		
        sandbox.document = sandbox.window.document;
        sandbox.unsafeWindow = unsafeWin;
        sandbox.prototype = Object.create(sandbox.window);
        sandbox.firefox = {};
        sandbox.firefox.extension = new firefox.tabs.extension(tab.document);
        //sandbox.console = console;
        var code = (typeof details.code != "undefined"
                    ? details.code
                    : ( typeof details.file != "undefined" ? getFileContent(details.file) : undefined ) );
        if ( code ) {
            try {
                evalInSandbox( code, tab.url, sandbox );
            } catch ( e ) {
                console.log("[ERROR] " + e );
            }
        }
    };

    firefox.tabs.event_id = ns.extension_id+".tabs.Request";
    firefox.tabs.request = {};
    
    firefox.tabs.sendRequest = function(tab, request, requestCallback) {
        var evt = tab.document.createEvent("Events");
        evt.initEvent(firefox.tabs.event_id, true, false);
        firefox.tabs.request = {
            data: request,
            callback: requestCallback
        };
        tab.document.dispatchEvent(evt);
    };

    firefox.tabs.extension = function(doc) {
        this.document = doc;
        this.event_id = firefox.tabs.event_id;

        var listeners = [];
        var handler = function(evt) {
            var request = firefox.tabs.request;
            for ( var i=0; i<listeners.length; i++ ) {
                listeners[i](request.data, null, request.callback);
            }
        };

        this.onRequest = {
            addListener: function(listener) {
                listeners.push(listener);
            },
            
            removeListener: function(listener) {
                for ( var i=0; i<listeners.length; i++ ) {
                    if ( listener == listeners[i] ) {
                        listeners.splice(i, 1);
                    }
                }
            }
        };
        doc.addEventListener(firefox.tabs.event_id, handler, false);
    };
    
    var listeners = [];
    firefox.tabs.extension.prototype.sendRequest = function(request, responseCallback) {
        if ( typeof responseCallback!="function" ) {
            responseCallback = function() {};
        }
        for ( var i=0; i<listeners.length; i++ ) {
            listeners[i](request, { tab: documentToTab(this.document) }, responseCallback);
        }
    };

    firefox.extension = {};
    firefox.extension.onRequest = {
        addListener: function(listener) {
            listeners.push(listener);
        },
        removeListener: function(listener) {
            for ( var i=0; i<listeners.length; i++ ) {
                if ( listener == listeners[i] ) {
                    listeners.splice(i, 1);
                }
            }
        }
    };
})(TurnOfftheLights);

window.addEventListener("load", function() {TurnOfftheLights.init();}, false);