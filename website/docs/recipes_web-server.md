---
id: recipes-web-server
title: Simple Web Server
slug: /recipes/web-server
---

Simple Web Server to respond hello world.

## Files

### /package.nimble

```nim
# Package

version       = "0.1.0"
author        = "Jonathan Turnock"
description   = "A Hello World Web Server"
license       = "MIT"
srcDir        = "src"
bin           = @["server"]
binDir        = "dist"

# Dependencies

requires "nim >= 1.4.0"
```

### /src/server.nim

```nim
import asynchttpserver, asyncdispatch

var server = newAsyncHttpServer()

proc cb(req: Request) {.async.} =
  await req.respond(Http200, "Hello World")

when isMainModule:
    echo "WebServer Started visit http://localhost:8080/"
    waitFor server.serve(Port(8080), cb)
```

## References

- [Http Server docs](https://nim-lang.org/docs/asynchttpserver.html)

## [🔗 GitHub](https://github.com/JonathanTurnock/nim-tutorials/tree/main/recipes/hello_world_ws)


