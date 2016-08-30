# Cash ~ Money ~ Masheen #

## *A DOM manipulation library for the masses! Cash ~ Money ~ Masheen uses vanilla Javascript and the Native DOM API to allow library users to manipulate DOM elements, handle events, and make AJAX requests.*

### $l(selector)
  - if the selector is a string and starts with a ".", uses document.getElementByClassName
  - if the selector is a string and starts with a "#", uses document.getElementById
  - if the selector is a string and neither a "." or a "#" uses querySelectorAll

### $l.bjax(options)
  - $l makes a BJAX request.
  - for any key/value pair in the optional options object argument, the corresponding key/value pair in the default options object is replaced. The final object is sent as data in the AJAX request.

###.html()
  - .html() returns the first node in DOMCollection's innerHTML
  - .html(string) replaces all HTMElz innerHTML with string value

###.empty()
  - .empty() sets the innHTML to an empty string.

###.append(collection)
  - adds the otterHTML of each node in the collection arg to the innerHTML of every node in HTMLElz

###.attr(attribute)
  - .attr(attribute) returns the value of the specified attribute of the first node in HTMElz

  - .attr(attribute, value) sets the value of the specified attribute

###.addClass(className)
  - adds class className to all of the elements in HTMElz

###.removeClass(className)
  - removes class className from all of the elements in HTMElz

###.children()
  - returns all childNodes of the specified element

###.parent()
  - returns the parentNode of the specified element.

### .find(selector)
  - returns new instance of the DOMNodeCollection containing all the descendants of the selected elements that match selector

### .remove()
  - removes elements and all child elements from the DOM

### .on(event, callback)
  - adds an event listener of the event type, and calls the callback when the event is triggered
