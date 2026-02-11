import { AwsEc2Config } from './FunctionBlockEc2';
import { AwsFargateConfig } from './FunctionBlockFargate';
import { AwsLambdaConfig } from './FunctionBlockLambda';

export type CloudProvider = 'aws' | 'oracle' | 'cloudflare' | 'azure';

export type DeployType = 'serverless' | 'container' | 'vm';

export type ProviderTypeConfig =
  | AwsLambdaConfig
  | AwsEc2Config
  | AwsFargateConfig;

export interface DeployTarget {
  provider: CloudProvider;
  deployType: DeployType;
  config: ProviderTypeConfig;
}
