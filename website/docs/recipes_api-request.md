---
id: recipes-api-request
title: Web API Request
slug: /recipes/web-api-request
---

Simple Recipe to query an API for JSON data.

## Files

### /package.nimble
```nim
# Package

version       = "0.1.0"
author        = "Jonathan Turnock"
description   = "Simple API Client Example"
license       = "MIT"
srcDir        = "src"
bin           = @["application"]
binDir        = "dist"

# Dependencies

requires "nim >= 1.4.0"
```

### /nim.cfg
```nim
-d:ssl
```

### /src/application.nim
```nim
import httpclient
import strformat
import json

var client = newHttpClient()

when isMainModule:
  var response = client.getContent("https://jsonplaceholder.typicode.com/todos/1")
  var jsonResponse = parseJson(response)

  var userId = jsonResponse["userId"]
  var id = jsonResponse["id"]
  var title = jsonResponse["title"]

  echo response
  echo fmt"userId: {userId}, id: {id}, title: {title}"
```

## References

- [Http Client docs](https://nim-lang.org/docs/httpclient.html)
- [String Format docs](https://nim-lang.org/docs/strformat.html)
- [Json docs](https://nim-lang.org/docs/json.html)

## [🔗 GitHub](https://github.com/JonathanTurnock/nim-tutorials/tree/main/recipes/api_client)
