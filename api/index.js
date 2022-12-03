export default async ({
  method = "GET",
  url,
  filter = null,
  data = null,
  onSuccess = () => {},
  onFinally = () => {},
  onError = () => {},
  signal = null,
}) => {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  url = `https://rawg.io/api${url}?key=${key}`;

  if (filter) {
    url += `&${filter}`;
  }

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: method,
  };

  if (data) {
    options.body = data;
  }

  if (signal) {
    options.signal = signal;
  }

  try {
    const res = await fetch(url, { ...options });
    const data = await res.json();
    onSuccess(data);
    return data;
  } catch (err) {
    if (err?.message.includes("abort")) {
      return;
    }

    onError(err);
  } finally {
    onFinally();
  }
};
