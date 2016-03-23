//================================================
/*

Turn Off the Lights
The entire page will be fading to dark, so you can watch the videos as if you were in the cinema.
Copyright (C) 2016 Stefan vd
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

function $(id) { return document.getElementById(id); }
var default_opacity = 80;
var default_arangeblur = 70;
var default_arangespread = 20;

// Firefox read pref
var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

// Option to save current value to window.localStorage
function save_options(){
	prefManager.setCharPref("extensions.TurnOfftheLights.interval", $('interval').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.lightcolor", $('lightcolor').value);
	if($('pageaction').checked) prefManager.setBoolPref("extensions.TurnOfftheLights.pageaction", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.pageaction", false);
	if($('autoplay').checked) prefManager.setBoolPref("extensions.TurnOfftheLights.autoplay", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.autoplay", false);
	if($('playlist').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.playlist", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.playlist", false);
	if($('flash').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.flash", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.flash", false);
	if($('head').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.head", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.head", false);
	if($('fadein').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.fadein", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.fadein", false);
	if($('fadeout').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.fadeout", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.fadeout", false);
	if($('infobar').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.infobar", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.infobar", false);
	if($('sharebutton').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.sharebutton", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.sharebutton", false);
	if($('likebutton').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.likebutton", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.likebutton", false);
	if($('readera').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.readera", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.readera", false);
	if($('readern').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.readern", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.readern", false);
	if($('shortcutlight').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.shortcutlight", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.shortcutlight", false);
	if($('eyea').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.eyea", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.eyea", false);
	if($('eyen').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.eyen", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.eyen", false);
	if($('suggestions').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.suggestions", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.suggestions", false);
	if($('videoheadline').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.videoheadline", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.videoheadline", false);
	if($('eastereggs').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.eastereggs", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.eastereggs", false);
	if($('contextmenus').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.contextmenus", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.contextmenus", false);
	if($('viewcount').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.viewcount", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.viewcount", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.lightimage", $('lightimage').value);
	if($('lightimagea').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagea", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagea", false);
	if($('lightimagen').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagen", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagen", false);
	if($('eyealist').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.eyealist", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.eyealist", false);
	if($('mousespotlighto').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlighto", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlighto", false);
	if($('mousespotlighta').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlighta", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlighta", false);
	if($('mousespotlightc').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlightc", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlightc", false);
	if($('nighttime').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nighttime", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nighttime", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.begintime", $('begintime').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.endtime", $('endtime').value);
	if($('addvideobutton').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.addvideobutton", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.addvideobutton", false);
	if($('likebar').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.likebar", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.likebar", false);
	if($('ambilight').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.ambilightrangeblurradius", $('ambilightrangeblurradius').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.ambilightrangespreadradius", $('ambilightrangespreadradius').value);
	if($('mousespotlightt').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlightt", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlightt", false);
	if($('ambilightfixcolor').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightfixcolor", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightfixcolor", false);
	if($('ambilightvarcolor').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightvarcolor", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightvarcolor", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.ambilightcolorhex", $('ambilightcolorhex').value);
	if($('ambilight4color').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight4color", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight4color", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.ambilight1colorhex", $('ambilight1colorhex').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.ambilight2colorhex", $('ambilight2colorhex').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.ambilight3colorhex", $('ambilight3colorhex').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.ambilight4colorhex", $('ambilight4colorhex').value);
	if($('password').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.password", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.password", false);

	// Save password in the Login Manager
	/*var hostname = "chrome://TurnOfftheLights";
	var formSubmitURL = "chrome://TurnOfftheLights";
	var httprealm = 'Turn Off the Lights login';
	var username = 'user';
	var password = $('enterpassword').value;
  
	try {
		var nsLoginInfo = new Components.Constructor("@mozilla.org/login-manager/loginInfo;1", Components.interfaces.nsILoginInfo, "init"); 
		var loginInfo = new nsLoginInfo(hostname, formSubmitURL, httprealm, username, password, "", "");
		// find old login 
		var loginManager = Components.classes["@mozilla.org/login-manager;1"].getService(Components.interfaces.nsILoginManager);
		var logins = loginManager.findLogins({}, hostname, formSubmitURL, httprealm);
		if (logins.length > 0) {
		loginManager.removeLogin(logins[0]); // delete it
		}
		// add new login
		loginManager.addLogin(loginInfo);
	}
	catch(ex) {*/
	// use the old way
	prefManager.setCharPref("extensions.TurnOfftheLights.enterpassword", $('enterpassword').value); // old
	//}
	
	if($('ecosaver').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.ecosaver", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.ecosaver", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.ecosavertime", $('ecosavertime').value);	
	if($('dynamic').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic", false);
	if($('dynamic1').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic1", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic1", false);	
	if($('dynamic2').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic2", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic2", false);
	if($('dynamic3').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic3", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic3", false);	
	if($('dynamic4').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic4", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic4", false);		
	if($('dynamic5').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic5", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic5", false);
    if($('dynamic6').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic6", true);
    else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic6", false);
	if($('dynamic7').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic7", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic7", false);
	if($('dynamic8').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic8", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic8", false);
	if($('dynamic9').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic9", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic9", false);
	if($('dynamic10').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic10", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic10", false);
	if($('noflash').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.noflash", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.noflash", false);
	if($('hardflash').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.hardflash", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.hardflash", false);
	if($('hoveroptiondyn5').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.hoveroptiondyn5", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.hoveroptiondyn5", false);
	if($('autoplayonly').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.autoplayonly", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.autoplayonly", false);	
	if($('blur').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.blur", true);	
	else prefManager.setBoolPref("extensions.TurnOfftheLights.blur", false);	
	var ytselq = document.getElementById("youtubequality");
	prefManager.setCharPref("extensions.TurnOfftheLights.maxquality", ytselq.options[ytselq.selectedIndex].value);
	if($('autowidthyoutube').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.autowidthyoutube", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.autowidthyoutube", false);
	if($('customqualityyoutube').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.customqualityyoutube", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.customqualityyoutube", false);
	if($('cinemaontop').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.cinemaontop", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.cinemaontop", false);
	if($('alllightsoff').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.alllightsoff", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.alllightsoff", false);
	if($('enablesync').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.enablesync", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.enablesync", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.spotlightradius", $('spotlightradius').value);
	if($('atmosphereonly').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.atmosphereonly", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.atmosphereonly", false);
	if($('optionskipremember').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.optionskipremember", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.optionskipremember", false);
	if($('nighttheme').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nighttheme", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nighttheme", false);
	if($('nightonly').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nightonly", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nightonly", false);
	if($('nightenabletheme').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nightenabletheme", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nightenabletheme", false);
	if($('autoplaydelay').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaydelay", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaydelay", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.autoplaydelaytime", $('autoplaydelaytime').value);
	if($('motion').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.motion", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.motion", false);
	if($('lightimagelin').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagelin", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagelin", false);
	var linearsq = document.getElementById("linearsq");
	prefManager.setCharPref("extensions.TurnOfftheLights.linearsq", linearsq.options[linearsq.selectedIndex].value);
	prefManager.setCharPref("extensions.TurnOfftheLights.colora", $('colora').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.intervallina", $('intervallina').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.colorb", $('colorb').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.intervallinb", $('intervallinb').value);
	if($('speech').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.speech", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.speech", false);
	var webspeechlang = document.getElementById("select_language");
	if (webspeechlang.selectedIndex != -1){prefManager.setCharPref("extensions.TurnOfftheLights.speechlang", webspeechlang.options[webspeechlang.selectedIndex].value);}
	var webspeechcountry = document.getElementById("select_dialect");
	if (webspeechcountry.selectedIndex != -1){prefManager.setCharPref("extensions.TurnOfftheLights.speechcountry", webspeechcountry.options[webspeechcountry.selectedIndex].value);}
	if($('atmosvivid').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.atmosvivid", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.atmosvivid", false);
	if($('cammotiononly').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.cammotiononly", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.cammotiononly", false);
	if($('speechonly').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.speechonly", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.speechonly", false);
	if($('autoplaychecklistwhite').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaychecklistwhite", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaychecklistwhite", false);
	if($('autoplaychecklistblack').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaychecklistblack", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaychecklistblack", false);
	if($('autostop').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.autostop", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.autostop", false);
	if($('autostoponly').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.autostoponly", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.autostoponly", false);
	if($('autostopchecklistwhite').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.autostopchecklistwhite", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.autostopchecklistwhite", true);
	if($('autostopchecklistblack').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.autostopchecklistblack", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.autostopchecklistblack", false);
	if($('nighthover').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nighthover", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nighthover", false);
	if($('nightmodechecklistwhite').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nightmodechecklistwhite", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nightmodechecklistwhite", false);
	if($('nightmodechecklistblack').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nightmodechecklistblack", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nightmodechecklistblack", false);
	if($('nmtopleft').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nmtopleft", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nmtopleft", false);
	if($('nmtopright').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nmtopright", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nmtopright", false);
	if($('nmbottomright').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nmbottomright", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nmbottomright", false);	
	if($('nmbottomleft').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nmbottomleft", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nmbottomleft", false);
	if($('nmcustom').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nmcustom", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nmcustom", false);
	if($('nightactivetime').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.nightactivetime", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.nightactivetime", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.nmbegintime", $('nmbegintime').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.nmendtime", $('nmendtime').value);
	if($('lampandnightmode').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.lampandnightmode", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.lampandnightmode", false);
	if($('eyechecklistwhite').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.eyechecklistwhite", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.eyechecklistwhite", false);
	if($('eyechecklistblack').checked)prefManager.setBoolPref("extensions.TurnOfftheLights.eyechecklistblack", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.eyechecklistblack", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.nightmodebck", $('nightmodebck').value);
	prefManager.setCharPref("extensions.TurnOfftheLights.nightmodetxt", $('nightmodetxt').value);
	if ($('no360youtube').checked) prefManager.setBoolPref("extensions.TurnOfftheLights.no360youtube", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.no360youtube", false);
	if ($('videotool').checked) prefManager.setBoolPref("extensions.TurnOfftheLights.videotool", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.videotool", false);
	if ($('reflection').checked) prefManager.setBoolPref("extensions.TurnOfftheLights.reflection", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.reflection", false);
	prefManager.setCharPref("extensions.TurnOfftheLights.reflectionamount", $('reflectionamount').value);
	if ($('videotoolonly').checked) prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolonly", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolonly", false);
	if ($('videotoolchecklistwhite').checked) prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolchecklistwhite", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolchecklistwhite", false);
	if ($('videotoolchecklistblack').checked) prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolchecklistblack", true);
	else prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolchecklistblack", false);
	
// Excluded domains
var excludedDomainsBox = $("excludedDomainsBox");
var excludedDomains = {};
for (var i = 0; i < excludedDomainsBox.length; i++)
	excludedDomains[excludedDomainsBox.options[i].value] = true;
	prefManager.setCharPref("extensions.TurnOfftheLights.excludedDomains", JSON.stringify(excludedDomains));
	
// autoplay Excluded domains
var autoplayDomainsBox = $("autoplayDomainsBox");
var autoplayDomains = {};
for (var i = 0; i < autoplayDomainsBox.length; i++)
	autoplayDomains[autoplayDomainsBox.options[i].value] = true;
	prefManager.setCharPref("extensions.TurnOfftheLights.autoplayDomains", JSON.stringify(autoplayDomains));

// atmosphere Excluded domains
var atmosphereDomainsBox = $("atmosphereDomainsBox");
var atmosphereDomains = {};
for (var i = 0; i < atmosphereDomainsBox.length; i++)
	atmosphereDomains[atmosphereDomainsBox.options[i].value] = true;
	prefManager.setCharPref("extensions.TurnOfftheLights.atmosphereDomains", JSON.stringify(atmosphereDomains));
	
// night Excluded domains
var nightDomainsBox = $("nightDomainsBox");
var nightDomains = {};
for (var i = 0; i < nightDomainsBox.length; i++)
	nightDomains[nightDomainsBox.options[i].value] = true;
	prefManager.setCharPref("extensions.TurnOfftheLights.nightDomains", JSON.stringify(nightDomains));
	
// cammotion Excluded domains
var cammotionDomainsBox = $("cammotionDomainsBox");
var cammotionDomains = {};
for (var i = 0; i < cammotionDomainsBox.length; i++)
	cammotionDomains[cammotionDomainsBox.options[i].value] = true;
	prefManager.setCharPref("extensions.TurnOfftheLights.cammotionDomains", JSON.stringify(cammotionDomains));
	
// speech Excluded domains
var speechDomainsBox = $("speechDomainsBox");
var speechDomains = {};
for (var i = 0; i < speechDomainsBox.length; i++)
	speechDomains[speechDomainsBox.options[i].value] = true;
	prefManager.setCharPref("extensions.TurnOfftheLights.speechDomains", JSON.stringify(speechDomains));
	
// autostop Excluded domains
var autostopDomainsBox = $("autostopDomainsBox");
var autostopDomains = {};
for (var i = 0; i < autostopDomainsBox.length; i++)
	autostopDomains[autostopDomainsBox.options[i].value] = true;
	prefManager.setCharPref("extensions.TurnOfftheLights.autostopDomains", JSON.stringify(autostopDomains));

// videotool Excluded domains
var videotoolDomainsBox = $("videotoolDomainsBox");
var videotoolDomains = {};
for (var i = 0; i < videotoolDomainsBox.length; i++)
	videotoolDomains[videotoolDomainsBox.options[i].value] = true;
    prefManager.setCharPref("extensions.TurnOfftheLights.videotoolDomains", JSON.stringify(autostopDomains));
}

// Option to read current value from window.localStorage
// nothing must be set here
// firefox read it from the pref.js file

function read_options(){
// speech
var langs =
[['Afrikaans',       ['af-ZA']],
 ['Bahasa Indonesia',['id-ID']],
 ['Bahasa Melayu',   ['ms-MY']],
 ['Català',          ['ca-ES']],
 ['Čeština',         ['cs-CZ']],
 ['Deutsch',         ['de-DE']],
 ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-NZ', 'New Zealand'],
                     ['en-ZA', 'South Africa'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],
 ['Español',         ['es-AR', 'Argentina'],
                     ['es-BO', 'Bolivia'],
                     ['es-CL', 'Chile'],
                     ['es-CO', 'Colombia'],
                     ['es-CR', 'Costa Rica'],
                     ['es-EC', 'Ecuador'],
                     ['es-SV', 'El Salvador'],
                     ['es-ES', 'España'],
                     ['es-US', 'Estados Unidos'],
                     ['es-GT', 'Guatemala'],
                     ['es-HN', 'Honduras'],
                     ['es-MX', 'México'],
                     ['es-NI', 'Nicaragua'],
                     ['es-PA', 'Panamá'],
                     ['es-PY', 'Paraguay'],
                     ['es-PE', 'Perú'],
                     ['es-PR', 'Puerto Rico'],
                     ['es-DO', 'República Dominicana'],
                     ['es-UY', 'Uruguay'],
                     ['es-VE', 'Venezuela']],
 ['Euskara',         ['eu-ES']],
 ['Français',        ['fr-FR']],
 ['Galego',          ['gl-ES']],
 ['Hrvatski',        ['hr_HR']],
 ['IsiZulu',         ['zu-ZA']],
 ['Íslenska',        ['is-IS']],
 ['Italiano',        ['it-IT', 'Italia'],
                     ['it-CH', 'Svizzera']],
 ['Magyar',          ['hu-HU']],
 ['Nederlands',      ['nl-NL']],
 ['Norsk bokmål',    ['nb-NO']],
 ['Polski',          ['pl-PL']],
 ['Português',       ['pt-BR', 'Brasil'],
                     ['pt-PT', 'Portugal']],
 ['Română',          ['ro-RO']],
 ['Slovenčina',      ['sk-SK']],
 ['Suomi',           ['fi-FI']],
 ['Svenska',         ['sv-SE']],
 ['Türkçe',          ['tr-TR']],
 ['български',       ['bg-BG']],
 ['Pусский',         ['ru-RU']],
 ['Српски',          ['sr-RS']],
 ['한국어',            ['ko-KR']],
 ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                     ['cmn-Hans-HK', '普通话 (香港)'],
                     ['cmn-Hant-TW', '中文 (台灣)'],
                     ['yue-Hant-HK', '粵語 (香港)']],
 ['日本語',           ['ja-JP']],
 ['Lingua latīna',   ['la']]];

for (var i = 0; i < langs.length; i++) {
if($("select_language")){ $("select_language").options[i] = new Option(langs[i][0], i); }
}

function updateCountry() {
	for (var i = $("select_dialect").options.length - 1; i >= 0; i--) {
		$("select_dialect").remove(i);
	}
	var list = langs[select_language.selectedIndex];
	for (var i = 1; i < list.length; i++) {
		$("select_dialect").options.add(new Option(list[i][1], list[i][0]));
	}
	$("select_dialect").style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}

$("select_language").addEventListener('click', function () {updateCountry();},false);
$("select_language").addEventListener('change', function() {updateCountry();save_options();});
$("select_dialect").addEventListener('change', function() {save_options();});

	if(prefManager.getCharPref("extensions.TurnOfftheLights.interval")){$('interval').value = prefManager.getCharPref("extensions.TurnOfftheLights.interval");$('slider').value = prefManager.getCharPref("extensions.TurnOfftheLights.interval");}
	else $('interval').value = 80;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.lightcolor")){$('lightcolor').value = prefManager.getCharPref("extensions.TurnOfftheLights.lightcolor");}
	else {$('lightcolor').value = '#000000';}
	if(prefManager.getCharPref("extensions.TurnOfftheLights.lightimage")){$('lightimage').value = prefManager.getCharPref("extensions.TurnOfftheLights.lightimage");}
	else {$('lightimage').value = "http://turnoffthelights.googlecode.com/files/theater.jpg";}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.lightimagea") == true)$('lightimagea').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.lightimagen") == true)$('lightimagen').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.pageaction") == true)$('pageaction').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autoplay") == true)$('autoplay').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.playlist") == true)$('playlist').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.flash") == true)$('flash').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.head") == true)$('head').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.fadein") == true)$('fadein').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.fadeout") == true)$('fadeout').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.infobar") == true)$('infobar').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.sharebutton") == true)$('sharebutton').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.likebutton") == true)$('likebutton').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.readera") == true)$('readera').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.readern") == true)$('readern').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.shortcutlight") == true)$('shortcutlight').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.eyea") == true)$('eyea').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.eyen") == true)$('eyen').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.suggestions") == true)$('suggestions').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.videoheadline") == true)$('videoheadline').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.eastereggs") == true)$('eastereggs').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.contextmenus") == true)$('contextmenus').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.viewcount") == true)$('viewcount').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.eyealist") == true)$('eyealist').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.mousespotlighto") == true)$('mousespotlighto').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.mousespotlightc") == true)$('mousespotlightc').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.mousespotlighta") == true)$('mousespotlighta').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nighttime") == true)$('nighttime').checked = true;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.begintime")){$('begintime').value = prefManager.getCharPref("extensions.TurnOfftheLights.begintime");}
	else {$('begintime').value = "21:00";}
	if(prefManager.getCharPref("extensions.TurnOfftheLights.endtime")){$('endtime').value = prefManager.getCharPref("extensions.TurnOfftheLights.endtime");}
	else {$('endtime').value = "23:45";}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.addvideobutton") == true)$('addvideobutton').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.likebar") == true)$('likebar').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.ambilight") == true){$('ambilight').checked = true;}
	if(prefManager.getCharPref("extensions.TurnOfftheLights.ambilightrangeblurradius")){$('ambilightrangeblurradius').value = prefManager.getCharPref("extensions.TurnOfftheLights.ambilightrangeblurradius");$('arangeblur').value = prefManager.getCharPref("extensions.TurnOfftheLights.ambilightrangeblurradius");}
	else $('ambilightrangeblurradius').value = 70;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.ambilightrangespreadradius")){$('ambilightrangespreadradius').value = prefManager.getCharPref("extensions.TurnOfftheLights.ambilightrangespreadradius");$('arangespread').value = prefManager.getCharPref("extensions.TurnOfftheLights.ambilightrangespreadradius");}
	else $('ambilightrangespreadradius').value = 20;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.mousespotlightt") == true)$('mousespotlightt').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.ambilightfixcolor") == true)$('ambilightfixcolor').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.ambilightvarcolor") == true)$('ambilightvarcolor').checked = true;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.ambilightcolorhex"))$('ambilightcolorhex').value = prefManager.getCharPref("extensions.TurnOfftheLights.ambilightcolorhex");
	else $('ambilightcolorhex').value = '#47C2FF';
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.ambilight4color") == true)$('ambilight4color').checked = true;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.ambilight1colorhex"))$('ambilight1colorhex').value = prefManager.getCharPref("extensions.TurnOfftheLights.ambilight1colorhex");
	else $('ambilight1colorhex').value = '#FF0000';
	if(prefManager.getCharPref("extensions.TurnOfftheLights.ambilight2colorhex"))$('ambilight2colorhex').value = prefManager.getCharPref("extensions.TurnOfftheLights.ambilight2colorhex");
	else $('ambilight2colorhex').value = '#FFEE00';
	if(prefManager.getCharPref("extensions.TurnOfftheLights.ambilight3colorhex"))$('ambilight3colorhex').value = prefManager.getCharPref("extensions.TurnOfftheLights.ambilight3colorhex");
	else $('ambilight3colorhex').value = '#00FF00';
	if(prefManager.getCharPref("extensions.TurnOfftheLights.ambilight4colorhex"))$('ambilight4colorhex').value = prefManager.getCharPref("extensions.TurnOfftheLights.ambilight4colorhex");
	else $('ambilight4colorhex').value = '#0000FF';
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.password") == true)$('password').checked = true;

	// Get password from the Login Manager
	// https://developer.mozilla.org/en/Using_nsILoginManager
	/*var hostname = "chrome://TurnOfftheLights";
	var formSubmitURL = "chrome://TurnOfftheLights";
	var httprealm = 'Turn Off the Lights login';
	var username = 'user';
	try { 
		var loginManager = Components.classes["@mozilla.org/login-manager;1"].getService(Components.interfaces.nsILoginManager);
		var logins = loginManager.findLogins({}, hostname, formSubmitURL, httprealm);
		for (var i = 0; i < logins.length; i++) {
		if (logins[i].username == username) {  
			$('enterpassword').value = logins[i].password;  
			break; 
		}  
		}
	}
	catch(ex) {*/
	if(prefManager.getCharPref("extensions.TurnOfftheLights.enterpassword"))$('enterpassword').value = prefManager.getCharPref("extensions.TurnOfftheLights.enterpassword"); // old
	//}	
	
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.noflash") == true)$('noflash').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.hardflash") == true)$('hardflash').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.ecosaver") == true)$('ecosaver').checked = true;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.ecosavertime"))$('ecosavertime').value = prefManager.getCharPref("extensions.TurnOfftheLights.ecosavertime");
	else $('ecosavertime').value = 60;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic") == true)$('dynamic').checked = true;
	else $('lightdynamic').disabled = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic1") == true){$('dynamic1').checked = true;$("lightdynamic").value = chrome.i18n.getMessage('desdynamicfishtank');}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic2") == true){$('dynamic2').checked = true;$("lightdynamic").value = chrome.i18n.getMessage('desdynamicblocks');}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic3") == true){$('dynamic3').checked = true;$("lightdynamic").value = chrome.i18n.getMessage('desdynamicraindrops');}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic4") == true){$('dynamic4').checked = true;$("lightdynamic").value = chrome.i18n.getMessage('desdynamiccloud');}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic5") == true){$('dynamic5').checked = true; $("lightdynamic").value = chrome.i18n.getMessage('desdynamicspace'); }
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic6") == true){$('dynamic6').checked = true; $("lightdynamic").value = chrome.i18n.getMessage('desdynamicsmoke'); }
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic7") == true){$('dynamic7').checked = true; $("lightdynamic").value = chrome.i18n.getMessage('desdynamicdotscolor'); }
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic8") == true){$('dynamic8').checked = true; $("lightdynamic").value = chrome.i18n.getMessage('desdynamicstorm'); }
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic9") == true){$('dynamic9').checked = true; $("lightdynamic").value = chrome.i18n.getMessage('desdynamictriangulation'); }
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.dynamic10") == true){$('dynamic10').checked = true;$("lightdynamic").value = chrome.i18n.getMessage('desdynamicstars');}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.hoveroptiondyn5") == true){$('hoveroptiondyn5').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autoplayonly") == true)$('autoplayonly').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.blur") == true)$('blur').checked = true;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.maxquality"))$('youtubequality').value = prefManager.getCharPref("extensions.TurnOfftheLights.maxquality");
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autowidthyoutube") == true)$('autowidthyoutube').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.customqualityyoutube") == true)$('customqualityyoutube').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.cinemaontop") == true)$('cinemaontop').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.alllightsoff") == true)$('alllightsoff').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.enablesync") == true)$('enablesync').checked = true;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.spotlightradius"))$('spotlightradius').value = prefManager.getCharPref("extensions.TurnOfftheLights.spotlightradius");
	else $('spotlightradius').value = 50;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.atmosphereonly") == true){$('atmosphereonly').checked = true;}
	else{$('atmosphereonly').checked = false;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.optionskipremember") == true){$('optionskipremember').checked = true;$('firstcheckboxskipremember').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nighttheme") == true)$('nighttheme').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nightonly") == true){$('nightonly').checked = true;$}
	else{$('nightonly').checked = false;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nightenabletheme") == true)$('nightenabletheme').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autoplaydelay") == true)$('autoplaydelay').checked = true;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.autoplaydelaytime"))$('autoplaydelaytime').value = prefManager.getCharPref("extensions.TurnOfftheLights.autoplaydelaytime");
	else $('autoplaydelaytime').value = 3;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.motion") == true)$('motion').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.lightimagelin") == true)$('lightimagelin').checked = true;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.linearsq"))$('linearsq').value = prefManager.getCharPref("extensions.TurnOfftheLights.linearsq");
	else $('linearsq').value = "top";
	if(prefManager.getCharPref("extensions.TurnOfftheLights.colora")){$('colora').value = prefManager.getCharPref("extensions.TurnOfftheLights.colora");}
	else {$('colora').value = '#000000';}
	if(prefManager.getCharPref("extensions.TurnOfftheLights.intervallina")){$('intervallina').value = prefManager.getCharPref("extensions.TurnOfftheLights.intervallina");}
	else {$('intervallina').value = '0';}
	if(prefManager.getCharPref("extensions.TurnOfftheLights.colorb")){$('colorb').value = prefManager.getCharPref("extensions.TurnOfftheLights.colorb");}
	else {$('colorb').value = '#858585';}
	if(prefManager.getCharPref("extensions.TurnOfftheLights.intervallinb")){$('intervallinb').value = prefManager.getCharPref("extensions.TurnOfftheLights.intervallinb");}
	else {$('intervallinb').value = '100';}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.speech") == true)$('speech').checked = true;
	if(prefManager.getCharPref("extensions.TurnOfftheLights.speechlang")){$("select_language").selectedIndex = prefManager.getCharPref("extensions.TurnOfftheLights.speechlang");updateCountry();}
	if(prefManager.getCharPref("extensions.TurnOfftheLights.speechcountry"))$('select_dialect').value = prefManager.getCharPref("extensions.TurnOfftheLights.speechcountry");
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.atmosvivid") == true)$('atmosvivid').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.cammotiononly") == true){$('cammotiononly').checked = true;}
	else{$('cammotiononly').checked = false;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.speechonly") == true){$('speechonly').checked = true;}
	else{$('speechonly').checked = false;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autoplaychecklistwhite") == true){$('autoplaychecklistwhite').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autoplaychecklistblack") == true){$('autoplaychecklistblack').checked = true;}	
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autoplaychecklistwhite") == true){$('autoplaychecklistwhite').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autoplaychecklistblack") == true){$('autoplaychecklistblack').checked = true;}
		// Firefox 4 and later; Mozilla 2 and later
		var versionb;
		try {
		Components.utils.import("resource://gre/modules/AddonManager.jsm");
		AddonManager.getAddonByID("stefanvandamme@stefanvd.net", function(addon) {
			versionb = addon.version;
		
	if(prefManager.getCharPref("extensions.TurnOfftheLights.reviewedlastonversion") == versionb){$("sectionreviewbox").style.display = "none";}
	if(prefManager.getCharPref("extensions.TurnOfftheLights.applastonversion") == versionb){$("sectionauroraplayerappbox").style.display = "none";}
	if (prefManager.getCharPref("extensions.TurnOfftheLights.mobilelastonversion") == versionb) { $("sectionmobileappbox").style.display = "none"; }

		})
		} catch (ex) {} // silently fail
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autostop") == true)$('autostop').checked = true;
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autostoponly") == true){$('autostoponly').checked = true;}
	else{$('autostoponly').checked = false;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autostopchecklistwhite") == true){$('autostopchecklistwhite').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.autostopchecklistblack") == true){$('autostopchecklistblack').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nighthover") == true){$('nighthover').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nightmodechecklistwhite") == true){$('nightmodechecklistwhite').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nightmodechecklistblack") == true){$('nightmodechecklistblack').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nmtopleft") == true){$('nmtopleft').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nmtopright") == true){$('nmtopright').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nmbottomright") == true){$('nmbottomright').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nmbottomleft") == true){$('nmbottomleft').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nmcustom") == true){$('nmcustom').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.nightactivetime") == true){$('nightactivetime').checked = true;}
	if(prefManager.getCharPref("extensions.TurnOfftheLights.nmbegintime")){$('nmbegintime').value = prefManager.getCharPref("extensions.TurnOfftheLights.nmbegintime");}
	else {$('nmbegintime').value = "21:00";}
	if(prefManager.getCharPref("extensions.TurnOfftheLights.nmendtime")){$('nmendtime').value = prefManager.getCharPref("extensions.TurnOfftheLights.nmendtime");}
	else {$('nmendtime').value = "23:45";}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.lampandnightmode") == true){$('lampandnightmode').checked = true;}
	else{$('lampandnightmode').checked = false;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.eyechecklistwhite") == true){$('eyechecklistwhite').checked = true;}
	if(prefManager.getBoolPref("extensions.TurnOfftheLights.eyechecklistblack") == true){$('eyechecklistblack').checked = true;}
	if (prefManager.getCharPref("extensions.TurnOfftheLights.nightmodebck")) { $('nightmodebck').value = prefManager.getCharPref("extensions.TurnOfftheLights.nightmodebck"); }
	else { $('nightmodebck').value = "#000000"; }
	if (prefManager.getCharPref("extensions.TurnOfftheLights.nightmodetxt")) { $('nightmodetxt').value = prefManager.getCharPref("extensions.TurnOfftheLights.nightmodetxt"); }
	else { $('nightmodetxt').value = "#ffffff"; }
	if (prefManager.getBoolPref("extensions.TurnOfftheLights.no360youtube") == true) { $('no360youtube').checked = true; }
	if (prefManager.getBoolPref("extensions.TurnOfftheLights.videotool") == true) { $('videotool').checked = true; }
	if (prefManager.getBoolPref("extensions.TurnOfftheLights.reflection") == true) { $('reflection').checked = true; }
	if (prefManager.getCharPref("extensions.TurnOfftheLights.reflectionamount")) { $('reflectionamount').value = prefManager.getCharPref("extensions.TurnOfftheLights.reflectionamount"); }
	else { $('reflectionamount').value = "20"; }
	if (prefManager.getBoolPref("extensions.TurnOfftheLights.videotoolonly") == true) { $('videotoolonly').checked = true; }
	if (prefManager.getBoolPref("extensions.TurnOfftheLights.videotoolchecklistwhite") == true) { $('videotoolchecklistwhite').checked = true; }
	if (prefManager.getBoolPref("extensions.TurnOfftheLights.videotoolchecklistblack") == true) { $('videotoolchecklistblack').checked = true; }

// show remember page
var countremember = prefManager.getCharPref("extensions.TurnOfftheLights.countremember");
if(!countremember){countremember = 0;}
countremember = parseInt(countremember) + 1;

if($('optionskipremember').checked != true){
	if(countremember >= 10) {$('remembershare').style.display = "";countremember = 0;}
	else {$('remembershare').style.display = "none";}
} else {$('remembershare').style.display = "none";}

prefManager.setCharPref("extensions.TurnOfftheLights.countremember", countremember);
	
	// load tab div
	var tabListItems = $('navbar').childNodes;
	for ( var i = 0; i < tabListItems.length; i++ ) {
		if ( tabListItems[i].nodeName == 'LI' ) {
		var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
		var id = getHash( tabLink.getAttribute('onclick') );
		tabLinks[id] = tabLink;
		contentDivs[id] = $( id );
        }
    }
  
    // Assign onclick events to the tab links, and
    // highlight the first tab
    var i = 0;
 
    for ( var id in tabLinks ) {
    	tabLinks[id].onclick = showTab;
		tabLinks[id].onfocus = function() { this.blur() };
		if ( i == 0 ) tabLinks[id].className = 'navbar-item-selected';
		i++;
    }
    
    // Hide all content divs except the first
    var i = 0;
 
    for ( var id in contentDivs ) {
    	if ( i != 0 ) contentDivs[id].className = 'page hidden';
        i++;
    }

    // open direct the tab to 'welcome' or the 'guide'
    var urlwebcomputer = unescape(('' + self.location.search).substring(1));
    if (urlwebcomputer == "welcome") {
        $("tabshare").click();
        var selectedId = getHash("tab6");

        // Highlight the selected tab, and dim all others.
        // Also show the selected content div, and hide all others.
        for (var id in contentDivs) {
            if (id == selectedId) {
                tabLinks[id].className = 'navbar-item-selected';
                contentDivs[id].className = 'page';
            } else {
                tabLinks[id].className = 'navbar-item';
                contentDivs[id].className = 'page hidden';
            }
        }
    } else if (urlwebcomputer == "welcomeguide") {
        $("tabguide").click();
        var selectedId = getHash("tab4");

        // Highlight the selected tab, and dim all others.
        // Also show the selected content div, and hide all others.
        for (var id in contentDivs) {
            if (id == selectedId) {
                tabLinks[id].className = 'navbar-item-selected';
                contentDivs[id].className = 'page';
            } else {
                tabLinks[id].className = 'navbar-item';
                contentDivs[id].className = 'page hidden';
            }
        }
    }

    // display version number
    function displayVersionNumber() {
	// Firefox 4 and later; Mozilla 2 and later
	try {
    Components.utils.import("resource://gre/modules/AddonManager.jsm");
    AddonManager.getAddonByID("stefanvandamme@stefanvd.net", function(addon) {
		$("version_number").textContent = addon.version;
	})
	} catch (ex) {} // silently fail
    }
    displayVersionNumber();

// Excluded domains - sort these alphabetically
var excludedDomains = prefManager.getCharPref("extensions.TurnOfftheLights.excludedDomains");
if(typeof excludedDomains == "undefined")
excludedDomains = JSON.stringify({'http://www.nytimes.com': true, 'http://www.blogger.com': true});
		
if(typeof excludedDomains == "string") {
	excludedDomains = JSON.parse(excludedDomains);
	var buf = [];
	for(var domain in excludedDomains)
		buf.push(domain);
        buf.sort();
	for(var i = 0; i < buf.length; i++)
		appendToListBox("excludedDomainsBox", buf[i]);
    }

// ambilight play detect
		var startambilight = window.setInterval(function () {
		try {
		var htmlplayer = document.getElementsByTagName("video") || null;
		var playerid = null, item = null;
		for(var j=0; j<htmlplayer.length; j++) {
			if (htmlplayer[j].play){playerid = htmlplayer[j]; item = j + 1; drawImage(playerid, item);}
		}
		}
		catch(err) {} // i see nothing, that is good
		},20); // 20 refreshing it
	
// default example2 is not display
var example2 = $('example2'); // firefox fix
example2.style.opacity = 0;example2.style.display = 'none';
// default hide this buttons
var wallpapershow = $('wallpapershow'); // firefox fix
var dynamicshow = $('dynamicshow'); // firefox fix
wallpapershow.style.display = 'none';dynamicshow.style.display = 'none';

// autoplay - Excluded domains - sort these alphabetically
var autoplayDomains = prefManager.getCharPref("extensions.TurnOfftheLights.autoplayDomains");
if(typeof autoplayDomains == "undefined")
autoplayDomains = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true, 'http://www.vimeo.com': true});
		
