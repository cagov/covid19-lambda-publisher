# COVID-19 Lambda Publisher

## NOTE: As of 5-28-2024 This project is not actively maintained by ODI and this repo is being converted to Archive (read-only) status.


This was set up using [Architect](https://arc.codes/docs/en/get-started/quickstart), an open-source tool that simplifies setting up and maintaining Lambda apps on AWS.

You will need an AWS account with reasonably full ODI access to maintain it.  Specify it in your ~/.aws/config file using the [ODI] section.  This section label is referenced in the app.arc file.

## Setup
* Node version: 16.x+
* `npm install`
* Obtain a copy of the `preferences.arc` file from jbum or another developer of this repo.  This contains important environment variables for accessing Github and Slack.  
The following env vars are set up by this file:
	* ARC_APP_SECRET (needed for production only)
	* GITHUB_NAME
	* GITHUB_EMAIL
	* GITHUB_TOKEN
	* SLACKBOT_TOKEN


## Local development
`npx arc sandbox`
## Deployment (staging)
`npx arc deploy`
## Deployment (production)
`npx arc deploy --production`

## Updating
Modify the code. Test locally, deploy to staging, test, and then deploy to  production and test.










