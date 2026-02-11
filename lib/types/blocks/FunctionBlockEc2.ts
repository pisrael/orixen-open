export interface AwsEc2Config {
  provider: 'aws';
  runtime: 'vm';
  ec2InstanceType: string;
  ec2RootVolumeSize: number;
  ec2RootVolumeType: 'gp2' | 'gp3' | 'io1' | 'io2' | 'sc1' | 'st1';
  ec2AsgMinSize?: number;
  ec2AsgMaxSize?: number;
  ec2AsgDesiredCapacity?: number;
  ec2KeyName?: string;
}

/** @deprecated Use AwsEc2Config instead */
export type FunctionBlockEc2Properties = AwsEc2Config;
