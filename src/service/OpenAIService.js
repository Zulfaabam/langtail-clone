import OpenAI from "openai";

async function sendToOpenAI(apiKey, model, messages, tools, parameters) {
  const {
    temperature,
    max_tokens,
    stop,
    top_p,
    presence_penalty,
    frequency_penalty,
  } = parameters;

  let response, error;

  const openai = new OpenAI({
    apiKey,
  });

  try {
    const res = await openai.chat.completions.create({
      model,
      messages,
      tools,
      tool_choice: "auto",
      ...parameters,
    });

    response = res;
  } catch (err) {
    error = err;
  }

  return { response, error };
}

export { sendToOpenAI };
