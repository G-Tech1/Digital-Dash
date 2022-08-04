7/15
- Together as a team we did research on if it is possible to access client-side network performance data from our frontend. After doing research we found out that for security reasons we won't be able to access system settings from our frontend. We discussed what this would mean for our mvp
7/18
 - I came up with the idea to build cli tools for each performance setting we want to analiyze and make the tools available for users with an account on our website. This idea is dependent on whether or not we would be able to send info collected in our cli tool back to our main website. I built a speed test using stack overflow and youtube tutorials however it did not perform How I wanted it to so I am going to refine it for accuracy. Together as a group we built an extremely simple cli tool and made a successful post request to our main website thus proving that our idea would be able to be implemented.

7/19
 - I added bootstrap to our react frontend and made design changes. I also redesigned our frontend speed test for better accuracy.


7/20 
 - I created a datalist.js file in react for to display our user's session data once it has been recorded.

7/21
 - Had some problems implementing the djwto authentication so I spent alot of time troubleshooting that. Also did research as to how we should implement a downloadable file on our react page.

7/22
 - Cleaned up my code. Hardened the application using localStorage variables to store user information. Looked into using memory instead of localStorage.

7/25
 - Started working on our product page. Began working on a feature to update sessiondata instances if one has already been created for the day, and create a new one if one has not been created for the day. this way total session data can be analyzed per day. 

 7/26
 - The team ran into some issues with settin up our external volume and database most of the day was spent trying to troubleshoot this issue.

 7/27
- Troubleshooting issues with addition of user foriegnkey model. Ran into issues of having no current instances of user. Will continue deeper testing when site is up and running in full.
- will create user on browser then run data mining locally to test
- adjusted session data model, removed auto now add for date
- added date.today() function into data mining. added user as well. Still need debugging, will continue.

7/28
- Worked on making our cli bandwidth monitor downloadable on our UI. Did research on the topic to find a solution, but nothing has worked yet, will continue to try. Cleaned up the front end, added CORS and fixed a few bugs.

8/1
- Created a zip file with virtual env and requirements text for our bandwidth monitor. Successfully downloaded the zip file from our UI. MVP features have been completed.

8/4
- Created Unit tests for our features.