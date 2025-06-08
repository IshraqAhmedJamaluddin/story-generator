# AI Story Generator - Student Project

This is an educational project where you'll build a React application that generates stories using AI. The project uses React, Material-UI, and the OpenAI API.

## Learning Objectives
- Working with React and TypeScript
- Managing state in React applications
- Making API calls to external services
- Handling user input and form validation
- Implementing text-to-speech functionality
- Using Material-UI components

## Prerequisites
- Node.js and npm installed
- Basic understanding of React and TypeScript
- OpenAI API key (you'll need to sign up at https://openai.com)

## Setup Instructions
1. Clone this repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory
4. Add your OpenAI API key to the `.env` file:
   ```
   VITE_OPENAI_API_KEY=your_api_key_here
   ```
5. Run `npm run dev` to start the development server

## Tasks to Complete

### 1. Define the Story Interface
- Open `src/components/StoryGenerator.tsx`
- Find the Story interface
- Add the required properties: characters, setting, and plot (all strings)

### 2. Set Up State Management
- Implement the state variables using useState
- You'll need state for:
  - prompt (string)
  - story (Story | null)
  - loading (boolean)
  - error (string)

### 3. Implement the generateStory Function
- Add input validation
- Set loading state while generating
- Make an API call to OpenAI
- Parse the response
- Update the story state
- Handle any errors that occur

### 4. Add Text-to-Speech Feature
- Implement the readStoryAloud function
- Use the Web Speech API
- Make sure it reads all parts of the story

### 5. Create the UI Components
- Build the interface using Material-UI components
- Add a title
- Create an input field for the prompt
- Add a generate button
- Display error messages
- Show the generated story in a structured format

### 6. Customize Browser Tab
- Change the page title to "AI Story Generator"
- Update the favicon to a relevant story/book icon
- Modify the index.html file in the public directory

## Hints
- Look for TODO comments in the code for specific guidance
- Check the Material-UI documentation for component usage
- Test the application frequently as you implement each feature
- Use console.log for debugging
- Pay attention to TypeScript errors

## Bonus Challenges
1. Add a loading animation while generating the story
2. Implement a history of generated stories
3. Add the ability to save favorite stories
4. Create a theme switcher (light/dark mode)
5. Add more customization options for the story generation

## Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Material-UI Documentation](https://mui.com/getting-started/usage/)
- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Web Speech API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

Good luck with your project! Remember to commit your changes regularly and ask for help if you get stuck.

<div align="center">
    <h2>⚜️ V I T E &nbsp; D E P L O Y ⚜️</h2>
</div>

<div align="center">
    <h4>Follow the steps below to deploy your React application on GitHub.</h4>
    <a href="https://www.youtube.com/watch?v=XhoWXhyuW_I">
        <img src="https://img.shields.io/badge/Youtube_Video%20-%0A66C2.svg?&style=for-the-badge&logo=YouTube&logoColor=FF0000&color=282828" />
    </a>
</div>

<br />

#### 01. Create a vite react app
```npm
npm create vite@latest
```

#### 02. Create a new repository on GitHub and initialize GIT
```git
git init 
git add . 
git commit -m "add: initial files" 
git branch -M main 
git remote add origin https://github.com/[USER]/[REPO_NAME] 
git push -u origin main
```

#### 03. Setup base in *vite.config*
```js
base: "/[REPO_NAME]/"
```

#### 04. Create ./github/workflows/deploy.yml
> [!WARNING]
> Create the file at `.github/workflows/deploy.yml` in your repository. The workflow file must be precise - check the [workflow file in this repository](https://github.com/ErickKS/vite-deploy/blob/main/.github/workflows/deploy.yml) for reference.

#### 05. Push to GitHub
```git
git add . 
git commit -m "add: deploy workflow" 
git push
```

#### 06. Active workflow (GitHub)
```
Config > Actions > General > Workflow permissions > Read and Write permissions 
```
```
Actions > failed deploy > re-run-job failed jobs 
```
```
Settings > Pages > Build and deployment > Source > Select "GitHub Actions"
```

#### 07. Set up OpenAI API Key
To securely use the OpenAI API in your deployment:

1. Go to your GitHub repository
2. Click on "Settings" tab
3. In the left sidebar, click on "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Name: `OPENAI_API_KEY`
6. Value: Your OpenAI API key
7. Click "Add secret"

The API key will be automatically available in your application as `VITE_OPENAI_API_KEY`.

## 🛠 Helper

#### > For code changes
Whenever you push to GitHub, it will deploy automatically.
```git
git add . 
git commit -m "fix: some bug" 
git push
```

#### > Fixing the 404 page error on routes.
Watch my video on YouTube or check my repository.

<a href="https://youtu.be/uEEj2c3_ydg?si=XiUEL9h1WUmfjtkt">
    <img src="https://img.shields.io/badge/Video%20-%0A66C2.svg?&style=for-the-badge&logo=YouTube&logoColor=FF0000&color=282828" />
</a>
<a href="https://github.com/ErickKS/vite-react-router">
    <img src="https://img.shields.io/badge/Repository%20-%0A66C2.svg?&style=for-the-badge&logo=GitHub&logoColor=FFFFFF&color=282828" />
</a>

<br/>

#### > Do you want to automate the project setup process ( `.yml` and `vite.config` )?
To prevent possible errors in the deploy process, check out this pull request:

<a href="https://github.com/ErickKS/vite-deploy/pull/1">
    <img src="https://img.shields.io/badge/Pull_Request%20-%0A66C2.svg?&style=for-the-badge&logo=GitHub&logoColor=FFFFFF&color=282828" />
</a>
