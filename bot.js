var HTTPS = require('https');
var BOT_ID = process.env.BOT_ID;


function respond(){
	var incoming = JSON.parse(this.req.chunks[0]);
	var yesRegex = /\b(yes)\b/i;

	if(incoming.text && yesRegex.test(incoming.text)){
		this.res.writeHead(200);
		yesMsg();
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

exports.respond = respond;
