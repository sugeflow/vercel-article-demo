export default {
  async fetch(request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name") ?? "Vercel";
    return Response.json({
      message: `Hello, ${name}!`,
      time: new Date().toISOString(),
    });
  },
};
