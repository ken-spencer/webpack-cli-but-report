### Webpack CLI Bug report #821

Run the following: 

$ npm install    // install webpack / webpack-cli
$ node build.js  // silently fails but works if I downgrade to webpack-cli@3.2.1
$ npm run watch // does not fail
