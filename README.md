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
