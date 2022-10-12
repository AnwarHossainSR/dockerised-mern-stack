const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Running api on 4000 port');
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
