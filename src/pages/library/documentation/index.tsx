import { documentationData } from '@/features/library/documentation/static/data';
import LibraryHero from '@/features/library/shared/hero'
import { ActionIcon, Badge, Container, Text, Title, createStyles, rem } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import React from 'react'

const useStyles = createStyles((theme) => ({
    main: {
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        width: "100%",
        zIndex: 1,

        boxShadow: "0px 15px 50px 0px rgb(10 10 10 / 50%)",
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[2],

    },
    title: {
        maxWidth: 800,
        color: theme.white,
        fontSize: rem(70),
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(40),
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            lineHeight: 1.3,
        },
    },
    subtitle: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
        fontSize: rem(50),
        fontWeight: 700,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(40),
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            lineHeight: 1.3,
        },
    },
    description: {
        color: theme.white,
        maxWidth: 700,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.sm,
        },
    },
}));

function Documentation() {
    const { classes } = useStyles();

    const colorTable = {
        'cad': 'teal',
        'code': 'blue',
        'documentation': 'violet',
    }

    return (
        <main className={classes.main}>
            <LibraryHero>
                <Title className={classes.title}>Beneath the Waves</Title>
                <Text className={classes.description} size="lg" mt="xl">
                    Discover a collection of code snippets, 3D models, and other essential materials. Whether you need inspiration, solutions to technical challenges, or ways to enhance your projects, our diverse array of resources is contributed by passionate individuals like yourself. Join our community, explore documentation sharing, and empower your team's journey towards new discoveries and accomplishments.
                </Text>
            </LibraryHero>
            <Container pt={50} size="xl">
                <DataTable
                    withBorder
                    borderRadius="md"
                    shadow="lg"
                    withColumnBorders
                    striped
                    highlightOnHover
                    fontSize="md"
                    columns={[
                        { accessor: 'title' },
                        { accessor: 'season' },
                        {
                            accessor: 'type',
                            render: (row) => (
                                <Badge color={colorTable[row.type]} size="lg" style={{ textTransform: 'uppercase' }}>{row.type}</Badge>
                            ),
                        },
                        {
                            accessor: 'link',
                            title: <Text>Download</Text>,
                            textAlignment: 'right',
                            render: (row) => (
                                <ActionIcon component="a" href={row.link}>
                                    <IconDownload size={24} />
                                </ActionIcon>
                            ),
                        }
                    ]}
                    records={documentationData}
                />
            </Container>
        </main>
    )
}

export default Documentation