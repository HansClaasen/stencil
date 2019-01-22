import * as d from '.';


export type LazyBundlesRuntimeMeta = LazyBundleRuntimeMeta[];


export type LazyBundleRuntimeMeta = [
  /** bundleIds */
  any,
  ComponentLazyRuntimeMeta[]
];


export interface ComponentRuntimeMeta {
  attrNameToPropName?: Map<string, string>;
  hostListeners?: d.ComponentRuntimeHostListener[];
  members?: d.ComponentRuntimeMembers;
  scopedCssEncapsulation?: 1;
  shadowDomEncapsulation?: 1;
}


export interface ComponentLazyRuntimeMeta extends ComponentRuntimeMeta {
  cmpTag?: string;
  lazyBundleIds?: d.ModeBundleIds;
}


export interface ComponentRuntimeMembers {
  [memberName: string]: ComponentRuntimeMember;
}


export interface ComponentRuntimeMember {
  /**
   * member type
   */
  [0]: number;

  /**
   * prop type
   */
  [1]?: number;

  /**
   * attribute name to observe
   */
  [2]?: string | 1 | 0;

  /**
   * reflect to attribute
   */
  [3]?: boolean;
}


export interface ComponentRuntimeHostListener {
  /**
   * event name (event type)
   */
  [0]: string;

  /**
   * class method to handle event
   */
  [1]: string;

  /**
   * disabled event
   */
  [2]?: boolean;

  /**
   * passive event option
   */
  [3]?: boolean;

  /**
   * capture event option
   */
  [4]?: boolean;
}


export type ModeBundleId = ModeBundleIds | string;


export interface ModeBundleIds {
  [modeName: string]: string;
}


export interface ElementData {
  ancestorHostElement?: d.HostElement;
  elm?: d.HostElement;
  hasConnected?: boolean;
  hasRendered?: boolean;
  hostListenerEventToMethodMap?: Map<string, string>;
  isActiveRender?: boolean;
  isConstructingInstance?: boolean;
  instance?: d.ComponentInstance;
  instanceValues?: Map<string, any>;
  isQueuedForUpdate?: boolean;
  isShadowDom?: boolean;
  isScoped?: boolean;
  queuedReceivedHostEvents?: any[];
  onReadyPromise?: Promise<any>;
  onReadyResolve?: (elm: any) => void;
  useNativeShadowDom?: boolean;
  vdomListeners?: Map<string, Function>;
  vnode?: d.VNode;
  watchCallbacks?: Map<string, string[]>;
}

export interface PlatformRuntime {
  appMode?: string;
  isTmpDisconnected: boolean;
  queueCongestion?: number;
  queuePending?: boolean;
  supportsListenerOptions?: boolean;
  supportsShadowDom?: boolean;
}

export type RefMap = WeakMap<any, ElementData>;

export type StyleMap = Map<string, string>;

export type RootAppliedStyleMap = WeakMap<Element, Set<string>>;

export type AppliedStyleMap = Set<string>;

export type ActivelyProcessingCmpMap = Set<Element>;
