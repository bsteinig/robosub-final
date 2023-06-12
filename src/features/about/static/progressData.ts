export const progressData: ProgressData = {
  video: "https://www.youtube.com/embed/493LPOk3zsc",
  timeline: [
    {
      title: "June 2021",
      items: [
        {
          description:
            "We've received our black anodized parts which in addition to looking really awesome will protect our plates from chlorinated environments.",
          media: {
            images: [
              "https://static.wixstatic.com/media/d0cbf8_1ff40c93557645c6af239f65fc68ae4a~mv2.jpg/v1/fill/w_242,h_182,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4903.jpg",
              "https://static.wixstatic.com/media/d0cbf8_fb4b0b21b0554cdca3fb221a653b2e85~mv2.jpg/v1/fill/w_242,h_182,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4915.jpg",
            ],
          },
        },
        {
          description: `This week, we've been in the new Ford Robotics Building to start shooting our skills video for the 2021 RoboSub competition. Thanks to the LSA department, our Media team has a full professional setup.`,
          media: {
            images: [
              "https://static.wixstatic.com/media/d0cbf8_5541bee0e9184365b09cfbd1610d07f2~mv2.jpg/v1/fill/w_373,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4948%20(1).jpg",
            ],
          },
        },
        {
          description: `Despite the global chip shortage, we've managed to get our hands on some STM32 microcontrollers for some summer R&D projects. Stay tuned for some new custom electronics in 2021 and 2022.`,
          media: {
            images: [
              "https://static.wixstatic.com/media/d0cbf8_807eca9aea894544a2770ccf9a55700c~mv2.jpg/v1/fill/w_374,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4998.jpg",
            ],
          },
        },
      ],
    },
    {
      title: "April 2021",
      items: [
        {
          description: `This week's testing went smoothly at the University of Michigan Marine Hydrodynamics Laboratory, and the team was able to capture some underwater footage in order to train the sub's machine learning.`,
          media: {
            video: [
              "https://video.wixstatic.com/video/d0cbf8_08a16f2b949f46fa99f102976be499ed/480p/mp4/file.mp4",
            ],
          },
        },
        {
          description: `The Robo-sub Mechanical devision was busy 3D printing  an electronics-optimized chassis this week, and the team was able to mount the electronics with a soldering iron. Our team also successfully tested the sub's buoyancy and balance.`,
          media: {
            video: [
              "https://video.wixstatic.com/video/d0cbf8_384b44ab988548c2a24cf6d0e2a0cc0c/480p/mp4/file.mp4",
            ],
          },
        },
      ],
    },
    {
      title: "March 2021",
      items: [
        {
          description: `This week, our mechanical and software teams were busy gathering machine-learning data for the sub models. We also verified that the sub no longer contains any leaks during testing`,
          media: {
            images: [
              "https://static.wixstatic.com/media/d0cbf8_e5b9be3c88ee44619e25c499bf1dcc3c~mv2.gif",
            ],
          },
        },
        {
          description: `Our team’s first custom-printed circuit board will enable us to test our hydrophones by providing amplifiers and filtering for four hydrophones and a four-channel analog to digital conversion chip. This chip will then work to communicate digital audio back to our main computer for analysis.`,
          media: {
            images: [
              "https://static.wixstatic.com/media/d0cbf8_a4c4acfe0cd0404ba8c05fcdaa3c8e96~mv2.jpg/v1/crop/x_924,y_0,w_3136,h_3133/fill/w_204,h_204,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d0cbf8_a4c4acfe0cd0404ba8c05fcdaa3c8e96~mv2.jpg",
              "https://static.wixstatic.com/media/d0cbf8_51ad6d8b2a9348b1b1f1cc6b7aef6572~mv2.jpg/v1/crop/x_211,y_0,w_1200,h_1200/fill/w_203,h_204,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d0cbf8_51ad6d8b2a9348b1b1f1cc6b7aef6572~mv2.jpg",
              "https://static.wixstatic.com/media/d0cbf8_bbe62bbd3c8242e1b8ce65b485fe382f~mv2.jpg/v1/crop/x_571,y_0,w_3261,h_3264/fill/w_204,h_204,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d0cbf8_bbe62bbd3c8242e1b8ce65b485fe382f~mv2.jpg",
              "https://static.wixstatic.com/media/d0cbf8_acf7da805fea4e56afe329f414c7784f~mv2.jpg/v1/crop/x_232,y_126,w_1075,h_1074/fill/w_203,h_204,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d0cbf8_acf7da805fea4e56afe329f414c7784f~mv2.jpg",
            ],
          },
        },
      ],
    },
  ],
};

export interface ProgressData {
  video: string;
  timeline: ProgressGroup[];
}

export interface ProgressGroup {
  title: string;
  items: ProgressItem[];
}

export interface ProgressItem {
  description: string;
  media: {
    images?: string[];
    video?: string[];
  };
}
