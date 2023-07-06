# Project: Where Can I Work Today
#Team Mac
## Project description

This project is about developing an application for people to find places to work in case of electricity or internet supply interruptions. The app will use public APIs and crowd-sourced data from users to find suitable locations with basic resources for working, such as electricity availability, connectivity, collaboration space, conducive atmosphere, and cost. The app will cater to remote workers and students, enabling them to find suitable locations, let others know their location, find an accountability partner, and grow their network. The app will also benefit remote workplaces as it would let businesses register themselves as a remote-work option and inform their customers of service issues. Users of the app could include students in the Explore Academy, employees of Explore, external students, and external working professionals.



 *Relevant external links*
* Notion - https://www.notion.so/explore-ai/WorkCation-App-1c3c394a7ba14beca64abacb8b569875
* S3 bucket - https://2207-19-where-can-i-work-today-app.s3.eu-west-1.amazonaws.com/WorkCation_Finder_App/
* White paper - https://my.visme.co/view/mx1odovn-workcation-app

## Team Details

Members | Role | Email
----------- | ----------- | -----------
[1. Alaine Tobias ](https://github.com/Alaine911 ) | Admin/DataScience | ladyjah911@gmail.com
[2. Chima Enyeribe ](https://github.com/JasperZeroes) | Team Lead/Data Science | jasperobed@gmail.com
[3. Elizabeth Olorunleke ](https://github.com/qween-beth) | Admin/DataScience | elizabethoedwards.io@gmail.com
[4. Jaco Venter ](https://github.com/certyuashuhs) | Team lead/Data Engineer | barendjacobus.venter@gmail.com

## Environment

It's highly recommended to use a virtual environment for this project, there are many ways to do this,
below we have provided one example of how this can be achieved.

### Setup

```bash
# make sure your pip in your base Python installation is up-to-date
python3 -m pip install -U pip
# install the virtualenv package
python3 -m pip install virtualenv
```

### Create the virtual environment - also typically only run when needed

```bash
# create a virtual environment in this directory called '.venv'if you used option (a)  or 'venv' if option (b)
(a). python3 -m venv .venv # OR
(b)Python -m virtualenv venv
# you should now see the folder `.venv` or `venv` in your repo
```

### This is how you activate the virtual environment in a terminal and install the project dependencies

```bash
# activate the virtual environment
(a) source .venv/bin/activate #OR
(b) source ./venv/Scripts/activate
# install the requirements for this project
pip install -r requirements.txt
```

### Running the application
To run the Flask application, navigate to the src directory and run the run.py script as follows:

```bash
python run.py
```
This will start the Flask development server, and you can access the application by visiting http://localhost:5000 in your web browser.




## Project Organisation

```ascii
├── LICENSE            <- Contains information about the legal terms and conditions under which
|                         the code can be used.
|
├── README.md          <- The top-level README for developers using this project.
│
├── docs               <- Use markdown. If/when the project becomes more complex consider migrating
|                         to something like pdoc or sphinx depending on the nature of the project.
│
├── requirements.txt   <- The requirements file for reproducing the environment.
|
├── src                <- Source code. Refactor clean, re-usable code here.
│   │
│   ├── data           <- Separate your code base into logical groups, e.g. data, features, models, visualisation, etc.
│   │   └── make_dataset.py
│   └── ...
|
├── tests              <- Unit tests. Filename should start with "test_".
    └── test_make_dataset.py
```
