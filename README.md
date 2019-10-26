# Giffy
🎉🔥🤩 Best Gifs On The Internet 🤩🔥🎉 | [zahinize-giffy.glitch.me](https://zahinize-giffy.glitch.me/)

## Introduction
**Giffy** is a tool that allows you to search, play and download the best GIFs on the internet. It's a big responsibility 😃 so use it wisely!

## Features
- Dark Mode 🌛
- Search GIFs based on keyword 🅰️
- infinite GIFs based on pagination 🌎
- Fast experience ⚡
- Zoom and Pause ⏸️
- Responsive Design 😍
- Space Optimized Grid 💯

## Setup
Do the following steps after cloning this repository.

- Install Dependencies
```bash
npm i
```

- Run production server (default)
```bash
npm start
```

- Run development server
  - Update `HOST_ENV` value in `./configs/config.js` file to `commonConsts.ENVIRONMENT.DEVELOPMENT` like below.
    - `HOST_ENV: commonConsts.ENVIRONMENT.DEVELOPMENT`

```bash
npm run launch
```

- Visit app url on local machine and check it in live action
```bash
App Localhost url: http://localhost:8080/
```

## React Components Architecture
```bash
<ErrorBoundary>
  <Shell>
    <Sidebar>
      <ModeChange>
      <MainContent>
        <Header>
        <Content>
          <SearchGif>
          <Overlay>
            <Searchbar>
            <Grid>
        <Footer>
```
All react components are self-explainable by their name. They are designed to ensure S.R.P. (Single Responsibility Principle) principle, code reusability, code quality and code testability purposes.

## Webpack Learnings
To implement this project in the best way i can, i created [Webpack Learnings](https://github.com/Zahinize/webpack-learnings) to learn and understand core features of Webpack with examples. Check it out if you want to 😃.
