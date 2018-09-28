# Testing


## Unit

The project comes pre-configured with the [AVA test runner](https://github.com/avajs/ava) – a lightning fast framework for JavaScript unit tests. All test files should end on `*.unit.js`. Tests should be placed next to the tested code (e.g. in `src/functions` or `src/components/name`).

The styleguide doesn't prescribe the testing framework. If you don't like AVA you can swap it for any other framework.


## End-to-end

End-to-end (e2e) testing is tricky. One of the simplest solutions is [TestCafe](https://devexpress.github.io/testcafe/) which comes pre-configured with the styleguide. All test files should end on `*.e2e.js`. Tests should be placed next to the tested code (e.g. in `src/components/name` or `src/prototypes`).

As with unit testing the e2e testing framework can be replaced with anything you like.
