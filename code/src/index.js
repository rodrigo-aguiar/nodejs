const express = require('express');

const app = express();

app.get('/resource', (request, response) => {
  return response.json({message: 'Resource'});
});

app.post('/resource', (request, response) => {
  return response.json({message: 'Resource Created!'});
});

app.put('/resource/:param', (request, response) => {
  return response.json({message: 'Resource Updated'})
});

app.delete('/resource/:param', (request, response) => {
  return response.json({message: 'Resource Deleted'})
});

app.listen(3333, () => {
  console.log('Back-end started!');
});