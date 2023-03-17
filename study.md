<!-- This file is intended as a note-taking tool to help me keep track of everything I am learning about, the tools and strategies I use, as well as
anything else that is important or may be useful at a later point -->





# Study Notes


## Microservices
For this app, I will be utilizing a microservices structure.

Microservies architecture is a structural approach to an app wherein you dissect the app into seperate, independant modules/services that together form a larger whole.

Microservices acrhitecture is used as an alternate approach to Monolithic architecture, wherein apps are built as singular structures hosted on the same server, in contrast to microservices having their services hosted on seperate servers, each with its own database.


### Advantages and Disadvantages
Dividiing an app into smaller components that function independently offer many advantages, including:
- Scalability:
Because each service are seperate and independant, it is easier to scale each component of an app as your userbase grows.
- Upkeep:
With each component seperate, one can assign a developer to each component, making the upkeep of the app overall much easier to maintain.
- Upgradeability:
With components being independant, one can easily add patches, bug fixes and more to an individual component without having to worry that the entire app will collapse, or need to be rewritten.
- Stability
Because each module functions seperate from one another, if one service fails all the other will still function, thus reducing the loss useability.
- Unit Testing:
With each component, one can easily test it's individual functionality.

There are also some disadvantages that might come into play:
- Bug Tracking:
Whilst testing individual components is easier, tracking issues and bugs across the app may prove to be difficult.
- Complexity
Dealiwing with multiple services and modules may introduce difficulty with design, development and deployment.
- Resources
Because each service is deployed, tracked and maintained seperately, it introduces a higher need for resoruces.
- Distributed Systems Issues: 
Microservices are subject to the same issues that all distributed systems face, such as network latency, data consistency, and security concerns.


### Use Case
Microservices architecture is best suited for complex, large-scale applications that require high scalability, flexibility, and resilience.
This is great for something like gaming, where there has to be game logic, player ranking, match making, etc.
Other examples inlude ecommerce and social media websites, financial services, health care, etc.





## Tools Used

### Template Engine
Some basic research showed me that EJS and Handlebars are two very popular template engines used alongside node and express.

Considering that each service in this project returns data in json format, I chose **Handlebars** since it easily works with with json data.