if(typeof autoplayDomains == "string") {
	autoplayDomains = JSON.parse(autoplayDomains);
	var abuf = [];
	for(var domain in autoplayDomains)
		abuf.push(domain);
        abuf.sort();
	for(var i = 0; i < abuf.length; i++)
		appendToListBox("autoplayDomainsBox", abuf[i]);
    }
	
// atmosphere - Excluded domains - sort these alphabetically
var atmosphereDomains = prefManager.getCharPref("extensions.TurnOfftheLights.atmosphereDomains");
if(typeof atmosphereDomains == "undefined")
atmosphereDomains = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true, 'http://www.vimeo.com': true});
		
if(typeof atmosphereDomains == "string") {
	atmosphereDomains = JSON.parse(atmosphereDomains);
	var albuf = [];
	for(var domain in atmosphereDomains)
		albuf.push(domain);
        albuf.sort();
	for(var i = 0; i < albuf.length; i++)
		appendToListBox("atmosphereDomainsBox", albuf[i]);
    }

// night - Excluded domains - sort these alphabetically
var nightDomains = prefManager.getCharPref("extensions.TurnOfftheLights.nightDomains");
if(typeof nightDomains == "undefined")
nightDomains = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true, 'http://www.nytimes.com': true});

if(typeof nightDomains == "string") {
	nightDomains = JSON.parse(nightDomains);
	var nbuf = [];
	for(var domain in nightDomains)
		nbuf.push(domain);
        nbuf.sort();
	for(var i = 0; i < nbuf.length; i++)
		appendToListBox("nightDomainsBox", nbuf[i]);
    }
	
