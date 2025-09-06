#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LearningCodexStack } from '../lib/learning-codex-stack';

const app = new cdk.App();
new LearningCodexStack(app, 'LearningCodexStack');

