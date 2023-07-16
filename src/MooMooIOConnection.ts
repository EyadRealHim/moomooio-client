import AntiKick from "./AntiKick";
import { decode } from "./ServerPackets";
import UnifyEmitter from "unify-emitter";

export interface MooMooIOConnectionEvents {
  close: {
    reason: string;
    code: number;
  };
  error: null;
  open: null;

  message: ReturnType<typeof decode>;
  rawMessage: Uint8Array;

  deepSend: { data: Uint8Array; isTrusted: boolean };
  send: Uint8Array;
}

export default class MooMooIOConnection extends UnifyEmitter<MooMooIOConnectionEvents> {
  #trusted: Uint8Array | null = null;
  #socket: WebSocket | null = null;

  protected antiKick = new AntiKick();

  connect(ip: string, token: string) {
    const url = `wss://ip_${ip}.moomoo.io:8008/?gameIndex=0&token=${encodeURIComponent(token)}`;

    this.use(new WebSocket(url));
  }

  disconnect() {
    if (!this.#socket || this.#socket.readyState == this.#socket.CLOSED) return;

    this.#socket.close();
  }

  destroy() {
    this.#socket = null;
    this.antiKick.destroy();
    this.removeListeners();
  }

  /**
   * Sends the specified data through the socket connection.
   * @param data - The data to be sent as a Uint8Array.
   * @returns A boolean value indicating if the request has been successfully sent.
   */
  send(data: Uint8Array): boolean {
    if (!this.#socket || this.#socket.readyState != this.#socket.OPEN) return false;

    const canSend = data instanceof Uint8Array && this.antiKick.canSend(data);

    if (canSend) {
      this.#trusted = data;
      this.#socket.send(data);
      this.emit("send", data);
    }

    return canSend;
  }

  use(socket: WebSocket) {
    this.socket = socket;
  }

  set socket(socket: WebSocket) {
    if (socket instanceof WebSocket) {
      this.#socket = socket;

      this.#initializeSocket();
    }
  }

  isOPEN() {
    return this.#socket && this.#socket.readyState == this.#socket.OPEN;
  }

  #initializeSocket() {
    if (!this.#socket) return;

    this.#socket.binaryType = "arraybuffer";

    this.#socket.addEventListener("message", (ev) => {
      if (ev.data instanceof ArrayBuffer) {
        this.emit("rawMessage", new Uint8Array(ev.data));
        this.emit("message", decode(ev.data));
      }
    });

    this.#socket.addEventListener("open", () => {
      this.emit("open", null);
    });

    this.#socket.addEventListener("close", (ev) => {
      this.emit("close", {
        reason: ev.reason,
        code: ev.code,
      });
    });

    this.#socket.addEventListener("error", () => {
      this.emit("error", null);
    });

    const oldSend = this.#socket.send.bind(this.#socket);
    this.#socket.send = (data: Uint8Array) => {
      const isTrusted = this.#trusted == data;
      this.#trusted = null;

      if (data instanceof Uint8Array) {
        oldSend(data);
        this.emit("deepSend", { data, isTrusted });
      }
    };
  }
}
