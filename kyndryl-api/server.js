const app = require("./app")

const server = app.listen(3002, () => {
    console.log(`App running on port: 3002`);
  });