const fs = require("fs");

const replaceThis = "sample";
const replaceWith = "john";

const preview = true

try {
  fs.readdir("data", (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
        let newfile = "data/" + item.replaceAll(replaceThis, replaceWith);
        if (!preview) {
            fs.rename("data/" + item, newfile, () => {
                console.log("Rename success");
            });
        } else {
            console.log("data/" + item + " will be renamed to " + newfile)
        }
    }
  });
} catch (err) {
  console.error(err);
}
