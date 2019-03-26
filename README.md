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

 1) Grab some necessary packages.
```
yarn add react-redux
yarn add redux
```

2) Suck in a basic counter app built for React/Redux

# Redux and React Hooks
-[pick up here](https://reactjs.org/docs/hooks-custom.html#useyourimagination) with useReducer to support the funtionality.


# Dockerize


# Deploy to Heroku
