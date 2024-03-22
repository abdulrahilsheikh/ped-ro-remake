import RevealButton from "../components/reveal-btn/reveal-btn";

export const data_tree = {
  id: "root",
  children: [
    "Yo! I'm ",
    <RevealButton id="1" text="RAHIL" />,
    {
      id: "1",
      children: [
        ` Sheikh. I'm not sure how to intro myself`,
        <RevealButton id="2" text="ANYMORE" />,
        {
          id: "2",
          children: [
            `. My background is in UI development, but I love everything related to`,
            <RevealButton id="3" text="PRODUCT" />,
            {
              id: "3",
              children: [
                `. In the last two years I discovered my niche: developing high quality UI.`,
              ],
            },
          ],
        },
      ],
    },
    " I work at ",
    <RevealButton id="4" text="Bushel" />,
    {
      id: "4",
      children: [
        `. It's a sofware development company. Which focus on full product development. I wear many different `,
        <RevealButton id="5" text="HATS" />,
        {
          id: "5",
          children: [
            `. But my main focus is growing the `,
            <RevealButton id="6" text="PRODUCT" />,
            {
              id: "6",
              children: [`by creating immersive user experience.`],
            },
          ],
        },
      ],
    },
    ` I live in`,
    <RevealButton id="7" text="MAHARASHTRA" />,
    {
      id: "7",
      children: [
        `with my family. I was grown up in`,
        <RevealButton id="8" text="MAHARASHTRA" />,
        { id: "8", children: ["(a fine state)."] },
      ],
    },
    ` You can find me on `,
    <RevealButton id="9" text="LINKEDIN" />,
    {
      id: "9",
      children: [
        `my linkedin link is`,
        <a
          className="text-3xl mx-4 border-b border-b-white transition hover:bg-orange-700"
          href="https://in.linkedin.com/in/rahil-sheikh-b9a1aa21b"
          target="_blank"
        >
          @Linkedin
        </a>,
        `I'm also on`,
        <a
          className="text-3xl mx-4 border-b border-b-white transition hover:bg-orange-700"
          href="https://github.com/abdulrahilsheikh"
          target="_blank"
        >
          @GitHub
        </a>,
      ],
    },
  ],
};
