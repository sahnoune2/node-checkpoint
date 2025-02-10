const fs = require("fs");
const x=require("")

fs.writeFile("welcome.pdf", "hello there!!", (error) => {
  //if (error) throw error   same result as the if below
  if (error) {
    console.log(error);
  }
});

fs.readFile("hello.txt", (error, data) => {
  if (error) throw error;
  console.log(data.toString());
});
