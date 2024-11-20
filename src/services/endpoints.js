import React from "react";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getSongList = async ({ imgPath, limit }) => {
  limit ??= 2;
  let url = `http://127.0.0.1:8000/song-list?image_location=${imgPath}&limit=${limit}`;
  const controller = new AbortController();
  return await fetch(url, {
    signal: controller.signal,
    method: "GET",
    headers,
  }).catch((err) => console.warn(`failed to get songs list`, err));
};
