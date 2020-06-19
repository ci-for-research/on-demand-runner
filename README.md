# GitHub action runnner on demand function

An AWS function that checks whether recieved check_run is allowed to run and tells runner admin what to do in the log.

To setup you need

1. a repo with a Self hosted runner registered, but offline
2. a AWS profile called `serverless` to use for deploying the AWS Lambda function, use [./policy.json](policy.json) as the policy for the user.
3. node.js

## Deploy

```shell
npx serverless deploy
```

It should output a endpoint URL.

## Setup web hook

In GH repo settings create a new web hook.

* Use endpoint URL from deploy as Payload URL
* Use content type `application/json`
* Select only `Check runs` event

## Test

Make change to repo to trigger a [check_run webhook](https://developer.github.com/webhooks/event-payloads/#check_run).

In AWS console go to log events of the `check_run` Lambda function and follow instructions that appear in the log. The log message should tell you to start/stop runner or cancel workflow.
