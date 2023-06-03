import React from 'react'
import { GalleryCard, GalleryImage } from '../static/data';
import { BackgroundImage, Badge, Card, Group, Image, Overlay, Paper, Space, Stack, Text, createStyles, useMantineTheme } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    card: {
        transition: "transform 400ms cubic-bezier(.47,1.64,.41,.8), box-shadow 0.2s",
        boxShadow: theme.shadows.md,
        overflow: "hidden",

        "&:hover": {
            transform: "scale(1.02)",
            boxShadow: theme.shadows.xl,
        },
    },
    bgImage: {
        position: "relative",
    },
    overlay: {
        position: "absolute",
        padding: theme.spacing.md,
        paddingTop: theme.spacing.xl,
        top: 0,
        left: 0,
        height: "100%",
        color: theme.colors.gray[1],
    },
    dueDate: {
        color: theme.colors.gray[1],
    }
}));

function LibraryCard({ gallery }: {
    gallery: {
        card: GalleryCard;
        images: GalleryImage[];
    }
}) {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    return (
        <Paper
            shadow="md"
            radius="md"
            withBorder
            sx={{ maxWidth: 500, width: 'min(100%, 500px)', aspectRatio: '16 / 10' }}
            className={classes.card}
            component={Link}
            href="/projects/0"
        >


            <BackgroundImage
                src={gallery.images[gallery.card.cover].link}
                style={{ height: "100%", position: "relative" }}
                p="sm"
            >
                <Overlay
                    gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                    opacity={0.85}
                    zIndex={1}
                />
                <Stack

                    align="flex-start"
                    justify="space-between"
                    spacing={0}
                    style={{ zIndex: 2, position: "relative", height: "100%" }}
                >
                    <Stack spacing={0} align="flex-start" justify="flex-start">
                        <Group spacing={5}>
                            <Text weight={700} size="xl" color="gray.2">
                                {gallery.card.title}
                            </Text>
                        </Group>
                        <Text size="sm" weight={300} color="gray.4">
                            {gallery.card.description}
                        </Text>
                    </Stack>
                    <Group>
                        <Badge color={theme.colorScheme === 'dark' ? 'blue.3' : 'blue.6'} size="md" variant={theme.colorScheme === 'dark' ? 'light' : 'filled'} >{gallery.card.date}</Badge>
                        {
                            gallery.card.tags && gallery.card.tags.map((tag) => (
                                <Badge size="md" color="gray" variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}>{tag}</Badge>
                            ))
                        }
                    </Group>
                </Stack>
            </BackgroundImage>

        </Paper>
    );
}

export default LibraryCard