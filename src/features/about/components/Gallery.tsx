import { Chip, Container, Group, SimpleGrid } from "@mantine/core";
import React, { use, useEffect, useState } from "react";
import HeadShotCard from "./headshotCard";
import { teamData } from "../static/teamData";
import { useListState } from "@mantine/hooks";

function Gallery({ filters }: { filters: string[] }) {
  const bgs = ["/assets/rect.svg", "/assets/circle.svg", "/assets/lines.svg"];

  const [team, setTeam] = useState(teamData);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    console.log(filter);
    if (filter === "all") {
      setTeam(teamData);
    } else if (filter === "leadership") {
      setTeam(teamData.filter((member) => member.Leadership));
    } else {
      setTeam(
        teamData.filter((member) =>
          filter.includes(member.Subteam.toLowerCase())
        )
      );
    }
  }, [filter]);

  const cards = team.map((member, index) => {
    const bg = bgs[index % 3];
    return (
      <HeadShotCard
        key={index}
        name={member.Name}
        title={member.Leadership ? member.Leadership : member.Subteam}
        src={`/headshots/${member.uniqname}.png`}
        email={member.email}
        linkedin={member.Linkedin ? member.Linkedin : ""}
        bg={bg}
      />
    );
  });

  const filterButtons = filters.map((filter, index) => {
    return (
      <Chip
        key={index}
        value={filter}
        variant="filled"
        size="md"
        style={{ textTransform: "capitalize" }}
      >
        {filter}
      </Chip>
    );
  });

  return (
    <Container size="lg">
      <Chip.Group multiple={false} value={filter} onChange={setFilter}>
        <Group mt={10} mb={30}>{filterButtons}</Group>
      </Chip.Group>
      <SimpleGrid
        mb={40}
        cols={4}
        breakpoints={[
          { maxWidth: "62rem", cols: 3, spacing: "md" },
          { maxWidth: "48rem", cols: 2, spacing: "sm" },
          { maxWidth: "36rem", cols: 1, spacing: "sm" },
        ]}
        style={{ justifyItems: "center" }}
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
}

export default Gallery;
