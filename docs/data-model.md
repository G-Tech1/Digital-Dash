# Data Models

## User
| Name | Type | Unique | Optional |
| first_name | string | no | no |
| last_name | string | no  no |
| email | string | yes | no |
| password | password | no | no |
| username | username | yes | no |


## Session Data

| Name | Type | Unique | Optional |
| user | reference to User model | no | no |
| day | Date Time Field | no | no |
| session_time | Positive Int. Field | no | yes | 
| data_sent | Float Field | no | no |
| data_received | Float Field | no | no |
| data_total | Float Field | no | no |



