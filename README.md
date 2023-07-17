# MooMooIO-Client

The MooMooIO-Client is an API wrapper designed for MooMoo.io, a game. This package provides a powerful yet easy-to-use API for creating mods, clones, or plugins for MooMoo.io.

[![npm version](https://badge.fury.io/js/moomooio-client.svg)](https://www.npmjs.com/package/moomooio-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Key Features

- Simple API: The MooMooIO-Client offers an intuitive and straightforward interface, making it easy to interact with the MooMoo.io game client.
- Seamless Integration: The API seamlessly integrates with the MooMoo.io game, allowing you to enhance your gameplay experience.
- Event System: Handle various in-game events such as player movements, resource gathering, and combat actions using the event system provided by MooMooIO-Client.

## Installation

To use MooMooIO-Client in your project, follow these steps:

1. Install Node.js if you haven't done so already.
2. Open a terminal or command prompt.
3. Navigate to your project directory.
4. Run the following command to install MooMooIO-Client:

```shell
npm install moomooio-client # or pnpm install moomooio-client
```

## Getting Started

Here's an example that demonstrates how easy it is to create an autoheal feature:

```typescript
// Import the package and HookWebSocket utility
import MooMooIOClient, { HookWebSocket } from "moomooio-client";

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
```

## Examples

This repository contains examples showcasing the usage of the `moomooio-client` package. You can find these examples in the [examples](examples) folder.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request in the [GitHub repository](https://github.com/EyadRealHim/moomooio-client).

## License

This project is licensed under the MIT License. See the [MIT LICENSE](https://opensource.org/licenses/MIT) for more details.