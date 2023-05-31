import { Group, Paper, Stack, Text, Title, createStyles } from '@mantine/core'
import { Icon, TablerIconsProps } from '@tabler/icons-react';
import React from 'react'

const useStyles = createStyles((theme) => ({
    main: {
        width: 'min(100%, 600px)',
        border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[2]}`,
    },
    title: {
        fontSize: 'clamp(16px,4vw,50px)',
        fontWeight: 600,
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[8],
    },
}));

function TechSpecs({ title, specs }: TechSpecsProps) {
    const { classes } = useStyles();

    console.log(specs)

    const renderSpecs = specs.map((spec: TechSpec, index: number) => {
        return (
            <Group key={index} >
                
                <Stack>
                    <Text>{spec.title}</Text>
                    <Text>{spec.value}</Text>
                </Stack>
            </Group>
        )
    })


    return (
        <Paper className={classes.main} shadow="sm" radius="lg" p="md" >
            <Title className={classes.title}>{title}</Title>
            <Stack>

                {specs && renderSpecs}
            </Stack>
        </Paper>
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