import Topography from "@/components/svgs/topography";
import { AboutData, aboutData } from "@/features/about/static/data";
import { Carousel } from "@mantine/carousel";
import {
  Accordion,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
  createStyles,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
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
    height: "75vh",
    transform: "translateY(-30%)",
    objectFit: "cover",
  },
  image: {
    position: "fixed",
    zIndex: -1,
    width: "100%",
    height: "75vh",
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
  },
  subteamSection: {
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
  },
  accordion: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    borderRadius: theme.radius.sm,
  },

  accordionItem: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    border: `${rem(1)} solid transparent`,
    position: 'relative',
    zIndex: 0,
    transition: 'transform 150ms ease',

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      boxShadow: theme.shadows.xl,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  accordionChevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
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


  const [content, setContent] = useState<AboutData | null>(aboutData);

  return (
    <main className={classes.main}>
      <Container px={0} py={0} size="fluid">
        {content?.hero.video && (
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
              src={content.hero.video}
              type="video/mp4"
            />
          </video>)}
        {content?.hero.image && (
          <Image
            src={content.hero.image}
            alt="Michigan Robotic Submarine"
            className={classes.image}
          />
        )}
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
              {content?.description}
            </Text>
            <Carousel className={classes.carousel} withControls={false} loop >
              {content?.carousel.map((image, index) => {
                return (
                  <Carousel.Slide key={index}>
                    <Image
                      className={classes.carouselSlide}
                      src={`/about/${image}`}
                    />
                  </Carousel.Slide>)
              })}
            </Carousel>
          </Stack>
          <div ref={stickyRef} id="__stickyDiv">
            {content?.stats.map((item: { title: string, value: string }, index: number) => {
              return (
                <div
                  className={classes.infoGrid}
                  style={{ top: `${100 * index}px` }}
                  key={index}
                >
                  <Text className={classes.infoSubtitle} size="lg">
                    {item.title}
                  </Text>
                  <Title className={classes.infoHeading}>{item.value}</Title>
                </div>
              );
            })}
          </div>
        </SimpleGrid>
      </Container>
      <Topography color={theme.colorScheme === 'dark' ? 'C1C2C5' : '868E96'}>
        <Container size="lg" className={classes.promoSection} py={50}>
          <Title py={40} className={classes.sectionHeader} order={1}>
            The Robosub Competition
          </Title>
          <iframe className={classes.promoVideo} src={content?.robosub.promo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <Text size="xl" pt={40} style={{ width: '80%' }}>
            {content?.robosub.description}
            <br /><br />
            Learn more at: robosub.org
          </Text>
        </Container>
      </Topography>
      <Container p={0} size="fluid" className={classes.subteamSection}>
        <Container size="xl">
          <Grid py={50} >
            <Grid.Col span={12} md={4}>
              <Paper p='md' shadow="md" radius="md">
                <Title order={1}>
                  Our Subteams
                </Title>
                <Text size="md">
                  {content?.subteams.description}
                </Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={12} md={8}>
              <Accordion variant="filled" className={classes.accordion} radius="md" defaultValue={content?.subteams.subteams[0].name} classNames={{ chevron: classes.accordionChevron, item: classes.accordionItem }} >
                {
                  content?.subteams.subteams.map((subteam, index) => {
                    return (
                      <Accordion.Item value={subteam.name} key={index}>
                        <Accordion.Control ><Title order={2}>{subteam.name}</Title></Accordion.Control>
                        <Accordion.Panel>
                          <SimpleGrid cols={2}>
                            <Text size="md">{subteam.description}</Text>
                            <Stack>
                              {subteam.image ? <Image src={subteam.image} /> : null}
                              <List>
                                {
                                  subteam.bullets && subteam.bullets.map((bullet, index) => {
                                    return (
                                      <List.Item key={index}>{bullet}</List.Item>
                                    )
                                  })
                                }
                              </List>
                            </Stack>
                          </SimpleGrid>
                        </Accordion.Panel>
                      </Accordion.Item>
                    )
                  })
                }
              </Accordion>
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
    </main>
  );
}

export default About;
