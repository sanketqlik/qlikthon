var express =  require('express');
var bodyParser =  require('body-parser');
var Speech = require('ssml-builder');
var app = express();
app.use(bodyParser.json({'limit':'100mb'}));
app.use(bodyParser.urlencoded({'limit':'100mb','extended':true}));

app.listen(process.env.APP_PORT || 8080);
app.get('/alexa',(req,res) => {
	res.json({"success":true});
})
app.post('/alexa',(req,res) => {
	var speech = new Speech();
	speech.say('Welcome to hackthon qlik 2024');
	var out = speech.ssml(true);
	res.json({
		"version":"1.0",
		"sessionAttributes":{},
		"response":{
			"outputSpeech":{
				"type":"SSML",
				"ssml":`<speak>${out}</speak>`
			},
			"shouldEndSession":false
		}
	});
})
