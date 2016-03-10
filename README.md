### webpack-react-boilerplate

###Usage

```
npm install
npm start
```

__webpack-dev-server__ with  __Hot Module Replacement__ (HMR) configuration.

__HTML5 history api__ gives the ability to modify a website's URL without a full page refresh.  

__sourcemaps enabled__ but you will aslo need to enable source maps in your browser for better debuggability.

[link for chrome](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps)

__npm-install-webpack-plugin__ saves you from typing `npm install...` every time.
this plugin detects the missing packages as you require them in your file, and automatically installs and saves them in package.json

### babel cofiguration contains :

* babel-plugin-array-includes
```
Replaces arr.includes(val) with arr.indexOf(val) >= 0.
```

* babel-plugin-syntax-class-properties

Allow parsing of class properties.
  
* babel-plugin-syntax-decorators

Allow parsing of decorators.
  
* babel-plugin-syntax-object-rest-spread

Allow parsing of object rest/spread 
```
const {a, b, ...props} = this.props
```
* babel-plugin-transform-class-properties
  
* babel-plugin-transform-decorators-legacy

to replicate the old decorator behavior from Babel 5
  
* babel-plugin-transform-object-assign
Replace Object.assign with an inline helper.
 
*babel-plugin-transform-object-rest-spread
Compile object rest and spread to ES5
  
### Linter
Extends from [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) configuration.

### Resources
[survivejs](http://survivejs.com/)
