

### TEST: NEST + SERVERLESS + LAMBDA

This is a POC to deploy a NestJS app with serverless. It has two lambda functions, one for Cats and one for Dogs.

To configure your AWS credentials. You can run the following on your terminal:
```
serverless config credentials \
  --provider aws \
  --key EXAMPLEKEYABCED \
  --secret ExamPleSecret135553abced
```
You can also use the AWS CLI. Credentials wil be found inside .aws/

Run locally command:
`sls offline start`

Deploy command:
`serverless deploy`
test time: (210s) (192s)

IMPORTANT: after testing remove the deployment to avoid unexpected charges:
`serverless remove` (52s)


* Reference article (first part works well, after that a bit outdated): https://nishabe.medium.com/nestjs-serverless-lambda-aws-in-shortest-steps-e914300faed5

Deployment is managed by [circleci](circleci.com)

test minify false


