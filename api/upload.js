import { put } from "@vercel/blob";

export default {
  async fetch(request) {
    if (process.env.ENABLE_DEMO_UPLOAD !== "1") {
      return Response.json({ error: "Demo upload is disabled." }, { status: 404 });
    }

    const blob = await put("notes/hello.txt", "This is a temporary Vercel Blob demo file.", {
      access: "public",
      addRandomSuffix: true,
    });
    return Response.json({ url: blob.url });
  },
};
