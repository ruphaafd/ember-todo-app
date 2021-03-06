'use strict';

define("ember-todo/tests/integration/components/edit-todo/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | edit-todo', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "JWj9IlAg",
        "block": "{\"symbols\":[],\"statements\":[[7,\"edit-todo\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Snk/5Fni",
        "block": "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"edit-todo\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-todo/tests/integration/components/todo-form/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | todo-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "bfNNu4tq",
        "block": "{\"symbols\":[],\"statements\":[[7,\"todo-form\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "eCKoq5BC",
        "block": "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"todo-form\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-todo/tests/integration/components/todos/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | todos', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "PWMq07Z3",
        "block": "{\"symbols\":[],\"statements\":[[7,\"todos\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "qbg0QPmC",
        "block": "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"todos\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-todo/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/edit-todo/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/edit-todo/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/todo-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/todo-form/component.js should pass ESLint\n\n10:7 - Unexpected console statement. (no-console)');
  });
  QUnit.test('components/todo/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/todo/component.js should pass ESLint\n\n17:7 - Unexpected console statement. (no-console)\n28:7 - Unexpected console statement. (no-console)');
  });
  QUnit.test('models/todo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/todo.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define("ember-todo/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-todo/components/edit-todo/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-todo/components/edit-todo/template.hbs should pass TemplateLint.\n\nember-todo/components/edit-todo/template.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `<button>` beginning at L5:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:4  error  Incorrect indentation for `<button>` beginning at L6:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `{{input}}` beginning at L3:C8. Expected `{{input}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  3:21  error  you must use double quotes in templates  quotes\n  3:40  error  you must use double quotes in templates  quotes\n  3:80  error  you must use double quotes in templates  quotes\n  5:21  error  you must use double quotes in templates  quotes\n  6:21  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-todo/components/todo-form/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-todo/components/todo-form/template.hbs should pass TemplateLint.\n\nember-todo/components/todo-form/template.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<form>` beginning at L3:C8. Expected `<form>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `<div>` beginning at L4:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  7:12  error  Incorrect indentation for `<button>` beginning at L7:C12. Expected `<button>` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:16  error  Incorrect indentation for `<Input>` beginning at L5:C16. Expected `<Input>` to be at an indentation of 14 but was found at 16.  block-indentation\n  5:28  error  you must use double quotes in templates  quotes\n  5:48  error  you must use double quotes in templates  quotes\n  5:85  error  you must use double quotes in templates  quotes\n  7:29  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-todo/components/todo/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-todo/components/todo/template.hbs should pass TemplateLint.\n\nember-todo/components/todo/template.hbs\n  2:4  error  Incorrect indentation for `{{#if}}` beginning at L2:C4. Expected `{{#if}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<Input>` beginning at L3:C4. Expected `<Input>` to be at an indentation of 6 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<button>` beginning at L4:C4. Expected `<button>` to be at an indentation of 6 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `<button>` beginning at L5:C4. Expected `<button>` to be at an indentation of 6 but was found at 4.  block-indentation\n  7:4  error  Incorrect indentation for `<h4>` beginning at L7:C4. Expected `<h4>` to be at an indentation of 6 but was found at 4.  block-indentation\n  8:8  error  Incorrect indentation for `<Input>` beginning at L8:C8. Expected `<Input>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:8  error  Incorrect indentation for `{{todo.task}}` beginning at L9:C8. Expected `{{todo.task}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `<div>` beginning at L10:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:12  error  Incorrect indentation for `<a>` beginning at L11:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  14:12  error  Incorrect indentation for `<a>` beginning at L14:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  12:16  error  Incorrect indentation for `Edit\n            ` beginning at L12:C16. Expected `Edit\n            ` to be at an indentation of 14 but was found at 16.  block-indentation\n  15:16  error  Incorrect indentation for `Delete\n            ` beginning at L15:C16. Expected `Delete\n            ` to be at an indentation of 14 but was found at 16.  block-indentation\n  3:16  error  you must use double quotes in templates  quotes\n  3:36  error  you must use double quotes in templates  quotes\n  3:75  error  you must use double quotes in templates  quotes\n  4:45  error  you must use double quotes in templates  quotes\n  5:47  error  you must use double quotes in templates  quotes\n  7:34  error  you must use double quotes in templates  quotes\n  11:24  error  you must use double quotes in templates  quotes\n  14:24  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-todo/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-todo/templates/application.hbs should pass TemplateLint.\n\nember-todo/templates/application.hbs\n  2:4  error  Incorrect indentation for `{{outlet}}` beginning at L2:C4. Expected `{{outlet}}` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
  QUnit.test('ember-todo/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-todo/templates/index.hbs should pass TemplateLint.\n\nember-todo/templates/index.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<div>` beginning at L3:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `<h4>` beginning at L4:C12. Expected `<h4>` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:12  error  Incorrect indentation for `<TodoForm>` beginning at L5:C12. Expected `<TodoForm>` to be at an indentation of 10 but was found at 12.  block-indentation\n  6:12  error  Incorrect indentation for `<div>` beginning at L6:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  7:16  error  Incorrect indentation for `<div>` beginning at L7:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  8:20  error  Incorrect indentation for `<h4>` beginning at L8:C20. Expected `<h4>` to be at an indentation of 18 but was found at 20.  block-indentation\n  9:20  error  Incorrect indentation for `<ul>` beginning at L9:C20. Expected `<ul>` to be at an indentation of 18 but was found at 20.  block-indentation\n  10:24  error  Incorrect indentation for `{{#each}}` beginning at L10:C24. Expected `{{#each}}` to be at an indentation of 22 but was found at 24.  block-indentation\n  11:24  error  Incorrect indentation for `<Todo>` beginning at L11:C24. Expected `<Todo>` to be at an indentation of 26 but was found at 24.  block-indentation\n  13:24  error  Incorrect indentation for `<h4>` beginning at L13:C24. Expected `<h4>` to be at an indentation of 26 but was found at 24.  block-indentation\n');
  });
});
define("ember-todo/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/edit-todo/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/edit-todo/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/todo-form/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/todo-form/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/todos/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/todos/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/todo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/todo-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define("ember-todo/tests/test-helper", ["ember-todo/app", "ember-todo/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-todo/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("ember-todo/tests/unit/models/todo-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | todo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('todo', {});
      assert.ok(model);
    });
  });
});
define("ember-todo/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('ember-todo/config/environment', [], function() {
  var prefix = 'ember-todo';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-todo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
