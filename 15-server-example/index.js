const express = require("express");
const staticOptions = {
  cacheControl: true,
  // setHeaders: res => res.setHeader("Cache-Control","max-age=-1,must-revalidate")
  setHeaders: (res, path) => {
    console.log({ path });
    if (path.indexOf("no-cache") > -1) {
      res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, private"
      );
    }
  }
};
const port = 4200;
const app = express();

app.use("/public", express.static("static", staticOptions));
app.listen(port, () => console.log(`Listening on port ${port}`));
