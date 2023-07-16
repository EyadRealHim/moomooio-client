interface ObservedPacket {
  PACKET_ID: string;
  current: number;
  max: number;

  is(content: Uint8Array): boolean;
}

export default class AntiKick {
  observePackets: ObservedPacket[] = [
    {
      PACKET_ID: "2",
      current: 0,
      max: 10,

      is(data) {
        return data[2] == 50;
      },
    },
    {
      PACKET_ID: "c",
      current: 0,
      max: 20,

      is(data) {
        return data[2] == 99;
      },
    },
    {
      PACKET_ID: "5",
      current: 0,
      max: 10,

      is(data) {
        return data[2] == 53;
      },
    },
    {
      PACKET_ID: "13c",
      current: 0,
      max: 10,

      is(data) {
        return data[2] == 49 && data[3] == 51 && data[4] == 99;
      },
    },
    {
      PACKET_ID: "8",
      current: 0,
      max: 1,

      is(data) {
        return data[2] == 56;
      },
    },
    {
      PACKET_ID: "10",
      current: 0,
      max: 7,

      is(data) {
        return data[2] == 49 && data[3] == 48;
      },
    },
    {
      PACKET_ID: "12",
      current: 0,
      max: 7,

      is(data) {
        return data[2] == 49 && data[3] == 50;
      },
    },
    {
      PACKET_ID: "9",
      current: 0,
      max: 1,

      is(data) {
        return data[2] == 57;
      },
    },
    {
      PACKET_ID: "pp",
      current: 0,
      max: 1,

      is(data) {
        return data[2] == 112 && data[3] == 112;
      },
    },
    {
      PACKET_ID: "14",
      current: 0,
      max: 1,

      is(data) {
        return data[2] == 49 && data[3] == 52;
      },
    },
    {
      PACKET_ID: "7",
      current: 0,
      max: 5,

      is(data) {
        return data[2] == 55;
      },
    },
    {
      PACKET_ID: "6",
      current: 0,
      max: 10,

      is(data) {
        return data[2] == 54;
      },
    },
    {
      PACKET_ID: "sp",
      current: 0,
      max: 1,

      is(data) {
        return data[2] == 115 && data[3] == 112;
      },
    },
  ];
  interval: NodeJS.Timeout;

  constructor() {
    this.interval = setInterval(this.restart.bind(this), 100);
  }

  destroy() {
    clearInterval(this.interval);
  }

  restart() {
    for (let i = this.observePackets.length - 1; i > -1; --i) {
      const observePacket = this.observePackets[i];

      observePacket && AntiKick.resetObservePacket(observePacket);
    }
  }

  canSend(content: Uint8Array) {
    for (let i = this.observePackets.length - 1; i > -1; --i) {
      const observePacket = this.observePackets[i];

      if (observePacket?.is(content)) {
        return AntiKick.runObservePacket(observePacket);
      }
    }

    return true;
  }

  static runObservePacket(observePacket: ObservedPacket) {
    return ++observePacket.current <= observePacket.max;
  }

  static resetObservePacket(observePacket: ObservedPacket) {
    observePacket.current = 0;
  }
}
