import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-player";
import FlatList from "flatlist-react/lib";
import "./MusicComponent.css";
import { getSongList } from "../services/endpoints";
import AlbumCover from "../assets/album-cover.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



export default function MusicComponent() {
  const [songListData, setSongListData] = useState([]);

  const getSongDataList = async () => {
    const response = await fetch("http://localhost:8000/song-list/?limit=10", {
      method: "POST",
      body: formData,
    });}

  useEffect(() => {
    // getSongDataList();
  }, []);

  const renderItem = (item, index) => {
    return (
      <li className="song-container" style={{ listStyle: "none" }} key={index}>
        <div className="song-name_img">
          <img
            src={item?.albumOfTrack.coverArt.sources[0].url}
            alt="album cover"
          />
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <span className="songname">
              <b>{(item?.name).slice(0, 30)}</b>
            </span>
            <span>{item?.artists.items[0].profile.name}</span>
          </div>
        </div>
        <div className="moreoprtions">
          <a href={item?.albumOfTrack.uri}>
            <FontAwesomeIcon icon={faPlay} />
          </a>
        </div>
      </li>
    );
  };

  return (
    <div className="musiccomponent">
      <div></div>
      <h1>Song Suggestions</h1>
      <ul>
        <FlatList
          list={songData}
          renderItem={renderItem}
          renderWhenEmpty={() => (
            <div>List is empty! please capture your image first</div>
          )}
          sortBy={["firstName", { key: "lastName", descending: true }]}
        />
      </ul>
    </div>
  );
}
