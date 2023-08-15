/*
In JavaScript, an event is a specific action or occurrence that takes place within a web page or web application. Events are used to trigger JavaScript code to respond to user interactions or other changes in the environment. These interactions could include things like clicking a button, moving the mouse, pressing a key, resizing the window, and more.

JavaScript provides a way to handle events through event listeners. An event listener is a function that "listens" for a specific event to occur and then executes a specified block of code in response.
Common DOM (Document Object Model) events include:

click: Fired when an element is clicked.
mouseover and mouseout: Fired when the mouse pointer enters or exits an element's area.
keydown and keyup: Fired when a keyboard key is pressed down or released.
submit: Fired when a form is submitted.
load: Fired when a resource (like an image) finishes loading.
Events play a crucial role in creating interactive and dynamic web applications, allowing developers to create responsive and user-friendly interfaces by triggering JavaScript code based on user actions.
Event-driven programming is a programming paradigm that focuses on designing software systems where the flow of execution is determined by events that occur within the system, rather than following a strict sequential order. In event-driven programming, the program responds to various events, which can include user interactions, hardware inputs, timer expirations, and more.
Key concepts and characteristics of event-driven programming include:
Event: An event is a signal that indicates something has happened. It could be user interaction (such as a button click), system notifications (such as a timer firing), or external stimuli (such as data arriving from a network). Events can be predefined or custom-defined.
Event Handlers/Listeners: Event handlers (also known as event listeners) are functions or blocks of code that are executed in response to a specific event occurring. These functions are associated with specific events and are triggered when the corresponding event occurs. Event listeners essentially "listen" for events and respond by executing the designated code.
Event Loop: The event loop is a central component in event-driven programming. It continuously checks for events in the system's event queue and dispatches the associated event handlers when events occur. The event loop ensures that events are processed asynchronously and non-blocking.
Callbacks: Callback functions are often used in event-driven programming to define what should happen when a specific event occurs. These functions are passed as arguments to event registration methods and are executed when the associated event triggers.
Asynchronous Programming: Event-driven programming often involves asynchronous execution, where code execution doesn't block while waiting for an event to occur. This allows for concurrent processing and responsive user interfaces.
GUI (Graphical User Interface) Applications: Event-driven programming is commonly used in GUI applications, where user interactions like button clicks, mouse movements, and keyboard inputs drive the program's behavior.
Decoupling: Event-driven architecture promotes decoupling between different parts of a system. Components can interact through events without needing to have direct knowledge of each other's internals, improving modularity and maintainability.

EVENT USING AS ON UI PART AND SERVER SIDE OF APP

 In Node.js, the built-in "events" module provides an implementation of the EventEmitter class, which enables you to work with events in an event-driven programming paradigm. This module is particularly useful for creating and managing custom events, event listeners, and event handling in your Node.js applications. It's a fundamental part of Node.js's asynchronous and event-driven architecture.
Here's what the "events" module in Node.js is used for:
Creating Custom Events: You can use the EventEmitter class to create your own custom events. This is helpful when you want different parts of your application to communicate with each other asynchronously through events.
Event Emission: With EventEmitter, you can emit (trigger) custom events from one part of your code, signaling that something has happened. This could be a user action, data availability, or any other situation where you want to notify other parts of your application.
Event Listening: You can register event listeners to handle specific events. Event listeners are functions that are executed when a particular event is emitted. This allows you to define what should happen when an event occurs.
Asynchronous Programming: The "events" module facilitates asynchronous programming by allowing different parts of your application to interact without blocking the main thread. When an event is emitted, its associated listeners are executed asynchronously.
Customizing Event Handling: You can add multiple listeners to the same event, and they will all be executed when the event is emitted. This allows you to decouple different parts of your application and react to events in different ways.
Handling I/O and Networking: The "events" module is heavily used internally in Node.js to implement asynchronous I/O operations, networking, and other core functionalities.

emit - испускать
 */

const EventEmitter = require('events');

const customEmitter = new EventEmitter();
// on - listen for event
// emit - emit an event

customEmitter.on('response', () => {// Register an event listener. response is name of event
    console.log("data recieved")
})
// we can register as many event as we  need
customEmitter.on('response', (name, id) => {// Register an event listener. response is name of event// WE can use callback function to customise code
    console.log(`another data recieved from ${name}, which id is ${id}`)
})


customEmitter.emit('response', "Sergei", 56); // Emit an event/ In emit we can pass parameters we need