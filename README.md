# Install Rails
```
rails new app-name
```

# Basic React Install
Install react-rails gme and wire-up via webpacker and Rails pipeline.
Start by [tying Rails and React together](https://github.com/reactjs/react-rails)
```
gem 'webpacker'
gem 'react-rails'
```

then

```
$ bundle install
$ rails webpacker:install       
$ rails webpacker:install:react 
$ rails generate react:install
```

then 

```
<%= javascript_pack_tag 'application' %>
```

then 
```
$ rails g react:component HelloWorld greeting:string
```

stuff into a view
```
<%= react_component("HelloWorld", { greeting: "Hello from react-rails." }) %>
```

# Redux
* We then used [this example](https://github.com/suusan2go/react-rails-redux-sample) to create our first Redux powered React module, except that we deployed it into the app/javascript folder instead of app/assets/javascript. This conforms to default react-rails convention.

Grab some ne
```
yarn add react-redux
yarn add redux
```

    "react-redux": "^6.0.1",
        "redux": "^4.0.1",

# Redux and React Hooks
-pick up here!



# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
