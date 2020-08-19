import { useRootSelector } from "@/infra/store";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.less";

function JoinRoom() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const joinRoom = async (e: any) => {
    e.preventDefault();
    const resp = await fetch(`/api/rooms/${roomId}/players`, {
      method: "post",
      credentials: "include",
    });
    if (resp.status === 200) {
      navigate(`/rooms/${roomId}`);
    }
  };

  return (
    <div>
      <form onSubmit={joinRoom}>
        <input
          type="text"
          size={4}
          aria-label="Room ID"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input type="submit" value="Join room" />
      </form>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const name = useRootSelector((s) => s.app.user.name);

  const createRoom = async () => {
    const resp = await fetch("/api/rooms", {
      method: "post",
      credentials: "include",
    });
    const { room_id: roomId } = await resp.json();
    navigate(`/rooms/${roomId}`);
  };

  return (
    <main className={styles.main}>
      <div className={styles.party}>
        {["🀄🎉", "🎈🎊"].map((e) => (
          <span key={e} className={styles.tileImage} aria-label="Mahjong Party">
            {e}
          </span>
        ))}
      </div>
      <h1>Mahjong Party</h1>
      <p>Play Singaporean mahjong online with friends!</p>
      <p>Welcome{name && ` ${name}`}!</p>
      <div>
        <Link to="/tutorial">
          <button type="button">Tutorial</button>
        </Link>
      </div>
      <div>
        <button type="button" onClick={createRoom}>
          Create room
        </button>
      </div>
      <JoinRoom />
      <p>
        Check out the tutorial to get started, or create a room and invite your
        friends to join you. Not enough players? Fill in the empty slots with
        bots!
      </p>
      <p>Mahjong Party is a work in progress.</p>
    </main>
  );
}
