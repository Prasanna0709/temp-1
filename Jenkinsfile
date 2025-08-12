pipeline{
    agent any

    environment{
        CONTAINER_NAME = "Frontend-App-1-Container"
    }


    stages{

        stage ('checkout code'){
            steps{
                checkout scm
            }
        }

        stage ('docker compose up file excution'){
            steps{
                sh 'docker compose up -d'
            }
        }
    }
}