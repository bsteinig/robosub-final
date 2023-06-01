import { ActionIcon, Divider, Group, Paper, Title, Tooltip, createStyles } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { isReleased } from '@mantine/hooks/lib/use-headroom/use-headroom';
import { IconMaximize, IconMinimize } from '@tabler/icons-react';
import React from 'react'

const useStyles = createStyles((theme) => ({
    main: {
        width: 'min(100%, 500px)',
        height: 'fit-content',
        border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[2]}`,
        transition: 'all 0.5s ease-in-out',
    },
    skillVideo: {
        width: "100%",
        aspectRatio: "16/9",
        objectFit: "cover",

        ['@media (max-width: 768px)']: {
            width: "100%",
        },
    },
}));

function VideoCard({ title, url }: { title: string, url: string }) {
    const { classes, cx } = useStyles();




    return (
        <Paper className={classes.main} shadow="sm" radius="md" p="sm">
            <Group position='apart' mb={10}>
                <Title order={3} style={{ fontWeight: 500 }}>{title}</Title>
            </Group>

            <iframe className={classes.skillVideo} src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Paper>
    )
}

export default VideoCard