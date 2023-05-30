import Topography from "@/components/svgs/topography";
import { Carousel, Embla } from "@mantine/carousel";
import {
  Container,
  Divider,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useElementSize, useIntersection } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useRef, useState } from "react";

const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
    minHeight: "100vh",
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
    height: "50vh",
    transform: "translateY(-30%)",
    objectFit: "cover",
  },
  bigHeading: {
    fontSize: "19vw",
    lineHeight: 1.1,
    textAlign: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
    mixBlendMode: "multiply",
  },
  underline: {
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
  },
  intro: {
    marginLeft: "5%",
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
      borderRight: `2px solid ${theme.colorScheme === "dark"
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
      borderTop: `2px solid ${theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9]
        }`,
    },
  },
  carousel: {
    width: "90%",
    marginTop: 50,
  },
  carouselSlide: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  sectionHeader: {
    fontSize: "8vmin",
    fontWeight: 500,
    width: "100%",
    lineHeight: 1,
    textAlign: "center",
  },
  promoSection: {
    position: "relative",
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  promoVideo: {
    width: "80%",
    aspectRatio: "16/10",
    objectFit: "cover",

    ['@media (max-width: 768px)']: {
      width: "100%",
    },
  },
  topography: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
    backgroundImage: `url(${theme.colorScheme === "dark" ? "/topography-dark.svg" : "/topography-light.svg"})`,
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
  interface data extends Array<dataItem> { }

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


  const autoplay = useRef(Autoplay({ delay: 2000 }));

  // get list of image files in public/about
  const images = [
    '52303949921_d01a6b5a0d_o.jpg',
    '52304444644_6426b3c6bc_o.jpg',
    '52308618918_75e73ccf77_o.jpg'
  ]

  const carouselSlides = images.map((image, index) => {

    return (
      <Carousel.Slide key={index}>
        <Image
          className={classes.carouselSlide}
          src={`/about/${image}`}
        />
      </Carousel.Slide>)
  })

  return (
    <main className={classes.main}>
      <Container px={0} py={0} size="fluid">
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
        <Title pt={90} className={classes.bigHeading} order={1}>
          ABOUT US
        </Title>
        <Divider size={2} className={classes.underline} />
        <SimpleGrid
          cols={2}
          spacing="sm"
          breakpoints={[{ maxWidth: "sm", cols: 1, spacing: "sm" }]}
          style={{
            borderBottom: `2px solid ${theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9]
              }`,
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
          }}
        >
          <Stack align="center" justify="flex-start" spacing={0}>
            <Text className={classes.intro} pt={40} px="md">
              Michigan Robotic Submarine is a student-led engineering team
              comprised of primarily undergraduate students with diverse
              backgrounds and interests, working together to design and build an
              autonomous robotic submarine for the annual RoboSub competition in
              San Diego, CA. We strive to advance Autonomous Underwater Vehicle
              (AUV) technology by engineering a submarine that can perform various
              sub-nautical tasks, like sonar navigation and torpedo target
              shooting.
            </Text>
            <Carousel className={classes.carousel} withControls={false} loop >
              {carouselSlides}
            </Carousel>
          </Stack>
          <div ref={stickyRef} id="__stickyDiv">
            {rightCol}
          </div>
        </SimpleGrid>
        <Topography>
          <Container size="lg" className={classes.promoSection}>
            <Title py={40} className={classes.sectionHeader} order={1}>
              The Robosub Competition
            </Title>
            <iframe className={classes.promoVideo} src="https://www.youtube-nocookie.com/embed/uSPy8BruHug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <Text size="xl" pt={40} style={{ width: '80%' }}>
              RoboSub is an international student competition for student teams to design and build robotic submarines, or "Autonomous Underwater Vehicles" (AUV), with behaviors that mimic real-world systems deployed around the world, such as underwater exploration, seafloor mapping, sonar localization, and much more.
              <br /><br />
              Learn more at: robosub.org
            </Text>
          </Container>
        </Topography>
      </Container>
    </main>
  );
}

export default About;
