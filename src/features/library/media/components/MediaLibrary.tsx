import { SimpleGrid } from '@mantine/core'
import React from 'react'
import { GalleryCard, GalleryImage } from '../static/data'
import LibraryCard from './LibraryCard';

function MediaLibrary({ galleries }: {
    galleries: {
        card: GalleryCard;
        images: GalleryImage[];
    }[];
}) {

    return (
        <SimpleGrid cols={3}
            spacing="lg"
            breakpoints={[
                { maxWidth: '62rem', cols: 2, spacing: 'md' },
                { maxWidth: '48rem', cols: 1, spacing: 'sm' },
            ]}>
            {galleries.map((gallery) => (
                <LibraryCard gallery={gallery} />
            ))}

        </SimpleGrid>
    )
}

export default MediaLibrary