export default function KeyboardOf(target: {
  addEventListener: (event: "keydown" | "keyup", callback: (event: KeyboardEvent) => void) => void;
}) {
  type Options = {
    /**
     *  Indicates whether the keyboard input is case-sensitive.
     */
    caseSensitive?: boolean;
    /**
     * Indicates whether the action should be executed only once.
     */
    once?: boolean;
  };

  type Listener = {
    key: string;
    action: () => void;
    isUp: boolean;
    sleep: () => void;
    options: Options;
  };

  const listeners: Listener[] = [];

  const isEq = (listener: Listener, key: string) => {
    return listener.options.caseSensitive
      ? listener.key == key
      : listener.key.toLowerCase() == key.toLowerCase();
  };

  target.addEventListener("keydown", function ({ key }) {
    for (let listener of listeners) {
      if (!listener.isUp || !isEq(listener, key)) continue;

      listener.isUp = false;
      listener.action();
    }
  });

  target.addEventListener("keyup", function ({ key }) {
    for (let listener of listeners) {
      if (listener.isUp || !isEq(listener, key)) continue;

      listener.isUp = true;

      listener.sleep();

      if (listener.options.once) {
        listeners.splice(listeners.indexOf(listener), 1);
      }
    }
  });

  /**
   * Default options for the keyboard interface.
   * @type {Options}
   */
  const defaultOptions = {
    caseSensitive: false,
    once: false,
  } satisfies {
    [K in keyof Options]-?: NonNullable<Options[K]>;
  };

  /**
   * Creates a repeater for a specific key with the given action.
   * @param {Key} key - The key or key combination to create the repeater for.
   * @param {Function} action - The action to be executed when the key is triggered.
   * @param {Options} [options] - Optional partial options for the repeater.
   * @param {number} [speed] - Optional speed in milliseconds for the repeater interval.
   * @returns {void}
   * @overload
   */
  function repeater(key: Key, action: () => void, options?: Options, speed?: number): void;
  /**
   * Creates a repeater for a specific key with the given action.
   * @param {string} key - The key or key combination to create the repeater for.
   * @param {Function} action - The action to be executed when the key is triggered.
   * @param {Options} [options] - Optional partial options for the repeater.
   * @param {number} [speed] - Optional speed in milliseconds for the repeater interval.
   * @returns {void}
   * @overload
   */
  function repeater(key: string, action: () => void, options?: Options, speed?: number): void;
  function repeater(key: string, action: () => void, options?: Options, speed?: number) {
    let interval: undefined | NodeJS.Timer = undefined;
    on(
      key,
      () => {
        interval = setInterval(action, speed ?? 50);
      },
      () => {
        clearInterval(interval);
        interval = undefined;
      },
      options
    );
  }

  /**
   * Sets up a key event listener with the specified parameters.
   * @param {Key} key - The key or key combination to listen for.
   * @param {Function} action - The action to be executed when the key event occurs.
   * @param {Function|null} sleep - The function to be executed when the key event is inactive.
   * @param {Options} [options] - Optional partial options for the key event listener.
   * @returns {void}
   * @overload
   */
  function on(key: Key, action: () => void, sleep: (() => void) | null, options?: Options): void;
  /**
   * Sets up a key event listener with the specified parameters.
   * @param {string} key - The key or key combination to listen for.
   * @param {Function} action - The action to be executed when the key event occurs.
   * @param {Function|null} sleep - The function to be executed when the key event is inactive.
   * @param {Options} [options] - Optional partial options for the key event listener.
   * @returns {void}
   * @overload
   */
  function on(key: string, action: () => void, sleep: (() => void) | null, options?: Options): void;
  function on(
    key: string,
    action: () => void,
    sleep: (() => void) | null,
    options?: Options
  ): void {
    listeners.push({
      key,
      action,
      isUp: true,
      sleep: sleep || (() => {}),
      options: {
        ...defaultOptions,
        ...(options || {}),
      },
    });
  }

  return {
    repeater,
    on,
  };
}

type Key =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "Escape"
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F9"
  | "F10"
  | "F11"
  | "F12"
  | "Insert"
  | "Delete"
  | "Home"
  | "*"
  | "+"
  | "Enter"
  | "AudioVolumeDown"
  | "/"
  | "-"
  | "AudioVolumeMute"
  | "Control"
  | "v"
  | "PageUp"
  | "PageDown"
  | "Backspace"
  | "\\"
  | "Shift"
  | "|"
  | "F8"
  | "AudioVolumeUp"
  | "`"
  | "="
  | "Tab"
  | "q"
  | "w"
  | "e"
  | "r"
  | "t"
  | "y"
  | "u"
  | "i"
  | "o"
  | "p"
  | "["
  | "]"
  | "CapsLock"
  | "A"
  | "S"
  | "D"
  | "F"
  | "G"
  | "H"
  | "J"
  | "K"
  | "L"
  | ";"
  | "'"
  | "End"
  | "z"
  | "x"
  | "c"
  | "b"
  | "n"
  | "m"
  | ","
  | "."
  | "ArrowUp"
  | "Meta"
  | "Alt"
  | " "
  | "ContextMenu"
  | "#"
  | "@"
  | "!"
  | ")"
  | "_"
  | "("
  | "&"
  | "^"
  | "%"
  | "$"
  | "~"
  | "<"
  | "C"
  | "N"
  | "M"
  | "?"
  | ">"
  | "B"
  | "V"
  | "X"
  | ":"
  | '"'
  | "}"
  | "{"
  | "P"
  | "O"
  | "I"
  | "U"
  | "Y"
  | "T"
  | "R"
  | "E"
  | "W"
  | "Q"
  | "Clear"
  | "ArrowDown";
