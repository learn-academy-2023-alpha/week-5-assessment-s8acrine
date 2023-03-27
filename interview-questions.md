# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?
Your answer: 
    In Ruby, classes can inherit methods from a parent, or superclass. Calling super in a child or subclass calls on the initializer method from the parent class. This allows a subclass to inherit the blueprint that was created in the superclass. For example if you have a superclass Person with default values for age, height, and weight and want to create a subclass Student that will also have values for grade, you can call on super to inherit the instance variables from your super class. 

Researched answer:
    The super keyword in ruby can only be called inside of a method. When super is called, it searches the superclass for a the same name, and calls it. This is often used when initializing new objects of a subclass, where you can call super, which runs the initializer method of the superclass, then you can add more to the initilizer method of the subclass. The super keyword allows for more DRY code, as you can run only the code you need for the subclass, then call super for the code inside the method of the superclass. For example, if you have a class of Car, which has a height, length, width, and weight, then had a subclass of EV, with additional values such as battery capacity, charging speed, and then a seperate subclass of ICE, which would have engine size, fuel efficiency, etc. You wouldn't need to have the height, length, width and weight in each subclass initializer method, you could only put it in the superclass and call it within the subclass.

2. What is a gem?

Your answer: A gem is a package of data used in Ruby applications. The gem install command will install the gem for use in your project. There are many many gems available and it is best practice to do your research into what gem is required for your project before trying to install a gem. 

Researched answer:

A gem is a prebuilt package of code, documentation of that code, and a 'gemspec' which includes information on the gem version, compatibility, and author. 
Gems are used to share code that is relevant for many different developers. These can include anything from gems such as Rspec, a testing framework to test Ruby Code, or tzinfo, which allows for use of timezone data and timexzone conversions. 

3. What is a relational database? Are there other kinds of databases?

Your answer:
A relational database is a database in which two or more models are linked together through some form of relationship. One of the most common relations is the belongs_to / has_many which allows for items in one model to have more than one items on a seperate model using foreign ID to link items together.

Researched answer:

Relational databases are built by creating mutliple tables of rows and columns, then linking those tables to each other in some way. The connection between tables is the assosciation, and the  choice of  association is one of the bigger decisions in structuring data. There are associations such as has_many  (where an item on a table will have access to many items of a different table) belongs_to (where an item on a table will belong to, or be linked to exactly one item) and many others. Using the proper associations with your data will allow you to build a robust, multidimensional database.

4. What are primary keys? Why are they important?

Your answer: The primary key is a unique identifier given to each item in a database model. It is important as it is the only value that is absolutley unique to the item, regardless of any other value. This allows for unique identification of many items, even if the share many values amongst each other

Researched answer: Primary keys are effectively the 'index' of a database model. They are unchangeable (in normal conditions), and create a consistent link back to the data they represent. They are also used in assosciations in order to match up items from one model to another. If primary keys were changing, or not unique, it would be near impossible to build these types of relational databases. 

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:

POST - create data
GET - read data
PUT - update data
DELETE - delete data


Researched answer:

The HTTP verbs, or methods as they are referred to in the documentation, are a set of methods built in to HTTP. the 5 most commonly used verbs are POST, GET, PUT, PATCH, DELETE. These correspond to Create, read, update, and delete in the data management philosophy. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:
REST stands for representational state transfer. At it's most basic level, RESTful routing is a naming convention used to match the developer actions CRUD with HTTP verbs to create a URL path conventions that make sense for the developer and the user. 

2. Model validations:
Model validations are methods which validate the data to make sure that only data that is useful and fits the model of the database you are creating is saved. This can be anything from checking to make sure a field is not blank to ensuring that a phone number mathes the standard us phone format.

3. Params:
Params are used in rails applications to pass data through to the controller. Data is stored in the params hash. This is similar to props in React applications.

4. ERB:
ERB is an extension that stands for embedded ruby. It is a file that allows developers to code in html while also using ruby code. 

5. API:
API stands for application programming interface. APIs are used to transmit data from one system to another through established methods and protocols. If you guys can be used from anything from transmitting data from one of your websites to another one of your websites to accessing and running code on external third-party websites.