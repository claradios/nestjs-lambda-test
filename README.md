

### TEST: NEST + SERVERLESS + LAMBDA

To configure your AWS credentials you can run the following on your terminal:
```
serverless config credentials \
  --provider aws \
  --key EXAMPLEKEYABCED \
  --secret ExamPleSecret135553abced
```
Run locally command:
`sls offline start`

Deploy command:
`serverless deploy`
test time: (210s)

IMPORTANT: after testing remove the deployment to avoid unexpected charges:
`serverless remove` (52s)


* Reference article (first part works well, after that a bit outdated): https://nishabe.medium.com/nestjs-serverless-lambda-aws-in-shortest-steps-e914300faed5