# Digital Dash

* [API design](docs/apis.md)
* [Data model](docs/data-model.md)
* [GHI](docs/ghi.md)
* [Integrations](docs/integrations.md)

A network performance management website that includes a network speed test and a downloadable bandwidth monitor that keeps track of user's data usage(upload and download) as you browse the internet.

## Intended Market

Our application was made for People who want a more interactive display and more detailed result of their internet speed.

## Setup

For Window Users who clone the application and run into a fatal databse error, change CRLF to LF (db/create-multiple-databases.sh)

Also, in order to proceed from cloning the project, creating a volume for the database is necessary. One can do this from creating a volume through docker cli or through the terminal with this command;

docker volume create "dash-data"

This would create a volume named "dash-data" in docker-desktop application. 


## Installation

Installation of the App could be done through our cli tool. 
[Installation](docs/installation.md)


## Authors and acknowledgment

Gilan Serrant
Jacob Gordon
Keenan Nguyen
Kervin Clenance

