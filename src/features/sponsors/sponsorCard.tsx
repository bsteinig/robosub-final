import { sponsorBounce } from "@/components/keyframes/sponsorBounce";
import { BackgroundImage, Paper, createStyles } from "@mantine/core";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import React, { useEffect, useRef } from "react";

const cardStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    aspectRatio: "5 / 3",
    padding: `${theme.spacing.md}`,
    cursor: "pointer",
    zIndex: 4,

    backdropFilter: "blur(5vmax) saturate(200%)",
    backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.dark[7], 0.5) : theme.fn.rgba(theme.colors.gray[0], 0.5),
    borderRadius: theme.radius.md,
    shadow: theme.shadows.md,
    border: `2px solid ${theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.dark[9], 0.5) : theme.fn.rgba(theme.colors.gray[3], 0.5)}`,

    "&:after": {
      content: '""',
      position: "absolute",
      height: "20%",
      width: "2px",
      left: "-1px",
      top: "65%",
      transition: 'top, opacity',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'ease',
      background: 'linear-gradient( transparent, rgb(0,52,120), transparent)',
      opacity: 0,
    },

    "&:hover:after": {
      top: "25%",
      opacity: 1,
    },

    "&:hover": {
      boxShadow: theme.shadows.xl,
    },
  },
}));

const sponsorSizes = {
  sm: "250px",
  md: "350px",
  lg: "500px",
};

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 40
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 40

function SponsorCard({ size }: { size: "sm" | "md" | "lg" }) {
  const { classes } = cardStyles();

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const target = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  )

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.01,
        }),
    },
    { target, eventOptions: { passive: false } }
  )

  return (
    <animated.div
      ref={target}
      className={classes.card}
      style={{
        width: sponsorSizes[size],
        transform: "perspective(1200px)",
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
        rotateY,
        rotateZ,
      }}
    >
      <BackgroundImage
        style={{ height: "100%" }}
        src="https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo.png"
      />
    </animated.div>
  );
}

export default SponsorCard;
