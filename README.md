[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

#Soca

Soca is a responsive administration template built using Yeoman, Grunt, Bower, HTML5, CSS3, JavaScript and Handlebar templating. It was purpose built to be used for [Trado](https://github.com/Jellyfishboy/trado), a lightweight, easy to use e-commerce platform designed for sole traders and SME businesses. However, Soca has been released as an open source template for other developers to utilise in their applications.

[Official site](http://soca.tomdallimore.com/)

[Demo site](http://socademo.tomdallimore.com/)

[Release notes](http://release.tomdallimore.com/projects/soca)

This template is also used with [Trado](http://www.trado.io), a new, lightweight, 
open source e-commerce platform.

##Getting started

For development purposes, this repository requires the use of [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/) in order to run the application.

Grunt is a JavaScript based task runner, for tasks such as unit testing, compilation, uglifying, livereload, serving web pages and many many more. If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 

Bower is a package manager tool (much like [NuGet](http://www.nuget.org/) or [Bundler](http://bundler.io/)) which can manage your third party asset library for you. You can find information on using and installing Bower over at their [github](https://github.com/bower/bower) page.

Furthermore, you will need **npm** for both of these tools to function. You can find a quick and easy installation guide over at the [npm github](https://github.com/npm/npm).

**If you would not like to perform any development and want just the basic template [click here](http://tomdallimore.com/wp-content/uploads/soca.zip)**

##Resolving dependencies

First off, you will need to install the Grunt package dependencies listed in `package.json`:

    npm install

Then you will need to install the Bower asset dependencies, listed in `bower.json`:

    bower install

##Build process

Now we have all our required dependencies, we can start to use the Grunt task runner. To start viewing the application on the Grunt web server, run the following command:

    grunt server

If you would like to create a distribution package of the application, ready for use in your application, run the following command:

    grunt build

This will run through compiling, uglifying, copying the HTML, JavaScript, CSS and Bower dependencies into a folder called `dist` in the root of the application.

##Screenshots

###Desktop
![Tables](https://s3-eu-west-1.amazonaws.com/soca-template/soca-desktop-1.jpg "Tables")  
![Forms](https://s3-eu-west-1.amazonaws.com/soca-template/soca-desktop-2.jpg "Forms")  
![Orders](https://s3-eu-west-1.amazonaws.com/soca-template/soca-desktop-3.jpg "Orders")  

###Mobile
![Tables](https://s3-eu-west-1.amazonaws.com/soca-template/soca-mobile-1.jpg "Tables")
![Tables](https://s3-eu-west-1.amazonaws.com/soca-template/soca-mobile-2.jpg "Forms")

## Versioning

Soca follows Semantic Versioning 2.0 as defined at
<http://semver.org>.

##How to contribute

* Fork the project
* Create your feature or bug fix
* Commit (do not change version or history)
* Send a pull request against the *master* branch

##Credits
[Bootstrap](http://getbootstrap.com/) - JS support for tooltips, modals and dropdowns   
[Font Awesome](http://fortawesome.github.com/Font-Awesome/) - Iconography   
[Icomoon](http://icomoon.io/) - Iconography     
[Tim Schlechter](https://github.com/TimSchlechter/bootstrap-tagsinput) - Tag input plugin   
[Bootstrap-datepicker](http://www.eyecon.ro/bootstrap-datepicker/) - Datepicker plugin

##Copyright
Copyright (c) 2014 [Tom Dallimore](http://www.tomdallimore.com) ([@tom_dallimore](http://twitter.com/tom_dallimore))  
Licenced under the MIT licence.



