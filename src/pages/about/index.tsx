import {
  Container,
  Divider,
  SimpleGrid,
  Stack,
  Text,
  Title,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { info } from "console";
import React, { useEffect } from "react";

const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
    minHeight: "300vh",
    width: "100%",
    zIndex: 1,

    boxShadow: "0px 15px 50px 0px rgb(10 10 10 / 50%)",
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
  },
  video: {
    position: "fixed",
    zIndex: -1,
    width: "100%",
    height: "100%",
    transform: "translateY(-30%)",
    objectFit: "cover",
  },
  bigHeading: {
    fontSize: "19vw",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
  },
  underline: {
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
  },
  intro: {
    marginLeft: "20%",
    textAlign: "right",
    fontWeight: 300,
    fontSize: "1.25rem",
  },
  infoSubtitle: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
  },
  infoHeading: {
    fontSize: "18vw",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
    gridColumnStart: 2,
    gridRowStart: 2,
    lineHeight: 1,
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
  },
  infoGrid: {
    position: "sticky",
    display: "grid",
    gridTemplateColumns: "15% 85%",
    gridTemplateRows: "30px 1fr",
    gridGap: "0px",

    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "15%",
      height: "100%",
      borderRight: `2px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[9]
      }`,
    },
    "&:after": {
      content: "''",
      position: "absolute",
      top: 30,
      left: 0,
      width: "100%",
      height: "80%",
      borderTop: `2px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[9]
      }`,
    },
  },
}));

function About() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const { ref: stickyRef, width, height: stickyHeight } = useElementSize();

  const handleContextMenu = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.preventDefault(); // Prevents the context menu from appearing
  };

  useEffect(() => {
    if (stickyHeight) {
      const stickyDiv = document.getElementById("__stickyDiv");
      if (
        stickyDiv &&
        parseInt(stickyDiv.style.height) < window.innerHeight * 1.5
      ) {
        stickyDiv.style.height = `${stickyHeight * 2}px`;
      }
    }
  }, [stickyHeight]);

  interface dataItem {
    title: string;
    content: number;
  }
  interface data extends Array<dataItem> {}

  const infoData: data = [
    {
      title: "Founded",
      content: 2019,
    },
    {
      title: "Members",
      content: 205,
    },
    {
      title: "Sponsors",
      content: 32,
    },
  ];

  const rightCol = infoData.map((item: dataItem, index: number) => {
    return (
      <div
        className={classes.infoGrid}
        style={{ top: `${100 * index}px` }}
        key={index}
      >
        <Text className={classes.infoSubtitle} size="lg">
          {item.title}
        </Text>
        <Title className={classes.infoHeading}>{item.content}</Title>
      </div>
    );
  });

  return (
    <main className={classes.main}>
      <Container py={50} size="fluid">
        <video
          autoPlay
          loop
          muted
          playsInline
          onContextMenu={handleContextMenu}
          preload="auto"
          className={classes.video}
        >
          <source
            src="https://video.wixstatic.com/video/d0cbf8_140719a68e924d559eae63ca19557246/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <Title className={classes.bigHeading} order={1}>
          ABOUT US
        </Title>
        <Divider size={2} className={classes.underline} />
        <SimpleGrid
          cols={2}
          spacing="sm"
          breakpoints={[{ maxWidth: "sm", cols: 1, spacing: "sm" }]}
          style={{
            borderBottom: `2px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[9]
            }`,
          }}
        >
          <Text className={classes.intro}>
            Michigan Robotic Submarine is a student-led engineering team
            comprised of primarily undergraduate students with diverse
            backgrounds and interests, working together to design and build an
            autonomous robotic submarine for the annual RoboSub competition in
            San Diego, CA. We strive to advance Autonomous Underwater Vehicle
            (AUV) technology by engineering a submarine that can perform various
            sub-nautical tasks, like sonar navigation and torpedo target
            shooting.
          </Text>
          <div ref={stickyRef} id="__stickyDiv">
            {rightCol}
          </div>
        </SimpleGrid>
      </Container>
    </main>
  );
}

export default About;

