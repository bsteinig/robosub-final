import {
  Icon,
  IconAffiliate,
  IconBatteryAutomotive,
  IconBow,
  IconCpu,
  IconDimensions,
  IconFrame,
  IconGeometry,
  IconHandGrab,
  IconHexagonalPrism,
  IconMicrophone,
  IconPlugConnected,
  IconPropeller,
  IconRotate360,
  IconRoute,
  IconStereoGlasses,
  IconSticker,
  IconSubmarine,
} from "@tabler/icons-react";

export const vehicles: VehiclesData = {
  huron: {
    title: "Huron",
    year: "2021",
    hero: "/technical/huron.jpg",
    description:
      "Huron was designed to be modular, allowing for  the addition of more complex systems in future years. It detects objects within visual distance using our computer vision models, which locate tasks to execute.    Huron is named after the Huron River, a river that passes through the University of Michigan&apos;s central campus. Naming our vehicle after a body of water, especially one that is an important part of the University of Michigan, seemed fitting.    This page overviews Huron&apos;s mechanical, electrical, and software subsystems. Special thanks to all of our sponsors, advisors, and supporters that helped bring Huron to life.",
    technical: {
      mechanical: {
        title: "Mechanical",
        specs: [
          {
            title: "Vehicle Dimensions",
            value: "20 LBS L14” x W18” x H12”",
            icon: IconDimensions,
          },
          {
            title: "Degrees of Freedom",
            value: "5 (X, Y, Z, Roll, Yaw)",
            icon: IconRotate360,
          },
          {
            title: "Propulsion System",
            value: "6 BlueRobotics T2000 Thrusters",
            icon: IconPropeller,
          },
          {
            title: "Battery",
            value: "BlueRobotics Lithium-ion (14.8V, 18Ah)",
            icon: IconBatteryAutomotive,
          },
          {
            title: "Waterproof Connectors",
            value: "BlueRobotics Potted Cable Penetrators",
            icon: IconPlugConnected,
          },
        ],
      },
      software: {
        title: "Software",
        specs: [
          {
            title: "Central Processing Unit",
            value: "Nvidia Jetson Nano (Quad-core ARM A57 @ 1.43 Ghz, 4gb RAM",
            icon: IconCpu,
          },
          {
            title: "Vision System",
            value: "Stereolabs ZED2",
            icon: IconStereoGlasses,
          },
          {
            title: "Navigation System",
            value: "Pixhawk PX 4",
            icon: IconRoute,
          },
          {
            title: "Software Architecture",
            value: "miniYOLOv3, OpenCV",
            icon: IconGeometry,
          },
        ],
      },
    },
    media: {
      videos: [
        {
          title: "Sensor Optimization",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          title: "Hull Design",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ],
      report:
        "https://drive.google.com/file/d/115CKhFXF0o34ReadSc1Z7x16gSE9fvsf/view",
    },
    details: {
      mechanical: {
        title: "Mechanical",
        overview: `Managing the complexity of the mechanical systems was essential, in order to allow us to allocate more time to testing the sub’s algorithms. Manufacturing limitations related to COVID-19 restrictions contributed to our decision to design Huron with an emphasis on ease of manufacturing and assembly, allowing us to lay the groundwork in the 2021 RoboSub competition for pursuing additional, more challenging tasks in the future.`,
        components: [
          {
            title: "Frame",
            icon: IconFrame,
            content: `Our frame is a simple design consisting of several thin annodized aluminum plates that were each machined on a waterjet. Having the ability to manufacture the entire metal frame, which composed most of the hull, with just one piece of equipment significantly reduced manufacturing time. This allowed us to allocate more time to testing the AUV's algorithms. The front plate contains an acrylic port for the stereo camera to see through. Our frame also consists of a watertight acrylic tube, where the AUV's electronics are housed. These electronics can communicate with components on the outside of the vehicle through penetrators that are mounted to the back plate. The back plate contains more penetrators than are currently being used so that additional electrical components can be added without needing to directly machine more holes in the back plate. The bottom plate contains sufficient mounting space for the torpedo launchers, gripper, and bottom-facing camera.`,
            layout: "img-right",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_4ff25d1155f94674981be7dd3d1e6dc0~mv2.jpg/v1/fill/w_291,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Frame%20Rendering_JPG.jpg",
              "https://static.wixstatic.com/media/d0cbf8_a61131dbe23342e694e9067762a11b9e~mv2.jpg/v1/fill/w_281,h_182,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_2462_JPG.jpg",
            ],
          },
          {
            title: "Thrusters",
            icon: IconPropeller,
            content: `Huron contains six T200 thrusters from BlueRobotics, allowing for five degrees of freedom. We implemented a thruster configuration that was the same as that of the BlueROV2. The software subteam had developed their code based on the BlueROV2's thruster configuration, so this allowed them to retain some continuity when switching over to the new sub. After the mechanical subteam completed the construction of Huron, the software subteam's code could be easily transferred to the new sub.`,
            layout: "img-left",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_67f293601d5041379ffe1b373abe0211~mv2.jpg/v1/fill/w_348,h_239,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Thruster_JPG.jpg",
            ],
          },
          {
            title: "Electronics Chassis",
            icon: IconCpu,
            content: `The electronics chassis is a 3D-printed structure within the acrylic tube that provides sufficient mounting space for every piece of electrical hardware, which can be mounted onto one of four exterior faces of the chassis. Using this approach allowed us to avoid having to stack electrical components, which would make them less accessible. In order to use space efficiently, we designed the chassis to contain two supports in its interior, which act as a holder for the battery. We also 3D-printed two additional removable supports to fully constrain the battery's movement.`,
            layout: "img-right",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_97f3d980e1874f69b580c73ef9555069~mv2.jpg/v1/fill/w_224,h_301,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20from%20iOS.jpg",
            ],
          },
          {
            title: "Torpedos",
            icon: IconBow,
            content: `Each of our two torpedo launchers consist of an aluminum barrel, compression spring, and solenoid. The solenoid holds the torpedo in place against the compressed spring using a notch in the torpedo. When the mechanism is ready to be fired, the solenoid plunger is retracted and the spring decompresses, propelling the torpedo through the barrel. In our second design iteration, we focused on improving the manufacturability of this design. To do this, we split the barrel into two components, a cube-shaped mount for the solenoid and a cylindrical portion within the cube-shaped part. The cube-shaped part can directly mount to slots in the bottom plate of the frame. Our first design had included a housing for the solenoid, but we eliminated this part from the second iteration because it seemed unnecessary. The second design uses the same release mechanism because it was a reliable solution to the task.`,
            layout: "img-left",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_34d2b67fa9e3420f88980ed345644539~mv2.jpg/v1/fill/w_357,h_197,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Torpedo%20Launcher%20Rendering_JPG.jpg",
              "https://video.wixstatic.com/video/d0cbf8_bf243f70b4ad46fe8f623dcc597c9f2e/360p/mp4/file.mp4",
            ],
          },
          {
            title: "Gripper",
            icon: IconHandGrab,
            content:
              "The gripper mechanism is powered by linear actuation, which allows the gripper’s end effectors to open and close. A motor turns a lead screw, which induces linear motion in a part that is equivalent to a lead nut, causing the gripper to open and close. We chose to use a linear actuator because they contain relatively few parts compared to other types of actuators. It also enabled us to move both end effectors simultaneously with just a single motor. Because few electrical components are needed to move the end effectors, this system should have a fairly high reliability.",
            layout: "img-right",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_f2024e6c41474305905969dbae27112f~mv2.jpg/v1/fill/w_362,h_271,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Gripper%20Rendering_JPG.jpg",
            ],
          },
        ],
      },
      software: {
        title: "Software/Electrical",
        overview: `Starting with remote development, we've worked to create a robust, modular system that we will be able to build upon in the years to come. With some in-person testing, we've been able to validate many of our logic and algorithms that are key to our AUV's performance. `,
        components: [
          {
            title: "Architecture",
            icon: IconGeometry,
            content:
              "Modular, intuitive, expandable. Our ROS (Robot Operating System)-based architecture includes software nodes for each of the competition tasks, assisted by “support nodes” that perform general tasks like maintaining a given depth or centering the sub on an object detected by our computer vision system. The sub utilizes two computers - a Raspberry Pi for calculations, navigation logic, and communication with our PixHawk motor controller, and an Nvidia Jetson Nano (with its embedded GPU) for image processing and computer vision.",
            layout: "img-below",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_3d22bcd430df468db45fd429460911f4~mv2.png/v1/fill/w_880,h_656,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2021_MRoboSub_Software_System_Diagram_pn.png",
            ],
          },
          {
            title: "Navigation",
            icon: IconRoute,
            content: `Our sub navigates the competition course primarily with information from our stereo camera. To avoid the complexity of absolute localization with respect to the environment, we instead apply computer vision techniques to our camera input to constantly reassess our position relative to our next task. For the torpedo task, our navigation is augmented by the use of a hydrophone array under the belly of the sub, allowing for location of the task’s acoustic pinger.`,
            layout: "text-only",
          },
          {
            title: "Stereo Vision",
            icon: IconStereoGlasses,
            content: `During our initial development, we realized that although we could detect items with our vision models, it would be beneficial to have more information about our surroundings. Additionally, we wished to have a better idea of how close we were to the detected objects in more informed manner. We chose to add a stereo camera to replace our single, front-facing camera which would give us depth data. We selected the ZED2 since it was compatible with ROS and had other integrated features that would be useful for us.`,
            layout: "img-below",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_9e8b79365d33430a88cdda7ebd106b5b~mv2.jpg/v1/fill/w_425,h_146,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/zed-2-front.jpg",
            ],
          },
          {
            title: "Computer Vision/Machine Learning",
            icon: IconAffiliate,
            content: `We began developing computer vision algorithms using color balancing and other digital signal processing techniques but soon discovered that training machine learning models to detect our targets would be a better approach. A pruned, off-the-shelf YOLOv3 model is used for object detection. Feeding the model labeled images of the objects, it learns to recognize them and draw a bounding box around detected objects. An Nvidia Jetson Nano and Zed 2 stereo camera were added to our system, allowing us to to achieve a higher framerate and estimate object distance. The Jetson Nano runs the model on frames captured with the Zed 2. The object detection information is then sent to our primary control algorithm on the Raspberry Pi.`,
            layout: "img-right",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_bb276410d1a54cecba4b6e4c5f520ed2~mv2.gif",
              "https://static.wixstatic.com/media/d0cbf8_d97b1906f6fa41d2bf549dd43571f245~mv2.jpg/v1/crop/x_12,y_0,w_596,h_300/fill/w_366,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/whitebalance.jpg",
            ],
          },
          {
            title: "Hydrophone Array",
            icon: IconMicrophone,
            content: `In order to find the acoustic pingers that locate the torpedo task, we developed our hydrophone system. Our hydrophone system utilizes three hydrophones and a digital signal processing chain of both analog and digital components that allows us to hone in on the pinger with the frequency we select. Our digital signal processing chain is split into a physical analog section (red on the diagram) and a digital section (green on the diagram). The analog section is comprised of the physical hydrophone, the amplifier circuit, some buffer circuitry, and a number of first order filters to do some initial filtering and protect the analog to digital converter (ADC). The ADC converts the signal to a 16-bit digital value to be transmitted back to the Raspberry Pi over the I2S protocol. We developed a custom PCB for the analog section and the data lines back to the Pi. Once on the Pi, the signal is based through a tight variable-adjustable band pass filter. From there, we can apply a Fourier transform for debugging purposes or we can start our calculation process. To identify the heading of the ping, we use all three of our hydrophones and their distance from each other, which creates a delay. When comparing two acoustic signals, the “on paper” easiest way to do this is to identify their phase offset (assuming it is less than 360 degrees). However, with data collected from a sensor, identifying the exact points of a sine wave and where it starts is rather difficult. Therefore, we instead subtract one signal from another and take the root mean square (RMS) of the difference. When they perfectly align, this creates a minimum value whereas a 180 degree offset creates a maximum value. This gives us two possible phase offsets that we can map to an incoming angle based on the geometry of the hydrophones. With the other pairs of hydrophone readings, we can establish which of these is the correct incoming angle of the heading we should target.`,
            layout: "img-below",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_45b3c676755444b196f5845b23232543~mv2.png/v1/fill/w_588,h_328,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202021-06-15%20154122.png",
            ],
          },
          {
            title: "In-Water Testing & Simulation",
            icon: IconSubmarine,
            content: `With the COVID pandemic limiting in-person pool testing, we used simulated environments to provide proof-of-concepts for many of our algorithms. When we were able to test at our facility, we created formalized plans to ensure we used our time optimally.`,
            layout: "img-left",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_a10d84e1513d4de6b4eb41d974ce225b~mv2.jpg/v1/fill/w_365,h_239,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Sub-5.jpg",
            ],
          },
        ],
      },
    },
  },
  erie: {
    title: "Erie",
    year: "2022",
    hero: "/technical/erie.jpg",
    description: `Erie was designed to robust and reliable, overcoming the faults of our previous AUV. This year's focus was mainly focused on making the vehicle easy to use and control. It detects objects within visual distance using our computer vision models, which locate tasks to execute.    Erie is named after the great lake Erie, a body of water that borders the southeast side of state of Michigan. This name came about as a continuation of our water theme, fitting for a submarine.    This page overviews Erie's mechanical, electrical, and software subsystems. Special thanks to all of our sponsors, advisors, and supporters that helped bring Erie to life.`,
    technical: {
      mechanical: {
        title: "Mechanical",
        specs: [
          {
            title: "Vehicle Dimensions",
            value: "25 LBS L24” x W24” x H9”",
            icon: IconDimensions,
          },
          {
            title: "Degrees of Freedom",
            value: "6 (X, Y, Z, Roll, Yaw, Pitch)",
            icon: IconRotate360,
          },
          {
            title: "Propulsion System",
            value: "8 BlueRobotics T2000 Thrusters",
            icon: IconPropeller,
          },
          {
            title: "Battery",
            value: "BlueRobotics Lithium-ion (14.8V, 15.6Ah)",
            icon: IconBatteryAutomotive,
          },
          {
            title: "Waterproof Connectors",
            value: "BlueRobotics Potted Cable Penetrators",
            icon: IconPlugConnected,
          },
        ],
      },
      software: {
        title: "Software",
        specs: [
          {
            title: "Central Processing Unit",
            value:
              "Nvidia Jetson Nano (Quad-core ARM A57 @ 1.43 Ghz, 4gb RAM)    Raspberry Pi 3B (1.4Ghz, 65-bit quad-core, 1Gb RAM)",
            icon: IconCpu,
          },
          {
            title: "Vision System",
            value: "Stereolabs ZED2",
            icon: IconStereoGlasses,
          },
          {
            title: "Navigation System",
            value: "Pixhawk PX 4",
            icon: IconRoute,
          },
          {
            title: "Software Architecture",
            value: "tinyYOLOv5, OpenCV",
            icon: IconGeometry,
          },
        ],
      },
    },
    media: {
      videos: [
        {
          title: "Competition Strategy Video",
          url: "https://michiganrobosub.com",
        },
      ],
      report: "https://michiganrobosub.com",
    },
    details: {
      mechanical: {
        title: "Mechanical",
        overview: `Our new submarine design was informed by the lessons learned from testing our previous AUV. The two most important aspect that we focused on leak prevention and ease of use. Much of our focus was dedicated to the main hull structure of the vehicle, to develop a more reliable system that can be used for testing in years to come. Easing of COVID-19 restrictions also allowed us to make a more ambitious, customized design.`,
        components: [
          {
            title: "Main Hull",
            icon: IconPropeller,
            content: `Our main hull is make out of a single piece of milled 6060 aluminum. Manufacturing the component all in one piece reduced the locations in which leaking could occur. The front contains an acrylic port for the stereo camera to see through, and the top also has a clear viewing window for monitoring of the electronics. The electronics can be accessed by opening the lid that is on a set of hinges. These electronics can communicate with components on the outside of the vehicle through penetrators that are mounted on the bottom of the hull. The bottom of the hull also has a couple of hole into which our bottom plate is attached. The bottom plate allows us to add any addition manipulators or attachments, without needing to change the main hull.`,
            layout: "img-right",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_9bcc0774229e4d42b955b8b5bca2a9e5~mv2.png/v1/fill/w_291,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sub1_PNG.png",
              "https://static.wixstatic.com/media/d0cbf8_c528f57a3fc841988e2c00d49fd07921~mv2.png/v1/fill/w_281,h_182,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_3471_HEIC.png",
            ],
          },
          {
            title: "Thrusters",
            icon: IconPropeller,
            content: `Our previous AUV, Huron, only allowed for five degrees of freedom, so this design has two addition thrusters, for a total of eight T200 thrusters from BlueRobotics. This allow for all six degrees of freedom, making the vehicle more easy to manipulate. The software subteam developed their code based on the eight thruster configuration, avalible on ArduSub.`,
            layout: "img-left",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_67f293601d5041379ffe1b373abe0211~mv2.jpg/v1/fill/w_348,h_239,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Thruster_JPG.jpg",
            ],
          },
          {
            title: "Electronics Chassis",
            icon: IconCpu,
            content: `The electronics chassis is a laser cut, flat acrylic plate. It is cut in order to perfectly fit into the main hull, and it attached with 8 easily accessible screws. This approach allows for all of the electronics to lay on the chassis in a single layer. In addition, all of the electronics are attached with velcro, so they can be easily rearranged or replaced. The electronics chassis design for our previous AUV was very difficult to access, which wasted vital in-water testing time, as the software team tried to debug software and hardware issues.`,
            layout: "img-right",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_6f7908724be948a5ad9972f1af936a8d~mv2.png/v1/fill/w_355,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202022-06-11%20162125.png",
            ],
          },
          {
            title: "Sealing Mechanism",
            icon: IconSticker,
            content: `Our submarine from last year had a lot of issue with leaking, especially around the camera part. In the past, we used epoxy in order to seal these areas, but this year, we transitioned to using o-rings, which are more reliable. Both our camera port and top viewing window utilized this new sealing mechanism. We designed the windows to consist of two metal plates sandwiching the acrylic window, with two o-rings sealing the area between the top metal plate and the acrylic.`,
            layout: "text-only",
          },
        ],
      },
      software: {
        title: "Software/Electrical",
        overview: `This year, extensive in-person testing has helped the team validate many of our logic and algorithms that are key to our AUV's performance. In addition, in-water testing has helped gather training data to improve our machine learning models and image detection. `,
        components: [
          {
            title: "Architecture",
            icon: IconGeometry,
            content: `Our system utilizes the Robot Operating System (ROS) framework to facilitate communication between sensors and our navigational algorithms. The largest development to our architecture was the adoption of the state machine pattern. In this pattern, a given ROS node can have some set of states, each with some distinct behavior, and transitions between these states. By breaking the task into distinct phases, we are better able to debug and reason about the robot's behavior. Previously we had a designated ROS node which started each task individually, but we found that this paradigm made it difficult to assess when a task had been successfully completed and when to move onto the next task. This adoption of a state machine also serves as a framework for approaching more complex tasks in the future as it allows for the AUV to re-attempt tasks. The sub utilizes two computers - a Raspberry Pi for calculations, navigation logic, and communication with our PixHawk motor controller, and an Nvidia Jetson Nano (with its embedded GPU) for image processing and computer vision.`,
            layout: "img-below",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_1c32f30bef604b7abeb67d22c85704bc~mv2.png/v1/fill/w_835,h_470,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Fall%20Design%20Review%202021.png",
            ],
          },
          {
            title: "Navigation",
            icon: IconRoute,
            content: `Our sub primarily navigates the competition course with the images taken from our stereo camera. We also have a bottom camera, which is utilized for tracking the path markers and moving to the next task. To avoid the complexity of absolute localization with respect to the environment, we apply computer vision techniques to our camera input to constantly reassess our position relative to our next task. For the surfacing task, our navigation is augmented by the use of a hydrophone array under the belly of the sub, allowing for location of the task’s acoustic pinger.`,
            layout: "text-only",
          },
          {
            title: "Stereo Vision",
            icon: IconStereoGlasses,
            content: `We have continued to use the same stereo camera from out last robot. The ZED2 works well for the team since it was compatible with ROS and had other integrated features that would be useful for us. In addition, it provides additional information and detail about the surrounding that would not be provided by using a traditional camera. `,
            layout: "img-below",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_9e8b79365d33430a88cdda7ebd106b5b~mv2.jpg/v1/fill/w_425,h_146,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/zed-2-front.jpg",
            ],
          },
          {
            title: "Computer Vision/Machine Learning",
            icon: IconAffiliate,
            content: `This past year we made significant advancements with our deep-learning based object detection systems. We upgraded to the newly released YOLOv5 (You Only Look Once version 5) from the now deprecated Tiny YOLOv3 and implemented real-time detection for multiple different objects. Upgrading to the newer version, along with refactoring the code that analyzes the model's output, allowed us to increase this frame rate to around 5 images per second. \n\nAnother reason we upgraded to YOLOv5 this year is that is utilizes the PyTorch framework instead of a framework called Darknet. With this change, we now utilize a service called the Great Lakes Computing Cluster for all of the computational power used generating the model. Access to this service was granted from being a University of Michigan group, and it allows us to abstract away the architecture we train on and get our resulting model in a fraction of the time. \n\nAn additional important change we implemented was the ability to detect multiple classes of objects. We needed to vastly expand our data set to achieve this, adding images for new objects. Continuing to expand our data set into thousands of images per object type is still a goal for the future, as our model will perform well in different environments and will be able to detect better from all sorts of angles.`,
            layout: "img-right",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_d0c23025de214671bc19a3c2e8850cf2~mv2.png/v1/fill/w_366,h_201,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/05162021_672_376_245.png",
              "https://static.wixstatic.com/media/d0cbf8_ea0fc52dc69b4602a2c3704002f40762~mv2.png/v1/fill/w_366,h_201,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11222021_672_376_81.png",
              "https://static.wixstatic.com/media/d0cbf8_89a2b0f695914eb6a2738bd87ab77492~mv2.png/v1/fill/w_366,h_201,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11222021_672_376_477.png",
            ],
          },
          {
            title: "In-Water Testing & Simulation",
            icon: IconSubmarine,
            content: `Our testing was mainly done in-water, at the Marine Hydrodynamics Lab, and occasionally in the Ford Robotics Building on the University of Michigan Campus. The team was only able to test the submarine about one day a week, so tests plans were made to promote successful use of time. Testing included optimizing in-water stability, testing machine learning algorithms, and collecting data to use for training algorithms.    Docker images were developed to be able to test the logic of the software off-board the AUV. Software was also tested in Unity simulations, that included to-scale competition object models. `,
            layout: "img-left",
            media: [
              "https://static.wixstatic.com/media/d0cbf8_b28e1128bec3493cb8c6744bc7c9e6fb~mv2.png/v1/fill/w_365,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202022-06-12%20101536.png",
              "https://static.wixstatic.com/media/d0cbf8_37a0238cac3744a38c7ba2540d8a33f1~mv2.png/v1/fill/w_365,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/unity.png",
            ],
          },
        ],
      },
    },
  },
};

export interface VehiclesData {
  [key: string]: Vehicle;
}

export interface Vehicle {
  title: string;
  year: string;
  hero: string;
  description: string;
  technical: TechnicalSpecs;
  media: MediaSection;
  details: DetailSection;
}

export interface TechnicalSpecs {
  [key: string]: Spec;
}

export interface Spec {
  title: string;
  specs: {
    title: string;
    value: string;
    icon: Icon;
  }[];
}

export interface DetailSection {
  [key: string]: Detail;
}

export interface Detail {
  title: string;
  overview: string;
  components: DetailComponent[];
}

export interface DetailComponent {
  title: string;
  icon: Icon;
  content: string;
  layout: "img-left" | "img-right" | "img-below" | "text-only";
  media?: string[];
}

export interface MediaSection {
  videos: {
    title: string;
    url: string;
  }[];
  report: string;
}
