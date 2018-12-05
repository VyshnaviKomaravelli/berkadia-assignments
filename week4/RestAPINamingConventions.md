NAMING CONVENTIONS OF REST-API:


NAMING CONVENTIONS:
Naming conventions refer to general rules governing names assigned to programming constructs such as variables and methods.
These conventions facilitate readability,and thus improved maintainability of code by enforcing naming consistency across disparate modules

===>NAMING CONVENTIONS OF REST-API:

*Should be Simple
*Should be Intuitive
*Should always be consistent
*Should avoid camel caps as urls are not case sensitive. The norm is to use lower case letters.
*Should use dashes instead of underscores
*While naming an API consider it to be a folder. Follow the naming pattern similar to folder structure
*Use Hierarchy
*Most important point to keep in mind while designing an API is maintaining the version number in the API
  
 ===>Examples of Naming an API

*v1/users — a list of user
*v1/users/1 — user with an ID of 1
*v1/users/1/organizations — the orgs that user belongs to
*v1/organizations — a list of orgs
*v1/organizations/1 — Organization number 1
*v1/organizations/1/users — The users for that organization

eg:
http://api.example.com/user-management/users/{id}
http://api.example.com/user-management/users/admin
