# roblox-api-proxy
A simple roblox api proxy using js

## Explanation
Roblox's HttpService will forcefully add the **Roblox\WinInet** or **RobloxStudio\WinInet** User-Agent and **Roblox-Id** headers when making a request.

Some Roblox web APIs blacklist these headers, creating the need for a proxy. 

## How to use
The first index in the path will be the subdomain

### A normal request to get the number of friends a user has would be

https://friends.roblox.com/v1/users/1/friends/count 

### Using the proxy instead would be 

https://yourdomain.com/friends/v1/users/1/friends/count
