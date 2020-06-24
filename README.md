# backend


BELOW IS A TABLE OF ENDPOINTS FOR MY API

| REST Method | API url  | required keys | returned values | token required? |
| ------------- | ------------- | ------------- | ------------- |  ------------- |
| POST | api/auth/register  | username, email, password  | email, username | no |
| POST | api/auth/login  | email, password  | username, email, token | no |
| POST | api/auth/logout  |   |  | yes |
| GET | api/strains  |   | Array that displays the strain, type, effect, flavor, description  | yes |
| POST | api/strains  | strain, type, effect, flavor, description  | id, strain, type, effect, flavor, description | yes |
| GET | api/strains/:strain_id |   | Array that displays the id, strain, type, effect, flavor, description  | yes |