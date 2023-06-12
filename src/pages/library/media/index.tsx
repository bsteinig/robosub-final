import { createStyles, Container, Title, Text, rem, ActionIcon, Group, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';
import { useSpring, animated } from '@react-spring/web'
import { createUseGesture, dragAction, hoverAction } from '@use-gesture/react'
import { useRef } from 'react';
import MediaLibrary from '@/features/library/media/components/MediaLibrary';
import { galleryData } from '@/features/library/media/static/data';
import SocialMedia from '@/features/library/media/components/SocialMedia';
import LibraryHero from '@/features/library/shared/hero';

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
    gallery: {
        marginBottom: 100,
    }
}));

const useGesture = createUseGesture([dragAction, hoverAction])

function Media() {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    const iconList = [
        { Icon: IconBrandFacebook, color: 'blue.7', href: 'https://www.facebook.com/MichiganRoboSub' },
        { Icon: IconBrandInstagram, color: 'grape.7', href: 'https://www.instagram.com/michiganrobosub/' },
        { Icon: IconBrandLinkedin, color: 'blue.7', href: 'https://www.linkedin.com/company/michigan-robosub/' },
        { Icon: IconBrandYoutube, color: 'red.7', href: 'https://www.youtube.com/channel/UCLEI8VpADygIrgo3tOr_wcA' }];

    const icons = iconList.map((Icon, index) => (
        <ActionIcon size='xl' radius="xl" color={Icon.color} variant="light" component='a' href={Icon.href} target="_blank">
            <Icon.Icon size="1.8rem" stroke={2} />
        </ActionIcon>

    ));

    const [opened, handlers] = useDisclosure(false, {
        onOpen: () => {
            const folder = document.getElementById('folder-front');
            const folderBack = document.getElementById('folder-back');

            if (!folder || !folderBack) {
                return;
            }
            folder.style.transform = 'translateX(6px) skewX(-20deg)';
            folderBack.style.transform = 'translateX(-10px) skewX(10deg)';
        },
        onClose: () => {
            const folder = document.getElementById('folder-front');
            const folderBack = document.getElementById('folder-back');

            if (!folder || !folderBack) {
                return;
            }
            folder.style.transform = 'none';
            folderBack.style.transform = 'none';
        },
    });

    const [{ x, y, scale }, api] = useSpring(() => ({
        x: 0, y: 0, scale: 1, config: {
            mass: 1,
            tension: 160,
            friction: 9,
        }
    }))
    const ref = useRef(null);
    useGesture(
        {
            onDrag: ({ down, movement: [mx, my], tap }) => {
                api.start({ x: down ? mx : 0, y: down ? my : 0 })
            },
            onHover: ({ hovering }) => {
                api.start({ scale: hovering ? 1.1 : 1 })
            },
        },
        {
            target: ref,
            drag: {
                filterTaps: true,
            }
        }
    )

    const galleries = galleryData;

    return (
        <main className={classes.main}>
            <LibraryHero>
                <>
                    <Title className={classes.title}>Keep up with Our Flow</Title>
                    <Text className={classes.description} size="lg" mt="xl">
                        Stay connected with us! Welcome to our media library and social media hub, where you can explore our photos, videos, and articles showcasing our cutting-edge robotic submarine technology and underwater adventures. <br /><br /> Follow us on social media to stay updated on our latest missions, achievements, and behind-the-scenes stories.
                    </Text>

                    <Group mt="md">
                        {icons}
                    </Group>
                    <div className={classes.folderPosition}>
                        <animated.div ref={ref} className={classes.folderContainer} style={{ x, y, scale }} onClick={() => handlers.toggle()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="77" fill="none" style={{ overflow: 'visible', display: 'block' }}>
                                <g id='folder-back' style={{ transform: 'none', transition: 'all 400ms cubic-bezier(.47,1.64,.41,.8)', transformOrigin: '44.781px 38.7095px' }} >
                                    <path fill={theme.colors.blue[2]} stroke={theme.colors.blue[3]} stroke-miterlimit="10" stroke-width="4.48" d="M8.764 3.156H39.84l8.425 7.537h32.533c1.503 0 2.945.595 4.007 1.655a5.644 5.644 0 0 1 1.66 3.997V68.61c0 1.5-.597 2.937-1.66 3.997a5.675 5.675 0 0 1-4.007 1.656H8.764a5.675 5.675 0 0 1-4.007-1.656 5.645 5.645 0 0 1-1.66-3.997V8.81c0-1.5.597-2.937 1.66-3.997a5.675 5.675 0 0 1 4.007-1.656Z"></path>
                                </g>
                                <g id='folder-front' style={{ transform: 'none', transition: 'all 400ms cubic-bezier(.47,1.64,.41,.8)', transformOrigin: '44.79px 47.766px' }}>
                                    <path fill={theme.colors.blue[2]} stroke={theme.colors.blue[3]} stroke-miterlimit="10" stroke-width="4.48" d="M8.82 74.3h71.94c3.13 0 5.666-2.396 5.666-5.353V26.585c0-2.956-2.537-5.353-5.667-5.353H8.821c-3.13 0-5.667 2.397-5.667 5.353v42.362c0 2.957 2.537 5.353 5.667 5.353Z"></path>
                                    <rect width="25.302" height="25.896" x="32.129" y="35.119" stroke={theme.colors.blue[4]} stroke-width="3.213" rx="1.607"></rect>
                                    <path stroke={theme.colors.blue[4]} stroke-linejoin="round" stroke-width="3.213" d="m57.03 53.193-6.426-7.23-15.262 14.459"></path>
                                    <circle cx="40.262" cy="43.353" r="2.811" stroke={theme.colors.blue[4]} stroke-width="3.213"></circle>
                                </g>
                            </svg>
                        </animated.div>
                    </div>
                </>
            </LibraryHero>
            <Container size="lg" mb={75}>
                <Title my={30} className={classes.subtitle}>Media Library</Title>
                <MediaLibrary galleries={galleries.galleries} />
            </Container>
            <Container size="lg" my={50}>
                <SocialMedia />
            </Container>

        </main>
    );
}

export default Media;