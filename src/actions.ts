export const fetch_start_agent = async (
  roomUrl: string | null,
  serverUrl: string,
  botName: string
) => {
  const req = await fetch(`${serverUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ room_url: roomUrl, bot_name:botName }),
  });

  const data = await req.json();

  if (!req.ok) {
    return { error: true, detail: data.detail };
  }
  return data;
};
