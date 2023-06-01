import { heartBeat } from '@/components/keyframes/heartBeat';
import { Grid, Group, Paper, Stack, Text, Title, createStyles } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import { useSpring, animated, to } from '@react-spring/web';
import { Icon, TablerIconsProps } from '@tabler/icons-react';
import { useGesture } from '@use-gesture/react';
import React, { useEffect, useRef } from 'react'

const useStyles = createStyles((theme) => ({
    main: {
        width: 'min(100%, 600px)',
        border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[2]}`,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],

        position: 'relative',
        boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
        transition: 'box-shadow 0.5s, opacity 0.5s',
        willChange: 'transform',
        cursor: 'grab',
        overflow: 'hidden',
        touchAction: 'none',

        '&:hover': {
            boxShadow: '0px 30px 100px -10px rgba(0, 0, 0, 0.4)',
        }
    },
    title: {
        fontSize: 'clamp(14px,3vw,40px)',
        fontWeight: 600,
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[8],
    },
    specTitle: {
        fontFamily: 'Poppins',
        fontWeight: 700,
        textTransform: 'uppercase',
    },
    specValue: {
        lineHeight: 1.2,
        fontFamily: 'Poppins',
        fontWeight: 600,

        maxWidth: '100%',
    },
    bounce: {
        animation: `${heartBeat} 3s infinite`,
    }
}));

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 40
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 40

function TechSpecs({ title, specs }: TechSpecsProps) {
    const { classes, cx } = useStyles();

    const renderSpecs = specs.map((spec: TechSpec, index: number) => {
        const { hovered, ref } = useHover();
        return (
            <Grid key={index} ref={ref}>
                <Grid.Col span={1} m="xs" p={0} style={{ display: 'grid', placeItems: 'center' }}>
                    <spec.icon className={cx({ [classes.bounce]: hovered })} size="2rem" stroke={2} />
                </Grid.Col>
                <Grid.Col span='auto'>
                    <Stack spacing={0}>
                        <Text color="dimmed" className={classes.specTitle}>{spec.title}</Text>
                        <Text size="lg" className={classes.specValue}>{spec.value}</Text>
                    </Stack>
                </Grid.Col>
            </Grid>
        )
    })

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
            onHover: ({ hovering }) =>
                !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
        },
        { target, eventOptions: { passive: false } }
    )

    return (
        <animated.div ref={target}
            className={classes.main}
            style={{
                transform: "perspective(1200px)",
                x,
                y,
                scale: to([scale, zoom], (s, z) => s + z),
                rotateX,
                rotateY,
                rotateZ,
            }}>
            <Title mb={10} className={classes.title}>{title}</Title>
            <Stack>

                {specs && renderSpecs}
            </Stack>
        </animated.div>
    )

}

export default TechSpecs

interface TechSpec {
    title: string;
    value: string;
    icon: (props: TablerIconsProps) => React.ReactNode;
}

interface TechSpecsProps {
    title: string;
    specs: TechSpec[];
}