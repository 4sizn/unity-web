export const UNITY_CANVAS_ID = "unity-canvas";

export async function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      reject(false);
    };
    document.body.appendChild(script);
  });
}

export function createCanvas() {
  const canvasElement = document.getElementById(UNITY_CANVAS_ID);
  if (canvasElement) {
    return canvasElement as HTMLCanvasElement;
  }

  const canvas = document.createElement("canvas");
  //unity frameworks require canvas-id to "unity-canvas"
  canvas.id = UNITY_CANVAS_ID;
  canvas.style.width = "0";
  canvas.style.height = "0";
  document.body.appendChild(canvas);
  return canvas;
}

export function removeCanvas() {
  const canvas = document.getElementById(UNITY_CANVAS_ID);
  if (canvas) {
    document.body.removeChild(canvas);
  }
}
