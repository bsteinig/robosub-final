import { spin } from "@/components/keyframes/spin";
import HeroTransition from "@/components/svgs/heroTransition";
import SponsorSection from "@/features/sponsors/sponsorSection";
import {
  Container,
  Group,
  Overlay,
  Text,
  Title,
  UnstyledButton,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import React, { useEffect } from "react";

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
        ? theme.colors.dark[9]
        : theme.colors.gray[2],
  },
  hero: {
    position: "relative",
    height: "800px",
    zIndex: 2,
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
    backgroundColor: "#0d4a7d",
    position: "relative",
    padding: 0,
    zIndex: 2,
  },
  title: {
    fontSize: "min(7vw, 70px)",
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
    backdropFilter: "blur(5vmax)",
    backgroundImage: "url(/assets/bottom.svg)",
  },
  blur: {
    overflow: "hidden",
    position: "relative",
    height: "100%",
    width: "100%",
    zIndex: 2,
    backdropFilter: "blur(5vmax)",
  },
  blob: {
    height: "20vmax",
    aspectRatio: "1",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    backgroundImage: `linear-gradient(
      60deg,
      hsl(207deg 86% 57%) 0%,
      hsl(222deg 77% 61%) 39%,
      hsl(239deg 68% 63%) 61%,
      hsl(255deg 67% 55%) 100%
    )`,
    animation: `${spin} 10s linear infinite`,
    opacity: 0.6,
    zIndex: 1,
  },
}));

function Sponsors() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const handleContextMenu = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.preventDefault(); // Prevents the context menu from appearing
  };

  // move div with id blob with mouse
  const moveBlob = (e: any) => {
    const blob = document.getElementById("blob");
    if (!blob) return;
    const width = blob.offsetWidth;
    const height = blob.offsetHeight;

    blob.style.left = e.pageX - width / 2 + "px";
    blob.style.top = e.pageY - height / 2 + "px";
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveBlob);
    return () => {
      document.removeEventListener("mousemove", moveBlob);
    };
  }, []);

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
              style={{
                backgroundColor: theme.fn.rgba(theme.colors.blue[5], 0.5),
              }}
            >
              Get Involved
            </UnstyledButton>
          </Group>
        </Container>
      </Container>
      <Container fluid className={classes.blueSection}>
        <HeroTransition />
        <Container fluid className={classes.blueSection}>
          <Container py={30} size="lg" style={{ zIndex: 2 }}>
            <Title className={classes.title}>{new Date().getFullYear()} Sponsors</Title>
          </Container>
        </Container>
      </Container>
      <div className={cx(classes.spacer, classes.bottomSvg)}></div>
      <Container fluid p={0} className={classes.blur}>
        <SponsorSection
          title="Captain"
          logoSize="lg"
          sponsors={[{ name: "ford", link: "https://ford.com" }]}
        />
        <SponsorSection
          title="Commander"
          logoSize="lg"
          sponsors={[{ name: "ford", link: "https://ford.com" }]}
        />
        <SponsorSection
          title="Crew"
          logoSize="md"
          sponsors={[{ name: "ford", link: "https://ford.com" }]}
        />
        <SponsorSection
          title="Navigator"
          logoSize="md"
          sponsors={[{ name: "ford", link: "https://ford.com" }]}
        />
        <SponsorSection
          title="Mate"
          logoSize="sm"
          sponsors={[{ name: "ford", link: "https://ford.com" }]}
        />
      </Container>
      <div id="blob" className={classes.blob}></div>
    </main>
  );
}

export default Sponsors;
