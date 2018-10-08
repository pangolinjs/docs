# Testing

The project comes pre-configured with the [AVA test runner](https://github.com/avajs/ava) – a framework for JavaScript unit tests.

All test specification files should end with `*.unit.js`. Tests should be placed next to the tested code (e.g. in `src/functions` or `src/components`) to show the relationship.

However, Pangolin doesn't prescribe the testing framework nor the test spec names. If you don't like AVA you can swap it for any other framework or reconfigure it with the `ava.config.js` file.
