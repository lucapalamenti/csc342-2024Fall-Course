# Activity 26.a: Push Notifications in Our Chat Application

In this activity, you will enhance our chat app with push notifications that are sent when others send a chat message. You will use the Notifications API to show notifications to the user and the Push API to receive push notifications from the server. You will also use the `web-push` library to send the push notifications on the server side.

## Activity Resources

1. [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) on MDN
2. [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API) on MDN
3. [`web-push` Library Documentation](https://github.com/web-push-libs/web-push)
4. Assets
   * [Starter Files](files/)


## Task 1: Setting Up the Folder Structure

In this task, you will initialize the provided Express project by installing the required dependencies and running the provided files. You will also start configuring the backend to handle push notifications.

### Steps

1. Create a new folder in your repository's Scratch Pad under today's folder for this activity.
2. Place the provided files in this new folder.
3. Install the `web-push` library by running `npm install web-push` in the terminal on this folder. Make sure that this dependency is now listed in your `package.json` file.
4. Create a file called `.env` and populate it with the contents of the provided `.env.example` file.
5. Configure the `PUSH_SERVER_ID` variable with your NCSU email address in a `mailto:` URI format. We will configure the VAPID keys later in the activity.


## Task 2: Configuring the Backend for Push Notifications

In this task, you will generate VAPID keys, configure the `web-push` library, and create a route to store the push subscriptions of our users.

### Steps

1. Open the `WebSocketRoutes.js` file. Find the section of the code where your push notification implementation shoould go.
2. Import the `web-push` library.
    ```js	
    const webpush = require('web-push');
    ```
3. Generate VAPID keys using the `web-push` library and print them to the console. This is a one-time operation.
    ```js
    const vapidKeys = webpush.generateVAPIDKeys();
    console.log(vapidKeys);
    ```
4. In a terminal, run `docker compose up --build` to start the app and inspect the Docker logs to find the generated VAPID keys.
5. Populate the `PUSH_PRIVATE_KEY` and `PUSH_PUBLIC_KEY` variables in `.env` file with the corresponding VAPID keys.
6. Press `Ctrl + C` to stop the app.
7. Remove the code that generates and print the VAPID keys.
8. Create a constant called `vapidKeys` and assign it an object that stores the VAPID keys from the environment variables.
    ```js
    const vapidKeys = {
      publicKey: process.env.PUSH_PUBLIC_KEY,
      privateKey: process.env.PUSH_PRIVATE_KEY
    };
    ```
7. Configure the `web-push` library with the server ID and the VAPID keys.
    ```js
    webpush.setVapidDetails(process.env.PUSH_SERVER_ID, vapidKeys.publicKey, vapidKeys.privateKey);
    ```
8. Create a constant called `pushSubscriptions` and assign it an empty object. We will use this as a dictionary to store the push subscriptions of our users where the keys are the user names and the values are the push subscription objects.
    ```js
    const pushSubscriptions = {};
    ```
9. Create a new `POST` route on `/subscribe` that will receive the push subscription object from the client and store it in the `pushSubscriptions` object. The body of the request will contain an object with a `username` and a `subscription` property. You can print the body to the console for debugging purposes. Make sure to send a sucessful response. Note that we are storing the subscription objects in memory, so if our server restarts, we will lose all subscriptions.
    ```js
    pushSubscriptions[req.body.username] = req.body.subscription;
    ```


## Task 3: Showing a Test Notification

In this task, you will practice showing notifications to the user and getting the user's approval to do so.

### Steps

1. Open the `notifications.js` file in the `static/js` folder. This file will have some starter code that gets the user's name, and some placeholder functions for you to complete.
2. In the GUI section of the code, add a new helper function called `testNotification` that accepts two parameters: `titleText` and `bodyText`. In this function you will:
    1. Create an object called `options` to configure the notification. This object will have a `body` and a `icon` property. Set the `body` property to the `bodyText` parameter and the `icon` property to `/img/chat-icon.svg` (the URL of an icon for the app).
    2. Create a new `Notification` object with the `titleText` as first parameter and the `options` object as second parameter to the constructor.
3. Find the event handler for the `click` event of the `notifyButton` button. In this function you will:
    1. Check the `Notification.permission` property to see if the user has granted permission to show notifications. If the permissions are granted, call the `testNotification` function with a title and a body text, and return early.
        ```js	
        testNotification("Test Chat Notification", "This is a test notification. We already have permission to show these.");
        return;
        ```
    2. If the permissions are not granted, call the `requestPermission` method of the `Notification` object to ask the user for permission. This method returns a promise that resolves to the permission status. If the permission is granted, call the `testNotification` function with a title and a body text.
        ```js
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            testNotification("Example Chat Notification", "This is what a notification will look like.");
          }
        });
        ```
4. In a terminal, run `docker compose up --build` to start the app. If everything is working correctly, you should be able to:
    1. Open the app in the browser by navigating to `http://localhost`.
    2. Clicking the `Test Notification` button the first time should ask for permission to show notifications. Grant the permission. You should see the `Example Chat Notification` notification.
    3. Clicking the `Test Notification` button again should show the `Test Chat Notification` notification with the body text you provided.



## Task 4: Subscribing a Client to Push Notifications

In this task, you will allow a client to subscribe to push notifications and send the subscription object to the server to store it.

### Steps

1. In the `notifications.js` file in the `static/js` folder, find Push Notifications section of the code and create a constant called `PUSH_PUBLIC_KEY`. The frontend cannot read environment variables, so you will need to hardcode the value of the `PUSH_PUBLIC_KEY` variable with the value of the `PUSH_PUBLIC_KEY` environment variable, as a string.
    ```js
    const PUSH_PUBLIC_KEY = 'your-push-public-key';
    ```
2. Find the helper function called `subscribeToPush` that accepts a `name` as a parameter. In this function you will:
    1. Check if service workers are supported in the browser. If not, return early.
    2. Push subscriptions are available via the service worker's push manager, so we need to obtain a reference to the service worker's registration object. We can get this via `navigator.serviceWorker.ready`. This property is a promise that resolves to the service worker's registration object.
        ```js
        navigator.serviceWorker.ready.then(registration => {
          // Code to obtain a subscription to push notifications
        });
        ```
    3. In the body of this promise, we want to return an existing subscription, if we have it. This returns a promise that resolves with a subscription object, if we have one, or `null` if we don't.
        ```js
        return registration.pushManager.getSubscription();
        ```
    4. Add a `then` block to the promise returned by `getSubscription()`, which will receive the existing subscription object.
        ```js	
        .then(existingSubscription => {
          // Code to subscribe to push notifications
        });
        ```
    5. In the body of this block, check if we have an existing subscription, and return it if we do.
        ```js
        if (existingSubscription) {
          return existingSubscription;
        }
        ```
    6. If we don't have it, we want to return a new subscription. Return the result of calling the `subscribe` method of the `pushManager` object of the registration object. This method returns a promise that resolves to the new push subscription object.
        ```js
        return registration.pushManager.subscribe({
          userVisibleOnly: true, //Our push notifications will be visible to the user
          applicationServerKey: PUSH_PUBLIC_KEY
        });
        ```
    7. Now add a `then` block to the outer promise, which will receive a subscription object. This will be either the existing subscription, if we had one, or the new subscription we just created.
        ```js
        .then(subscription => {
          // Code to send the subscription to the server
        });
        ```
    8. In the body of this `then` block, we want to send this subscription to the server so that we can store it for when we want to send push notifications to this user. Use `fetch` to send a `POST` request to the `/subscribe` route we created earlier. Make sure you set the `Content-Type` header to `application/json`. The body of the request should be a JSON string for an object with a `username` property set to the `name` parameter and a `subscription` property set to the subscription object. We are sending the name of the user to identify this client because we don't have proper authentication.
        ```js
          JSON.stringify({
            username: name,
            subscription: subscription
          })
        ```
    9. Add a `catch` block to the outer promise to handle any errors that occur during the subscription process. Log the error to the console. An error can occur if the user denies permission to show notifications, or if the subscription with the push service fails.
3. The `subscribeToPush` function is called when the user clicks the `Subscribe to Push Notifications` button. If everything is working properly, you sohuld be able to click this button and see the subscription object being sent to the server and stored in the `pushSubscriptions` object.  

## Task 5: Sending and Receiving Push Notifications

In this task, you will send a push notification when a chat message is sent to all the users that have subscribed. You will also handle this notification in the service worker and show it to the user.

### Steps

1. Open the `WebSocketRoutes.js` file from the backend and create a helper function called `sendPush` that accepts a `username` and a `message` as parameters. We will call this function when we receive a chat message from a user to send a push notification to all the other users that have subscribed to push notifications. In this function you will:
    1. Iterate over all the keys of the `pushSubscriptions` object. Remember that these keys are the usernames of the users that have subscribed to push notifications.
        ```js
        for (const subscribedName in pushSubscriptions) {
          // Code to send a push notification to the user
        }
        ```
    2. If the current username is the same as the `username` parameter, use the `continue` statement to skip this iteration.
    3. Get the push subscription object that corresponds to the current username from the `pushSubscriptions` object.
        ```js
        const subscription = pushSubscriptions[subscribedName];
        ```
    4. Use the `webpush` library to send a push notification to the user by calling the `sendNotification` method with the subscription object as first paramenter and a JSON string with a `title` and a `body` property.
        ```js
        webpush.sendNotification(subscription, JSON.stringify({
          title: username, // Set the sender as the title of the notification
          body: message // Set the chat message as the body of the notification
        }));
        ```
2. Call the `sendPush` function when a chat message is received from a user (when we receive a packet from a WebSocket with the `'chat'` label). The `packet.data` object will have a `name` and a `message` property. Call the `sendPush` function with these properties.
    ```js
    sendPush(packet.data.name, packet.data.message);
    ```
3. Now open the `serviceWorker.js` file in the `static` folder and find the Push Notifications section of the code.
4. Add an event listener for the `push` event. In this event you will:
    1. Call the `log` function with the event type and the event object. This is useful for debugging purposes.
        ```js
        log('push', event);
        ```
    2. Get the pushed data and parse it as JSON into a constant called `message`. This data will be the notification object we sent from the server.
        ```js
        const message = event.data.json();
        ```
    3. Use `event.waitUntil()` to ensure the event doesn't finish until we show the notification, passing in as a parameter the result of calling the `showNotification` method on the `self.registration` object with the `message.title` as the first parameter and an object with a `body` property set to the `message.body` property and an `icon` property set to `/img/chat-icon.svg`.
        ```js
        event.waitUntil(
          self.registration.showNotification(message.title, {
            body: message.body,
            icon: `/img/chat-icon.svg`
          })
        );
        ```
5. If everything is working correctly, you should be able to:
    1. Open the app in the browser by navigating to `http://localhost`. Make sure to have the latest service worker control your pages.
    2. Open the app in a different browser (Edge, Chrome, or Firefox). An incognito window will not work.
    3. Send a couple of messages from each browser and make sure the messages are received in the other browser.
    4. Subscribe to push notifications by clicking the `Subscribe to Push Notifications` button in both browsers.
    5. Send a chat message from one of the browsers. Now, in addition to receiving the message as normal, you should also see a push notification with the sender's name and the message body.


## Bonus Task 6: Only Showing Notifications if the User is Not on the Page

In this task, you will only show push notifications if the user doesn't have the page open. This is useful to avoid showing notifications when the user is already looking at the chat.

### Steps

1. Open the `serviceWorker.js` file in the `static` folder and find the event listener for the `push` event.
2. Remember that pages (tabs/windows) that are currently being controlled by our service worker are "clients" to the service worker. If we have no clients, that means the user is not on the page. We can get a list of all the clients that are currently open by calling the `clients.matchAll` method of the `self` object. This method returns a promise that resolves to an array of all the clients.
    ```js
    event.waitUntil(
      clients.matchAll().then(clients => {
        // Code to check if the user is on the page
      })
    );
    ```
3. In the body of the promise, check if the length of the `clients` array is `0`. If it is, show the notification and return it. If it isn't, don't show the notification.
    ```js
    if (clients.length === 0) {
      return self.registration.showNotification(message.title, {
        body: message.body,
        icon: `/img/chat-icon.svg`
      });
    }
    ```
4. Now, notifications are only shown if the user is not on the page. We will now make it easier for the user to come back to the chat when they click the notification. Add an event listener for the `notificationclick` event in the service worker. In this event you will:
    1. Call the `log` function with the event type and the event object. This is useful for debugging purposes.
        ```js
        log('notificationclick', event);
        ```
    2. Close the notification by calling the `event` object's `notification` property's `close` method.
        ```js
        event.notification.close();
        ```
    3. Remain on this event via the `event.waitUntil()` method while we open a new client window with the chat app. We'll use the origin of the service worker to open the chat app.
        ```js
        event.waitUntil(
          self.clients.openWindow(self.location.origin)
        );
        ```
5. If everything is working correctly, you should be able to:
    1. Open the app in the browser by navigating to `http://localhost`. Make sure to have the latest service worker control your pages.
    2. Open the app in a different browser (Edge, Chrome, or Firefox). An incognito window will not work.
    3. Subscribe to push notifications by clicking the `Subscribe to Push Notifications` button in both browsers.
    4. Send a couple of messages from each browser and make sure the messages are received in the other browser. You should not see any push notifications.
    5. Close one of the browsers and send a chat message from the other. You should see a push notification with the sender's name and the message body from the browser you closed. If you click the notification, it should open a new tab with the chat app in the browser you had closed.