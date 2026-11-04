# CI-CD-with-Jenkins

# Schedule
H */2 * * * every two hours

# Pipeline code
```
pipeline {
    agent any
   
      stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/sveta9669/CI-CD-with-Jenkins.git', branch: 'main'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        
        stage('UI Tests') {
            steps {
                bat 'npm run test:ui'
            }
        }
        
        stage('API Tests') {
            steps {
                bat 'npm run test:api'
            }
        }
    }
}

```

