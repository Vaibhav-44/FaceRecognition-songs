import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-player";
import FlatList from "flatlist-react/lib";
import "./MusicComponent.css";
import { getSongList } from "../services/endpoints";
import AlbumCover from "../assets/album-cover.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const songData = [
  {
    uri: "spotify:track:3ee8Jmje8o58CHK66QrVC2",
    id: "3ee8Jmje8o58CHK66QrVC2",
    name: "SAD!",
    albumOfTrack: {
      uri: "spotify:album:2Ti79nwTsont5ZHfdxIzAm",
      name: "?",
      coverArt: {
        sources: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02806c160566580d6335d1f16c",
            width: 300,
            height: 300,
          },
          {
            url: "https://i.scdn.co/image/ab67616d00004851806c160566580d6335d1f16c",
            width: 64,
            height: 64,
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000b273806c160566580d6335d1f16c",
            width: 640,
            height: 640,
          },
        ],
      },
      id: "2Ti79nwTsont5ZHfdxIzAm",
      sharingInfo: {
        shareUrl:
          "https://open.spotify.com/album/2Ti79nwTsont5ZHfdxIzAm?si=KI0TViPfQUGq7bkNrS3Znw",
      },
    },
    artists: {
      items: [
        {
          uri: "spotify:artist:15UsOTVnJzReFVN1VCnxy4",
          profile: {
            name: "XXXTENTACION",
          },
        },
      ],
    },
    contentRating: {
      label: "EXPLICIT",
    },
    duration: {
      totalMilliseconds: 166605,
    },
    playability: {
      playable: true,
    },
  },
  {
    uri: "spotify:track:11MyiSGZSYSmhhqwGUTtAq",
    id: "11MyiSGZSYSmhhqwGUTtAq",
    name: "Sad Girl",
    albumOfTrack: {
      uri: "spotify:album:1ORxRsK3MrSLvh7VQTF01F",
      name: "Ultraviolence (Deluxe)",
      coverArt: {
        sources: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f",
            width: 300,
            height: 300,
          },
          {
            url: "https://i.scdn.co/image/ab67616d000048511624590458126fc8b8c64c2f",
            width: 64,
            height: 64,
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f",
            width: 640,
            height: 640,
          },
        ],
      },
      id: "1ORxRsK3MrSLvh7VQTF01F",
      sharingInfo: {
        shareUrl:
          "https://open.spotify.com/album/1ORxRsK3MrSLvh7VQTF01F?si=BNG9d2PjRX664u7Z5Dg6hQ",
      },
    },
    artists: {
      items: [
        {
          uri: "spotify:artist:00FQb4jTyendYWaN8pK0wa",
          profile: {
            name: "Lana Del Rey",
          },
        },
      ],
    },
    contentRating: {
      label: "NONE",
    },
    duration: {
      totalMilliseconds: 317760,
    },
    playability: {
      playable: true,
    },
  },
  {
    uri: "spotify:track:09gysnJpfQ3ublBmJDfcEC",
    id: "09gysnJpfQ3ublBmJDfcEC",
    name: "SAD GIRLZ LUV MONEY Remix (feat. Kali Uchis and Moliy)",
    albumOfTrack: {
      uri: "spotify:album:4q4rHdKxyCzxuQrPcdjPyC",
      name: "SAD GIRLZ LUV MONEY Remix (feat. Kali Uchis and Moliy)",
      coverArt: {
        sources: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02e859698c8fe21d42a13ec252",
            width: 300,
            height: 300,
          },
          {
            url: "https://i.scdn.co/image/ab67616d00004851e859698c8fe21d42a13ec252",
            width: 64,
            height: 64,
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000b273e859698c8fe21d42a13ec252",
            width: 640,
            height: 640,
          },
        ],
      },
      id: "4q4rHdKxyCzxuQrPcdjPyC",
      sharingInfo: {
        shareUrl:
          "https://open.spotify.com/album/4q4rHdKxyCzxuQrPcdjPyC?si=7dBTCP4nS7SILUuQr9vHDg",
      },
    },
    artists: {
      items: [
        {
          uri: "spotify:artist:21UPYSRWFKwtqvSAnFnSvS",
          profile: {
            name: "Amaarae",
          },
        },
        {
          uri: "spotify:artist:1U1el3k54VvEUzo3ybLPlM",
          profile: {
            name: "Kali Uchis",
          },
        },
        {
          uri: "spotify:artist:2hVWBpjLW4Q7fboYz2pVYK",
          profile: {
            name: "Moliy",
          },
        },
      ],
    },
    contentRating: {
      label: "EXPLICIT",
    },
    duration: {
      totalMilliseconds: 204763,
    },
    playability: {
      playable: true,
    },
  },
  {
    uri: "spotify:track:5UaDi8KzCGJqFfVAOBfXhi",
    id: "5UaDi8KzCGJqFfVAOBfXhi",
    name: "Sad But True (Remastered)",
    albumOfTrack: {
      uri: "spotify:album:55fq75UfkYbGMq4CncCtOH",
      name: "Metallica (Remastered)",
      coverArt: {
        sources: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e021f9edf15e43f4c2f4938b869",
            width: 300,
            height: 300,
          },
          {
            url: "https://i.scdn.co/image/ab67616d000048511f9edf15e43f4c2f4938b869",
            width: 64,
            height: 64,
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000b2731f9edf15e43f4c2f4938b869",
            width: 640,
            height: 640,
          },
        ],
      },
      id: "55fq75UfkYbGMq4CncCtOH",
      sharingInfo: {
        shareUrl:
          "https://open.spotify.com/album/55fq75UfkYbGMq4CncCtOH?si=4tbgFjGVScC9Bj3Tg2ZdJQ",
      },
    },
    artists: {
      items: [
        {
          uri: "spotify:artist:2ye2Wgw4gimLv2eAKyk1NB",
          profile: {
            name: "Metallica",
          },
        },
      ],
    },
    contentRating: {
      label: "NONE",
    },
    duration: {
      totalMilliseconds: 324600,
    },
    playability: {
      playable: true,
    },
  },
  {
    uri: "spotify:track:1VykDC2twhsRrlhgxJHKRZ",
    id: "1VykDC2twhsRrlhgxJHKRZ",
    name: "Sad Loqueron",
    albumOfTrack: {
      uri: "spotify:album:1O51JYs5jdmREsm45dyeGc",
      name: "THE GB",
      coverArt: {
        sources: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e0246c5c2f89c37fc6809249316",
            width: 300,
            height: 300,
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000485146c5c2f89c37fc6809249316",
            width: 64,
            height: 64,
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000b27346c5c2f89c37fc6809249316",
            width: 640,
            height: 640,
          },
        ],
      },
      id: "1O51JYs5jdmREsm45dyeGc",
      sharingInfo: {
        shareUrl:
          "https://open.spotify.com/album/1O51JYs5jdmREsm45dyeGc?si=vA1ledWpSPSMC3Wd7cEQiw",
      },
    },
    artists: {
      items: [
        {
          uri: "spotify:artist:6Sbl0NT50roqWvy746MfVf",
          profile: {
            name: "Gabito Ballesteros",
          },
        },
      ],
    },
    contentRating: {
      label: "NONE",
    },
    duration: {
      totalMilliseconds: 181503,
    },
    playability: {
      playable: true,
    },
  },
  {
    uri: "spotify:track:4AwUc1mdlX4ARHkUNG0iho",
    id: "4AwUc1mdlX4ARHkUNG0iho",
    name: "SAD SONG",
    albumOfTrack: {
      uri: "spotify:album:0NmzOw8evaF6bn2U7tiWSA",
      name: "SAD SONG",
      coverArt: {
        sources: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02276ab50c3f74f246a2d7fea2",
            width: 300,
            height: 300,
          },
          {
            url: "https://i.scdn.co/image/ab67616d00004851276ab50c3f74f246a2d7fea2",
            width: 64,
            height: 64,
          },
          {
            url: "https://i.scdn.co/image/ab67616d0000b273276ab50c3f74f246a2d7fea2",
            width: 640,
            height: 640,
          },
        ],
      },
      id: "0NmzOw8evaF6bn2U7tiWSA",
      sharingInfo: {
        shareUrl:
          "https://open.spotify.com/album/0NmzOw8evaF6bn2U7tiWSA?si=WcjyPe1RTzOAQAU6i6rhpw",
      },
    },
    artists: {
      items: [
        {
          uri: "spotify:artist:3JjvsPeGMbDJqsphe2z8xU",
          profile: {
            name: "P1Harmony",
          },
        },
      ],
    },
    contentRating: {
      label: "NONE",
    },
    duration: {
      totalMilliseconds: 174680,
    },
    playability: {
      playable: true,
    },
  },
];

export default function MusicComponent() {
  const [songListData, setSongListData] = useState([]);

  const getSongDataList = async () => {
    const response = await getSongList();
    const data = await response.json();
    console.log(data);
    if (response.ok) setSongListData(data);
  };

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
