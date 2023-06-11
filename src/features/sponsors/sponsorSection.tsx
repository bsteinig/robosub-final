import {
  Container,
  Divider,
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
    position: "absolute",
  },
  dividerText: {
    textOrientation: "mixed",
    writingMode: "vertical-rl",
  },
}));

function SponsorSection({ title, logoSize, sponsors }: SponsorSectionProps) {
  const { classes } = useStyles();

  return (
    <Container my={50} size="lg" p={0}>
      <Group
        style={{
          height: "400px",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <Stack>
          <IconBrandAirbnb size={48} />
          <div>
            <Title mt={0} order={3} className={classes.dividerText}>
              {title}
            </Title>
          </div>
          <div className={classes.divider}></div>
        </Stack>
        <Stack>
          <div>SVG Here</div>
          <SimpleGrid cols={2} spacing={10}>
            <SponsorCard size={logoSize} />
            <SponsorCard size={logoSize} />
          </SimpleGrid>
        </Stack>
      </Group>
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
