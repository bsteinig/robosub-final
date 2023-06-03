export const galleryData: Gallery = {
    galleries: [
        {
            card: {
                id: '1',
                title: 'Robosub 2023',
                description: 'Our 2023 Robosub team',
                cover: 2,
                date: '2020-01-01',
                tags: ['tag1', 'tag2', 'tag3']
            },
            images: [
                {
                    id: '1',
                    title: 'Image 1',
                    description: 'This is a description',
                    link: 'https://picsum.photos/seed/picsum/400/300'
                },
                {
                    id: '2',
                    title: 'Image 2',
                    description: 'This is a description',
                    link: 'https://picsum.photos/seed/picasdsum/400/300'
                },
                {
                    id: '3',
                    title: 'Image 3',
                    description: 'This is a description',
                    link: 'https://picsum.photos/seed/pam/600/500'
                },
                {
                    id: '4',
                    title: 'Image 4',
                    description: 'This is a description',
                    link: 'https://picsum.photos/seed/picasdfsum/400/800'
                },
            ]
        },
        {
            card: {
                id: '1',
                title: 'Competition 2022',
                description: 'Our 2022 Robosub Competition in Maryland',
                cover: 3,
                date: '2020-01-01',
                tags: ['tag1', 'tag2', 'tag3']
            },
            images: [
                {
                    id: '1',
                    title: 'Image 1',
                    description: 'This is a description',
                    link: 'https://picsum.photos/seed/pasdfasdfasfm/400/500'
                },
                {
                    id: '2',
                    title: 'Image 2',
                    description: 'This is a description',
                    link: 'https://picsum.photos/seed/pasdasdm/400/1000'
                },
                {
                    id: '3',
                    title: 'Image 3',
                    description: 'This is a description',
                    link: 'https://picsum.photos/seed/picasdasdsum/400/300'
                },
                {
                    id: '4',
                    title: 'Image 4',
                    description: 'This is a description',
                    link: 'https://picsum.photos/seed/asdpicsum/400/300'
                },
            ]
        }
    ]
}


export interface GalleryCard {
    id: string;
    title: string;
    description: string;
    cover: number; // add this property
    date: string;
    tags: string[];
}

export interface GalleryImage {
    id: string;
    title: string;
    description: string;
    link: string;
}

export interface Gallery {
    galleries: {
        card: GalleryCard;
        images: GalleryImage[];
    }[];
}