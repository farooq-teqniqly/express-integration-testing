const app = require("./startup");
const db = require("./config/db");

const PORT = process.env.PORT || 3500;

db.openConnection().on("open", () =>
  console.log(`Connected to database at ${db.connectionString}`)
);

db.openConnection().on("error", (err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
