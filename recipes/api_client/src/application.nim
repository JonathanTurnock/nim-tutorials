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
