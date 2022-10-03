'use strict';
console.log('Loading hello world function');
 
exports.handler = async (event) => {
    let name = "you";
    let City = 'World';
    let time = 'day';

    let dayOfTheWeekInStandardEnglishForm = '';
    let response_code = 200;
    console.log  ("request: " + JSON.stringify(event));
    
    if (event.queryStringParameters && event.queryStringParameters.name)
    {
        let message = "Received name: " + event.queryStringParameters.name
        console.log(message);
        name = event.queryStringParameters.name;
    }
    

    if (event.queryStringParameters
      && event.queryStringParameters.city) {
        City = event.queryStringParameters.city;
        console.log("Received city: " + City);
    }
    
    if (event.headers && event.headers['day'])
    {
        console.log("Received day: "
          + event.headers.day);
        dayOfTheWeekInStandardEnglishForm = event.headers.day;
    }
    

    if (event.body) {
        let body = JSON.parse(event.body)
        if (body.time) 
            time = body.time;
    }
 
    let greeting =    `Good ${time}, ${name} of ${City}.`;
    if (dayOfTheWeekInStandardEnglishForm) greeting += ` Happy ${dayOfTheWeekInStandardEnglishForm}!`   ;
    let responseBody = { message: greeting,
        input: event
    };
    let response = {
        statusCode: response_code,
        headers: {"x-custom-header" : "my custom header value"
        },
        body:
          JSON.stringify(responseBody)
    };

    console.log("response: " + JSON.stringify(response))
    return {
        statusCode: response_code,
        headers: {"x-custom-header" : "my custom header value"
        },
        body:
          JSON.stringify(responseBody)
    };


    
};