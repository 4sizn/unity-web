import { UnityServiceController } from "./UnityServiceController";

console.log("Hello World");

const unityServiceController = UnityServiceController.getInstance();

//add button to init unity instance
const button = document.createElement("button");
button.textContent = "Init Unity Instance";
button.addEventListener("click", async () => {
  await unityServiceController.init();
  // unityServiceController.createUnityInstance();
});
document.body.appendChild(button);

//add button to destroy unity instance
const destroyButton = document.createElement("button");
destroyButton.textContent = "Destroy Unity Instance";
destroyButton.addEventListener("click", async () => {
  unityServiceController.unityDestroy();
});
document.body.appendChild(destroyButton);