// cammotion - Excluded domains - sort these alphabetically
var cammotionDomains = prefManager.getCharPref("extensions.TurnOfftheLights.cammotionDomains");
if(typeof cammotionDomains == "undefined")
cammotionDomains = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true, 'http://www.vimeo.com': true});
		
if(typeof cammotionDomains == "string") {
	cammotionDomains = JSON.parse(cammotionDomains);
	var cmbuf = [];
	for(var domain in cammotionDomains)
		cmbuf.push(domain);
        cmbuf.sort();
	for(var i = 0; i < cmbuf.length; i++)
		appendToListBox("cammotionDomainsBox", cmbuf[i]);
    }

// speech - Excluded domains - sort these alphabetically
var speechDomains = prefManager.getCharPref("extensions.TurnOfftheLights.speechDomains");
if(typeof speechDomains == "undefined")
speechDomains = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true, 'http://www.vimeo.com': true});
		
if(typeof speechDomains == "string") {
	speechDomains = JSON.parse(speechDomains);
	var srbuf = [];
	for(var domain in speechDomains)
		srbuf.push(domain);
        srbuf.sort();
	for(var i = 0; i < srbuf.length; i++)
		appendToListBox("speechDomainsBox", srbuf[i]);
    }

// autostop - Excluded domains - sort these alphabetically
var autostopDomains = prefManager.getCharPref("extensions.TurnOfftheLights.autostopDomains");
if(typeof autostopDomains == "undefined")
autostopDomains = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true, 'http://www.vimeo.com': true});
		
if(typeof autostopDomains == "string") {
	autostopDomains = JSON.parse(autostopDomains);
	var asbuf = [];
	for(var domain in autostopDomains)
		asbuf.push(domain);
        asbuf.sort();
	for(var i = 0; i < asbuf.length; i++)
		appendToListBox("autostopDomainsBox", asbuf[i]);
    }

	
// video tool bar - Excluded domains - sort these alphabetically
var videotoolDomains = prefManager.getCharPref("extensions.TurnOfftheLights.videotoolDomains");
if(typeof videotoolDomains == "undefined")
videotoolDomains = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true, 'http://www.vimeo.com': true});
		
if(typeof videotoolDomains == "string") {
	videotoolDomains = JSON.parse(videotoolDomains);
	var vtbbuf = [];
	for(var domain in videotoolDomains)
		vtbbuf.push(domain);
        vtbbuf.sort();
	for(var i = 0; i < vtbbuf.length; i++)
		appendToListBox("videotoolDomainsBox", vtbbuf[i]);
    }
		
	test(); // everything readed, do the "test"
	
} // end read


// animation browser engine
window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();

var countA = 0, countB = 0, countC = 0; // start from zero (blur spread) and size (left right top under) position

// ambilight draw code
function drawImage(){
	var v = $("beeld");
	if(v.paused || v.ended){
	// v.style.setProperty("box-shadow", "" , "");

	// animation go out
	countA=countA-1;if (countA <= 0){countA=0;}
	countB=countB-1;if (countB <= 0){countB=0;}
	countC=countC-1;if (countC <= 0){countC=0;}
	var textcountA = countA + "px";
	var textcountB = countB + "px";

var canvas = $("totlCanvas1");
if(canvas){
	var context = canvas.getContext('2d');
	var imageData = context.getImageData(0, 0, 1, 1);
	var data = imageData.data;

	function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
	}

	var p1 = context.getImageData(0 , 0, 1, 1).data;
	var p2 = context.getImageData(1 , 0, 1, 1).data;
	var p3 = context.getImageData(2 , 0, 1, 1).data;
	var p4 = context.getImageData(3 , 0, 1, 1).data;
	var hex1 = "#" + ("000000" + rgbToHex(p1[0], p1[1], p1[2])).slice(-6);
	var hex2 = "#" + ("000000" + rgbToHex(p2[0], p2[1], p2[2])).slice(-6);
	var hex3 = "#" + ("000000" + rgbToHex(p3[0], p3[1], p3[2])).slice(-6);
	var hex4 = "#" + ("000000" + rgbToHex(p4[0], p4[1], p4[2])).slice(-6);
}
var downhex1 = hex1; if(!hex1){ hex1 = "#000000"; } // previous value
var downhex2 = hex2; if(!hex2){ hex2 = "#000000"; } // previous value
var downhex3 = hex3; if(!hex3){ hex3 = "#000000"; } // previous value
var downhex4 = hex4; if(!hex4){ hex4 = "#000000"; } // previous value

	var ambilightvarcolor = $('ambilightvarcolor'); // firefox fix
	var ambilightfixcolor = $('ambilightfixcolor'); // firefox fix
	var ambilight4color = $('ambilight4color'); // firefox fix
	if(ambilightvarcolor.checked == true){
	v.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + downhex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + downhex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex4 + ""; 
	}
	else if(ambilightfixcolor.checked == true){
	v.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + $("ambilightcolorhex").value + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + $("ambilightcolorhex").value + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + $("ambilightcolorhex").value + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + $("ambilightcolorhex").value + "";
	}
	else if(ambilight4color.checked == true){
	v.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + $("ambilight1colorhex").value + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + $("ambilight2colorhex").value + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + $("ambilight3colorhex").value + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + $("ambilight4colorhex").value + "";
	}
	// ----
	
	return false;
	}
	var ambilight = $('ambilight'); // firefox fix
	if(ambilight.checked == true){
    var showtime = $("beeld");
	var getblur = $('ambilightrangeblurradius').value + "px";
	var getspread = $('ambilightrangespreadradius').value + "px";
	
	var ambilightvarcolor = $('ambilightvarcolor'); // firefox fix
	var ambilightfixcolor = $('ambilightfixcolor'); // firefox fix
	var ambilight4color = $('ambilight4color'); // firefox fix
	// animate out and in
	if (countA < $('ambilightrangespreadradius').value){countA=countA+1;}
	if (countB < $('ambilightrangeblurradius').value){countB=countB+1;}
	if (countC < 20){countC=countC+.5;}
	var textcountA = countA + "px";
	var textcountB = countB + "px";
	
	if(ambilightvarcolor.checked == true){
    var sourceWidth = showtime.videoWidth;
    var sourceHeight = showtime.videoHeight;
    
var totlcheckcanvas = $("totlCanvas1");
if(totlcheckcanvas){}else{
 	var totlnewcanvas = document.createElement("canvas");
	totlnewcanvas.setAttribute('id','totlCanvas1');
	totlnewcanvas.width = "4";
	totlnewcanvas.height = "1";
	totlnewcanvas.style.display = "none";
	document.body.appendChild(totlnewcanvas);
	}

var canvas = $("totlCanvas1");
var context = canvas.getContext("2d");
var colorlamp1X = (sourceWidth * 50) /100; // up midden
var colorlamp1Y = (sourceHeight * 95) /100;
var colorlamp2X = (sourceWidth * 95) /100; // right midden
var colorlamp2Y = (sourceHeight * 50) /100;
var colorlamp3X = (sourceWidth * 50) /100; // down midden
var colorlamp3Y = (sourceHeight * 5) /100;
var colorlamp4X = (sourceWidth * 5) /100; // left midden
var colorlamp4Y = (sourceHeight * 50) /100;
	
	context.drawImage(showtime, colorlamp1X, colorlamp1Y, 1, 1, 0, 0, 1, 1);
	context.drawImage(showtime, colorlamp2X, colorlamp2Y, 1, 1, 1, 0, 1, 1);
	context.drawImage(showtime, colorlamp3X, colorlamp3Y, 1, 1, 2, 0, 1, 1);
	context.drawImage(showtime, colorlamp4X, colorlamp4Y, 1, 1, 3, 0, 1, 1);
	
    var imageData = context.getImageData(0, 0, 1, 1);
    var data = imageData.data;

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

    var p1 = context.getImageData(0 , 0, 1, 1).data; 
    var p2 = context.getImageData(1 , 0, 1, 1).data; 
    var p3 = context.getImageData(2 , 0, 1, 1).data; 
    var p4 = context.getImageData(3 , 0, 1, 1).data; 
    var hex1 = "#" + ("000000" + rgbToHex(p1[0], p1[1], p1[2])).slice(-6);
    var hex2 = "#" + ("000000" + rgbToHex(p2[0], p2[1], p2[2])).slice(-6);
    var hex3 = "#" + ("000000" + rgbToHex(p3[0], p3[1], p3[2])).slice(-6);
    var hex4 = "#" + ("000000" + rgbToHex(p4[0], p4[1], p4[2])).slice(-6);

	v.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + hex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + hex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + hex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + hex4 + "";
	} else if(ambilightfixcolor.checked == true){
	var fixhex = $("ambilightcolorhex").value;
	if(fixhex)fixhex = fixhex;else fixhex = '#000000';
	v.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + fixhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + fixhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + fixhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + fixhex + "";
	} else if(ambilight4color.checked == true){
	var fix1hex = $("ambilight1colorhex").value;
	var fix2hex = $("ambilight2colorhex").value;
	var fix3hex = $("ambilight3colorhex").value;
	var fix4hex = $("ambilight4colorhex").value;
	if(fix1hex)fix1hex = fix1hex;else fix1hex = '#000000';
	if(fix2hex)fix2hex = fix2hex;else fix2hex = '#000000';
	if(fix3hex)fix3hex = fix3hex;else fix3hex = '#000000';
	if(fix4hex)fix4hex = fix4hex;else fix4hex = '#000000';
	v.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + fix1hex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + fix2hex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + fix3hex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + fix4hex + "";
	}
	
	window.requestAnimFrame(drawImage);	
}else{v.style.setProperty("box-shadow", "", "");}
}

// Fade engine
//  Variable for the fade in and out effect
var opacity = 0;

var ReducingFinished = true;
var OpacityLevelIncrement = 10;   //  Percentage value: 1-100

//  Function determines whether we show or hide the item referenced by ElementID
function fader(ActionToTake)
{
  DIVElementById = $('example2');
  if (ActionToTake == 'hide')
  { opacity = default_opacity; reduceOpacity(); }
  else if (ActionToTake == 'show')
  { increaseOpacity(); }
}

//  Makes div increase
function increaseOpacity()
{
DIVElementById.style.display = '';
  //  If opacity level is less than default_opacity, we can still increase the opacity
  if ((opacity < default_opacity) && (ReducingFinished == true))
  {
	if ((opacity > (default_opacity-10)) && (ReducingFinished == true)){
    ReducingFinished = true;
    opacity  += (default_opacity - opacity);
    DIVElementById.style.opacity = opacity/100;
	window.requestAnimFrame(increaseOpacity);
	}
	else {
    ReducingFinished = true;
    opacity  += OpacityLevelIncrement;
    DIVElementById.style.opacity = opacity/100;
	window.requestAnimFrame(increaseOpacity);
	}
  }
  else
  {
    ReducingFinished = false;
  }
}

