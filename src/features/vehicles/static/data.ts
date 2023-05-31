import { Icon, IconBatteryAutomotive, IconCpu, IconDimensions, IconGeometry, IconPlugConnected, IconPropeller, IconRotate360, IconRoute, IconStereoGlasses } from "@tabler/icons-react";

export const vehicles = {
    'huron': {
        'title': 'Huron',
        'year': '2021',
        'hero': '/technical/huron.jpg',
        'description': 'Huron was designed to be modular, allowing for  the addition of more complex systems in future years. It detects objects within visual distance using our computer vision models, which locate tasks to execute.    Huron is named after the Huron River, a river that passes through the University of Michigan&apos;s central campus. Naming our vehicle after a body of water, especially one that is an important part of the University of Michigan, seemed fitting.    This page overviews Huron&apos;s mechanical, electrical, and software subsystems. Special thanks to all of our sponsors, advisors, and supporters that helped bring Huron to life.',
        'technical': {
            'mechanical': {
                'title': 'Mechanical',
                'specs': [
                    {
                        'title': 'Vehicle Dimensions',
                        'value': '20 LBS L14” x W18” x H12”',
                        'icon': IconDimensions,
                    },
                    {
                        'title': 'Degrees of Freedom',
                        'value': '5 (X, Y, Z, Roll, Yaw)',
                        'icon': IconRotate360,
                    },
                    {
                        'title': 'Propulsion System',
                        'value': '6 BlueRobotics T2000 Thrusters',
                        'icon': IconPropeller,
                    },
                    {
                        'title': 'Battery',
                        'value': 'BlueRobotics Lithium-ion (14.8V, 18Ah)',
                        'icon': IconBatteryAutomotive,
                    },
                    {
                        'title': 'Waterproof Connectors',
                        'value': 'BlueRobotics Potted Cable Penetrators',
                        'icon': IconPlugConnected,
                    }
                ]
            },
            'software': {
                'title': 'Software',
                'specs': [
                    {
                        'title': 'Central Processing Unit',
                        'value': 'Nvidia Jetson Nano (Quad-core ARM A57 @ 1.43 Ghz, 4gb RAM',
                        'icon': IconCpu,
                    },
                    {
                        'title': 'Vision System',
                        'value': 'Stereolabs ZED2',
                        'icon': IconStereoGlasses,
                    },
                    {
                        'title': 'Navigation System',
                        'value': 'Pixhawk PX 4',
                        'icon': IconRoute,
                    },
                    {
                        'title': 'Software Architecture',
                        'value': 'miniYOLOv3, OpenCV',
                        'icon': IconGeometry,
                    },
                ]
            },
        },
        'media': {
            'videos': [
                {
                    'title': 'Sensor Optimization',
                    'url': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                },
                {
                    'title': 'Hull Design',
                    'url': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                }
            ],
            'report': 'https://drive.google.com/file/d/115CKhFXF0o34ReadSc1Z7x16gSE9fvsf/view'
        }
    }
}

export interface VehicleInterface {
    title: string,
    year: string,
    hero: string,
    description: string,
    technical: {
        mechanical: {
            title: string,
            specs: {
                title: string,
                value: string,
                icon: Icon,
            }[]
        },
        software: {
            title: string,
            specs: {
                title: string,
                value: string,
                icon: Icon,
            }[]
        },
    },
    media: {
        videos: {
            title: string,
            url: string,
        }[],
        report: string,
    }
}