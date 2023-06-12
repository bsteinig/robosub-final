import {
  Box,
  Container,
  Divider,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Title,
  createStyles,
} from "@mantine/core";
import React from "react";
import SponsorCard from "./sponsorCard";
import { IconBrandAirbnb } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  divider: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 400,
  },
  dividerText: {
    position: "relative",
    textOrientation: "mixed",
    writingMode: "vertical-rl",
    zIndex: 2,
  },
  svgBorder: {
    marginTop: "35px",
    height: "10px",
    backgroundImage: 'url("/assets/wave_tile.svg")',
    backgroundRepeat: "repeat-x",
  },
}));

function SponsorSection({ title, logoSize, sponsors }: SponsorSectionProps) {
  const { classes } = useStyles();

  return (
    <Container pt={50} size="lg" p={0}>
      <Grid>
        <Grid.Col span={1}>
          <IconBrandAirbnb size={90} />
        </Grid.Col>
        <Grid.Col span={11}>
          <div className={classes.svgBorder} />
        </Grid.Col>
        <Grid.Col className={classes.divider} span={1}>
          <Title mt={0} order={2} className={classes.dividerText}>
            {title}
          </Title>
        </Grid.Col>
        <Grid.Col span={11}>
          <SimpleGrid
            pt={50}
            cols={2}
            spacing={10}
            breakpoints={[{ maxWidth: "72rem", cols: 1, spacing: "xl" }]}
            style={{ justifyItems: "center" }}
          >
            <SponsorCard size={logoSize} />
            <SponsorCard size={logoSize} />
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default SponsorSection;

interface SponsorSectionProps {
  title: string;
  logoSize: "sm" | "md" | "lg";
  sponsors: {
    name: string;
    link: string;
  }[];
}
