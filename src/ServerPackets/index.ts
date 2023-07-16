import { decode as msgpackDecode } from "msgpack-lite";

import UpdateTeamMembersList from "./UpdateTeamMembersList";
import UpdateLeaderBoard from "./UpdateLeaderBoard";
import InitializePlayer from "./InitializePlayer";
import PlayerDisconnect from "./PlayerDisconnect";
import TeamNotification from "./TeamNotification";
import InitializeTeams from "./InitializeTeams";
import SpawnProjectile from "./SpawnProjectile";
import UpdateItemStore from "./UpdateItemStore";
import UpdateItemUsage from "./UpdateItemUsage";
import InitializeGame from "./InitializeGame";
import SetObjectsData from "./SetObjectsData";
import ShutdownNotice from "./ShutdownNotice";
import UpdateProgress from "./UpdateProgress";
import UpdateResource from "./UpdateResource";
import UpdateUpgrades from "./UpdateUpgrades";
import AnimateGameAI from "./AnimateGameAI";
import RemoveObjects from "./RemoveObjects";
import UpdateMiniMap from "./UpdateMiniMap";
import UpdatePlayers from "./UpdatePlayers";
import ObjectStrike from "./ObjectStrike";
import RemoveObject from "./RemoveObject";
import UpdateGameAI from "./UpdateGameAI";
import UpdateHealth from "./UpdateHealth";
import ReceiveChat from "./ReceiveChat";
import TurretShoot from "./TurretShoot";
import UpdateItems from "./UpdateItems";
import CreateTeam from "./CreateTeam";
import DeleteTeam from "./DeleteTeam";
import Disconnect from "./Disconnect";
import TeamSignal from "./TeamSignal";
import ShowText from "./ShowText";
import Unknown from "./Unknown";
import IOInit from "./IOInit";
import Punch from "./Punch";
import Death from "./Death";
import Pong from "./Pong";

export const ServerPackets = {
  UpdateTeamMembersList,
  UpdateLeaderBoard,
  InitializePlayer,
  PlayerDisconnect,
  TeamNotification,
  InitializeTeams,
  SpawnProjectile,
  UpdateItemStore,
  UpdateItemUsage,
  InitializeGame,
  SetObjectsData,
  ShutdownNotice,
  UpdateProgress,
  UpdateResource,
  UpdateUpgrades,
  AnimateGameAI,
  RemoveObjects,
  UpdateMiniMap,
  UpdatePlayers,
  ObjectStrike,
  RemoveObject,
  UpdateGameAI,
  UpdateHealth,
  ReceiveChat,
  TurretShoot,
  UpdateItems,
  CreateTeam,
  DeleteTeam,
  Disconnect,
  TeamSignal,
  ShowText,
  Unknown,
  IOInit,
  Punch,
  Death,
  Pong,
};

export type ServerPacket = ReturnType<typeof decode>;

// TODO: "19", "st" is missing
export function decode(raw: ArrayBuffer | Uint8Array | number[]) {
  const [PACKET_ID, data] = msgpackDecode(raw instanceof Uint8Array ? raw : new Uint8Array(raw));

  for (const packetName in ServerPackets) {
    const Packet = ServerPackets[packetName as keyof typeof ServerPackets];

    if (Packet.PACKET_ID == PACKET_ID) {
      let packet;

      try {
        packet = Packet.parse(data);
      } catch (e: unknown) {
        packet = ServerPackets.Unknown.parse([PACKET_ID, data]);

        console.group(`Attempting to parse ${PACKET_ID} using ${Packet.PACKET_NAME} but failed`);
        console.error(e);
        console.info("Backup to `Unknown` Packet.");
        console.info(packet);
        console.groupEnd();
      }

      return packet;
    }
  }

  return ServerPackets.Unknown.parse([PACKET_ID, data]);
}
