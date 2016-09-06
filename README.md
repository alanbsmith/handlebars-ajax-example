# Handlebars Example
A small, example app for using Handlebars templates with Node/Express and Webpack

### UP & RUNNING
```
npm install
```
```
npm start
```
```
open http://localhost:8080/
```


### WHAT IS HAPPENING??
The rendering logic lives in `src/index.js`. When the document content is loaded, it makes the AJAX call to get the API data, passes it to the appropriate template, and appends it to the corresponding `div` element.
