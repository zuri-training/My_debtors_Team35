# stuDebt

## Background 💡
The rate at which debt is killing the school business is quite alarming, and most especially the private schools.  A lot of cases have been recorded, whereby a student owes a school and after a while the student disappears to another school, without reconciling his/her debts.

## Table of Contents 📚
* [Background](#background)
* [About the Project](#about-the-project)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Product Specification](#product-specialization)
* [Usage](#usage)
* [Project Status](#project-status)
* [Collaboration](#collaboration)
* [Roadmap](#roadmap)
* [Contributors](#contributors)
* [Documentation](#documentation)
* [Acknowledgements](#acknowledgements)

## About the Project 📖
This stuDebt platform is centred on helping schools prevent debtors from registering in another school despite pending debts in the previous school.<br/>
The platform enables schools to upload names of debtors and also check for the debt record of each student before registering the student. <br>
The stuDebt platform also allows students to challenge every debt that they believe is not consistent with the amount they had paid. 

## Technologies Used ✨
This project was created with ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) and the following technologies were used: <br/>
* __Design__<br/>
        ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

* __Frontend__<br/>
      ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
      ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
      ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* __Backend__<br/>
        ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
        ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)

* __API__<br/>
        ![Django REST framework](https://img.shields.io/badge/djangorestframework%20-%23000.svg?&style=for-the-badge&logo=djangorestframework&logoColor=white/)

* __Database__<br/>
        ![PostgreSQL](https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white)


* __Project Management and Version Control__<br/>
        ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Features 🔥
__Unauthenticated users__ - A user that is yet to be registered on our platform
 * The landing page (i.e. the website home page) consists of the following: <br/>
       - The Hero page with a CTA to either “Sign Up” or “Login”, Circulars, FAQs, Contact Us.<br/>
       - Why the platform is beneficial.<br/>
       - Reviews from other proprietor/proprietress.<br/>
       - Newsletter section.<br/>
       - Footer Section.
       
__Authenticated Users__ - A user that has been registered on our platform either as a school or as a student.
 * Registered as a school: <br/>
 Upon registration and verification of the school using her CAC number. The school would be able to do the following:
    - Log in to the website <br/>
    - Update debtors record (i.e. add/remove debtors from her schools debtors list) <br/>
    - School’s Dashboard <br/>
    - Full access to Data <br/>
    - Search for debtors record <br/>
    - Comment on posts <br/>
    - Change password <br/>
    - Help & support <br/>
    - Log out
 * Registered as a student: <br/>
 Upon registration and verification of the student using his/her NIN. The student would be able to do the following:
    - Log in to the website using his/her NIN and password <br/>
    - Access to only his/her profile <br/>
    - Contend his/her debt <br/>
    - Log out 

## Product Specialization ✔️
* Mobile Phones
* Tablets
* Laptops

## Usage 👍
 * Visit the website
 * Surf through basic infromation
 * Sign up
 * Fill registration details
 * Verify email address
 * Proceed to KYC verification
 * Submit required verification documents
 * Get verified
 * Log in
 * Edit profile
 * Full CRUD priviledge
 
 ## Project Status 🚀
Project is : *in progress*

## Collaboration 🤝
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. 
### Getting Started
Setting up project locally is a pretty easy step.

1. Clone the repo
  ```sh
  git clone https://github.com/zuri-training/My_debtors_Team35.git
  ```
2. Move into the project directory
  ```
  cd My_debtors_Team35
  ```
3. Create a virtual environment
  ```
  python -m virtualenv venv 
  ```
4. Activate the virtual environment
  ```
  venv\Scripts\activate
  ```
5. Move into the Backend Directory
  ```
  cd Backend
  ```
6. Install pip dependencies
  ```
  pip install -r requirements.txt
  ```
<br/>
Create a new Postgres Database Using pgAdmin or psql on terminal

Default user: `postgres` 

Set the database name to `studebt_db1`

Create a .env file inside the Backend directory and store `SECRET_KEY=''` and your postgres password `DB_PASSWORD=''` <br/>
7. Move into the studebt directory
   ```
   cd studebt
   ```
8. Make Migrations
  ```
  py manage.py makemigrations
  ```
9. Migrate to Postres Database
  ```
  py manage.py migrate
  ```
10. Create a superuser
   ```
   py manage.py createsuperuser
   ```
11. Run Server
   ```
   py manage.py runserver
   ```
  
## Roadmap 🚧
See the [open issues](https://github.com/zuri-training/My_debtors_Team35/issues) for a list of proposed features (and known issues).



 
