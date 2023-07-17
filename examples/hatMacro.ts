// Import the package and the utilities from the MooMooIOClient package
import MooMooIOClient, { HookWebSocket, KeyboardOf, getHat } from "../dist";

// Create an instance of MooMooIOClient
const client = new MooMooIOClient();

// Define the clientWindow variable, which will hold a reference to the window object
// This ensures that clientWindow will reference the appropriate window object based on the environment
const clientWindow = document.defaultView || window || globalThis;

// Use the HookWebSocket utility to hook websockets and observe any connections (this is used for browser-based clients)
HookWebSocket(clientWindow, (socket) => {
  // Instruct MooMooIOClient to use this socket as the connection line between the client and server
  client.connection.use(socket);
});

// Create a Keyboard instance to interact with the keyboard API
const keyboard = KeyboardOf(window);

// Listen for the "T" key and equip the "Moo Cap" if the listener is triggered
keyboard.on(
  "T",
  () => {
    client.myPlayer.equip("Hat", "Moo Cap");
  },
  null
);

// Listen for the "Y" key and equip the "Apple Cap" if the listener is triggered
keyboard.on(
  "Y",
  () => {
    client.myPlayer.equip("Hat", "Apple Cap");
  },
  null
);

// Listen for the "Escape" key and equip "None" if the listener is triggered
keyboard.on(
  "Escape",
  () => {
    client.myPlayer.equip("Hat", "None");
  },
  null
);

// Listen for any changes in the myPlayer's hat. This can be used to achieve Chat-Per-Hat (CPH).
client.myPlayer.on("hatChange", (info) => {
  const oldHat = getHat(info.previous)?.name ?? "None"; // Load the data of the previous hat to fetch its name. If not found, fallback to "None"
  const currHat = getHat(info.current)?.name ?? "None"; // Load the data of the current hat to fetch its name. If not found, fallback to "None"

  // Note: info.previous and info.current are both numeric types that represent a hat id.

  client.myPlayer.chat(`Hat: from ${oldHat} to ${currHat}`); // Send a chat message about the hat change
});