//  Makes div reduce
function reduceOpacity() 
{
  //  If opacity level is greater than 0, we can still reduce the opacity
  if ((opacity > 0) && (ReducingFinished == false))
  {
    ReducingFinished = false;
    opacity  -= OpacityLevelIncrement;
    DIVElementById.style.opacity = opacity/100;
	window.requestAnimFrame(reduceOpacity);
  }
  else
  {
    ReducingFinished = true;

    //  When finished, make sure the DIVElementById is set to remove element
    if (DIVElementById.style.opacity = '0')
    {DIVElementById.style.display = 'none';}
  }
}

// Add a filter string to the list box.
function appendToListBox(boxId, text) { var elt = document.createElement("option"); elt.text = text; elt.value = text; $(boxId).add(elt, null); }

// tabel script
    var tabLinks = new Array();
    var contentDivs = new Array();
 
    function showTab() {
      var selectedId = getHash( this.getAttribute('onclick') );
 
      // Highlight the selected tab, and dim all others.
      // Also show the selected content div, and hide all others.
      for ( var id in contentDivs ) {
        if ( id == selectedId ) {
          tabLinks[id].className = 'navbar-item-selected';
          contentDivs[id].className = 'page';
        } else {
          tabLinks[id].className = 'navbar-item';
          contentDivs[id].className = 'page hidden';
        }
      }
 
      // Stop the browser following the link
      return false;
    }
 
    function getFirstChildWithTagName( element, tagName ) {
      for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
      }
    }
 
    function getHash( url ) {
      var hashPos = url.lastIndexOf ( '#' );
      return url.substring( hashPos + 1 );
    }

// whitelist eye domain
function addWhitelistDomain() {
    var domain = $("websiteurl").value;
    appendToListBox("excludedDomainsBox", domain);
    save_options();
}

function removeSelectedExcludedDomain() {
    var excludedDomainsBox = $("excludedDomainsBox");
    for (var i = excludedDomainsBox.length-1; i >= 0; i--) {
        if (excludedDomainsBox.options[i].selected)
            excludedDomainsBox.remove(i);
    }
    save_options();
}

// whitelist autoplay domain
function autoplayaddWhitelistDomain() {
    var domain = $("autoplaywebsiteurl").value;
    appendToListBox("autoplayDomainsBox", domain);
    save_options();
}

function autoplayremoveSelectedExcludedDomain() {
    var autoplayDomainsBox = $("autoplayDomainsBox");
    for (var i = autoplayDomainsBox.length-1; i >= 0; i--) {
        if (autoplayDomainsBox.options[i].selected)
            autoplayDomainsBox.remove(i);
    }
    save_options();
}

// whitelist atmosphere domain
function atmosphereaddWhitelistDomain() {
    var domain = $("atmospherewebsiteurl").value;
    appendToListBox("atmosphereDomainsBox", domain);
    save_options();
}

function atmosphereremoveSelectedExcludedDomain() {
    var atmosphereDomainsBox = $("atmosphereDomainsBox");
    for (var i = atmosphereDomainsBox.length-1; i >= 0; i--) {
        if (atmosphereDomainsBox.options[i].selected)
            atmosphereDomainsBox.remove(i);
    }
    save_options();
}

// whitelist night domain
function nightaddWhitelistDomain() {
    var domain = $("nightwebsiteurl").value;
    appendToListBox("nightDomainsBox", domain);
    save_options();
}

function nightremoveSelectedExcludedDomain() {
    var nightDomainsBox = $("nightDomainsBox");
    for (var i =nightDomainsBox.length-1; i >= 0; i--) {
        if (nightDomainsBox.options[i].selected)
            nightDomainsBox.remove(i);
    }
    save_options();
}

// whitelist cam motion domain
function cammotionaddWhitelistDomain() {
    var domain = $("cammotionwebsiteurl").value;
    appendToListBox("cammotionDomainsBox", domain);
    save_options();
}

function cammotionremoveSelectedExcludedDomain() {
    var cammotionDomainsBox = $("cammotionDomainsBox");
    for (var i = cammotionDomainsBox.length-1; i >= 0; i--) {
        if (cammotionDomainsBox.options[i].selected)
            cammotionDomainsBox.remove(i);
    }
    save_options();
}

// whitelist speech domain
function speechaddWhitelistDomain() {
    var domain = $("speechwebsiteurl").value;
    appendToListBox("speechDomainsBox", domain);
    save_options();
}

function speechremoveSelectedExcludedDomain() {
    var speechDomainsBox = $("speechDomainsBox");
    for (var i = speechDomainsBox.length-1; i >= 0; i--) {
        if (speechDomainsBox.options[i].selected)
            speechDomainsBox.remove(i);
    }
    save_options();
}

// whitelist autostop domain
function autostopaddWhitelistDomain() {
    var domain = $("autostopwebsiteurl").value;
    appendToListBox("autostopDomainsBox", domain);
    save_options();
}

function autostopremoveSelectedExcludedDomain() {
    var autostopDomainsBox = $("autostopDomainsBox");
    for (var i = autostopDomainsBox.length-1; i >= 0; i--) {
        if (autostopDomainsBox.options[i].selected)
            autostopDomainsBox.remove(i);
    }
    save_options();
}

// whitelist videotool domain
function videotooladdWhitelistDomain() {
    var domain = $("videotoolwebsiteurl").value;
    appendToListBox("videotoolDomainsBox", domain);
    save_options();
}

function videotoolremoveSelectedExcludedDomain() {
    var videotoolDomainsBox = $("videotoolDomainsBox");
    for (var i = videotoolDomainsBox.length - 1; i >= 0; i--) {
        if (videotoolDomainsBox.options[i].selected)
            videotoolDomainsBox.remove(i);
    }
    save_options();
}

// fade effects control -> not when loaded page
function lightscontrol() {
var jump = $('interval').value;
default_opacity = jump;
var onoffrange = $('onoffrange'); // firefox fix
if(onoffrange.value == 0)
{
var fadeout = $('fadeout'); // firefox fix
var example2 = $('example2'); // firefox fix
if(fadeout.checked == true){ReducingFinished = false;fader('hide');}else{example2.style.opacity = 0;example2.style.display = 'none';}
}
else{
var fadein = $('fadein'); // firefox fix
var example2 = $('example2'); // firefox fix
if(fadein.checked == true){ReducingFinished = true;fader('show');}else{example2.style.opacity = jump/100;example2.style.display = '';}
}
}

// remove dynamic elements
function removedynamic(){
var newdynmaster = $("stefanvddynamicbackground");
var fishtanks = $('fishtanks');
if(fishtanks) {newdynmaster.removeChild(fishtanks);}
var blocks = $('blocks');
if(blocks) {newdynmaster.removeChild(blocks);}
var raindrops = $('raindrops');
if(raindrops) {newdynmaster.removeChild(raindrops);}
var clouds = $('clouds');
if(clouds) {newdynmaster.removeChild(clouds);}
var space = $('space');
if(space) {newdynmaster.removeChild(space);}
var smoke = $('smoke');
if(smoke) {newdynmaster.removeChild(smoke);}
var flyingdots = $('flyingdots');
if(flyingdots) {newdynmaster.removeChild(flyingdots);}
var storm = $('storm');
if(storm) {newdynmaster.removeChild(storm);}
var triangle = $('triangle');
if(triangle) {newdynmaster.removeChild(triangle);}
var stars = $('stars');
if(stars) {newdynmaster.removeChild(stars);}
}

// test general
function test() {
 // firefox fix
var ambilight = $('ambilight');
var ambilightvarcolor = $('ambilightvarcolor');
var head = $('head');
var playlist = $('playlist');
var infobar = $('infobar');
var likebutton = $('likebutton');
var sharebutton = $('sharebutton');
var suggestions = $('suggestions');
var videoheadline = $('videoheadline');
var viewcount = $('viewcount');
var addvideobutton = $('addvideobutton');
var likebar = $('likebar');
var lightimagea = $('lightimagea');
var eyen = $('eyen');
var eyea = $('eyea');
var eyealist = $('eyealist');
var mousespotlighto = $('mousespotlighto');
var nighttime = $('nighttime');
var password = $('password');
var ecosaver = $('ecosaver');
var autoplayonly = $('autoplayonly');
var atmosphereonly = $('atmosphereonly');
var nightonly = $('nightonly');
var autoplay = $('autoplay');
var motion = $('motion');
var speech = $('speech');
var cammotiononly = $('cammotiononly');
var speechonly = $('speechonly');
var nightactivetime = $('nightactivetime');
var nighttheme = $('nighttheme');
var autostoponly = $('autostoponly');
var videotoolonly = $('videotoolonly');

if(ambilight.checked == true){
drawImage();
}

// show alert warning
if(ambilightvarcolor.checked == true)
{$('showwarningambilight').style.display = '';}
else{$('showwarningambilight').style.display = 'none';}

// YouTube preview sample
if(head.checked == true)
{$('samplechannel').style.zIndex = 100;$('samplechannel').style.position = 'relative';$('videochannel').style.zIndex = 100;$('videochannel').style.position = 'relative';}
else{$('samplechannel').style.zIndex = 1;$('samplechannel').style.position = 'relative';$('videochannel').style.zIndex = 1;$('videochannel').style.position = 'relative';}

if(playlist.checked == true){} // not visible in the preview
else{}

if(infobar.checked == true)
{$('sampleinforbar').style.zIndex = 100;$('sampleinforbar').style.position = 'relative';}
else{$('sampleinforbar').style.zIndex = 1;$('sampleinforbar').style.position = 'relative';}

if(likebutton.checked == true)
{$('sampledislikebutton').style.zIndex = 100;$('sampledislikebutton').style.position = 'relative';}
else{$('sampledislikebutton').style.zIndex = 1;$('sampledislikebutton').style.position = 'relative';}

if(sharebutton.checked == true)
{$('samplesharebutton').style.zIndex = 100;$('samplesharebutton').style.position = 'relative';}
else{$('samplesharebutton').style.zIndex = 1;$('samplesharebutton').style.position = 'relative';}

if(suggestions.checked == true)
{$('samplesug').style.zIndex = 100;$('samplesug').style.position = 'relative';}
else {$('samplesug').style.zIndex = 1;$('samplesug').style.position = 'relative';}

if(videoheadline.checked == true){$('sampletitle').style.zIndex = 100;$('sampletitle').style.position = 'relative';$('sampletitle').style.color = '#FFFFFF';}
else {$('sampletitle').style.zIndex = 1;$('sampletitle').style.position = 'relative';$('sampletitle').style.color = '#000000';}

if(viewcount.checked == true)
{$('sampleview').style.zIndex = 100;$('sampleview').style.color = 'white';$('sampleview').style.position = 'relative';}
else{$('sampleview').style.zIndex = 1;$('sampleview').style.color = 'black';$('sampleview').style.position = 'relative';}

if(addvideobutton.checked == true)
{$('sampleaddbutton').style.zIndex = 100;$('sampleaddbutton').style.position = 'relative';}
else{$('sampleaddbutton').style.zIndex = 1;$('sampleaddbutton').style.position = 'relative';}

if(likebar.checked == true)
{$('samplelikebar').style.zIndex = 101;$('samplelikebar').style.position = 'relative';}
else{$('samplelikebar').style.zIndex = 'auto';$('samplelikebar').style.position = 'relative';}

/* --- end YouTube preview --- */
if(ambilight.checked == true)
{$('arangespread').disabled = false;$('ambilightrangespreadradius').disabled = false;$('arangeblur').disabled = false;$('ambilightrangeblurradius').disabled = false;$('ambilightfixcolor').disabled = false;$('ambilightvarcolor').disabled = false;$('ambilightcolorhex').disabled = false;$('ambilight4color').disabled = false;$('ambilight1colorhex').disabled = false;$('ambilight2colorhex').disabled = false;$('ambilight3colorhex').disabled = false;$('ambilight4colorhex').disabled = false;$('atmosvivid').disabled = false;}
else {$('arangespread').disabled = true;$('ambilightrangespreadradius').disabled = true;$('arangeblur').disabled = true;$('ambilightrangeblurradius').disabled = true;$('ambilightfixcolor').disabled = true;$('ambilightvarcolor').disabled = true;$('ambilightcolorhex').disabled = true;$('ambilight4color').disabled = true;$('ambilight1colorhex').disabled = true;$('ambilight2colorhex').disabled = true;$('ambilight3colorhex').disabled = true;$('ambilight4colorhex').disabled = true;$('atmosvivid').disabled = true;}

if(lightimagea.checked == true)
{$('lightimagen').checked = false;$('example1').style.background = 'url(' + $('lightimage').value + ')';$('example1').style.backgroundSize = "100% 100%";$('example2').style.background = 'url(' + $('lightimage').value + ')';$('example2').style.backgroundSize = "100% 100%";$('lightimage').disabled = false;$('lightcolor').disabled = true;
$('mousespotlighta').disabled = true;$('mousespotlightc').disabled = true;$('mousespotlighto').checked = true;}
else if(lightimagen.checked == true){$('lightimagen').checked = true;$('example1').style.background = $('lightcolor').value;$('example2').style.background = $('lightcolor').value;$('lightimage').disabled = true;$('lightcolor').disabled = false;
$('mousespotlighta').disabled = false;$('mousespotlightc').disabled = false;}
else if(lightimagelin.checked == true)
{var linearsq = document.getElementById("linearsq");
$('example1').style.background = 'linear-gradient(to ' + linearsq.options[linearsq.selectedIndex].value + ', ' + $('colora').value + ' ' + $('intervallina').value + '%,' + $('colorb').value + ' ' + $('intervallinb').value + '%)';
$('example2').style.background = 'linear-gradient(to ' + linearsq.options[linearsq.selectedIndex].value + ', ' + $('colora').value + ' ' + $('intervallina').value + '%,' + $('colorb').value + ' ' + $('intervallinb').value + '%)';
$('mousespotlighta').disabled = true;$('mousespotlightc').disabled = true;$('mousespotlighto').checked = true;
}

if(eyen.checked == true){$('ecosaver').disabled = false;$('ecosavertime').disabled = false;$('confirmtimesaver').disabled = false;$('helpeyeprotection').style.display = "none";$('excludedDomainsBox').disabled = true;$('websiteurl').disabled = true;$('autoplay').disabled = false;$('autoplaydelay').disabled = false;$('autoplaydelaytime').disabled = false;$('addbutton').disabled = true;$('removebutton').disabled = true;$('nighttime').disabled = false;$('begintime').disabled = false;$('endtime').disabled = false;$('confirmtime').disabled = false;$('helpautoplay').style.display = "none";$('eyechecklistwhite').disabled = true;$('eyechecklistblack').disabled = true;}
else if(eyea.checked == true){$('ecosaver').disabled = false;$('ecosavertime').disabled = false;$('confirmtimesaver').disabled = false;$('helpeyeprotection').style.display = "";$('excludedDomainsBox').disabled = true;$('websiteurl').disabled = true;$('autoplay').checked = false;$('autoplaydelay').disabled = true;$('autoplaydelaytime').disabled = true;$('addbutton').disabled = true;$('removebutton').disabled = true;$('nighttime').disabled = false;$('begintime').disabled = false;$('endtime').disabled = false;$('confirmtime').disabled = false;$('helpautoplay').style.display = "";$('eyechecklistwhite').disabled = true;$('eyechecklistblack').disabled = true;}
else if(eyealist.checked == true){$('ecosaver').disabled = false;$('ecosavertime').disabled = false;$('confirmtimesaver').disabled = false;$('helpeyeprotection').style.display = "";$('excludedDomainsBox').disabled = false;$('websiteurl').disabled = false;$('autoplay').checked = false;$('autoplaydelay').disabled = true;$('autoplaydelaytime').disabled = true;$('addbutton').disabled = false;$('removebutton').disabled = false;$('nighttime').disabled = false;$('begintime').disabled = false;$('endtime').disabled = false;$('confirmtime').disabled = false;$('helpautoplay').style.display = "";$('eyechecklistwhite').disabled = false;$('eyechecklistblack').disabled = false;}

if(mousespotlighto.checked == true)
{$('eastereggs').disabled = false;} // eastereggs OFF
else{$('eastereggs').disabled = true;$('eastereggs').checked = false;} // active box eastereggs

if(nighttime.checked == true)
{}
else{$('begintime').disabled = true;$('endtime').disabled = true;$('confirmtime').disabled = true;}

if(password.checked == true)
{$('enterpassword').disabled = false;$('confirmpassword').disabled = false;}
else{$('enterpassword').disabled = true;$('confirmpassword').disabled = true;}

if(ecosaver.checked == true)
{$('ecosavertime').disabled = false;$('confirmtimesaver').disabled = false;$('nighttime').disabled = false;
	if(eyen.checked == true){
	$('begintime').disabled = false;$('endtime').disabled = false;$('confirmtime').disabled = false;
	}
}
else{$('ecosavertime').disabled = true;$('confirmtimesaver').disabled = true;
	if(eyen.checked == true){
	$('nighttime').disabled = true;$('begintime').disabled = true;$('endtime').disabled = true;$('confirmtime').disabled = true;
	}
}

if(autoplayonly.checked == true)
{$('autoplayonly').checked = true;$('autoplayDomainsBox').disabled = false;$('autoplaywebsiteurl').disabled = false;$('autoplayaddbutton').disabled = false;$('autoplayremovebutton').disabled = false;$('autoplaychecklistwhite').disabled = false;$('autoplaychecklistblack').disabled = false;}
else{$('autoplayonly').checked = false;$('autoplayDomainsBox').disabled = true;$('autoplaywebsiteurl').disabled = true;$('autoplayaddbutton').disabled = true;$('autoplayremovebutton').disabled = true;$('autoplaychecklistwhite').disabled = true;$('autoplaychecklistblack').disabled = true;}

if(atmosphereonly.checked == true)
{$('atmosphereonly').checked = true;$('atmosphereDomainsBox').disabled = false;$('atmospherewebsiteurl').disabled = false;$('atmosphereaddbutton').disabled = false;$('atmosphereremovebutton').disabled = false;}
else{$('atmosphereonly').checked = false;$('atmosphereDomainsBox').disabled = true;$('atmospherewebsiteurl').disabled = true;$('atmosphereaddbutton').disabled = true;$('atmosphereremovebutton').disabled = true;}

if(nightonly.checked == true)
{$('nightonly').checked = true;$('nightDomainsBox').disabled = false;$('nightwebsiteurl').disabled = false;$('nightaddbutton').disabled = false;$('nightremovebutton').disabled = false;$('nightmodechecklistwhite').disabled = false;$('nightmodechecklistblack').disabled = false;}
else{$('nightonly').checked = false;$('nightDomainsBox').disabled = true;$('nightwebsiteurl').disabled = true;$('nightaddbutton').disabled = true;$('nightremovebutton').disabled = true;$('nightmodechecklistwhite').disabled = true;$('nightmodechecklistblack').disabled = true;}

if(autoplay.checked == true)
{$('eyen').checked = true;$('excludedDomainsBox').disabled = true;$('websiteurl').disabled = true;$('autoplaydelay').disabled = false;$('autoplaydelaytime').disabled = false;}
else {$('autoplaydelay').disabled = true;$('autoplaydelaytime').disabled = true;}

if(motion.checked == true)
{cameramotionlights();}
else{cameramotionlights();}

if(speech.checked == true)
{speechrecognition();}
else{speechrecognition();}

if(cammotiononly.checked == true)
{$('cammotiononly').checked = true;$('cammotionDomainsBox').disabled = false;$('cammotionwebsiteurl').disabled = false;$('cammotionaddbutton').disabled = false;$('cammotionremovebutton').disabled = false;}
else{$('cammotiononly').checked = false;$('cammotionDomainsBox').disabled = true;$('cammotionwebsiteurl').disabled = true;$('cammotionaddbutton').disabled = true;$('cammotionremovebutton').disabled = true;}

if(speechonly.checked == true)
{$('speechonly').checked = true;$('speechDomainsBox').disabled = false;$('speechwebsiteurl').disabled = false;$('speechaddbutton').disabled = false;$('speechremovebutton').disabled = false;}
else{$('speechonly').checked = false;$('speechDomainsBox').disabled = true;$('speechwebsiteurl').disabled = true;$('speechaddbutton').disabled = true;$('speechremovebutton').disabled = true;}

if(nightactivetime.checked == true){$('nmbegintime').disabled = false;$('nmendtime').disabled = false;$('nmconfirmtime').disabled = false;}
else{$('nmbegintime').disabled = true;$('nmendtime').disabled = true;$('nmconfirmtime').disabled = true;}

if(nighttheme.checked == true){$('lampandnightmode').disabled = false;}
else{$('lampandnightmode').disabled = true;}

if(autostoponly.checked == true){$('autostopDomainsBox').disabled = false;$('autostopremovebutton').disabled = false;$('autostopaddbutton').disabled = false;$('autostopwebsiteurl').disabled = false;$('autostopchecklistwhite').disabled = false;$('autostopchecklistblack').disabled = false;}
else{$('autostopDomainsBox').disabled = true;$('autostopremovebutton').disabled = true;$('autostopaddbutton').disabled = true;$('autostopwebsiteurl').disabled = true;$('autostopchecklistwhite').disabled = true;$('autostopchecklistblack').disabled = true;}

if(videotoolonly.checked == true){$('videotoolchecklistwhite').disabled = false;$('videotoolchecklistblack').disabled = false;$('videotoolDomainsBox').disabled = false;$('videotoolwebsiteurl').disabled = false;$('videotooladdbutton').disabled = false;$('videotoolremovebutton').disabled = false;}
else{$('videotoolchecklistwhite').disabled = true;$('videotoolchecklistblack').disabled = true;$('videotoolDomainsBox').disabled = true;$('videotoolwebsiteurl').disabled = true;$('videotooladdbutton').disabled = true;$('videotoolremovebutton').disabled = true;}

if(reflection.checked == true){$('beeld').style.webkitBoxReflect = "below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), to(black),color-stop("+(100-$('reflectionamount').value)/100+", transparent))";}
else{$('beeld').style.webkitBoxReflect = "";}

			
// done with reading
// run now the dynamic background if enabled
dynamictest();
}

