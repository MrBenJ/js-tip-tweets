
// TIP: Have you tried using fs.promises ?
// It's like fs in node, but with promises
// instead of callbacks!

const fs = require('fs').promises;
const path  = require('path');
// You can now use it with async/await,
// since it's promised based now 😄😄😄
async function improveFiles() {

  const file = await fs.readFile(path.resolve(__dirname, './test.txt'));

  // Convert Buffer to string
  const fileContent = file.toString();

  console.log(fileContent);
  // => Hello! This is Content!

  const improvedContent = fileContent.replace(/!/g, '!!');

  console.log(improvedContent);
  // => Hello!! This is Content!!

  await fs.writeFile(
    path.resolve(__dirname, 'betterFile.txt'),
    improvedContent

  );
}
improveFiles();



