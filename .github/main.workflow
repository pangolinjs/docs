workflow "Lint on push" {
  on = "push"
  resolves = ["Lint Markdown"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "ci"
}

action "Lint Markdown" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = "run lint"
}