function dynamictest(){
var newdynmaster = $("stefanvddynamicbackground");
if(dynamic.checked == true){
if(dynamic1.checked == true){
removedynamic();
	var fishtanks = document.createElement("div");fishtanks.setAttribute('id','fishtanks');newdynmaster.appendChild(fishtanks);

	var newdynleft = document.createElement("div");newdynleft.setAttribute('class','stefanvddynamicbackgroundbubbleleft');fishtanks.appendChild(newdynleft);
	for(var i = 0; i < 5; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundbubbles stefanvddynamicbubbles'+i+'');newdynleft.appendChild(newdyn);}
	var newdynmid = document.createElement("div");newdynmid.setAttribute('class','stefanvddynamicbackgroundbubblemid');fishtanks.appendChild(newdynmid);
	for(var i = 6; i < 10; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundbubbles stefanvddynamicbubbles'+i+'');newdynmid.appendChild(newdyn);}			
	var newdynright = document.createElement("div");newdynright.setAttribute('class','stefanvddynamicbackgroundbubbleright');fishtanks.appendChild(newdynright);	
	for(var i = 11; i < 16; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundbubbles stefanvddynamicbubbles'+i+'');newdynright.appendChild(newdyn);}					
}
else if(dynamic2.checked == true){
removedynamic();
	var blocks = document.createElement("div");blocks.setAttribute('id','blocks');newdynmaster.appendChild(blocks);

	var newdynleft = document.createElement("div");newdynleft.setAttribute('class','stefanvddynamicbackgroundblockleft');blocks.appendChild(newdynleft);
	for(var i = 1; i < 21; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundblocks stefanvddynamicblocks'+i+'');newdynleft.appendChild(newdyn);}
}
else if(dynamic3.checked == true){
removedynamic();
	var raindrops = document.createElement("div");raindrops.setAttribute('id','raindrops');newdynmaster.appendChild(raindrops);

	var newdynleft = document.createElement("div");newdynleft.setAttribute('class','stefanvddynamicbackgroundblockleft');raindrops.appendChild(newdynleft);
	for(var i = 0; i < 15; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundraindrups b'+i+'');newdynleft.appendChild(newdyn);}
}
else if(dynamic4.checked == true){
removedynamic();
	var clouds = document.createElement("div");clouds.setAttribute('id','clouds');newdynmaster.appendChild(clouds);
	var newdynworld = document.createElement("div");newdynworld.setAttribute('id','stefanvdworld');clouds.appendChild(newdynworld);			
(function() {
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelRequestAnimationFrame = window[vendors[x]+'CancelRequestAnimationFrame'];
		}
		if (!window.requestAnimationFrame)
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
				  timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};

		if (!window.cancelAnimationFrame)window.cancelAnimationFrame = function(id) {window.clearTimeout(id);};
	}())

	var layers = [],objects = [],world = document.getElementById('stefanvdworld'),viewport = document.getElementById('stefanvddynamicbackground'),	
	d = 0,p = 400,worldXAngle = 0,worldYAngle = 0;
	
	viewport.style.webkitPerspective = p;viewport.style.MozPerspective = p;viewport.style.oPerspective = p;
	
	function createCloud() {
		var div = document.createElement( 'div'  );
		div.className = 'stefanvdcloudBase';
		var x = 256 - ( Math.random() * 512 );
		var y = 256 - ( Math.random() * 512 );
		var z = 256 - ( Math.random() * 512 );
		var t = 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px)';
		div.style.webkitTransform = t;div.style.MozTransform = t;div.style.oTransform = t;
		world.appendChild(div);
		
		for( var j = 0; j < 5 + Math.round( Math.random() * 10 ); j++ ) {
			var cloud = document.createElement('div');
			cloud.style.opacity = 0;
			cloud.style.opacity = .8;
			cloud.className = 'stefanvdcloudLayer';
			var x = 256 - ( Math.random() * 512 );
			var y = 256 - ( Math.random() * 512 );
			var z = 100 - ( Math.random() * 200 );
			var a = Math.random() * 360;;
			var s = .25 + Math.random();
			x *= .2; y *= .2;
			cloud.data = {x: x,y: y,z: z,a: a,s: s,speed: .1 * Math.random()};
			var t = 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px) rotateZ(' + a + 'deg) scale(' + s + ')';
			cloud.style.webkitTransform = t;cloud.style.MozTransform = t;cloud.style.oTransform = t;
			div.appendChild(cloud);
			layers.push(cloud);
		}
		return div;
	}
	
	function generate() {
		objects = [];
		if (world.hasChildNodes()) {
			while ( world.childNodes.length >= 1 ) {world.removeChild(world.firstChild);} 
		}
		for(var j = 0; j < 5; j++) {objects.push(createCloud());}
	}
	generate();
		
	function updateView(){
		var t = 'translateZ(' + d + 'px) rotateX(' + worldXAngle + 'deg) rotateY(' + worldYAngle + 'deg)';
		world.style.webkitTransform = t;world.style.MozTransform = t;world.style.oTransform = t;}
	
	function update (){
		for( var j = 0; j < layers.length; j++ ) {
			var layer = layers[ j ];
			layer.data.a += layer.data.speed;
			var t = 'translateX(' + layer.data.x + 'px) translateY(' + layer.data.y + 'px) translateZ(' + layer.data.z + 'px) rotateY(' + ( - worldYAngle ) + 'deg) rotateX(' + ( - worldXAngle ) + 'deg) rotateZ(' + layer.data.a + 'deg) scale(' + layer.data.s + ')';
			layer.style.webkitTransform = t;layer.style.MozTransform = t;layer.style.oTransform = t;
		}
		requestAnimationFrame(update);
	}
	update();
}
else if(dynamic5.checked == true){
removedynamic();
if(hoveroptiondyn5.checked == true){
	var space = document.createElement("div");space.setAttribute('id','space');newdynmaster.appendChild(space);

	var newdynspaceworld = document.createElement("div");newdynspaceworld.setAttribute('id','stefanvddynamicspace');space.appendChild(newdynspaceworld);			
	for(var j = 1; j < 17; j++ ){
	if(j<=9){j="0"+j}
		var newdynpart1 = document.createElement("div");
		newdynpart1.setAttribute('id','p'+ j);newdynspaceworld.appendChild(newdynpart1);
		for(var i = 1; i < 31; i++ ){
		if(i<=9){i="0"+i}
		var newdynlow = document.createElement("b");newdynlow.setAttribute('class','s0'+i+'');newdynpart1.appendChild(newdynlow);
		}
	}
}else{
	var space = document.createElement("div");space.setAttribute('id','space');newdynmaster.appendChild(space);

	var newdynspaceworld = document.createElement("div");newdynspaceworld.setAttribute('id','stefanvddynamicspacenoflying');space.appendChild(newdynspaceworld);			
	for(var j = 1; j < 17; j++ ){
	if(j<=9){j="0"+j}
		var newdynpart1 = document.createElement("div");
		newdynpart1.setAttribute('id','np'+ j);newdynspaceworld.appendChild(newdynpart1);
		for(var i = 1; i < 31; i++ ){
		if(i<=9){i="0"+i}
		var newdynlow = document.createElement("b");newdynlow.setAttribute('class','ns0'+i+'');newdynpart1.appendChild(newdynlow);
		}
	}
}

} else if (dynamic6.checked == true) {
    removedynamic();
    var smoke = document.createElement("div"); smoke.setAttribute('id', 'smoke'); smoke.style.width = "100%"; smoke.style.height = "100%"; newdynmaster.appendChild(smoke);
    var newsmokecanvas = document.createElement("canvas"); newsmokecanvas.setAttribute('id', 'stefanvddynamicsmoke'); newsmokecanvas.style.width = "100%"; newsmokecanvas.style.height = "100%"; smoke.appendChild(newsmokecanvas);

    // Create an array to store our particles
    var particles = [];

    // The amount of particles to render
    var particleCount = 30;

    // The maximum velocity in each direction
    var maxVelocity = 2;

    // The target frames per second (how often do we want to update / redraw the scene)
    var targetFPS = 20;

    // Set the dimensions of the canvas as variables so they can be used.
    var canvasWidth = 400;
    var canvasHeight = 400;

    // Create an image object (only need one instance)
    var imageObj = new Image();

    // Once the image has been downloaded then set the image on all of the particles
    imageObj.onload = function () {
        particles.forEach(function (particle) {
            particle.setImage(imageObj);
        });
    };

    // Once the callback is arranged then set the source of the image
    imageObj.src = "images/Smoke10.png";

    // A function to create a particle object.
    function Particle(context) {

        // Set the initial x and y positions
        this.x = 0;
        this.y = 0;

        // Set the initial velocity
        this.xVelocity = 0;
        this.yVelocity = 0;

        // Set the radius
        this.radius = 5;

        // Store the context which will be used to draw the particle
        this.context = context;

        // The function to draw the particle on the canvas.
        this.draw = function () {

            // If an image is set draw it
            if (this.image) {
                this.context.drawImage(this.image, this.x - 128, this.y - 128);
                // If the image is being rendered do not draw the circle so break out of the draw function                
                return;
            }
            // Draw the circle as before, with the addition of using the position and the radius from this object.
            this.context.beginPath();
            this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            this.context.fillStyle = "rgba(88, 88, 88, 1)";
            this.context.fill();
            this.context.closePath();
        };

        // Update the particle.
        this.update = function () {
            // Update the position of the particle with the addition of the velocity.
            this.x += this.xVelocity;
            this.y += this.yVelocity;

            // Check if has crossed the right edge
            if (this.x >= canvasWidth) {
                this.xVelocity = -this.xVelocity;
                this.x = canvasWidth;
            }
                // Check if has crossed the left edge
            else if (this.x <= 0) {
                this.xVelocity = -this.xVelocity;
                this.x = 0;
            }

            // Check if has crossed the bottom edge
            if (this.y >= canvasHeight) {
                this.yVelocity = -this.yVelocity;
                this.y = canvasHeight;
            }

                // Check if has crossed the top edge
            else if (this.y <= 0) {
                this.yVelocity = -this.yVelocity;
                this.y = 0;
            }
        };

        // A function to set the position of the particle.
        this.setPosition = function (x, y) {
            this.x = x;
            this.y = y;
        };

        // Function to set the velocity.
        this.setVelocity = function (x, y) {
            this.xVelocity = x;
            this.yVelocity = y;
        };

        this.setImage = function (image) {
            this.image = image;
        }
    }

    // A function to generate a random number between 2 values
    function generateRandom(min, max) { return Math.random() * (max - min) + min; }

    var context;
    // Initialise the scene and set the context if possible
    function runsmoke() {
        var canvas = document.getElementById('stefanvddynamicsmoke');
        if (canvas.getContext) {
            // Set the context variable so it can be re-used
            context = canvas.getContext('2d');
            // Create the particles and set their initial positions and velocities
            for (var i = 0; i < particleCount; ++i) {
                var particle = new Particle(context);

                // Set the position to be inside the canvas bounds
                particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight));

                // Set the initial velocity to be either random and either negative or positive
                particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
                particles.push(particle);
            }
        }
    }

    // The function to draw the scene
    function draw() {
        // Clear the drawing surface and fill it with a black background
        context.fillStyle = "rgba(0, 0, 0, 0.0)";
        context.fillRect(0, 0, 400, 400);

        // Go through all of the particles and draw them.
        particles.forEach(function (particle) {
            particle.draw();
        });
    }

    // Update the scene
    function smokeupdate() {
        particles.forEach(function (particle) {
            particle.update();
        });
    }

    // Initialize the scene
    runsmoke();

    // If the context is set then we can draw the scene (if not then the browser does not support canvas)
    if (context) {
        window.setInterval(function () {
            // Update the scene before drawing
            smokeupdate();

            // Draw the scene
            draw();
        }, 1000 / targetFPS);
    }

} else if (dynamic7.checked == true) {
    removedynamic();
    var flyingdots = document.createElement("div"); flyingdots.setAttribute('id', 'flyingdots'); newdynmaster.appendChild(flyingdots);
    var newdyndotsworld = document.createElement("div"); newdyndotsworld.setAttribute('id', 'stefanvddynamicdots'); flyingdots.appendChild(newdyndotsworld);
    for (var j = 1; j < 100; j++) {
        var newminic = document.createElement("div");
        newminic.className = "c";
        newdyndotsworld.appendChild(newminic);
    }
} else if (dynamic8.checked == true) {
    removedynamic();
    var storm = document.createElement("div"); storm.setAttribute('id', 'storm'); newdynmaster.appendChild(storm);
    var newstormcanvas = document.createElement("canvas"); newstormcanvas.setAttribute('id', 'stefanvddynamicstorm'); newstormcanvas.style.width = "100%"; newstormcanvas.style.height = "100%"; storm.appendChild(newstormcanvas);

    var stormcanvas = document.getElementById('stefanvddynamicstorm');
    var sky = stormcanvas.getContext('2d');

    var window_width = window.innerWidth * 1.5;
    var window_height = window.innerHeight * 1.5;

    var fall_speed = 0.7;
    var wind_speed = 5;

    var rain_weight = 0.11;
    var rain_color = '255,255,255';

    var drop_count;
    var drops = [];

    function randomFrom(min, max) {
        return (Math.random() * (max - min) + min);
    }

    function resizer() {
        window_width = window.innerWidth * 1.5;
        window_height = window.innerHeight * 1.5;
        drop_count = window_width * rain_weight;

        stormcanvas.setAttribute('width', window_width);
        stormcanvas.setAttribute('height', window_height);
    }

    window.addEventListener('resize', resizer, false);

    function paintSky() {
        for (var i = 0; i < drop_count; i++) {
            drops[i] = new drop();
            drops[i].reset();
        }

        rain();
    }

    function rain() {
        sky.clearRect(0, 0, window_width, window_height);

        var drops_length = drops.length;

        for (var i = 0; i < drops_length; i++) {
            var drop = drops[i];
            drop.fall();
            drop.draw();
        }

        window.requestAnimFrame(rain);
    }

    function drop() {
        this.reset = function () {
            this.r = randomFrom(0.8, 1.6);
            this.l = (this.r * 250);
            this.x = randomFrom((window_width * -0.25), (window_width * 1.125));
            this.y = randomFrom((window_height * -0.25), (window_height * -1));
            this.dx = randomFrom((wind_speed - 3), (wind_speed + 3));
            this.dy = (this.r * (100 * fall_speed));
            this.offset = (this.l * (this.dx / this.dy));
            this.opacity = (this.r * randomFrom(0.2, 0.6));
            this.drip = this.render();
        };

        this.render = function () {
            var canv = document.createElement('canvas');
            var ctx = canv.getContext('2d');
            canv.setAttribute('width', Math.abs(this.offset) + this.r);
            canv.setAttribute('height', this.l);

            ctx.beginPath();

            var drip = ctx.createLinearGradient(0, 0, 0, this.l);
            drip.addColorStop(0, 'rgba(' + rain_color + ', 0)');
            drip.addColorStop(1, 'rgba(' + rain_color + ', ' + this.opacity + ')');
            ctx.fillStyle = drip;

            //sky.rect(this.x, this.y, this.r, this.l);
            var startX = (this.offset >= 0) ? 0 : Math.abs(this.offset);
            ctx.moveTo(startX, 0);
            ctx.lineTo(startX + this.r, 0);
            ctx.lineTo(startX + this.r + this.offset, this.l);
            ctx.lineTo(startX + this.offset, this.l);

            ctx.closePath();
            ctx.fill();

            return canv;
        };

        this.draw = function () {
            sky.drawImage(this.drip, this.x, this.y);
        };

        this.fall = function () {
            this.x += this.dx;
            this.y += this.dy;

            if (this.y > (window_height * 1.25)) {
                this.reset();
            }
        };
    }

    resizer();
    paintSky();

} else if (dynamic9.checked == true) {
    removedynamic();
    var triangle = document.createElement("div"); triangle.setAttribute('id', 'triangle'); newdynmaster.appendChild(triangle);

    var refreshDuration = 10000;
    var refreshTimeout;
    var numPointsX;
    var numPointsY;
    var unitWidth;
    var unitHeight;
    var points;

    function trianglerun() {
        var triasvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        triasvg.setAttribute('width', window.innerWidth);
        triasvg.setAttribute('height', window.innerHeight);
        document.getElementById('triangle').appendChild(triasvg);

        var unitSize = (window.innerWidth + window.innerHeight) / 20;
        numPointsX = Math.ceil(window.innerWidth / unitSize) + 1;
        numPointsY = Math.ceil(window.innerHeight / unitSize) + 1;
        unitWidth = Math.ceil(window.innerWidth / (numPointsX - 1));
        unitHeight = Math.ceil(window.innerHeight / (numPointsY - 1));

        points = [];

        for (var y = 0; y < numPointsY; y++) {
            for (var x = 0; x < numPointsX; x++) {
                points.push({ x: unitWidth * x, y: unitHeight * y, originX: unitWidth * x, originY: unitHeight * y });
            }
        }

        randomize();

        for (var i = 0; i < points.length; i++) {
            if (points[i].originX != unitWidth * (numPointsX - 1) && points[i].originY != unitHeight * (numPointsY - 1)) {
                var topLeftX = points[i].x;
                var topLeftY = points[i].y;
                var topRightX = points[i + 1].x;
                var topRightY = points[i + 1].y;
                var bottomLeftX = points[i + numPointsX].x;
                var bottomLeftY = points[i + numPointsX].y;
                var bottomRightX = points[i + numPointsX + 1].x;
                var bottomRightY = points[i + numPointsX + 1].y;

                var rando = Math.floor(Math.random() * 2);

                for (var n = 0; n < 2; n++) {
                    var polygon = document.createElementNS(triasvg.namespaceURI, 'polygon');

                    if (rando == 0) {
                        if (n == 0) {
                            polygon.point1 = i;
                            polygon.point2 = i + numPointsX;
                            polygon.point3 = i + numPointsX + 1;
                            polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + bottomLeftX + ',' + bottomLeftY + ' ' + bottomRightX + ',' + bottomRightY);
                        } else if (n == 1) {
                            polygon.point1 = i;
                            polygon.point2 = i + 1;
                            polygon.point3 = i + numPointsX + 1;
                            polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + topRightX + ',' + topRightY + ' ' + bottomRightX + ',' + bottomRightY);
                        }
                    } else if (rando == 1) {
                        if (n == 0) {
                            polygon.point1 = i;
                            polygon.point2 = i + numPointsX;
                            polygon.point3 = i + 1;
                            polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + bottomLeftX + ',' + bottomLeftY + ' ' + topRightX + ',' + topRightY);
                        } else if (n == 1) {
                            polygon.point1 = i + numPointsX;
                            polygon.point2 = i + 1;
                            polygon.point3 = i + numPointsX + 1;
                            polygon.setAttribute('points', bottomLeftX + ',' + bottomLeftY + ' ' + topRightX + ',' + topRightY + ' ' + bottomRightX + ',' + bottomRightY);
                        }
                    }
                    polygon.setAttribute('fill', 'rgba(0,0,0,' + (Math.random() / 3) + ')');
                    var animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                    animate.setAttribute('fill', 'freeze');
                    animate.setAttribute('attributeName', 'points');
                    animate.setAttribute('dur', refreshDuration + 'ms');
                    animate.setAttribute('calcMode', 'linear');
                    polygon.appendChild(animate);
                    triasvg.appendChild(polygon);
                }
            }
        }
        refresh();
    }

    function randomize() {
        for (var i = 0; i < points.length; i++) {
            if (points[i].originX != 0 && points[i].originX != unitWidth * (numPointsX - 1)) {
                points[i].x = points[i].originX + Math.random() * unitWidth - unitWidth / 2;
            }
            if (points[i].originY != 0 && points[i].originY != unitHeight * (numPointsY - 1)) {
                points[i].y = points[i].originY + Math.random() * unitHeight - unitHeight / 2;
            }
        }
    }

    function refresh() {
        randomize();
        for (var i = 0; i < document.querySelector('#triangle svg').childNodes.length; i++) {
            var polygon = document.querySelector('#triangle svg').childNodes[i];
            var animate = polygon.childNodes[0];
            if (animate.getAttribute('to')) {
                animate.setAttribute('from', animate.getAttribute('to'));
            }
            animate.setAttribute('to', points[polygon.point1].x + ',' + points[polygon.point1].y + ' ' + points[polygon.point2].x + ',' + points[polygon.point2].y + ' ' + points[polygon.point3].x + ',' + points[polygon.point3].y);
            animate.beginElement();
        }
        refreshTimeout = window.setTimeout(function () { refresh(); }, refreshDuration);
    }

    trianglerun();


    function onResize() {
        document.querySelector('#triangle svg').remove();
        window.clearTimeout(refreshTimeout);
        trianglerun();
    }

    window.onresize = onResize;

} else if (dynamic10.checked == true) {
    removedynamic();
    var stars = document.createElement("div"); stars.setAttribute('id', 'stars'); newdynmaster.appendChild(stars);
    for (var j = 1; j < 3; j++) {
        var newmstar = document.createElement("div");
        newmstar.id = "mstars" + [j];
        stars.appendChild(newmstar);
    }
}

}
}

