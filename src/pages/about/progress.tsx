import { createStyles } from '@mantine/core'
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
}));

function Progress() {

    const { classes } = useStyles()

    return (
        <main className={classes.main}>
            <h1>Progress</h1>
        </main>

    )
}

export default Progress