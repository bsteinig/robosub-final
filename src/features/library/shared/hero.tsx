import { createStyles, Overlay, Container, rem } from '@mantine/core';
import React from 'react'

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage:
            'url(/technical/huron.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        clipPath: ' polygon(0 0, 100% 0%, 100% 90%, 0% 100%)'
    },

    container: {
        height: rem(700),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: `calc(${theme.spacing.xl} * 6)`,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {

            paddingBottom: `calc(${theme.spacing.xl} * 3)`,
        },
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
    folderContainer: {
        zIndex: 1000,
        position: 'relative',
        filter: 'drop-shadow(0 4px 4px rgba(2, 6, 103, 0.15))',
        userSelect: 'none',
        transform: 'none',
        touchAction: 'none',
        cursor: 'grab',
        transition: 'all 400ms cubic-bezier(.47,1.64,.41,.8)',

        "&:hover": {
            transform: 'translateX(0px)  translateY(0px) scale(1.1) translateZ(0px)',
        },
    },
    folderPosition: {
        zIndex: 1000,
        position: 'absolute',
        top: '40%',
        right: '15%',

        transform: 'rotate(-7deg)',

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },
}));

function LibraryHero({ children }: { children: React.ReactNode }) {
    const { classes } = useStyles();

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                {children}
            </Container>
        </div>
    )
}

export default LibraryHero