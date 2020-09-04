import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.BeehiveMobileTest',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;