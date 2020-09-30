const fs = require("fs");
const bioData = {
  name: "vinod",
  age: 26,
  channel: "thapa technical",
};

// 1: convert to JSON => done
// 2: dusre file me add krdena => done
// 3: readfile
// 4: again convert back to js obj ori
// 5: console.log

const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);
});
