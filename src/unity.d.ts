import { UnityConfig } from "react-unity-webgl";
import { UnityInstance } from "react-unity-webgl/declarations/unity-instance";

declare global {
  interface Window {
    createUnityInstance: (
      canvas: HTMLCanvasElement,
      config: UnityConfig,
      onProgress?: (progress: number) => void
    ) => Promise<UnityInstance>;
  }
}

export {};
