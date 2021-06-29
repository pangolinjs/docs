# Configuration from Environment

Sometimes the [configuration](../guide/configuration) needs to be set from environment variables. The most common use case is options passed by automated build systems.

## Base path

Set the base path from an environment variable called `PANGOLIN_BASE` if present, otherwise use the default `'/assets/'`. The variable name can be changed.

```js
export default {
  project: {
    base: process.env.PANGOLIN_BASE ?? '/assets/'
  }
}
```
