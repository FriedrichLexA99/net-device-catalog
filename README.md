# net-device-catalog
This project in currently under improvement. All notes so far have been made for self direction for vision of the project
and education between myself and the CTO that I'm collaborating with this on. 


Catalog using a new API to keep inventory of our product.
Initialize to be a Node.js project. Explore node commands to run and complete project.
Need to initialize JSON package since we are using Node.js.
Using v20 of node. Ours is "long-term supported". These types are great because they guarantee longer terms of stability and supp
Short term supported is on the magnitude of months as opposed to years of support.

Three big things making AWS what it is. 
1. Serverless options - serving customers via AWS Buckets for websites etc

2. Lambda function (AWS Lambda) - Small area of execution that's only billed while running the execution (cloud scale billing).
   One issue with these is that sometimes they'll go into "hibernation". Once reawakened, it needs some time to get back to full 
   speed. This time does get billed along with it's first command/function.

3. What we are using is "Express JS", one of the most popular API frameworks in java ecosystem.


---
04/10/24

1.  REST APIs are a structured pattern that links functions to resources.  The resources are modeled as URI paths, and the functions are modeled as HTTP Verbs (Since REST APIs interact using the HTTP Protocol)
2.  Resources are Hierarchical, with a general pattern of domain/entity/{specificier}
3.  Verbs logically represent transactions, with the main transctions providing CRUD functionality (Create, retrieve, Update, Delete)

GET /inventory
POST /inventory

GET /inventory/{inventoryId}
PUT /inventory/{inventoryId}
DELETE /inventory/{inventoryId}

Next time on DBZ:

- We will do business logic inside modules and show how the interact with server storage. 
- Persist state between API calls
- Show 2 types of DBs. Real-time DB, and relational DB and show pros/cons of each.
- Show how module & API have indirection between them.

Vision-casting:
   Would like to implement K8s into this. Possibly get AWS free devleoper account or Google CP equivalent. 
   Once account is made, could store website on S3 bucket? Maybe using straight up docker orchestration with a bunch of 
   dumb jenkins and react.js stuff would be more fitting though. I want to be able to use containers in this somehow.
   Not sure if the relational DBs can be held inside of a pod. I got a certification related to Red Hat's Openshift using Podman
   so it would be cool to use.

Notes:
   OOP like Python has objects, classes, and then methods (which are just functions of the class)
   Functional programming (like javascript) uses modules that are combinations of variables and functions.