/*
 <div className={classes.container}>
        <video
          autoPlay
          loop
          muted
          playsInline
          onContextMenu={handleContextMenu}
          preload="auto"
          className={classes.video}
        >
          
          <source
            src="https://video.wixstatic.com/video/d0cbf8_140719a68e924d559eae63ca19557246/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className={classes.overlay} />
        <div className={classes.logoOverlay}>
          <Image classNames={{ imageWrapper: classes.logoCenter }} src="/logo/FullName.png" alt="logo" width={"60vmin"} />
        </div>
        <svg height={0} width={0}>
          <defs>
            <clipPath id="svgPath2" clipPathUnits="objectBoundingBox">
              <path d="M0.0 0.074L0.019 0.08C0.037 0.085 0.074 0.097 0.111 0.096C0.148 0.095 0.185 0.082 0.222 0.075C0.259 0.069 0.296 0.069 0.333 0.065C0.371 0.061 0.408 0.053 0.445 0.051C0.482 0.048 0.518 0.05 0.555 0.053C0.592 0.056 0.629 0.059 0.667 0.061C0.704 0.062 0.741 0.062 0.778 0.062C0.815 0.062 0.852 0.062 0.889 0.059C0.926 0.055 0.963 0.048 0.981 0.044L1.0 0.041L1.0 0.0L0.981 0.0C0.963 0.0 0.926 0.0 0.889 0.0C0.852 0.0 0.815 0.0 0.778 0.0C0.741 0.0 0.704 0.0 0.667 0.0C0.629 0.0 0.592 0.0 0.555 0.0C0.518 0.0 0.482 0.0 0.445 0.0C0.408 0.0 0.371 0.0 0.333 0.0C0.296 0.0 0.259 0.0 0.222 0.0C0.185 0.0 0.148 0.0 0.111 0.0C0.074 0.0 0.037 0.0 0.019 0.0L0.0 0.0Z"></path>
              <path d="M0.0 0.17L0.019 0.174C0.037 0.177 0.074 0.185 0.111 0.173C0.148 0.161 0.185 0.129 0.222 0.125C0.259 0.121 0.296 0.146 0.333 0.15C0.371 0.155 0.408 0.14 0.445 0.136C0.482 0.132 0.518 0.14 0.555 0.139C0.592 0.138 0.629 0.128 0.667 0.119C0.704 0.109 0.741 0.1 0.778 0.108C0.815 0.115 0.852 0.14 0.889 0.151C0.926 0.163 0.963 0.16 0.981 0.159L1.0 0.158L1.0 0.039L0.981 0.042C0.963 0.046 0.926 0.053 0.889 0.057C0.852 0.06 0.815 0.06 0.778 0.06C0.741 0.06 0.704 0.06 0.667 0.059C0.629 0.057 0.592 0.053 0.555 0.051C0.518 0.048 0.482 0.046 0.445 0.049C0.408 0.051 0.371 0.059 0.333 0.063C0.296 0.067 0.259 0.067 0.222 0.073C0.185 0.08 0.148 0.093 0.111 0.094C0.074 0.095 0.037 0.083 0.019 0.078L0.0 0.072Z"></path>
              <path d="M0.0 0.367L0.019 0.378C0.037 0.389 0.074 0.412 0.111 0.409C0.148 0.406 0.185 0.378 0.222 0.364C0.259 0.35 0.296 0.35 0.333 0.334C0.371 0.318 0.408 0.286 0.445 0.294C0.482 0.303 0.518 0.351 0.555 0.365C0.592 0.379 0.629 0.359 0.667 0.35C0.704 0.34 0.741 0.342 0.778 0.351C0.815 0.361 0.852 0.378 0.889 0.378C0.926 0.378 0.963 0.361 0.981 0.352L1.0 0.344L1.0 0.156L0.981 0.157C0.963 0.158 0.926 0.16 0.889 0.149C0.852 0.138 0.815 0.113 0.778 0.106C0.741 0.098 0.704 0.107 0.667 0.117C0.629 0.126 0.592 0.135 0.555 0.136C0.518 0.138 0.482 0.13 0.445 0.134C0.408 0.138 0.371 0.153 0.333 0.148C0.296 0.143 0.259 0.119 0.222 0.123C0.185 0.127 0.148 0.159 0.111 0.171C0.074 0.183 0.037 0.175 0.019 0.172L0.0 0.168Z"></path>
              <path d="M0.0 0.446L0.019 0.455C 0.037 0.465 0.074 0.483 0.111 0.482C0.148 0.481 0.185 0.46 0.222 0.461C0.259 0.462 0.296 0.485 0.333 0.495C0.371 0.506 0.408 0.504 0.445 0.5C0.482 0.496 0.518 0.49 0.555 0.482C0.592 0.473 0.629 0.462 0.667 0.455C0.704 0.447 0.741 0.443 0.778 0.452C0.815 0.46 0.852 0.481 0.889 0.491C0.926 0.5 0.963 0.498 0.981 0.497L1.0 0.496L1.0 0.342L0.981 0.35C0.963 0.359 0.926 0.376 0.889 0.376C0.852 0.376 0.815 0.359 0.778 0.349C0.741 0.34 0.704 0.338 0.667 0.348C0.629 0.357 0.592 0.377 0.555 0.363C0.518 0.349 0.482 0.301 0.445 0.292C0.408 0.284 0.371 0.316 0.333 0.332C0.296 0.348 0.259 0.348 0.222 0.362C0.185 0.376 0.148 0.404 0.111 0.407C0.074 0.41 0.037 0.387 0.019 0.376L0.0 0.365Z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>

        video: {
    width: "100%",
    height: "100%",
    transform: "translateY(-30%)",
    objectFit: "cover",
  },
  container: {
    position: "relative",
    width: "100%",
    height: "600px",
    clipPath: "url(#svgPath2)",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(45deg, #3D3D3D 25%, transparent 25%), linear-gradient(-45deg, #3D3D3D 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #3D3D3D 75%), linear-gradient(-45deg, transparent 75%, #3D3D3D 75%)",
    backgroundSize: "2px 2px",
    backgroundPosition: "0 0, 1px 0, 1px -1px, 0px 1px",

    zIndex: 1,
  },
      */
