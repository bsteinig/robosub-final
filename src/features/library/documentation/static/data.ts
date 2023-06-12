export const documentationData = [
    {
        id: 1,
        title: 'Getting Started',
        description: 'Learn how to use the library',
        link: '/library/documentation/getting-started',
        season: 2022,
        type: 'documentation',
    },
    {
        id: 2,
        title: 'API Reference',
        description: 'Learn how to use the library',
        link: '/library/documentation/api-reference',
        season: 2022,
        type: 'code',
    },
    {
        id: 3,
        title: 'Examples',
        description: 'Learn how to use the library',
        link: '/library/documentation/examples',
        season: 2023,
        type: 'cad',
    },
    {
        id: 4,
        title: 'FAQ',
        description: 'Learn how to use the library',
        link: '/library/documentation/faq',
        season: 2023,
        type: 'documentation',
    },
]

export interface DocumentationData {
    id: number
    title: string
    description?: string
    link: string
    season: number
    type: string
}[]