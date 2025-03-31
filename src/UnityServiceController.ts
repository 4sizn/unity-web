import { UnityConfig } from "react-unity-webgl";
import { UnityInstance } from "react-unity-webgl/declarations/unity-instance";

import { createCanvas, loadScript, removeCanvas } from "./utils";

export class UnityServiceController {
  private static readonly config: UnityConfig = {
    loaderUrl: "unity/Build/Build.loader.js",
    dataUrl: "unity/Build/Build.data",
    frameworkUrl: "unity/Build/Build.framework.js",
    codeUrl: "unity/Build/Build.wasm",
    streamingAssetsUrl: "unity/StreamingAssets",
  };
  private static _instance: UnityServiceController;
  private _unityInstance: UnityInstance | null = null;
  private _canvas: HTMLCanvasElement | null = null;

  private constructor() {}

  public static getInstance(): UnityServiceController {
    return this._instance || (this._instance = new this());
  }

  public async init() {
    await loadScript("unity/Build/Build.loader.js");
  }

  private _readyUnityInstance() {
    if (!this._canvas) {
      throw new Error("Canvas not found");
    }

    this._canvas.style.width = "100%";
    this._canvas.style.height = "100%";
  }

  public async createUnityInstance() {
    try {
      this._canvas = createCanvas();
      this._unityInstance = await window.createUnityInstance(
        this._canvas,
        UnityServiceController.config
      );
      this._readyUnityInstance();
    } catch (error) {
      console.error(error);
    }
  }

  public async unityDestroy() {
    try {
      await this._unityInstance?.Quit();
      removeCanvas();
    } catch (error) {
      console.error(error);
    }
  }
}
