import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LearningCodexStack } from '../lib/learning-codex-stack';

test('S3 bucket created', () => {
  const app = new cdk.App();
  const stack = new LearningCodexStack(app, 'TestStack');
  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::S3::Bucket', 1);
});

