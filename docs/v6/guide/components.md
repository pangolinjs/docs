# Components

Located at `src/components`.

::: tip About Fractal
Pangolin.js uses Fractal for the web UI. Fractal is an incredibly powerful system for component libraries. Head over to the [full documentation for Fractal](https://fractal.build) to learn more.
:::

A component is represented by at least one `*.njk` file that holds the Nunjucks/HTML code.

Additional information can be provided with a configuration and a documentation file. All files have to share the same name, e.g. `button.njk`, `button.config.json`, and `button.readme.md`.

| File                     | Purpose                                                                                                              |
|--------------------------|----------------------------------------------------------------------------------------------------------------------|
| `*.njk`                  | Holds the component’s Nunjucks/HTML code.                                                                            |
| `*.config.{js,json,yml}` | (optional) [Configuration file](https://fractal.build/guide/core-concepts/configuration-files.html) for a component. |
| `*.readme.md`            | (optional) [Markdown documentation](https://fractal.build/guide/components/notes.html) for a component.              |
