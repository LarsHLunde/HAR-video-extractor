const fs = require("fs");
const fileContents = fs.readFileSync("./videos.har");
const jsonContents = JSON.parse(fileContents);

var counter = 0;

jsonContents.log.entries.forEach((item, i) => {
  if (item.response.content.mimeType){
    if (item.response.content.mimeType.substring(0,5) == "video"){
      var buf = Buffer.from(item.response.content.text, 'base64');
      fs.writeFileSync(counter + '.webm', buf);
      counter++;
    }
  }
});
