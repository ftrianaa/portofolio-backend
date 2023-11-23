module.exports = exports = (app, pool) => {
     app.get('/api/experiences', (request, response) => {
          const query = `SELECT * FROM experiences ORDER BY "createdAt"`

          pool.query(query, (error, result) => {
               if (error) {
                    response.send(400, {
                         success: false,
                         data: error
                    })
               } else {
                    response.send(200, {
                         success: true,
                         data: result.rows
                    })
               }
          })
     })
     app.post('/api/create/experience', (request, response) => {

          const { title, desc, link, preview, tags } = request.body
          const query = `INSERT INTO experiences("title", "desc", "link", "preview", "tags", "createdAt")
               VALUES ("${title}", "${desc}", "${link}", "${preview}", "{Next.js}", now())`;

          pool.query((query), (error, result) => {
               if (error) {
                    response.send(400, {
                         success: false,
                         data: error
                    })
               } else {
                    response.send(200, {
                         success: true,
                         data: `Data experience has been saved!`
                    })
               }
          })
     })
}