'use strict'

const responses1 = {
    "queryText": "¿Sobre qué tema te gustaría saber? Orientación sexual",
    "action": "",
    "parameters": {},
    "allRequiredParamsPresent": true,
    "fulfillmentText": "¿Qué te gustaría conocer sobre este tema de orientación?",
    "fulfillmentMessages": [
        {
            "payload": {
                "quick_replies": [
                    {
                        "option": "¿Qué es?",
                        "payload": "¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?",
                        "text": "Orientacion1"
                    },
                    {
                        "option": "¿Cuantos y cuáles tipos hay?",
                        "payload": "¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?",
                        "text": "Orientacion2"
                    },
                    {
                        "option": "He sufrido discriminación",
                        "payload": "¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación",
                        "text": "Orientacion3"
                    }
                ],
                "text": "¿Qué te gustaría conocer sobre este tema de orientación?"
            }
        }
    ],
};

module.exports = {
    textQuery1: function(text, userID, parameters = {}) {
        //let sessionPath = sessionClient.sessionPath(projectId,sessionId + userID);
        //let self = module.exports;
        const request = {
            //session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent
                    text: text,
                    // The language used by the client
                    languageCode: 'es-ES',
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };
        //self.saveText(userID, text);
        //let responses = await sessionClient.detectIntent(request);
        this.handleAction(responses1);
        return responses1;
    },

    handleAction: function(responses) {
        //let self = module.exports;
        let queryResult = responses.queryResult;

        //When a intent asks for data about the user, the action(Dialogflow) & schema(Mongo) is set here, in order to save to db.
        //If want to creat a new schema, please first register it in folder "models", then import it here.
        /*switch(queryResult.action) {
            case '1.1.1':
                if (queryResult.allRequiredParamsPresent) {
                    self.saveRegistration(queryResult.parameters.fields);
                }
            case '1.2.1':
                if (queryResult.allRequiredParamsPresent) {
                    self.saveFunctionality(queryResult.parameters.fields);
                }
                break;
        }*/
        
        return responses;
    },
}