export const aboutData: AboutData = {
    hero: {
        video: 'https://video.wixstatic.com/video/d0cbf8_140719a68e924d559eae63ca19557246/720p/mp4/file.mp4'
    },
    description: 'Michigan Robotic Submarine is a student-led engineering team comprised of primarily undergraduate students with diverse backgrounds and interests, working together to design and build an autonomous robotic submarine for the annual RoboSub competition in San Diego, CA. We strive to advance Autonomous Underwater Vehicle (AUV) technology by engineering a submarine that can perform various sub-nautical tasks, like sonar navigation and torpedo target shooting.',
    stats: [
        {
            title: 'Founded',
            value: '2019'
        },
        {
            title: 'Members',
            value: '50+'
        },
        {
            title: 'Subs Built',
            value: '3'
        },
    ],
    carousel: [
        '52303949921_d01a6b5a0d_o.jpg',
        '52304444644_6426b3c6bc_o.jpg',
        '52308618918_75e73ccf77_o.jpg'
    ],
    robosub: {
        promo: 'https://www.youtube-nocookie.com/embed/uSPy8BruHug',
        description: `RoboSub is an international student competition for student teams to design and build robotic submarines, or "Autonomous Underwater Vehicles" (AUV), with behaviors that mimic real-world systems deployed around the world, such as underwater exploration, seafloor mapping, sonar localization, and much more.`,
    },
    subteams: {
        description: 'Michigan Robotic Submarine is comprised of a variety of subteams that each work in different areas. Subteams include members with diverse backgrounds and interests, pursuing a wide range of majors, both engineering and non-engineering.',
        subteams: [
            {
                name: 'Mechanical',
                description: 'The mechanical subteam designs, manufactures, and builds our submarine. Members are involved in the entirety of the research and development process for vehicle components, such as the chassis and propulsion system. Members also machine and fabricate the vehicle using various types of equipment.',
                image: 'https://static.wixstatic.com/media/d0cbf8_3df90ba4cf704240a446b97196c581be~mv2.jpg/v1/fill/w_216,h_144,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9271%20(2).jpg',
                bullets: [
                    'Gain hands on fabrication experience',
                    'learn how to design using 3d cad modeling',
                    'be involved in the whole building process, from design to construction'
                ]
            },
            {
                name: 'Software/Electrical',
                description: 'The software subteam writes programs to control the submarine. Members are involved in developing algorithms to recognize objects and building systems to utilize sensor data to inform autonomous submarine movement. Members on the electrical side of the subteam design and develop the vehicle’s electrical system, through tasks such as PCB design.',
                image: 'https://static.wixstatic.com/media/d0cbf8_96abd34c34464c88b7fbcf6e5f0dd2f3~mv2.png/v1/fill/w_222,h_149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_4100_HEIC.png',
                bullets: [
                    'Work with machine learning algorithms and image processing techniques to optimize our object detection',
                    'Use ROS to develop robust, flexible navigation and control systems',
                    'Design and test custom electronics for an underwater environment'
                ]
            },
            {
                name: 'Business',
                description: 'The business subteam manages the finances of our team and sponsor relationships. Members of this subteam manage the budget, and work closely with the mechanical and software/electrical subteams to fund the development of the submarine. Additionally, members work to establish and maintain relationships with sponsors and apply for funding.'
            },
            {
                name: 'Media',
                description: `The media subteam maintains the team's social media and online presence, as well as capturing content to share on various platforms. Members of this subteam develop content for our social media, update and maintain our website, and create flyers and posters. `,
                image: 'https://static.wixstatic.com/media/d0cbf8_70274c151d544de3b7528ad85d1408dd~mv2.png/v1/fill/w_275,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%2520Shot%25202021-04-18%2520at%25202_18_e.png'
            }
        ],
    }
}

export interface AboutData {
    hero: {
        video?: string,
        image?: string
    },
    description: string,
    stats: {
        title: string,
        value: string
    }[],
    carousel: string[],
    robosub: {
        promo: string,
        description: string
    },
    subteams: {
        description: string,
        subteams: {
            name: string,
            description: string,
            image?: string,
            bullets?: string[]
        }[]
    }
}