1. Navigate to percy.io
2. Login into percy
3. Create new project and copy the percy token
4. Open VSCode IDE
    4.1. Open a terminal and paste the percy token obtained in step 3: $env:PERCY_TOKEN = "d216a7bd506c2c80c5216165dd5dff9a195a254367989e326f4f98f4dee01f03"
    4.2. Initialize a node project: npm init
    4.3. Instal testcafe and percy dependencies:
        4.3.1. npm install testcafe @percy/testcafe
    4.4. Create folder to our tests
    4.5. Create command to run our tests