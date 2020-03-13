# Puppies Fetch Practice!!

Puppies are so cool. 🐶🥺

Anyway, what we have here is a database of incredible puppies (especially Neikko 🐩). 

We're going to practice making `fetch` calls against this database. Below are some discussion questions about fetch. In your groups, try and answer each questions. You are free to refer to labs but are **highly encouraged** to look up other documentation as well to come up with responses.

![puppies!!!!!🐶](assets/images/puppies.gif)

## The API

Instead of actually accessing the data from a remote API, this activity uses a package called [json-server](https://github.com/typicode/json-server) to create a fake API for development and testing.

It is very easy to set-up.

1. Run the command `npm install -g json-server` in the command line from this directory

2. Run  `json-server --watch db.json`

That's it. You will have a server running on `localhost:3000` that serves the JSON data contained in the `db.json` file.

*Troubleshooting: If this fails, be sure you don't already have something running on port 3000*

>**NOTE:** json-server provides us with all of the conventional RESTful routes for all CRUD actions. You can read more about json-server in its [docs](https://github.com/typicode/json-server#routes). For more help with RESTful routes, take a look at [restular.com](http://www.restular.com/).

## Discussion Questions

For each question, put your answer in the space provided. It is important every member of your group understands the answer you provide.

*You can test your answers by putting them in the `index.js` file and running it in the browser!*

1. In the space below, fill out the blanks to complete a fetch request to get all the dogs out of the database and print the response to the console.

```javascript
fetch('http://localhost:3000/puppies') // api link
.then(resp => resp.json()) // getting the actual file from the API (possibly parse)
.then(json => console.log(json)); // gives an array of the data
```

2. In the request above, what does `fetch` return? 

```
returns the object that represents what the data source sent back

```

3. In the request above, what is `.then`? What does it return?

```
first .then - returns the actual content
second .then - returns an array usable for DOM manipulation

```

4. In the space below, provide the fetch request needed to get the dog with the id of 4 and print the response to the console.

```javascript
fetch('http://localhost:3000/puppies') 
.then(resp => resp.json()) 
.then(json => console.log(json[4]));

```

5. How could you change the code above to print the following sentence to the console?

>My dog is a {dog's breed} named {dog's name}. They are {dog's age} months old and they are pretty {dog's personality}.

```javascript
   fetch("http://localhost:3000/puppies") 
    .then(resp => resp.json()) 
    .then(json => console.log(`My dog is a ${json[4].breed} named ${json[4].name}. They are ${json[4].ageInMonths} months old and they are pretty ${json[4].personality}.`));


```

6. Turns out we got one of the dog's breeds incorrect. Fill in the blanks below to change the breed for the dog with the id of 2 and then print the response to the console.

```javascript
fetch("http://localhost:3000/_______", {
  method: _______,
  headers: {
    _________: ________,
    _________: ________
  },
  body: JSON.stringify(_______)
})
.then(________)
.then(data => {
  // your code here
})
```

7. What does `JSON.stringify` do in the fetch request above?

```
```

8. Fill in the blanks below to add an entirely new dog to our database and then print the resoponse to the console.

```javascript
fetch("_______", {
  // your code here
})
.then(________)
.then(data => {
  // your code here
})
```

9. Alter the previous fetch request so that it renders the following HTML to the page after creating the new dog.

```html
<div>
  <img alt='' src="{dog image}" />
  <h2>{dog's name}</h2>
  <p>{dog's breed}</p>
</div>
```

10. Write a method named `removePuppy` that will delete a dog from the database when it is invoked.

```javascript

```

11. Write the javascript code to render the following form to the page. The user should be able to enter a dog id into the number field and when they click submit, the dog with that id should be removed from the database using the function your wrote above.

```html
<form>
  <label>Puppy ID: </label>
  <input type="number" name="id">
  <input type="submit" value="Remove Puppy">
</form>
```

```javascript

```

12. Change the form and the corresponding javascript code so that instead of providing an id, a user can enter a dog's name to remove it from the database. What extra steps do you have to take?

```javascript

```

13. Write the javascript to get all the puppies from the database and render their images on the page because looking at a bunch of puppies is the best way to end this assignment. ¯\\_(ツ)_/¯

```javascript

```