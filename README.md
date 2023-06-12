<div align="center">
    <h1 align="center">Robosub Website</h1>
</div>

## About The Project

[![Robosub Screen Shot][project-screenshot]](https://michiganrobosub.com/)

This website showcases the Michigan Robosub team and its members. It also provides information about the team and its history. The website is built using ReactJS and Nextjs.

## Getting Started

First time setup:

1. If you are already using nvm (node version maanger)

Use the following command to set your node version

```bash
nvm use
```

If you aren't using nvm, you should, or you can install Node.js 18.12.1 from https://nodejs.org/en/. Just make sure you uninstall any existing node installations first.

1. Install required packages

All you have to do is run this command inside the project directory

```bash
npm install
```

That should be all the setup you need.

## Running the service

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Then, open your localhost at port 3000

http://localhost:3000/

(Highly recommend the Comment Anchors extension for VSCode)

## Deployment

Production site at https://robosub-website.vercel.app/

Deployed using Vercel

Get environment variables locally `vercel env pull .env.local`
Run `vercel --prod`

## Tech Stack
Using ReactJS, Nextjs

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

[project-screenshot]: images/RobosubPreview.png