# backend


BELOW IS A TABLE OF ENDPOINTS FOR MY API

| REST Method | API url  | required keys | returned values | token required? |
| ------------- | ------------- | ------------- | ------------- |  ------------- |
| POST | api/auth/register  | username, email, password  | email, username | no |
| POST | api/auth/login  | email, password  | username, email, token | no |
| POST | api/auth/logout  |   |  | yes |
| GET | api/strains  |   | Array that displays the strain, type, effect, flavor, description  | yes |
| POST | api/strains  | strain, type, effect, flavor, description  | id, strain, type, effect, flavor, description | yes |
| DELETE | api/strains/:strain_id |   | Deletes a strain by ID  | yes |
| PUT | api/strains/:strain_id |   | Updates a strain by ID | yes| 