// Cam Motion
var localMediaStream = null;

var width; var height;
var huemin; var huemax; var satmin; var satmax; var valmin; var valmax;
var last; var thresh; var down; var wasdown;
var movethresh; var brightthresh; var overthresh;
var avg;
var state;
var intervalID;
var draw;
var skin_filter;
var r; var g; var b; var a;
var hsv;
var delt;

window.URL = window.URL || window.webkitURL;
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

document.addEventListener("DOMContentLoaded", function(event) {
var video = document.getElementById('motionvideo');
var canvas = document.getElementById('motioncanvas');
var canvasgetcont = canvas.getContext('2d');
var ccanvas = document.getElementById('motioncomp');
var ccgetcont = ccanvas.getContext('2d');

// document.getElementById('motionvideo').addEventListener('timeupdate', function(){ dump(); });
document.getElementById('motionvideo').addEventListener('play', function(){ intervalID = window.setInterval(dump,1000/25); });

var compression = 5;
width = height = 0;

        function dump() {
            if (localMediaStream) {
                if (canvas.width != video.videoWidth) {
                    width = Math.floor(video.videoWidth / compression);
                    height = Math.floor(video.videoHeight / compression);
                    canvas.width = ccanvas.width = width;
                    canvas.height = ccanvas.height = height;
                }
                if (width != 0) {
                    canvasgetcont.drawImage(video, 0, 0, width, height);
                    draw = canvasgetcont.getImageData(0, 0, width, height);
                    //ccgetcont.putImageData(draw,0,0);
                    skinfilter();
                    camtest();
                }
            }
        }

huemin = 0.0; huemax = 0.10; satmin = 0.0; satmax = 1.0; valmin = 0.4; valmax = 1.0;
        function skinfilter() {
            skin_filter = canvasgetcont.getImageData(0, 0, width, height)
            var total_pixels = skin_filter.width * skin_filter.height
            var index_value = total_pixels * 4

            var count_data_big_array = 0;
            for (var y = 0 ; y < height ; y++) {
                for (var x = 0 ; x < width ; x++) {
                    index_value = x + y * width
                    r = draw.data[count_data_big_array]
                    g = draw.data[count_data_big_array + 1]
                    b = draw.data[count_data_big_array + 2]
                    a = draw.data[count_data_big_array + 3]

                    hsv = rgb2Hsv(r, g, b);
                    //When the hand is too lose (hsv[0] > 0.59 && hsv[0] < 1.0)
                    //Skin Range on HSV values
                    if (((hsv[0] > huemin && hsv[0] < huemax) || (hsv[0] > 0.59 && hsv[0] < 1.0)) && (hsv[1] > satmin && hsv[1] < satmax) && (hsv[2] > valmin && hsv[2] < valmax)) {

                        skin_filter[count_data_big_array] = r
                        skin_filter[count_data_big_array + 1] = g
                        skin_filter[count_data_big_array + 2] = b
                        skin_filter[count_data_big_array + 3] = a
                    } else {

                        skin_filter.data[count_data_big_array] =
                        skin_filter.data[count_data_big_array + 1] =
                        skin_filter.data[count_data_big_array + 2] = 0
                        skin_filter.data[count_data_big_array + 3] = 0
                    }

                    count_data_big_array = index_value * 4;
                }
            }
            draw = skin_filter
        }

        function rgb2Hsv(r, g, b) {

            r = r / 255
            g = g / 255
            b = b / 255;

            var max = Math.max(r, g, b)
            var min = Math.min(r, g, b);

            var h, s, v = max;

            var d = max - min;

            s = max == 0 ? 0 : d / max;

            if (max == min) {
                h = 0; // achromatic
            } else {

                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }

            return [h, s, v];
        }

        last = false; thresh = 150; down = false; wasdown = false;
        function camtest() {
            delt = canvasgetcont.createImageData(width, height)
            if (last !== false) {
                var totalx = 0, totaly = 0, totald = 0, totaln = delt.width * delt.height
                , dscl = 0
                , pix = totaln * 4; while (pix -= 4) {
                    var d = Math.abs(
                            draw.data[pix] - last.data[pix]
                    ) + Math.abs(
                            draw.data[pix + 1] - last.data[pix + 1]
                    ) + Math.abs(
                            draw.data[pix + 2] - last.data[pix + 2]
                    )
                    if (d > thresh) {
                        delt.data[pix] = 160
                        delt.data[pix + 1] = 255
                        delt.data[pix + 2] =
                delt.data[pix + 3] = 255
                        totald += 1
                        totalx += ((pix / 4) % width)
                        totaly += (Math.floor((pix / 4) / delt.height))
                    }
                    else {
                        delt.data[pix] =
                                delt.data[pix + 1] =
                                delt.data[pix + 2] = 0
                        delt.data[pix + 3] = 0
                    }
                }
            }
            //slide.setAttribute('style','display:initial')
            //slide.value=(totalx/totald)/width
            if (totald) {
                down = {
                    x: totalx / totald,
                    y: totaly / totald,
                    d: totald
                }
                handledown()
            }
            //console.log(totald)
            last = draw
            ccgetcont.putImageData(delt, 0, 0)
        }
        movethresh = 2; brightthresh = 300; overthresh = 1000;
        function calibrate() {
            wasdown = {
                x: down.x,
                y: down.y,
                d: down.d
            }
        }
        avg = 0;
        state = 0;//States: 0 waiting for gesture, 1 waiting for next move after gesture, 2 waiting for gesture to end
        function handledown() {
        avg = 0.9 * avg + 0.1 * down.d;
            var davg = down.d - avg, good = davg > brightthresh;
            //console.log(davg)
            switch (state) {
                case 0:
                    if (good) {//Found a gesture, waiting for next move
                        state = 1
                        calibrate()
                    }
                    break
                case 2://Wait for gesture to end
                    if (!good) {//Gesture ended
                        state = 0
                    }
                    break;
                case 1://Got next move, do something based on direction
                    var dx = down.x - wasdown.x, dy = down.y - wasdown.y
                    var dirx = Math.abs(dy) < Math.abs(dx)//(dx,dy) is on a bowtie
                    //console.log(good,davg)
                    if (dx < -movethresh && dirx) {
                        //console.log('right')
                    }
                    else if (dx > movethresh && dirx) {
                        //console.log('left')
                    }
                    if (dy > movethresh && !dirx) {
                        if (davg > overthresh) {
                            //console.log('over up');
							writeinlog("over up");
                        }
                        else{
                            //console.log('up')
							writeinlog("up");
                        }
                    }
                    else if (dy < -movethresh && !dirx) {
                        if (davg > overthresh) {
							//console.log('over down')
							//writeinlog("over down");
                        }
                        else{
							//console.log('down')
							//writeinlog("down");
                        }
                    }
                    state = 2
                    break
            }
        }

function writeinlog(text){
var currentdate = new Date();
var datetime = "Last Action: " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
var para = document.createElement("p");para.textContent = datetime + " " + text;
var container = document.getElementById('stefanmotion');container.insertBefore(para, container.firstChild);
}

});

