"use server";

import { pusherServer } from "@/lib/pusher";

export async function getVideoList() {
  const response = await fetch(`${process.env.MAYHEM_URL}/videos`, {
    next: { cache: "no-store", revalidate: 0 },
  });
  if (!response.ok) throw new Error("Failed to fetch video listing");

  return response.json();
}

export async function getVideoById(id) {
  const response = await fetch(`${process.env.MAYHEM_URL}/videos/${id}`, {
    next: { cache: "no-store", revalidate: 0 },
  });
  if (!response.ok) throw new Error("Failed to fetch video details");

  return response.json();
}

export async function getVideoPermission(id) {
  // connect to pusher channel and get number of connected user
  // const channelUrl = `/channels/channel-video-${id}`;
  // console.log(channelUrl);
  // const attributes = "subscription_count";
  // const info = await pusherServer.get({
  //   path: channelUrl,
  //   params: { info: attributes },
  // });
  // const body = await info.json();
  // if (body.subscription_count > process.env.MAX_ALLOWED) {
  //   return { canConnect: false };
  // }
  return { canConnect: true };
}
