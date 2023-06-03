import { Accordion, Container, Grid, Image, Text, Title, createStyles, rem } from '@mantine/core';
import { Icon } from '@tabler/icons-react';
import React from 'react'

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
        borderRadius: theme.radius.sm,
    },

    item: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
        border: `${rem(1)} solid transparent`,
        position: 'relative',
        zIndex: 0,
        transition: 'transform 150ms ease',

        '&[data-active]': {
            transform: 'scale(1.03)',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
            boxShadow: theme.shadows.xl,
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
            borderRadius: theme.radius.md,
            zIndex: 1,
        },
    },

    chevron: {
        '&[data-rotate]': {
            transform: 'rotate(-90deg)',
        },
    },
}));

function DetailsSection({ title, overview, components }: DetailsSectionProps) {

    const { classes } = useStyles();

    console.log(components)

    const renderMedia = (media: string) => {
        // if media url is a video url (mp4, etc.) then render video, else render image
        const isVideo = media.match(/\.(mp4|webm|ogg)$/i);
        if (isVideo) {
            return (
                <video style={{ maxWidth: '100%' }} controls>
                    <source src={media} type="video/mp4" />
                </video>
            )
        } else {
            return (
                <Image style={{ maxWidth: '100%' }} src={media} alt="" radius="md" />
            )
        }
    }

    const renderComponent = (component: DetailsComponent) => {
        return (
            <>
                <Accordion.Control icon={<component.icon size={'1.5rem'} />}><Title order={2}>{component.title}</Title></Accordion.Control>
                <Accordion.Panel>
                    <Grid >
                        <Grid.Col span={(component.layout === 'img-below' || component.layout === 'text-only') ? 12 : 8} order={component.layout === 'img-left' ? 2 : 1}>
                            <Text size="lg" color="dimmed">{component.content}</Text>
                        </Grid.Col>
                        <Grid.Col span={(component.layout === 'img-below' || component.layout === 'text-only') ? 12 : 4} order={component.layout === 'img-left' ? 1 : 2}>
                            {component.layout !== 'text-only' && component.media.map((media, index) => (
                                <div key={index} style={{ marginBottom: 10 }}>
                                    {renderMedia(media)}
                                </div>
                            ))}
                        </Grid.Col>
                    </Grid>
                </Accordion.Panel>
            </>
        )
    }


    return (
        <Container size="lg">
            <Title mb={10} order={1}>{title}</Title>
            <Text size="lg" color="dimmed">{overview}</Text>
            <Accordion mt={30} mb={100} variant="filled" radius="md" defaultValue={components[0].title} classNames={classes}
                className={classes.root}>
                {components.map((component, index) => (
                    <Accordion.Item value={component.title} key={index}>
                        {renderComponent(component)}
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    )
}

export default DetailsSection

interface DetailsComponent {
    title: string;
    icon: Icon;
    content: string;
    layout: "img-right" | "img-left" | "img-below" | "text-only";
    media: string[];
}

interface DetailsSectionProps {
    title: string;
    overview: string;
    components: DetailsComponent[];
}