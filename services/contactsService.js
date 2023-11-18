module.exports = exports = (app, pool) => {
     app.get('/api/contacts', (request, response) => {
          const query = `SELECT * FROM contacts ORDER BY createdAt`

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
}