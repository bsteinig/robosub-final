import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  BackgroundImage,
  Center,
  Container,
  SimpleGrid,
  Text,
  Title,
  UnstyledButton,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { Vehicle, vehicles } from "@/features/vehicles/static/data";
import { IconChevronDown } from "@tabler/icons-react";
import TechSpecs from "@/features/vehicles/components/techspecs";
import VideoCard from "@/features/vehicles/components/videoCard";
import DetailsSection from "@/features/vehicles/components/detailsSection";

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
        : theme.colors.gray[1],
  },
  hero: {
    position: "relative",
    height: "100vh",
  },
  heroHeader: {
    position: "absolute",
    top: "52%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  },
  bigHeading: {
    position: "absolute",
    top: "52%",
    left: "50%",
    transform: "translateX(-50%)",

    lineHeight: 1,
    fontSize: "min(300px, 20vw)",
    fontWeight: 900,
    color: theme.white,
    textAlign: "center",
    textTransform: "uppercase",
  },
  heading: {
    position: "fixed",
    top: "75%",
    left: "50%",
    transform: "translateX(-50%)",

    lineHeight: 1,
    fontSize: "min(150px, 10vw)",
    fontWeight: 900,
    color: theme.white,
    textAlign: "center",
    textTransform: "uppercase",
    mixBlendMode: "difference",
  },
  heroDivider: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
    transform: "rotate(180deg)",

    "& svg": {
      position: "relative",
      display: "block",
      width: "calc(100% + 1.3px)",
      height: 100,
    },
    "& path": {
      fill:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[2],
    },
  },
  descSection: {
    position: "relative",
    zIndex: 2,
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[2],
    transform: "translateY(-2px)",
  },
  specsSection: {
    position: "relative",
    zIndex: 2,
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[3],
    transform: "translateY(-4px)",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23${
      theme.colorScheme === "dark" ? "fff" : "000"
    }' fill-opacity='0.1' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E")`,
  },
  videoSection: {
    position: "relative",
    zIndex: 2,
    background: "#0d4a7d",
    minHeight: "50vh",

    "&:before": {
      content: '""',
      position: "absolute",
      top: "-5vw",
      left: 0,
      width: "100%",
      height: "5vw",
      backgroundColor: "#0d4a7d ",
    },
  },
  detailSection: {
    position: "relative",
    zIndex: 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    minHeight: "70vh",

    "&:before": {
      content: '""',
      position: "absolute",
      top: "-6vw",
      left: 0,
      width: "100%",
      height: "6vw",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    },
  },
  specDivider: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
    transform: "rotate(180deg)",

    "& svg": {
      position: "relative",
      display: "block",
      width: "calc(100% + 1.3px)",
      height: 100,
    },
    "& path": {
      fill:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[2],
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
  topSvg: {
    backgroundImage: "url(/assets/top.svg)",
    transform: "translateY(-4vw)",
  },
  bottomSvg: {
    backgroundImage: "url(/assets/bottom.svg)",
  },
  sectionHeading: {
    fontSize: "5vw",
    lineHeight: 1,
    color: theme.colors.gray[2],
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

function Vehicle() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const router = useRouter();
  const slug = router.query.slug;
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (slug) {
      const data = vehicles[slug as keyof typeof vehicles]; // this is why typescript is stupid
      setVehicle(data);
    }
  }, [slug]);

  useEffect(() => {
    if (vehicle && description === "") {
      // Add line breaks to description where there are four spaces
      var desc = vehicle.description.replace(/    /g, "<br /><br />");
      setDescription(desc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicle]);

  if (!vehicle) {
    return null;
  }

  return (
    <main className={classes.main}>
      <Container className={classes.hero} p={0} fluid>
        <BackgroundImage
          src={vehicle?.hero}
          style={{
            height: "100vh",
            width: "100vw",
            backgroundAttachment: "fixed",
          }}
        >
          <Title className={classes.bigHeading}>{vehicle?.title}</Title>

          <Title className={classes.heading}>{vehicle?.year}</Title>
        </BackgroundImage>
        <div className={classes.heroDivider}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Container>
      <Container fluid className={classes.descSection}>
        <Container size="xl">
          <Text py={60} align="center" size="lg">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Text>
          <Center>
            <IconChevronDown size={80} />
          </Center>
        </Container>
      </Container>
      <Container p={0} fluid className={classes.specsSection}>
        <div className={classes.specDivider}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Container size="xl">
          <SimpleGrid
            py={"18vh"}
            cols={2}
            breakpoints={[{ maxWidth: "sm", cols: 1, spacing: "sm" }]}
            style={{ justifyItems: "center" }}
          >
            <TechSpecs {...vehicle?.technical.mechanical} />
            <TechSpecs {...vehicle?.technical.software} />
          </SimpleGrid>
        </Container>
      </Container>
      <div className={cx(classes.spacer, classes.topSvg)}></div>
      <Container p={0} fluid className={classes.videoSection}>
        <Container size="xl">
          <Center>
            <Title className={classes.sectionHeading}>Skills Videos</Title>
          </Center>
          <SimpleGrid
            py={"5vh"}
            cols={2}
            breakpoints={[{ maxWidth: "sm", cols: 1, spacing: "sm" }]}
            style={{ justifyItems: "center" }}
          >
            {vehicle?.media.videos.map((video, i) => (
              <VideoCard key={i} {...video} />
            ))}
          </SimpleGrid>
          <Center>
            <UnstyledButton
              className={classes.cta}
              component="a"
              href={vehicle?.media.report}
            >
              View our Technical Design Report
            </UnstyledButton>
          </Center>
        </Container>
      </Container>
      <div className={cx(classes.spacer, classes.bottomSvg)}></div>
      <Container fluid className={classes.detailSection} pt={100} pb={20}>
        <DetailsSection {...vehicle?.details.mechanical} />
        <DetailsSection {...vehicle?.details.software} />
      </Container>
    </main>
  );
}

export default Vehicle;
