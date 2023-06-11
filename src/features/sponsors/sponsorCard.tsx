import { sponsorBounce } from "@/components/keyframes/sponsorBounce";
import { BackgroundImage, Paper, createStyles } from "@mantine/core";
import React from "react";

const cardStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    aspectRatio: "5 / 3",
    backgroundColor: theme.colors.gray[0],
    borderRadius: `0px 0px ${theme.radius.md} ${theme.radius.md}`,
    padding: `${theme.spacing.md}`,
    cursor: "pointer",

    "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: theme.spacing.xs,
        backgroundColor: '#003478',
        transition: "height 200ms ease",
    },
    "&:hover::before": { 
        animation: `${sponsorBounce} .75s ease 0s 1 normal forwards`,
    }
  },
}));

const sponsorSizes = {
  sm: "150px",
  md: "300px",
  lg: "500px",
};

function SponsorCard({ size }: { size: "sm" | "md" | "lg" }) {
  const { classes } = cardStyles();

  return (
    <Paper
      className={classes.card}
      style={{ width: sponsorSizes[size] }}
      radius="md"
      shadow="md"
    >
      <BackgroundImage
        style={{ height: "100%" }}
        src="https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo.png"
      />
    </Paper>
  );
}

export default SponsorCard;
