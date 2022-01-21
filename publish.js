const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "git@github.com:laura-cutler-ux/laura-cutler-ux.github.io.git",
  },
  err => err ? console.error(err) : console.log("Published!")
)
