export interface AwsFargateConfig {
  provider: 'aws';
  runtime: 'container';
  fargateCpu: number;
  fargateMemory: number;
  fargateOperatingSystemFamily: string;
  fargateCpuArchitecture: 'X86_64' | 'ARM64';
  fargateEphemeralStoragesizeInGiB: number;
}

/** @deprecated Use AwsFargateConfig instead */
export type FunctionBlockFargateProperties = AwsFargateConfig;
