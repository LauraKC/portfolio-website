const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "git@github.com:LauraKC/laurakc.github.io.git",
  },
  err => err ? console.error(err) : console.log("Published!")
)
