import { keyframes } from "@mantine/core";

export const rotate = keyframes({
    'from': {
        rotate: '0deg',
    },
    '50%': {
        scale: '1 1.5'
    },
    'to': {
        rotate: '360deg',
    },
})