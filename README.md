# Platform Code Benchmark
Welcome to the Code Benchmarking Exercise for the Platform Tribe!

This task is designed to be an open ended, low impact opportunity for you to demonstrate how you approach code with an emphasis on quality and awareness of good development practices.

The Exercise does not have a "correct answer", and is designed to help you demonstrate to the hiring manager how you approach problems and what attributes you feel contribute positively or negatively to the software development process.

It is intended that applicants take no more than approximately **1 hour** to complete this task following [Setup](#setup) and [Running the Script](#running-the-script).

## Prerequisites
 - Basic Javascript knowledge
 - Basic Git knowledge
 - Personal Github Account and Basic Github Familiarity

## Setup
 - Fork this repository into your own github account
 - Make the newly forked repository "Private", to hide your work from others
 - Checkout the "main" branch and begin the Exercise

## Running the Script
### Option 1: Node.js on Workstation
 - Download and Install Node.js
 - In the root of the repository, execute
```
node -e "require(\"./index\").handler({})"
```

### Option 2: Docker
 - Download and Install Docker
 - In the root of the repository, execute
```
docker run --rm -v "%cd%":/usr/src/app -w /usr/src/app node node -e "require(\"./index\").handler({})"
```

### Example Output
```
Loading hello world function
request: {}
response: {"statusCode":200,"headers":{"x-custom-header":"my custom header value"},"body":"{\"message\":\"Good day, you of World.\",\"input\":{}}"}
```

## Scenario
You are being asked to improve the quality of the code provided in [index.js](index.js).

The [index.js](index.js) file in this repository contains code that is used to handle a simple API call, which responds with a message compiled from some simple information provided in the request, e.g.
```
Good day, you of World.
```

All you need to know for the purposes of this exercise is that an external service will invoke the `handler` function, providing an object containing information about the request in a parameter `event`.
> **Extra Detail**: In reality, the code is invoked by AWS Lambda which is configured to call the `handler` function, providing the `event` object according to the information provided by the API call. The Lambda is trigger by a request made to API Gateway.

## Output
We are expecting:
 - the "main" branch to contain all code and files to be submitted
 - the submitted code to produce the same results as the original code
 - the submitted code is more readable than the original code and follows good practice
 - the git commit history is understandable and follows good practice
 - [Optional] A "NEXT_STEPS.md" file containing potential improvements that a subsequent developer could make, assuming they are large enough to be outside of the scope of this Exercise

## Submission
 - Using the hiring manager's work email (xxx@dcthomson.co.uk), add them as a collaborator to your private repository
 - The hiring manager may request that you also add additional collaborators from the organisation to review the submission