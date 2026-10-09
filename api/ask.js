import { generateText } from "ai";

export default {
  async fetch(request) {
    const model = process.env.AI_GATEWAY_MODEL;
    if (!model) {
      return Response.json({ error: "Set AI_GATEWAY_MODEL to a Free Tier model first." }, { status: 503 });
    }

    const { searchParams } = new URL(request.url);
    const question = searchParams.get("q") ?? "用两句话解释 CDN 是什么。";
    const { text, usage } = await generateText({
      model,
      system: "你是一个回答简洁的中文助手。",
      prompt: question,
    });
    return Response.json({ answer: text, usage });
  },
};
