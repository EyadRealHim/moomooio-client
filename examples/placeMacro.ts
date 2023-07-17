// Import the package and the utilities from the MooMooIOClient package
import MooMooIOClient, { HookWebSocket, KeyboardOf } from "../dist";

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

// Listen for the "V" key and place the spikeType (all possible spikes) if the listener is triggered
keyboard.on(
  "V",
  () => {
    client.myPlayer.place("spikeType", "primary");
  },
  null
);

// Listen for the "F" key and place the boostType (boost or trap) if the listener is triggered
keyboard.on(
  "F",
  () => {
    client.myPlayer.place("boostType", "primary");
  },
  null
);

// Listen for the "4" key and place the wallType (all possible walls) if the listener is triggered
keyboard.on(
  "4",
  () => {
    client.myPlayer.place("wallType", "primary");
  },
  null
);

// Listen for the "N" key and place the millType (all possible mills) if the listener is triggered
keyboard.on(
  "N",
  () => {
    client.myPlayer.place("millType", "primary");
  },
  null
);

// Listen for any placement from the player. This can be used to achieve Chat-Per-Placement.
client.myPlayer.on("place", (info) => {
  // info is a GameObject

  console.log(info); // Log the object that has been placed
  client.myPlayer.chat(`Placed: ${info.identity}`); // Send a chat message about the placement
});

// NOTE: You may notice that the placement is not very accurate. This is because when we use "place", it requires a "direction" as well, which we don't provide in this simplified example.
