# congress-source

## Philosophy/Intent
With the spectacle that is US Politics and our momentum as a society, there has never been a
more important time to be informed about our politicians. Technology can be used to help
provide transparency and level out the playing field between different groups, and I would
like to see more of this philosophy applied to politics. I built this web application to provide
transparency into who is representing us - fulfilling our own personal needs and desires takes
too much effort to stay fully informed about politics - therefore staying on top of politics
ought to be made easier.

## Congress Source!
![Main Page](http://i63.tinypic.com/2ufbo6x.png "Logo Title Text 1")

### Features
- Search through members of the US Government  
- Filter by Political Party (Currently only supporting the Republicans and Democrats, the parties that the US Government supports)  
- Search by State or Name  
- Responsive Material Design 
- Pagination system  
- Display timer ticking down to when that person's seat is up for election on tap (mobile) or mouseover  

### Responsive Design  
![responsive2](https://cloud.githubusercontent.com/assets/6626818/19016964/a22b287a-87de-11e6-856e-80d1f152eb17.gif)  

I originally wanted to display each member's approval rating along with how long that person is still in office.
Those 2 pieces of information are really interesting when portrayed together. Unfortunately, I was not
able to find a free and good source for individual member's ratings. If you know of any sources for that kind of
data, please contact me at mark.tyneway@gmail.com and I would love to chat!  

### Tech Stack
- React  
- Sass  
- Node/Express  
- MongoDB  

### API
To get data from the database:
```
GET /search
```
Querystrings are used to return the appropriate data  

The search query:  
``/search?query=QUERY_HERE``

To differentiate searching by name or state:  
```/search?searchBy=name``` or ```/search?searchBy=state```  

To add a party filter:  
```/search?party=Republican``` or ```/search?party=Democrat```  

The pagination queries use begin & end:  
``/search?begin=0&end=8``  

Any of the querystrings can be mixed and matched for results

TODO:
Figure out the Dockerfile
Figure out how to build the DB for deployment
I added a /test path that invokes the searchMethods.buildDB()
