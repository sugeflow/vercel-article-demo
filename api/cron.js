export default {
  async fetch() {
    return Response.json({ ok: true, ranAt: new Date().toISOString() });
  },
};