function cameramotionlights(){
if(document.getElementById('motion').checked == true){
var video = document.getElementById('motionvideo');
var canvas = document.getElementById('motioncanvas');
var canvasgetcont = canvas.getContext('2d');
var ccanvas = document.getElementById('motioncomp');
var ccgetcont = ccanvas.getContext('2d');

// reset everything
if(localMediaStream){
document.getElementById('motionvideo').pause();
document.getElementById('motionvideo').src = "";
localMediaStream.stop();
localMediaStream = null;
document.getElementById('motionvideo').load();
canvas = document.getElementById('motioncanvas');
canvasgetcont = canvas.getContext('2d');
canvasgetcont.clearRect(0,0,canvas.width,canvas.height);
ccanvas = document.getElementById('motioncomp');
ccgetcont = ccanvas.getContext('2d');
ccgetcont.clearRect(0,0,ccanvas.width,ccanvas.height);
}

navigator.getUserMedia({audio:false,video:true},function(stream){
        localMediaStream = stream; // Store the video stream
        video.src = window.URL.createObjectURL(stream);
        // video.addEventListener('play', function(){ intervalID = window.setInterval(dump,1000/25); console.log("RUN A"); });
       
},function(){
//console.log('Something is wrong here! Check your camera!');
})

} else {
	// remove everything
	document.getElementById('stefanmotion').textContent = "";

	if(localMediaStream){
		if($("motionvideo")){
			document.getElementById('motionvideo').pause();
			document.getElementById('motionvideo').src = "";
		}
		localMediaStream.stop();
		localMediaStream = null;
		document.getElementById('motionvideo').load();
		canvas = document.getElementById('motioncanvas');
		canvasgetcont = canvas.getContext('2d');
		canvasgetcont.clearRect(0,0,canvas.width,canvas.height);
		ccanvas = document.getElementById('motioncomp');
		ccgetcont = ccanvas.getContext('2d');
		ccgetcont.clearRect(0,0,ccanvas.width,ccanvas.height);
		window.clearInterval(intervalID);
	}
}
}

// Speech engine sample
// Simple function that checks existence of s in str
var userSaid = function(str, s) {
	return str.indexOf(s) > -1;
}

var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
// not supported
} else {
	var recognition = new SpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;

	recognition.onstart = function() {
		recognizing = true;
		// console.log("speak now");
	};

	recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
		// No speech was detected.
		ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
		// No microphone was found.
		ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
		if (event.timeStamp - start_timestamp < 100) {
			// Permission to use microphone is blocked. 
		} else {
			// Permission to use microphone was denied.
		}
		ignore_onend = true;
	}
	};

	recognition.onend = function() {
		recognizing = false;
		// think you are ending, start it back up
			//startButton();
			//location.reload(true);
			// if(document.getElementById('speech').checked == true){
			//recognition.start();
			// }
		if (ignore_onend) {
		return;
		}
		if (!final_transcript) {
		// console.log("Click on the microphone icon and begin speaking.");
		return;
		}
	};
	
var i18nldesspeech1command = chrome.i18n.getMessage("desspeech1command"); // turn off the lights
var i18nldesspeech2command = chrome.i18n.getMessage("desspeech2command"); // turn on the lights
var i18nldesspeech3command = chrome.i18n.getMessage("desspeech3command"); // play video
var i18nldesspeech4command = chrome.i18n.getMessage("desspeech4command"); // pause video
var i18nldesspeech5command = chrome.i18n.getMessage("desspeech5command"); // browser lamp

	recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
		if (event.results[i].isFinal) {
			final_transcript = event.results[i][0].transcript;
			if($("stefanvdspeechsaidtext")){$("stefanvdspeechsaidtext").textContent = final_transcript;}
			//console.log(final_transcript);
				if (userSaid(final_transcript, i18nldesspeech1command)) {
				// console.log("yes: lights off");
				}
				else if (userSaid(final_transcript, i18nldesspeech2command)) {
				// console.log("yes: lights on");
				}
				// Play the video
				else if (userSaid(final_transcript, i18nldesspeech3command)) {
				}
				// Stop the video
				else if (userSaid(final_transcript, i18nldesspeech4command)) {
				}
		} else {
			interim_transcript += event.results[i][0].transcript;
		}
	}
	};
}

function startButton(event) {
	// Abort previous instances of recognition already running
    if (recognition && recognition.abort) {
        recognition.abort();
    }
	final_transcript = '';

		var speechcountry = prefManager.getCharPref("extensions.TurnOfftheLights.speechlang");if(!speechcountry)speechcountry = 'en-US';
		try{ recognition.lang = speechcountry; } catch(e){}

	try{ recognition.start(); } catch(e){}
	ignore_onend = false;
	try{ start_timestamp = event.timeStamp; } catch(e){}
}

function speechrecognition(){
if(document.getElementById('speech').checked == true){
// show icon
$("speechicon").style.display = "";

// start automatic up
if (!recognizing) {
	startButton();
}
} else {
try{
	// hide icon
	$("speechicon").style.display = "none";
	if (recognizing) {recognition.stop(); recognition.abort(); recognizing = false;}
	$("stefanvdspeechsaidtext").textContent = "";
}
catch(e){}
}
}

function lookup(id, value)
{
    var ret = undefined;
    if(document.getElementById(id) != undefined)
    {
        var options = document.getElementById(id).childNodes;
        for(i = 0; i < options.length; i++)
        {
            if(options[i].value == value)
            {
                // ret = options[i];
				ret = [i];
                break;
            }
        }
    }
    return ret;
}

// Current year
function yearnow() {
var today = new Date(); var y0 = today.getFullYear();$("yearnow").textContent = y0;
}

/* Option page body action */
// Read current value settings
window.addEventListener('load', function() {
read_options();
yearnow();
// Add the YouTube player
$("dont-turn-off-the-lights").src = "https://www.youtube.com/embed/?listType=playlist&list=PLF155F53B3D8D07CB";
// remove loading screen
$('loading').style.display = "none";
});

document.addEventListener('DOMContentLoaded', function () {
// browser check
var nAgt = navigator.userAgent;
var browserName;
var urlbrowservendor = window.navigator.vendor;
if ((nAgt.indexOf("OPR/"))!=-1) {browserName = "Opera";}
else if (urlbrowservendor.search("Safari") >= 0) {browserName = "Safari";}
else if (urlbrowservendor.search("Yandex") >= 0) {browserName = "Yandex";}
else if (urlbrowservendor.search("Google") >= 0) {browserName = "Google Chrome";}
else if (navigator.appCodeName == "Mozilla") {browserName = "Firefox";}
else if ((nAgt.indexOf("Maxthon/"))!=-1) {browserName = "Maxthon";}

// browser check
if (browserName == "Firefox") {
	// feature check speech and camera
	// no support
	$("helpcameramotion").style.display = "";
	$("helpspeech").style.display = "";
	$("speech").disabled = true;
	$("select_language").disabled = true;
	$("select_dialect").disabled = true;
	$("speechonly").disabled = true;
	$("motion").disabled = true;
	$("cammotiononly").disabled = true;
} else if (browserName == "Google Chrome") {
	// feature check speech and camera
	// support
	$("helpcameramotion").style.display = "none";
	$("helpspeech").style.display = "none";
} else {
	// feature check speech and camera
	// support
	$("helpcameramotion").style.display = "none";
	$("helpspeech").style.display = "none";
}

// Firefox browser
var stefanvdurl = "https://addons.mozilla.org/firefox/addon/turn-off-the-lights/";
var reviewstefanvdurl = "https://addons.mozilla.org/firefox/addon/turn-off-the-lights/reviews/";
var linkfndownload = "https://addons.mozilla.org/firefox/addon/finance-toolbar/";
var linkppdownload = "https://addons.mozilla.org/firefox/addon/proper-menubar/";
var linkzodownload = "https://addons.mozilla.org/firefox/addon/zoom/";
var linkaadownload = "https://addons.mozilla.org/firefox/addon/ambient-aurea/";
var linkthemedownload = "https://addons.mozilla.org/firefox/addon/turn-off-the-lights-theme/";

var linktotlguide = "https://www.turnoffthelights.com/extension/firefoxguide.html";
var linktotlchangelog = "https://www.turnoffthelights.com/extension/firefoxchangelog.html";
var linktotlfan = "https://www.turnoffthelights.com/extension/firefoxwelcome.html";

// Remove remember
$("skipremember").addEventListener('click', function() {$('remembershare').style.display = "none";});
$("firstcheckboxskipremember").addEventListener('click', function() {if(firstcheckboxskipremember.checked == true){$('optionskipremember').checked = true;}save_options();});
var sharetext = "I highly recommended Turn Off the Lights. Download and try it yourself! www.turnoffthelights.com ";
var stefanvdaacodeurl = encodeURIComponent(stefanvdurl);
$("rememberboxrate").addEventListener("click", function() {window.open(reviewstefanvdurl);});
$("rememberboxgoogle").addEventListener("click", function() {window.open('https://plus.google.com/share?ur\l=' + stefanvdaacodeurl + '', 'Share to Google+','width=600,height=460,menubar=no,location=no,status=no');});
$("rememberboxfacebook").addEventListener("click", function() {window.open("https://www.facebook.com/sharer.php?u="+ stefanvdurl + "[URL]&t=" + sharetext + "");});
$("rememberboxtwitter").addEventListener("click", function() {window.open("https://twitter.com/share?url=" + stefanvdaacodeurl + "&text=" + sharetext + " @turnoffthelight", 'Share to Twitter','width=600,height=460,menubar=no,location=no,status=no');});

$("shareboxrate").addEventListener("click", function() {window.open(reviewstefanvdurl);});
$("shareboxgoogle").addEventListener("click", function() {window.open('https://plus.google.com/share?ur\l=' + stefanvdaacodeurl + '', 'Share to Google+','width=600,height=460,menubar=no,location=no,status=no');});
$("shareboxfacebook").addEventListener("click", function() {window.open("https://www.facebook.com/sharer.php?u="+ stefanvdurl + "[URL]&t=" + sharetext + "");});
$("shareboxtwitter").addEventListener("click", function() {window.open("https://twitter.com/share?url=" + stefanvdaacodeurl + "&text=" + sharetext + "@turnoffthelight", 'Share to Twitter','width=600,height=460,menubar=no,location=no,status=no');});

// Detect click / change to save the page and test it.
var inputs = document.querySelectorAll('input');
for (var i = 0; i < inputs.length; i++) {inputs[i].addEventListener('change', test);inputs[i].addEventListener('change', save_options);}

// Detect lightcolor change
$("lightcolor").addEventListener('change', function() {$('lightimagen').checked = true;$('example1').style.background = this.value;$('example2').style.background = this.value;save_options();});

// Detect image change
$("lightimage").addEventListener('change', function() {
function getImage(url) {
    var bkimage = new Image();
    bkimage.onload = function() {
	$('lightimagea').checked = true;
	$('example1').style.background = 'url(' + this.value + ')';
	$('example2').style.background = 'url(' + this.value + ')';
	save_options();
	};
    bkimage.onerror = function() {
	var optionwrongimg = chrome.i18n.getMessage('optionwrongimg');window.alert(optionwrongimg);
	$('lightimagea').checked = true;
	$('lightimage').value = 'http://www.turnoffthelights.com/extension/images/theater.jpg';
	$('example1').style.background = 'url(http://www.turnoffthelights.com/extension/images/theater.jpg)';
	$('example2').style.background = 'url(http://www.turnoffthelights.com/extension/images/theater.jpg)';
	save_options();	
	};
	bkimage.src = url;
}
getImage(this.value);
});

// Close yellow bar
$("managed-prefs-text-close").addEventListener('click', function() {$("managed-prefs-banner").style.display = "none";});

// Slider
$("slider").addEventListener('change', function() {showValue(this.value);save_options();});

// Interval
$("interval").addEventListener('change', function() {showValue(this.value);save_options();});

// Light switch
$("onoffrange").addEventListener('change', function() {lightscontrol();});

// Arangeblur
$("arangeblur").addEventListener('change', function() {showambilightblurValue(this.value);save_options();});
$("ambilightrangeblurradius").addEventListener('change', function() {showambilightblurValue(this.value);save_options();});

// Arangespread
$("arangespread").addEventListener('change', function() {showambilightspreadValue(this.value);save_options();});
$("ambilightrangespreadradius").addEventListener('change', function() {showambilightspreadValue(this.value);save_options();});

// Add website
$("addbutton").addEventListener('click', function() {addWhitelistDomain();});

// Remove website
$("removebutton").addEventListener('click', function() {removeSelectedExcludedDomain();});

// Save time
$("confirmtime").addEventListener('click', function() {save_options();var optiontimetemp = chrome.i18n.getMessage('optiontimesaved');window.alert(optiontimetemp);});

// Save password
$("confirmpassword").addEventListener('click', function() {save_options();var optionpastemp = chrome.i18n.getMessage('optionpasswordsaved');window.alert(optionpastemp);});

// Save KB download
$("tabbasic").addEventListener('click', function() {OFFworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabvisual").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabadvan").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabnight").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabmotion").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabspeech").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabguide").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "http://www.turnoffthelights.com/extension/firefoxguide.html";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "none";});
$("tabshare").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "http://www.turnoffthelights.com/extension/fan.html";$("managed-prefs-banner").style.display = "none";});

$("buttonreportissue").addEventListener('click', function () { window.open("http://www.turnoffthelights.com/support"); });
$("buttonchangelog").addEventListener('click', function () { window.open(linktotlchangelog); });
$("buttonreportlist").addEventListener('click', function () { window.open("http://www.turnoffthelights.com/extension/issueslist.html"); });
$("buttontranslateme").addEventListener('click', function () { window.open("http://www.turnoffthelights.com/extension/translate.html"); });

function ONworkaroundbugfromsafari(){$("dont-turn-off-the-lights").src = "";}
function OFFworkaroundbugfromsafari(){$("dont-turn-off-the-lights").src = "http://www.youtube.com/embed/?listType=playlist&list=PLF155F53B3D8D07CB";}

// Download Upgrade
$("fndownload").addEventListener('click', function() {window.open(linkfndownload);});
$("ppdownload").addEventListener('click', function() {window.open(linkppdownload);});
$("zodownload").addEventListener('click', function() {window.open(linkzodownload);});
$("aadownload").addEventListener('click', function() {window.open(linkaadownload);});

$("themedownload").addEventListener('click', function() {window.open(linkthemedownload);});

// Save password
$("confirmtimesaver").addEventListener('click', function() {save_options();var optionpastemp = chrome.i18n.getMessage('optionecosaversaved');window.alert(optionpastemp);});

// Check screenshot
$("wallpaperhide").addEventListener('click', function() {$("imagegallery").style.display = "";$("wallpapershow").style.display = "";$("wallpaperhide").style.display = "none";});
$("wallpapershow").addEventListener('click', function() {$("imagegallery").style.display = "none";$("wallpapershow").style.display = "none";$("wallpaperhide").style.display = "";});
$("totlswallpaper5").addEventListener('click', function() {$("lightimage").value = "http://www.turnoffthelights.com/extension/images/totls5.jpg";test();save_options();});
$("totlswallpaper4").addEventListener('click', function() {$("lightimage").value = "http://www.turnoffthelights.com/extension/images/totls4.jpg";test();save_options();});
$("totlswallpaper3").addEventListener('click', function() {$("lightimage").value = "http://www.turnoffthelights.com/extension/images/totls3.jpg";test();save_options();});
$("totlswallpaper2").addEventListener('click', function() {$("lightimage").value = "http://www.turnoffthelights.com/extension/images/totls2.jpg";test();save_options();});
$("totlswallpaper1").addEventListener('click', function() {$("lightimage").value = "http://www.turnoffthelights.com/extension/images/theater.jpg";test();save_options();});

