import { ExpoConfig } from '@expo/config-types';
import { ConfigPlugin } from '@expo/config-plugins';
import { ExpoPlist } from '@expo/config-plugins/build/ios/IosConfig.types';
declare type XcodeProject = any;
declare type ExpoConfigUpdates = Pick<ExpoConfig, 'sdkVersion' | 'owner' | 'runtimeVersion' | 'nodeModulesPath' | 'updates' | 'slug'>;
export declare enum Config {
    ENABLED = "EXUpdatesEnabled",
    CHECK_ON_LAUNCH = "EXUpdatesCheckOnLaunch",
    LAUNCH_WAIT_MS = "EXUpdatesLaunchWaitMs",
    RUNTIME_VERSION = "EXUpdatesRuntimeVersion",
    SDK_VERSION = "EXUpdatesSDKVersion",
    UPDATE_URL = "EXUpdatesURL"
}
export declare function getUpdateUrl(config: Pick<ExpoConfigUpdates, 'owner' | 'slug'>, username: string | null): string | null;
export declare function getRuntimeVersion(config: Pick<ExpoConfigUpdates, 'runtimeVersion'>): string | null;
export declare function getSDKVersion(config: Pick<ExpoConfigUpdates, 'sdkVersion'>): string | null;
export declare function getUpdatesEnabled(config: Pick<ExpoConfigUpdates, 'updates'>): boolean;
export declare function getUpdatesTimeout(config: Pick<ExpoConfigUpdates, 'updates'>): number;
export declare function getUpdatesCheckOnLaunch(config: Pick<ExpoConfigUpdates, 'updates'>): 'NEVER' | 'ALWAYS';
export declare const withUpdatesIOS: ConfigPlugin<{
    expoUsername: string | null;
}>;
export declare function setUpdatesConfig(config: ExpoConfigUpdates, expoPlist: ExpoPlist, username: string | null): ExpoPlist;
export declare function setVersionsConfig(config: ExpoConfigUpdates, expoPlist: ExpoPlist): ExpoPlist;
export declare function ensureBundleReactNativePhaseContainsConfigurationScript(projectRoot: string, config: Pick<ExpoConfigUpdates, 'nodeModulesPath'>, project: XcodeProject): XcodeProject;
export declare function isShellScriptBuildPhaseConfigured(projectRoot: string, config: Pick<ExpoConfigUpdates, 'nodeModulesPath'>, project: XcodeProject): boolean;
export declare function isPlistConfigurationSet(expoPlist: ExpoPlist): boolean;
export declare function isPlistConfigurationSynced(config: ExpoConfigUpdates, expoPlist: ExpoPlist, username: string | null): boolean;
export declare function isPlistVersionConfigurationSynced(config: Pick<ExpoConfigUpdates, 'sdkVersion' | 'runtimeVersion'>, expoPlist: ExpoPlist): boolean;
export {};
