import SponsorCard from "@/features/sponsors/sponsorCard";
import {
  Button,
  Container,
  Divider,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
  UnstyledButton,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    width: "100%",
    zIndex: 1,

    boxShadow: "0px 15px 50px 0px rgb(10 10 10 / 50%)",
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
  },
  hero: {
    position: "relative",
    height: "800px",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heroContainer: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",

    [`@media (min-width: 1800px)`]: {
      paddingTop: 180,
      justifyContent: "flex-start",
    },
  },
  bigHeading: {
    fontSize: "min(14vw, 80px)",
    lineHeight: 1,
    fontWeight: 900,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[3],
  },
  description: {
    color: theme.white,
    maxWidth: 600,
    marginLeft: "15px",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },
  svgBorder: {
    position: "absolute",
    top: "calc(-100vw / 5.25)",
    left: 0,
    zIndex: 0,
    width: "100%",
  },
  blueSection: {
    backgroundColor: theme.colors.blue[9],
    minHeight: 600,
    position: "relative",
    padding: 0,
    zIndex: 2,
  },
  title: {
    fontSize: "min(7vw, 60px)",
    textAlign: "center",
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[3],
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

function Sponsors() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const lowerBound = useMediaQuery("(min-width: 800px)");

  const handleContextMenu = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.preventDefault(); // Prevents the context menu from appearing
  };

  const heroTransition = () => {
    return (
      <>
        {lowerBound ? (
          <>
            <Parallax className={classes.svgBorder} speed={15}>
              <svg viewBox="0 0 1000 200" width="100%">
                <path
                  d="M0 45L33.3 41.3C66.7 37.7 133.3 30.3 200 33.2C266.7 36 333.3 49 400 50.8C466.7 52.7 533.3 43.3 600 44.8C666.7 46.3 733.3 58.7 800 66.8C866.7 75 933.3 79 1000 80.3C1066.7 81.7 1133.3 80.3 1200 70.8C1266.7 61.3 1333.3 43.7 1400 44.7C1466.7 45.7 1533.3 65.3 1600 67.7C1666.7 70 1733.3 55 1800 46C1866.7 37 1933.3 34 1966.7 32.5L2000 31L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
                  fill="#339af0"
                ></path>
              </svg>
            </Parallax>
            <Parallax className={classes.svgBorder} speed={12}>
              <svg viewBox="0 0 1000 200" width="100%">
                <path
                  d="M0 91L33.3 97C66.7 103 133.3 115 200 107.8C266.7 100.7 333.3 74.3 400 73.5C466.7 72.7 533.3 97.3 600 107.3C666.7 117.3 733.3 112.7 800 102.7C866.7 92.7 933.3 77.3 1000 71.8C1066.7 66.3 1133.3 70.7 1200 69.7C1266.7 68.7 1333.3 62.3 1400 68C1466.7 73.7 1533.3 91.3 1600 93.7C1666.7 96 1733.3 83 1800 77.5C1866.7 72 1933.3 74 1966.7 75L2000 76L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
                  fill="#2e8fe2"
                ></path>
              </svg>
            </Parallax>
            <Parallax className={classes.svgBorder} speed={9}>
              <svg viewBox="0 0 1000 200" width="100%">
                <path
                  d="M0 107L33.3 105.2C66.7 103.3 133.3 99.7 200 103.8C266.7 108 333.3 120 400 119.5C466.7 119 533.3 106 600 103C666.7 100 733.3 107 800 109.2C866.7 111.3 933.3 108.7 1000 110.2C1066.7 111.7 1133.3 117.3 1200 117.5C1266.7 117.7 1333.3 112.3 1400 109.5C1466.7 106.7 1533.3 106.3 1600 111C1666.7 115.7 1733.3 125.3 1800 128.2C1866.7 131 1933.3 127 1966.7 125L2000 123L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
                  fill="#2a84d4"
                ></path>
              </svg>
            </Parallax>
            <Parallax className={classes.svgBorder} speed={6}>
              <svg viewBox="0 0 1000 200" width="100%">
                <path
                  d="M0 95L33.3 104.3C66.7 113.7 133.3 132.3 200 137C266.7 141.7 333.3 132.3 400 131.8C466.7 131.3 533.3 139.7 600 143.8C666.7 148 733.3 148 800 147.7C866.7 147.3 933.3 146.7 1000 144.8C1066.7 143 1133.3 140 1200 133C1266.7 126 1333.3 115 1400 117.7C1466.7 120.3 1533.3 136.7 1600 139.3C1666.7 142 1733.3 131 1800 126.2C1866.7 121.3 1933.3 122.7 1966.7 123.3L2000 124L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
                  fill="#2479c6"
                ></path>
              </svg>
            </Parallax>
            <Parallax className={classes.svgBorder} speed={3}>
              <svg viewBox="0 0 1000 200" width="100%">
                <path
                  d="M0 158L33.3 158.8C66.7 159.7 133.3 161.3 200 162.8C266.7 164.3 333.3 165.7 400 164.7C466.7 163.7 533.3 160.3 600 156.5C666.7 152.7 733.3 148.3 800 147.2C866.7 146 933.3 148 1000 150.3C1066.7 152.7 1133.3 155.3 1200 151.8C1266.7 148.3 1333.3 138.7 1400 135.2C1466.7 131.7 1533.3 134.3 1600 134.2C1666.7 134 1733.3 131 1800 133C1866.7 135 1933.3 142 1966.7 145.5L2000 149L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
                  fill="#1e6eb8"
                ></path>
              </svg>
            </Parallax>
            <Parallax className={classes.svgBorder} speed={0}>
              <svg viewBox="0 0 1000 200" width="100%">
                <path
                  d="M0 169L33.3 165.5C66.7 162 133.3 155 200 156.5C266.7 158 333.3 168 400 170.3C466.7 172.7 533.3 167.3 600 169.2C666.7 171 733.3 180 800 178C866.7 176 933.3 163 1000 160.8C1066.7 158.7 1133.3 167.3 1200 168.2C1266.7 169 1333.3 162 1400 162.8C1466.7 163.7 1533.3 172.3 1600 173.3C1666.7 174.3 1733.3 167.7 1800 163.2C1866.7 158.7 1933.3 156.3 1966.7 155.2L2000 154L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
                  fill={`${theme.colors.blue[9]}`}
                ></path>
              </svg>
            </Parallax>
          </>
        ) : (
          <svg
            className={classes.svgBorder}
            viewBox="0 0 1000 200"
            width="100%"
          >
            <path
              d="M0 45L33.3 41.3C66.7 37.7 133.3 30.3 200 33.2C266.7 36 333.3 49 400 50.8C466.7 52.7 533.3 43.3 600 44.8C666.7 46.3 733.3 58.7 800 66.8C866.7 75 933.3 79 1000 80.3C1066.7 81.7 1133.3 80.3 1200 70.8C1266.7 61.3 1333.3 43.7 1400 44.7C1466.7 45.7 1533.3 65.3 1600 67.7C1666.7 70 1733.3 55 1800 46C1866.7 37 1933.3 34 1966.7 32.5L2000 31L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
              fill="#339af0"
            ></path>
            <path
              d="M0 91L33.3 97C66.7 103 133.3 115 200 107.8C266.7 100.7 333.3 74.3 400 73.5C466.7 72.7 533.3 97.3 600 107.3C666.7 117.3 733.3 112.7 800 102.7C866.7 92.7 933.3 77.3 1000 71.8C1066.7 66.3 1133.3 70.7 1200 69.7C1266.7 68.7 1333.3 62.3 1400 68C1466.7 73.7 1533.3 91.3 1600 93.7C1666.7 96 1733.3 83 1800 77.5C1866.7 72 1933.3 74 1966.7 75L2000 76L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
              fill="#2e8fe2"
            ></path>
            <path
              d="M0 107L33.3 105.2C66.7 103.3 133.3 99.7 200 103.8C266.7 108 333.3 120 400 119.5C466.7 119 533.3 106 600 103C666.7 100 733.3 107 800 109.2C866.7 111.3 933.3 108.7 1000 110.2C1066.7 111.7 1133.3 117.3 1200 117.5C1266.7 117.7 1333.3 112.3 1400 109.5C1466.7 106.7 1533.3 106.3 1600 111C1666.7 115.7 1733.3 125.3 1800 128.2C1866.7 131 1933.3 127 1966.7 125L2000 123L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
              fill="#2a84d4"
            ></path>
            <path
              d="M0 95L33.3 104.3C66.7 113.7 133.3 132.3 200 137C266.7 141.7 333.3 132.3 400 131.8C466.7 131.3 533.3 139.7 600 143.8C666.7 148 733.3 148 800 147.7C866.7 147.3 933.3 146.7 1000 144.8C1066.7 143 1133.3 140 1200 133C1266.7 126 1333.3 115 1400 117.7C1466.7 120.3 1533.3 136.7 1600 139.3C1666.7 142 1733.3 131 1800 126.2C1866.7 121.3 1933.3 122.7 1966.7 123.3L2000 124L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
              fill="#2479c6"
            ></path>
            <path
              d="M0 158L33.3 158.8C66.7 159.7 133.3 161.3 200 162.8C266.7 164.3 333.3 165.7 400 164.7C466.7 163.7 533.3 160.3 600 156.5C666.7 152.7 733.3 148.3 800 147.2C866.7 146 933.3 148 1000 150.3C1066.7 152.7 1133.3 155.3 1200 151.8C1266.7 148.3 1333.3 138.7 1400 135.2C1466.7 131.7 1533.3 134.3 1600 134.2C1666.7 134 1733.3 131 1800 133C1866.7 135 1933.3 142 1966.7 145.5L2000 149L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
              fill="#1e6eb8"
            ></path>
            <path
              d="M0 169L33.3 165.5C66.7 162 133.3 155 200 156.5C266.7 158 333.3 168 400 170.3C466.7 172.7 533.3 167.3 600 169.2C666.7 171 733.3 180 800 178C866.7 176 933.3 163 1000 160.8C1066.7 158.7 1133.3 167.3 1200 168.2C1266.7 169 1333.3 162 1400 162.8C1466.7 163.7 1533.3 172.3 1600 173.3C1666.7 174.3 1733.3 167.7 1800 163.2C1866.7 158.7 1933.3 156.3 1966.7 155.2L2000 154L2000 201L1966.7 201C1933.3 201 1866.7 201 1800 201C1733.3 201 1666.7 201 1600 201C1533.3 201 1466.7 201 1400 201C1333.3 201 1266.7 201 1200 201C1133.3 201 1066.7 201 1000 201C933.3 201 866.7 201 800 201C733.3 201 666.7 201 600 201C533.3 201 466.7 201 400 201C333.3 201 266.7 201 200 201C133.3 201 66.7 201 33.3 201L0 201Z"
              fill={`${theme.colors.blue[9]}`}
            ></path>
          </svg>
        )}
      </>
    );
  };

  return (
    <main className={classes.main}>
      <Container p={0} fluid className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 90%)"
          opacity={1}
          zIndex={2}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          onContextMenu={handleContextMenu}
          preload="auto"
          className={classes.video}
        >
          {/* TODO: GET THE ORIGINAL VIDEO FILE */}
          <source
            src="https://video.wixstatic.com/video/d0cbf8_4f9a5846b06f46a3baee58254a70b6f8/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <Container size="md" className={classes.heroContainer} pt={40}>
          <Title className={classes.bigHeading}>Thank You</Title>
          {/* TODO: Update this copy */}
          <Text className={classes.description} size="xl">
            With the support of our sponsors, we are able to do what we love and
            constantly improve how we do it.
          </Text>
          <Group spacing="xl" ml={15} my={10}>
            <UnstyledButton className={classes.cta}>
              Our Sponsors
            </UnstyledButton>
            <UnstyledButton
              className={classes.cta}
              style={{ backgroundColor: theme.fn.rgba(theme.colors.blue[5], 0.5) }}
            >
              Get Involved
            </UnstyledButton>
          </Group>
        </Container>
      </Container>
      <Container fluid className={classes.blueSection}>
        {heroTransition()}
        <Container fluid className={classes.blueSection}>
          <Container size="lg" style={{ zIndex: 2 }}>
            <Title className={classes.title}>2023 Sponsors</Title>
            <Group>
              <Stack>
                <UnstyledButton className={classes.sponsorTier}>
                  Captain
                </UnstyledButton>
                <Divider size="lg" orientation="vertical" />
              </Stack>
              <SponsorCard size="lg" />
            </Group>
          </Container>
        </Container>
      </Container>
    </main>
  );
}

export default Sponsors;
