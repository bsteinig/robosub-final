import { spin } from "@/components/keyframes/spin";
import {
  ActionIcon,
  BackgroundImage,
  Container,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useHover, useToggle } from "@mantine/hooks";
import React from "react";
import HeadShotCard from "./components/headshotCard";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",

    aspectRatio: "4/5",
    width: "min(250px, 100%)",
    backgroundImage: 'url("/assets/rect.svg")',
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3],
    overflow: "hidden",
  },
  expandPic: {
    transform: "scale(1.1)",
  },
  pic: {
    position: "relative",
    transformOrigin: "center",
    transform: "scale(1)",
    height: "100%",
    transition: "transform 400ms ease",
  },
  nameplate: {
    position: "absolute",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",

    width: "80%",
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.gray[9]
    }`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
  },
  name: {
    fontWeight: 600,
  },
  toggleInfo: {
    position: "absolute",
    top: "2.5%",
    right: "2.5%",
    transition: "all 300ms ease",
    transform: "rotateY(90deg)",
  },
  shown: {
    transform: "rotateY(0deg)",
  },
}));

function Gallery({ filters }: { filters: string[] }) {
  const { classes, cx } = useStyles();
  const { hovered, ref: cardRef } = useHover();
  const [value, toggle] = useToggle(["light", "dark"] as const);
  const theme = useMantineTheme();

  return (
    <Container size="lg">
      <SimpleGrid cols={4} style={{ justifyItems: 'center' }}>
        <HeadShotCard
          name="Andrew Huston"
          title="Software"
          src="/headshots/ahuston.png"
          email="ahuston@umich.edu"
          linkedin="https://linkedin.com/ahuston"
          bg="/assets/rect.svg"
        />
                <HeadShotCard
          name="Andrew Huston"
          title="Software"
          src="/headshots/ahuston.png"
          email="ahuston@umich.edu"
          linkedin="https://linkedin.com/ahuston"
          bg="/assets/circle.svg"
        />
                <HeadShotCard
          name="Andrew Huston"
          title="Software"
          src="/headshots/ahuston.png"
          email="ahuston@umich.edu"
          linkedin="https://linkedin.com/ahuston"
          bg="/assets/lines.svg"
        />
                <HeadShotCard
          name="Andrew Huston"
          title="Software"
          src="/headshots/ahuston.png"
          email="ahuston@umich.edu"
          linkedin="https://linkedin.com/ahuston"
          bg="/assets/rect.svg"
        />

      </SimpleGrid>
    </Container>
  );
}

export default Gallery;
