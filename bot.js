var HTTPS = require('https');
var BOT_ID = process.env.BOT_ID;


function respond(){
	var incoming = JSON.parse(this.req.chunks[0]);
	var yesRegex = /\b(yes)\b/i;
	var seanRegex = /\b(sean)\b/i;
	var ripRegex = /\b(rip)\b/i;
    var andChillRegex = /[^\s]*\s(and|&)\s(chi+ll+)/i;

	if(incoming.text && yesRegex.test(incoming.text)){
		this.res.writeHead(200);
		yesMsg();
		this.res.end();
	}
	else if(incoming.text && seanRegex.test(incoming.text)){
		this.res.writeHead(200);
		seanMsg();
		this.res.end();			
	}
	else if(incoming.text && ripRegex.test(incoming.text)){
		this.res.writeHead(200);
		ripMsg();
		this.res.end();			
	}
    else if(incoming.text && andChillRegex.test(incoming.text)){
        this.res.writeHead(200);
        andChillMsg(andChillRegex.exec(incoming.text));
        this.res.end();
    }
	else{
		console.log("NO MATCH:\t[\"" + incoming.text + "\"]");
		this.res.writeHead(200);
		this.res.end();
	}
}

function yesMsg(){
	var botRes, botReq;
	var body;
	var options;

	botRes = "Yaaaaaas";

	options = {
		hostname: 'api.groupme.com',
		path: '/v3/bots/post',
		method: 'POST'
	};

	body = {
		"bot_id": BOT_ID,
		"text": botRes
	};

	console.log("Transmitting: [\"" + botRes + "\"] to [" + BOT_ID + "]");

	botReq = HTTPS.request(options, function(res) {
		if(res.statusCode == 202){
			console.log("Success: [\"" + botRes + "\"] to [" + BOT_ID + "]");
		}
		else{
			console.log("bad status code " + res.statusCode);
		}
	});

	botReq.on('error', function(err){
		console.log("Failed: [\"" + botRes + "\"] to [" + BOT_ID + "] " + JSON.stringify(err));
	});

	botReq.end(JSON.stringify(body));
}

function seanMsg(){
	var botRes, botReq;
	var body;
	var options;

	botRes = "Long live the King!";

	options = {
		hostname: 'api.groupme.com',
		path: '/v3/bots/post',
		method: 'POST'
	};

	body = {
		"bot_id": BOT_ID,
		"text": botRes
	};

	console.log("Transmitting: [\"" + botRes + "\"] to [" + BOT_ID + "]");

	botReq = HTTPS.request(options, function(res) {
		if(res.statusCode == 202){
			console.log("Success: [\"" + botRes + "\"] to [" + BOT_ID + "]");
		}
		else{
			console.log("bad status code " + res.statusCode);
		}
	});

	botReq.on('error', function(err){
		console.log("Failed: [\"" + botRes + "\"] to [" + BOT_ID + "] " + JSON.stringify(err));
	});

	botReq.end(JSON.stringify(body));
}

function ripMsg(){
	var botRes, botReq;
	var body;
	var options;

	botRes = "Press F to pay respects";

	options = {
		hostname: 'api.groupme.com',
		path: '/v3/bots/post',
		method: 'POST'
	};

	body = {
		"bot_id": BOT_ID,
		"text": botRes
	};

	console.log("Transmitting: [\"" + botRes + "\"] to [" + BOT_ID + "]");

	botReq = HTTPS.request(options, function(res) {
		if(res.statusCode == 202){
			console.log("Success: [\"" + botRes + "\"] to [" + BOT_ID + "]");
		}
		else{
			console.log("bad status code " + res.statusCode);
		}
	});

	botReq.on('error', function(err){
		console.log("Failed: [\"" + botRes + "\"] to [" + BOT_ID + "] " + JSON.stringify(err));
	});

	botReq.end(JSON.stringify(body));
}

function andChillMsg(msg){
    var botRes, botReq;
    var body;
    var options;
    
    console.log("lol + \t" + msg);
    botRes = msg + "llllll!!!!";
    
    options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
    };
    
    body = {
        "bot_id": BOT_ID,
        "text": botRes
    };
    
    console.log("Transmitting: [\"" + botRes + "\"] to [" + BOT_ID + "]");
    
    botReq = HTTPS.request(options, function(res) {
                           if(res.statusCode == 202){
                           console.log("Success: [\"" + botRes + "\"] to [" + BOT_ID + "]");
                           }
                           else{
                           console.log("bad status code " + res.statusCode);
                           }
                           });
    
    botReq.on('error', function(err){
              console.log("Failed: [\"" + botRes + "\"] to [" + BOT_ID + "] " + JSON.stringify(err));
              });
    
    botReq.end(JSON.stringify(body));
}


exports.respond = respond;
