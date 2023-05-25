import { keyframes, useMantineTheme } from "@mantine/core";

export const sponsorBounce = keyframes({
  "0%": { height: ".625rem", animationTimingFunction: "ease-in" },

  "25%": { height: "1.075rem", animationTimingFunction: "ease-out" },

  "50%": { height: ".625rem", animationTimingFunction: "ease-out" },

  "75%": { height: "1.275rem", animationTimingFunction: "ease-in" },

  "100%": { height: ".625rem", animationTimingFunction: "ease-in" },
});
