function response(room, msg, sender, isGroupChat, replier) {
    var Data = msg.split(" ");
    if (Data[0] == "/검색") {
		var str = msg.replace("/검색 ", "");
		str = "https://maple.gg/u/" + str;
        var result = Utils.getHtmlFromWeb(str);
		var detag = result.substring(result.indexOf("user-summary-level")+20,result.indexOf("user-summary-level")+27);
		var gild = result.substring(result.indexOf("text-yellow text-underline")+28,result.length);
		gild = gild.substring(0,gild.indexOf("</a>"));
		var level = result.substring(result.indexOf("Lv.")+3,result.indexOf("Lv.")+10);
		level = level.substring(0,level.indexOf("</li>"));
		if(gild.length>40){
			gild = "없음";
		}
		if(detag.indexOf("ml lang")!=-1){
			detag = "없음";
		}
		replier.reply("이름 : "+str.replace("https://maple.gg/u/","")+"\n레벨 : "+level+"\n유니온 : "+detag+"\n길드 : "+gild);
    }
}
