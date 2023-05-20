import { Image, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 100000,
    overflow: "hidden",
  },
  imgRoot: {
    width: "100%",
    height: "100%",
  },
  imgWrapper: {
    width: "100%",
    height: "100%",
  },
  imgFigure: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100% !important",
    objectFit: "cover",
  },
  brand: {
    position: "absolute",
    top: "22.8%",
    left: "49%",
    transform: "translateX(-50%)",
    zIndex: 100001,
  }
}));

export default function Loading() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>

      <Image
        classNames={{
          root: classes.imgRoot,
          imageWrapper: classes.imgWrapper,
          figure: classes.imgFigure,
          image: classes.img,
        }}
        src="/splash.gif"
        alt="Michigan Robosub"
      />
    </div>
  );
}
