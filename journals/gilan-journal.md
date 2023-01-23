##### July 11, 2022

- Got the data monitor to start and stop using a timer
- started toying with implementing APIs. Get and Post requests work to some degree
- got the data monitor to run within docker, however since docker is being run within a virtual computer, my local data usage will not be tracked. This is something to pay attention to during future testing.
- When running the app deployed on a browser, im assuming that psutil will be able to track that end-users data usage. something to test.
- I was able to find a number of open source Bandwidth monitors on github. I will post the links. We can study this code and use it as a reference for our project. We can even run their program and get an idea how theirs work within a browser.

##### July 12, 2022

- continued to debug back end code for data miner.
- created front and backend teams
- assisted on front end with react hooks

##### July 13, 2022

- continued to work on react front end
- researched other bandwidth monitor projects fro reference
- study reference projects

##### July 18, 2022

- Able to change MVP to working upload download speed test on homepage
- Able to test creating a local python file that hits API, we can now use CLI method to run data monitor
- Need to research CLI apps
- Need to find a way to send data through API from data miner.py

##### July 19, 2022

- Updated home page for digital dash. speed test has working front end
- continue research CLI apps
- still a way to send data through API from data miner.py. figured out we can send data from a local application to our API.

##### July 20, 2022

- optimized data miner.
- updated API data miner functionality.
- updated yml file to instantly install and start node.
- updated yml file to include new external volume for database use.

##### July 21, 2022

- switched data base from sqlite3 to postgreSQL. Tested to see if data could save in database. Success
- added login functionality with jwt tokens
- tomorrow will start to merge USER with session data model, test posting user/email as an aditional object within data miner.
- Spent a great deal of time working/ troubleshooting and debuggin the YML file. Found new understanding for YML. Made some additions to [[databases]]

##### July 25, 2022

- Researched way to allow users to download CLI files.
- JWT tokens has now been implemented fully with front end and back end.
- need to add Email sent on CLI tool

##### July 26, 2022

- Merging files, sharing back-end information with front end team
- Databases work merging
- Working with front end team in merging YAML file.

##### July 27, 2022

- Troubleshooting issues with addition of user foriegnkey model. Ran into issues of having no current instances of user. Will continue deeper testing when site is up and running in full.
- will create user on browser then run data mining locally to test
- adjusted session data model, removed auto now add for date
- added date.today() function into data mining. added user as well. Still need debugging, will continue.

##### August 2, 2022

- Troubleshooting issues with getting all docker containers to work on windows. Database container kept exiting
- learned windows need to change their EOL settomg from CRLF to LF in order for the files to run appropriately. This issue was prevalent in our create-multiple-databases.sh file.
- ran into a cors issue with allowing cors headers. yet to be resolved.
- started making changes to front end aesthetic.

##### August 3, 2022

- Able to fix cors issue
- edited and updated data_mining.py file
- brand change from giga graph to digital dash
- updated ZIP file to download. Added readme with instructions on how to run the CLI app
- Updated the main page with css. Added bandwidth monitor section and team members section. WPI

##### August 4, 2022

- Finalizing front-end edits. Fixed team section to show linkedin links appropriately.
- Updated the aesthetic of the sign up and login page.
- Research Unit testing and began implementation.
- create a unit test for the data miner app. tests empty user warning.
