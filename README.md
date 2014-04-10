# model

> JavaScript hash model

## Getting Started
Before anything taking its part, you should install [node](http://nodejs.org) and "cortex".

#### Install Node

Visit [http://nodejs.org](http://nodejs.org), download and install the proper version of nodejs.

#### Install Cortex

    # maybe you should use `sudo`
    npm install -g cortex

## Using model In Your Project

First, install 'model' directly with `cortex install` (recommended)

	cortex install model --save

or, you could update your package.json manually

    dependencies: {
        'model': '<version-you-want>'
    }

and install dependencies

	cortex install

Then, use `require` method in your module

    var model = require('model');

Finally, start cortex server

    cortex server

Then cortex will care all the rest.


## API Documentation

### model: constructor
': constructor' means the `module.exports` of module 'model' is a constructor that we should use it with the `new` keyword

	new model(options)

#### options
- options.name {String}



### model.\<method-name\>(arguments)
Means this is a static method of `module.exports`

#### arguments
// arguments description here

### .\<method-name\>(arguments)
Mean this is a method of the instance

#### arguments
// arguments description here