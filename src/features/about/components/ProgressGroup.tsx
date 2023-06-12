import {
  Divider,
  Image,
  SimpleGrid,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import React from "react";
import { ProgressItem } from "../static/progressData";
import { Carousel } from "@mantine/carousel";

function ProgressMedia({
  media,
}: {
  media: {
    images?: string[];
    video?: string[];
  };
}) {
  if (media.images && media.images.length === 1) {
    return (
      <Image
        radius="md"
        height={300}
        alt={"progress image"}
        src={media.images[0]}
      />
    );
  } else if (media.images) {
    return (
      <Carousel maw={400} mx="auto" withIndicators loop>
        {media.images.map((image, index) => {
          return (
            <Carousel.Slide key={index}>
              <Image
                key={index}
                radius="md"
                alt={"progress image"}
                src={image}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    );
  } else if (media.video) {
    return (
      <video style={{ width: '100%' }} controls>
        <source src={media.video[0]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return <div>Error Loading Media.</div>;
}

function ProgressGroup({
  key,
  id,
  title,
  items,
}: {
  key: number;
  id: number;
  title: string;
  items: ProgressItem[];
}) {
  return (
    <div>
      <Divider
        size="md"
        my="xs"
        label={<Title order={2}>{title}</Title>}
        labelPosition="center"
      />
      <Timeline>
        {items.map((item, index) => {
          return (
            <Timeline.Item key={index}>
              <SimpleGrid cols={2} py={20} style={{ alignItems: "center" }}>
                {index % 2 === 0 ? (
                  <>
                    <Text size="lg">{item.description}</Text>
                    <ProgressMedia media={item.media} />
                  </>
                ) : (
                  <>
                    <ProgressMedia media={item.media} />
                    <Text size="lg">{item.description}</Text>
                  </>
                )}
              </SimpleGrid>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
}

export default ProgressGroup;
