# C'toi le plugin

(c'toi le readme)

## Installation

Integrate with Kuzzle (c'toi le Kuzzle) :
 - `git clone https://github.com/kuzzleio/kuzzle`
 - `git clone https://github.com/Aschen/ctoi-le-plugin kuzzle/plugins/enabled/ctoi-le-plugin`
 - `cd kuzzle`
 - `docker-compose -f docker-compose/dev.yml`
 - `curl http://localhost:7512/users/_me?pretty`

```
{
  "requestId": "214b6721-b165-4aeb-87a9-cd6cc34a3cd2",
  "status": 200,
  "error": null,
  "controller": "auth",
  "action": "getCurrentUser",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": {
    "_id": "-1",
    "_source": {
      "profileIds": [
        "anonymous"
      ],
      "name": "Anonymous"
    },
    "_meta": {},
    "strategies": [],
    "message": "c'toi le auth contrôleur"
  }
}
```
