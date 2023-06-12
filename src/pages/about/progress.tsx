import ProgressGroup from "@/features/about/components/ProgressGroup";
import {
  ProgressData,
  progressData,
} from "@/features/about/static/progressData";
import {
  Center,
  Container,
  Stack,
  Text,
  Title,
  UnstyledButton,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";

const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    width: "100%",
    zIndex: 1,

    boxShadow: "0px 15px 50px 0px rgb(10 10 10 / 50%)",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[2],
  },
  spacer: {
    aspectRatio: "1200/200",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 3,
    position: "relative",
  },

  bottomSvg: {
    backgroundImage: "url(/assets/bottom.svg)",
  },
  bigHeading: {
    fontSize: "min(70px, 5vmax)",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: "15vw",
    },
  },
  blob: {
    position: "relative",
    overflow: "visible",
  },
  highlightVideo: {
    width: "min(100%, 800px)",
    aspectRatio: "16/9",
    borderRadius: theme.radius.lg,
  },
  cta: {
    padding: "7px 15px",

    fontSize: `clamp(.5rem, 2vw, 1.15rem)`,
    color: theme.white,
    letterSpacing: "1px",
    fontWeight: 600,

    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.dark[9], 0.4)
        : theme.fn.rgba(theme.colors.gray[0], 0.53),
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.xl,
    backdropFilter: "blur(30px)",

    borderColor: theme.white,
    borderWidth: 2,
    borderStyle: "solid",
    transition: "all 0.1s ease-in-out",

    "&:hover": {
      transform: " scale(1.03)",
      boxShadow: theme.shadows.sm,
    },

    "&:active": {
      transform: "translateY(2px) scale(0.98)",
      boxShadow: theme.shadows.xl,
    },
  },
}));

function Progress() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const [data, setData] = useState<ProgressData>(progressData);

  return (
    <main className={classes.main}>
      <div className={cx(classes.spacer, classes.bottomSvg)}></div>
      <Container size="xl">
        <Title className={classes.bigHeading} align="center">
          Follow Our Progress
        </Title>
        <Center py={20} className={classes.blob}>
          <iframe
            className={classes.highlightVideo}
            src={data?.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Center>
        <Stack align="center" pb={60}>
          <Title align="center">
            Partner with us as a sponsor to support our work!
          </Title>
          <UnstyledButton
            style={{
              width: "fit-content",
              backgroundColor: theme.colors.blue[7],
            }}
            className={classes.cta}
          >
            <Text size="xl">Contact Us</Text>
          </UnstyledButton>
        </Stack>
      </Container>
      <Container size="lg">
        {data &&
          data.timeline.map((item, index) => {
            return <ProgressGroup key={index} id={index} {...item} />;
          })}
      </Container>
    </main>
  );
}

export default Progress;
