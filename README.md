# Node & MongoDB Streamming audio API
 
## Aplicando middleware de express:
- Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
- serve-favicon is a Node.js middleware for serving a favicon

#### > ``npm i cors express mongodb morgan multer serve-favicon``
### package.json
``` "scripts": {
        "start": "node src/index.js"
```

> ### POST
- http://localhost:3000/tracks
- Body [form-data]
  - [x] track (file)
  - [x] name (text)
  - [ ] key  

>>> Referencia
### https://www.youtube.com/watch?v=lSCLVwLdSOk&t=808s

>> Prueba de Api
#### `http://localhost:3000/tracks/5fa306faa482303a6c28564b`
#### `http://localhost:3000/tracks/5fa30a19a482303a6c285673`