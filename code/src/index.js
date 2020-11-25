const express = require('express');

const app = express();

app.use(express.json());

function logRequest({method, url}, _, next) {
  console.time(`[${method.toUpperCase()}] ${url}`);

  next();

  console.timeEnd(`[${method.toUpperCase()}] ${url}`);
}

app.use(logRequest);

app.get('/resource', (request, response) => {
  const query = request.query;

  return response.json({query, message: 'Resource'});
});

app.post('/resource', (request, response) => {
  const body = request.body;

  return response.json({body, message: 'Resource Created!'});
});

app.put('/resource/:param', (request, response) => {
  const body = request.body;

  const params = request.params;

  return response.json({params, body, message: 'Resource Updated'})
});

app.delete('/resource/:param', (request, response) => {
  const params = request.params;

  return response.json({params, message: 'Resource Deleted'})
});

app.listen(3333, () => {
  console.log('Back-end started!');
});