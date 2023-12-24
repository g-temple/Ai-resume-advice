import OpenAI from "openai";

const openai = new OpenAI({ apiKey: "YOUR API KEY HERE" });

export async function main(userContent) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant designed to output bullet points that can be used in a resume based on the title of a job. Your response should be in the form of a comma seperate list. Please do not use newlines or dashes. It is extremely important that your response is just a comma seperate list",
      },
      {
        role: "user",
        content: `What are some good bullet points for the following job title: ${userContent}?`,
      },
    ],
    model: "gpt-3.5-turbo-1106",
  });
  //console.log(completion);
  //console.log(completion.choices[0].message.content);

  return completion.choices[0].message.content;
}

// main();
