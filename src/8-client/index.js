import * as https from "https";

https.get("https://www.google.com", (res) => {
  let body = "";
  
  res.on("data", (data) => {
    body += data;
  });
  res.on("end", () => {
    console.log(body);
  });
});
