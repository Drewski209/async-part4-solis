Service workers act as proxy servers that sit between web apps, the browser and the network 
Intended to make effective offline experiences and take appropriate actions whether network is available 
This allows access to push notifications and background sync APIs

A service worker is an event-driven worker that takes the form of a JavaScript files that can control web page that its associated to.
The worker works outside the main thread so it can be designed fully  async
Service workers only run over HTTPS to avoid MitM attacks 

A service worker is registered with the ServiceWorkerContainer.register() method. It is downloaded when a user first accesses a service worker
controlled site/ page. After the download, a navigation to an in-scope page occurs and an event is fired when it hasnt been downloaded in the last
24 hrs.

If there is a existing service worker, a new version is installed in the background but not activated, this is called worker in waiting.
It is only activated when there is no longer any pages to be loaded and a new worker activates, becoming a active worker. 

ServiceWorkerGlobalScope.skipWaiting() skips the waiting for a new worker activation
Clients.claim() is used to pages claimed by active workers 

Service workers can respond to requests with the FetchEvent() and be modify with FetchEvent.respondWith() method

Service workers are intended to be used for background data syncing, receiving centralized updates, resource requests, performance enhancements, and API mocking 

Cache represents storage for Request / Response objects that are saved as part of the Service Worker life cycle 

CacheStorage represents the storage of cache objects, providing a mastery directory that a service worker can access

Client represents the scope a service worker client such as a document in a browser controlled by an active worker 

Clients represent a list of client objects 

ExtendableEvent extends the lifetime 