// dynamic test
$("dynamic").addEventListener('click', function() {if(dynamic.checked == true){dynamictest();$('lightdynamic').disabled = false;}else{removedynamic();$('lightdynamic').disabled = true;}});

// Check dynamic
$("dynamichide").addEventListener('click', function() {$("dynamicgallery").style.display = "";$("dynamicshow").style.display = "";$("dynamichide").style.display = "none";});
$("dynamicshow").addEventListener('click', function() {$("dynamicgallery").style.display = "none";$("dynamicshow").style.display = "none";$("dynamichide").style.display = "";});
$("totldynpaper10").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicstars');$('dynamic10').checked = true;dynamictest();save_options();});
$("totldynpaper9").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamictriangulation');$('dynamic9').checked = true;dynamictest();save_options();});
$("totldynpaper8").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicstorm');$('dynamic8').checked = true;dynamictest();save_options();});
$("totldynpaper7").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicdotscolor');$('dynamic7').checked = true;dynamictest();save_options();});
$("totldynpaper6").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicsmoke');$('dynamic6').checked = true;dynamictest();save_options();});
$("totldynpaper5").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicspace');$('dynamic5').checked = true;dynamictest();save_options();});
$("totldynpaper4").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamiccloud');$('dynamic4').checked = true;dynamictest();save_options();});
$("totldynpaper3").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicraindrops');$('dynamic3').checked = true;dynamictest();save_options();});
$("totldynpaper2").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicblocks');$('dynamic2').checked = true;dynamictest();save_options();});
$("totldynpaper1").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicfishtank');$('dynamic1').checked = true;dynamictest();save_options();});
$("hoveroptiondyn5").addEventListener('click', function() {$('dynamic5').checked = true;dynamictest();save_options();});

// autoplay Add website
$("autoplayaddbutton").addEventListener('click', function() {autoplayaddWhitelistDomain();});

// autoplay Remove website
$("autoplayremovebutton").addEventListener('click', function() {autoplayremoveSelectedExcludedDomain();});

// YouTube quality
$("youtubequality").addEventListener('click', function() {save_options();});
$("youtubequality").addEventListener('change', function() {save_options();});

// atmosphere Add website
$("atmosphereaddbutton").addEventListener('click', function() {atmosphereaddWhitelistDomain();});

// atmosphere Remove website
$("atmosphereremovebutton").addEventListener('click', function() {atmosphereremoveSelectedExcludedDomain();});

// night Add website
$("nightaddbutton").addEventListener('click', function() {nightaddWhitelistDomain();});

// night Remove website
$("nightremovebutton").addEventListener('click', function() {nightremoveSelectedExcludedDomain();});

// cam motion Add website
$("cammotionaddbutton").addEventListener('click', function() {cammotionaddWhitelistDomain();});

// cam motion Remove website
$("cammotionremovebutton").addEventListener('click', function() {cammotionremoveSelectedExcludedDomain();});

// speech Add website
$("speechaddbutton").addEventListener('click', function() {speechaddWhitelistDomain();});

// speech Remove website
$("speechremovebutton").addEventListener('click', function() {speechremoveSelectedExcludedDomain();});

// autostop Add website
$("autostopaddbutton").addEventListener('click', function() {autostopaddWhitelistDomain();});

// autostop Remove website
$("autostopremovebutton").addEventListener('click', function() {autostopremoveSelectedExcludedDomain();});

// video Add website
$("videotooladdbutton").addEventListener('click', function() {videotooladdWhitelistDomain();});

// video Remove website
$("videotoolremovebutton").addEventListener('click', function() {videotoolremoveSelectedExcludedDomain();});

// Reset settings
$("resettotl").addEventListener('click', function() {
//prefManager.deleteBranch("extensions.TurnOfftheLights.");
prefManager.setBoolPref("extensions.TurnOfftheLights.firstrun", true);
prefManager.setCharPref("extensions.TurnOfftheLights.interval", "80");
prefManager.setCharPref("extensions.TurnOfftheLights.lightcolor", "#000000");
prefManager.setBoolPref("extensions.TurnOfftheLights.pageaction", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplay", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.playlist", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.flash", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.head", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.fadein", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.fadeout", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.infobar", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.sharebutton", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.likebutton", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.shortcutlight", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.suggestions", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.videoheadline", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.eastereggs", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.contextmenus", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.readerlargestyle", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.viewcount", false);
prefManager.setCharPref("extensions.TurnOfftheLights.lightimage", "http://www.turnoffthelights.com/extension/images/theater.jpg");
prefManager.setCharPref("extensions.TurnOfftheLights.excludedDomains", "{\"http://www.blogger.com\":true,\"http://www.nytimes.com\":true}");
prefManager.setBoolPref("extensions.TurnOfftheLights.nighttime", false);
prefManager.setCharPref("extensions.TurnOfftheLights.begintime", "21:00");
prefManager.setCharPref("extensions.TurnOfftheLights.endtime", "23:45");
prefManager.setBoolPref("extensions.TurnOfftheLights.addvideobutton", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.likebar", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.password", false);
prefManager.setCharPref("extensions.TurnOfftheLights.enterpassword", "");
prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagea", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagen", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.readera", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.readern", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.eyea", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.eyen", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.eyealist", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlighto", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlightc", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlighta", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlightt", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightfixcolor", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight4color", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightvarcolor", false);
prefManager.setCharPref("extensions.TurnOfftheLights.ambilightrangeblurradius", "50");
prefManager.setCharPref("extensions.TurnOfftheLights.ambilightrangespreadradius", "5");
prefManager.setCharPref("extensions.TurnOfftheLights.ambilightcolorhex", "#47C2FF");
prefManager.setCharPref("extensions.TurnOfftheLights.ambilight1colorhex", "#FF0000");
prefManager.setCharPref("extensions.TurnOfftheLights.ambilight2colorhex", "#FFEE00");
prefManager.setCharPref("extensions.TurnOfftheLights.ambilight3colorhex", "#00FF00");
prefManager.setCharPref("extensions.TurnOfftheLights.ambilight4colorhex", "#0000FF");
prefManager.setBoolPref("extensions.TurnOfftheLights.noflash", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.hardflash", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.ecosaver", false);
prefManager.setCharPref("extensions.TurnOfftheLights.ecosavertime", "60");
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic1", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic2", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic3", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic4", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic5", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic6", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic7", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic8", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic9", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic10", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.hoveroptiondyn5", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplayonly", false);
prefManager.setCharPref("extensions.TurnOfftheLights.autoplayDomains", "{\"http://www.youtube.com\":true,\"https://www.youtube.com\":true,\"http://www.vimeo.com\":true}");
prefManager.setBoolPref("extensions.TurnOfftheLights.blur", false);
prefManager.setCharPref("extensions.TurnOfftheLights.maxquality", "hd1080");
prefManager.setBoolPref("extensions.TurnOfftheLights.autowidthyoutube", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.customqualityyoutube", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.cinemaontop", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.alllightsoff", false);
prefManager.setCharPref("extensions.TurnOfftheLights.spotlightradius", "50");
prefManager.setBoolPref("extensions.TurnOfftheLights.atmosphereonly", false);
prefManager.setCharPref("extensions.TurnOfftheLights.atmosphereDomains", "{\"http://www.youtube.com\":true,\"https://www.youtube.com\":true,\"http://www.vimeo.com\":true}");
prefManager.setBoolPref("extensions.TurnOfftheLights.optionskipremember", false);
prefManager.setCharPref("extensions.TurnOfftheLights.countremember", "0");
prefManager.setBoolPref("extensions.TurnOfftheLights.nighttheme", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightonly", false);
prefManager.setCharPref("extensions.TurnOfftheLights.nightDomains", "{\"http://www.youtube.com\":true,\"https://www.youtube.com\":true,\"http://www.nytimes.com\":true}");
prefManager.setBoolPref("extensions.TurnOfftheLights.nightenabletheme", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaydelay", false);
prefManager.setCharPref("extensions.TurnOfftheLights.autoplaydelaytime", "3");
prefManager.setBoolPref("extensions.TurnOfftheLights.motion", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagelin", false);
prefManager.setCharPref("extensions.TurnOfftheLights.linearsq", "top");
prefManager.setCharPref("extensions.TurnOfftheLights.colora", "#000000");
prefManager.setCharPref("extensions.TurnOfftheLights.intervallina", "0");
prefManager.setCharPref("extensions.TurnOfftheLights.colorb", "#858585");
prefManager.setCharPref("extensions.TurnOfftheLights.intervallinb", "100");
prefManager.setBoolPref("extensions.TurnOfftheLights.speech", false);
prefManager.setCharPref("extensions.TurnOfftheLights.speechlang", "");
prefManager.setCharPref("extensions.TurnOfftheLights.speechcountry", "");
prefManager.setBoolPref("extensions.TurnOfftheLights.atmosvivid", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.cammotiononly", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.speechonly", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaychecklistwhite", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaychecklistblack", false);
prefManager.setCharPref("extensions.TurnOfftheLights.cammotionDomains", "{\"http://www.youtube.com\":true,\"https://www.youtube.com\":true,\"http://www.vimeo.com\":true}");
prefManager.setCharPref("extensions.TurnOfftheLights.speechDomains", "{\"http://www.youtube.com\":true,\"https://www.youtube.com\":true,\"http://www.vimeo.com\":true}");
prefManager.setBoolPref("extensions.TurnOfftheLights.slideeffect", false);
prefManager.setCharPref("extensions.TurnOfftheLights.reviewedlastonversion", "");
prefManager.setCharPref("extensions.TurnOfftheLights.applastonversion", "");
prefManager.setBoolPref("extensions.TurnOfftheLights.autostop", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.autostoponly", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.autostopchecklistwhite", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.autostopchecklistblack", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.nighthover", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightmodechecklistwhite", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightmodechecklistblack", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmtopleft", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmtopright", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmbottomright", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmbottomleft", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmcustom", false);
prefManager.setCharPref("extensions.TurnOfftheLights.nmcustomx", "25px");
prefManager.setCharPref("extensions.TurnOfftheLights.nmcustomy", "25px");
prefManager.setBoolPref("extensions.TurnOfftheLights.nightactivetime", false);
prefManager.setCharPref("extensions.TurnOfftheLights.nmbegintime", "21:00");
prefManager.setCharPref("extensions.TurnOfftheLights.nmendtime", "23:45");
prefManager.setBoolPref("extensions.TurnOfftheLights.lampandnightmode", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.eyechecklistwhite", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.eyechecklistblack", false);
prefManager.setCharPref("extensions.TurnOfftheLights.autostopDomains", "{\"http://www.youtube.com\":true,\"https://www.youtube.com\":true,\"http://www.vimeo.com\":true}");
prefManager.setCharPref("extensions.TurnOfftheLights.nightmodebck", "#000000");
prefManager.setCharPref("extensions.TurnOfftheLights.nightmodetxt", "#ffffff");
prefManager.setBoolPref("extensions.TurnOfftheLights.no360youtube", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.videotool", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.reflection", false);
prefManager.setCharPref("extensions.TurnOfftheLights.reflectionamount", "20");
prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolonly", false);
prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolchecklistwhite", true);
prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolchecklistblack", false);
prefManager.setCharPref("extensions.TurnOfftheLights.videotoolDomains", "{\"http://www.youtube.com\":true,\"https://www.youtube.com\":true,\"http://www.vimeo.com\":true}");
prefManager.setBoolPref("extensions.TurnOfftheLights.enablesync", false);
window.location = window.location;
});

// linearsq
$("linearsq").addEventListener('click', function() {test();save_options();});

// Review box
$("war").addEventListener('click', function() {window.open(reviewstefanvdurl);$("sectionreviewbox").style.display = "none";chrome.storage.local.set({"reviewedlastonversion": chrome.runtime.getManifest().version});});
$("nt").addEventListener('click', function() {$("sectionreviewbox").style.display = "none";chrome.storage.local.set({"reviewedlastonversion": chrome.runtime.getManifest().version});});

// Aurora Player app box
$("apgetapp").addEventListener('click', function() {window.open("http://www.stefanvd.net/project/auroraplayer.htm", "_blank");$("sectionauroraplayerappbox").style.display = "none";prefManager.setCharPref("extensions.TurnOfftheLights.applastonversion", $("version_number").textContent);});
$("apnt").addEventListener('click', function() {$("sectionauroraplayerappbox").style.display = "none";prefManager.setCharPref("extensions.TurnOfftheLights.applastonversion", $("version_number").textContent);});
    
// Mobile app box
$("magetapp").addEventListener('click', function() {window.open("https://www.turnoffthelights.com/mobile.html");$("sectionmobileappbox").style.display = "none";prefManager.setCharPref("extensions.TurnOfftheLights.mobilelastonversion", $("version_number").textContent);});
$("mant").addEventListener('click', function() {$("sectionmobileappbox").style.display = "none";prefManager.setCharPref("extensions.TurnOfftheLights.mobilelastonversion", $("version_number").textContent);});

// retina check
if(window.devicePixelRatio >= 2) {
$("loadinglamp").src = "icons/icon16@2x.png";$("loadinglamp").style.width = "16px"; $("loadinglamp").style.height = "16px";
$("welcomelamp").src = "icons/icon16@2x.png";$("welcomelamp").style.width = "16px"; $("welcomelamp").style.height = "16px";
$("rememberlamp").src = "icons/icon16@2x.png";$("rememberlamp").style.width = "16px"; $("rememberlamp").style.height = "16px";
$("auroraplayericon").src = "images/aurora-player_32x32@2x.png";
}

// Firefox sync settings
$("enablesync").addEventListener('click', function() {
var mustbesyncon;
	if($('enablesync').checked){mustbesyncon = true;}
	else{mustbesyncon = false;}
prefManager.setBoolPref("extensions.TurnOfftheLights.firstrun", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.interval", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.lightcolor", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplay", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.playlist", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.flash", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.head", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.fadein", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.fadeout", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.infobar", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.sharebutton", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.likebutton", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.shortcutlight", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.suggestions", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.videoheadline", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.eastereggs", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.contextmenus", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.readerlargestyle", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.viewcount", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.lightimage", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.excludedDomains", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nighttime", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.begintime", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.endtime", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.addvideobutton", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.likebar", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.password", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.enterpassword", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagea", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagen", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.readera", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.readern", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.eyea", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.eyen", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.eyealist", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlighto", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlightc", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlighta", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.mousespotlightt", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightfixcolor", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight4color", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightvarcolor", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightrangeblurradius", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightrangespreadradius", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilightcolorhex", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight1colorhex", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight2colorhex", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight3colorhex", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ambilight4colorhex", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.noflash", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.hardflash", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ecosaver", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.ecosavertime", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic1", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic2", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic3", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic4", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic5", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic6", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic7", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic8", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic9", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.dynamic10", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.hoveroptiondyn5", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplayonly", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplayDomains", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.blur", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.maxquality", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autowidthyoutube", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.customqualityyoutube", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.cinemaontop", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.alllightsoff", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.spotlightradius", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.atmosphereonly", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.atmosphereDomains", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.optionskipremember", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nighttheme", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightonly", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightDomains", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightenabletheme", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaydelay", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaydelaytime", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.motion", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.lightimagelin", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.linearsq", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.colora", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.intervallina", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.colorb", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.intervallinb", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.speech", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.speechlang", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.speechcountry", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.atmosvivid", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.cammotiononly", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.speechonly", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaychecklistwhite", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autoplaychecklistblack", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.cammotionDomains", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.speechDomains", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.slideeffect", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.reviewedlastonversion", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.applastonversion", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autostop", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autostoponly", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autostopchecklistwhite", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autostopchecklistblack", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nighthover", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightmodechecklistwhite", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightmodechecklistblack", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmtopleft", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmtopright", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmbottomright", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmbottomleft", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmcustom", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmcustomx", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmcustomy", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightactivetime", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmbegintime", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nmendtime", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.lampandnightmode", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.eyechecklistwhite", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.eyechecklistblack", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.autostopDomains", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightmodebck", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.nightmodetxt", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.no360youtube", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.no360youtube", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.videotool", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.reflection", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.reflectionamount", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolonly", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolchecklistwhite", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolchecklistblack", mustbesyncon);
prefManager.setBoolPref("extensions.TurnOfftheLights.videotoolDomains", mustbesyncon);
});

});