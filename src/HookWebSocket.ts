/**
 * HookWebSocket
 * @description This function creates a custom WebSocket class that allows you to hook into the WebSocket lifecycle.
 * @param  target The target object that will be extended with the custom WebSocket class.
 * @param onHook A function that will be called with the new WebSocket instance as its only argument.
 * @returns The extended target object.
 */
export default function HookWebSocket(
  target: {
    WebSocket: {
      new (url: string | URL, protocols?: string | string[] | undefined): WebSocket;
      prototype: WebSocket;
      readonly CONNECTING: 0;
      readonly OPEN: 1;
      readonly CLOSING: 2;
      readonly CLOSED: 3;
    };
  },
  onHook: (data: WebSocket) => void
) {
  target.WebSocket = class extends target.WebSocket {
    constructor(url: string | URL, protocols?: string | string[] | undefined) {
      super(url, protocols);

      onHook(this);
    }
  };
}
