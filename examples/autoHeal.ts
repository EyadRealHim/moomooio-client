// Import the package and HookWebSocket utility
import MooMooIOClient, { HookWebSocket } from "../dist";

// Create a MooMooIOClient instance
const client = new MooMooIOClient();

// Define the clientWindow variable, which will hold a reference to the window object
// This ensures that clientWindow will reference the appropriate window object based on the environment
const clientWindow = document.defaultView || window || globalThis;

// Use the HookWebSocket utility to hook websockets and observe any connections (this is used for browser-based client)
HookWebSocket(clientWindow, (socket) => {
  // Tell MooMooIOClient to use this socket as the connection line between the client and server
  client.connection.use(socket);
});

// Listen to any change in myPlayer's health. This can be used to achieve autoheal.
client.myPlayer.on("healthChange", () => {
  // Check if the player's health is already above 95. If so, don't heal.
  if (client.myPlayer.health > 95) return;

  // This line of code will place/use food and then switch back to the "primary" weapon
  client.myPlayer.place("foodType", "primary");
});
