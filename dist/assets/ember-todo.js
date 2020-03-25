'use strict';



;define("ember-todo/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTAdapter.extend({
    host: "http://localhost:3000",
    headers: {
      "Content-Type": " application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });

  _exports.default = _default;
});
;define("ember-todo/app", ["exports", "ember-todo/resolver", "ember-load-initializers", "ember-todo/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("ember-todo/components/edit-todo/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("ember-todo/components/edit-todo/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Tok0Y6ye",
    "block": "{\"symbols\":[],\"statements\":[[9,\"form\",true],[12,\"class\",\"form-inline\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"form-group\",null],[10],[1,1,0,0,\"\\n        \"],[1,0,0,0,[31,66,5,[27,[26,1,\"CallHead\"],[]],null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Task name\",[27,[26,0,\"Expression\"],[\"model\",\"task\"]],\"form-control\"]]]],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n    \"],[9,\"button\",false],[23,\"class\",\"btn btn-primary\",null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[[27,[24,0],[]],\"updateTodo\"],null],[3,0,0,[27,[26,3,\"ModifierHead\"],[]],null,[[\"disabled\"],[[27,[26,0,\"Expression\"],[\"state\"]]]]],[10],[1,1,0,0,\"update\"],[11],[1,1,0,0,\"\\n    \"],[9,\"button\",false],[23,\"class\",\"btn btn-default\",null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[[27,[24,0],[]],\"cancel\"],null],[10],[1,1,0,0,\"cancel\"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"todo\",\"input\",\"action\",\"bind-attr\"]}",
    "meta": {
      "moduleName": "ember-todo/components/edit-todo/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-todo/components/todo-form/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    store: Ember.inject.service(),
    newTask: null,
    actions: {
      addTodo: function () {
        console.log(this.newTask);
        let todo = this.store.createRecord("todo", {
          id: Date.now(),
          task: this.newTask,
          completed: false
        });
        todo.save();
      }
    }
  });

  _exports.default = _default;
});
;define("ember-todo/components/todo-form/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4BEQkgoO",
    "block": "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"class\",\"row\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"col-xs-12\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"form\",true],[12,\"class\",\"form-inline\",null],[10],[1,1,0,0,\"\\n            \"],[9,\"div\",true],[12,\"class\",\"form-group\",null],[10],[1,1,0,0,\"\\n                \"],[7,\"input\",[[23,\"class\",\"form-control\",null],[23,\"type\",\"text\",null]],[[\"@placeholder\",\"@value\"],[\"Task Name\",[27,[26,0,\"AppendSingleId\"],[]]]],null],[1,1,0,0,\"\\n            \"],[11],[1,1,0,0,\"\\n            \"],[9,\"button\",false],[23,\"class\",\"btn btn-primary\",null],[3,0,0,[27,[26,1,\"ModifierHead\"],[]],[[27,[24,0],[]],\"addTodo\"],null],[10],[1,1,0,0,\"Add\"],[11],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"newTask\",\"action\"]}",
    "meta": {
      "moduleName": "ember-todo/components/todo-form/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-todo/components/todo/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    store: Ember.inject.service(),
    isEditing: false,
    actions: {
      completeTask: function (todo) {
        this.store.findRecord("todo", todo.id).then(todo => {
          todo.set("completed", !todo.completed);
          todo.save();
        });
      },
      editTodo: function () {
        console.log("Ediitng a todo");
        Ember.set(this, "isEditing", true);
      },
      deleteTodo: function (todo) {
        this.store.findRecord("todo", todo.id, {
          backgroundReload: false
        }).then(function (todo) {
          todo.destroyRecord(); // => DELETE to /posts/2
        });
      },
      updateTask: function () {
        console.log("update task");
        this.store.findRecord("todo", this.todo.id).then(todo => {
          todo.set("task", todo.task);
          todo.save();
          Ember.set(this, "isEditing", false);
        });
      },
      cancelTodo: function () {
        Ember.set(this, "isEditing", false);
      }
    }
  });

  _exports.default = _default;
});
;define("ember-todo/components/todo/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "resO9p+2",
    "block": "{\"symbols\":[],\"statements\":[[9,\"li\",true],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,1,\"BlockHead\"],[]],[[27,[26,3,\"Expression\"],[]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"    \"],[7,\"input\",[[23,\"class\",\"form-control\",null],[23,\"type\",\"text\",null]],[[\"@placeholder\",\"@value\"],[\"Task Name\",[27,[26,0,\"AppendSingleId\"],[\"task\"]]]],null],[1,1,0,0,\"\\n    \"],[9,\"button\",false],[23,\"class\",\"btn btn-primary\",null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[[27,[24,0],[]],\"updateTask\"],null],[10],[1,1,0,0,\"Update\"],[11],[1,1,0,0,\"\\n    \"],[9,\"button\",false],[23,\"class\",\"btn btn-secondary\",null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[[27,[24,0],[]],\"cancelTodo\"],null],[10],[1,1,0,0,\"Cancel\"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"    \"],[9,\"h4\",true],[13,\"class\",[31,303,2,[27,[26,1,\"CallHead\"],[]],[[27,[26,0,\"Expression\"],[\"completed\"]],\"strike\"],null],null],[10],[1,1,0,0,\"\\n        \"],[7,\"input\",[[23,\"class\",\"toggle\",null]],[[\"@type\",\"@checked\",\"@change\"],[\"checkbox\",[27,[26,0,\"AppendSingleId\"],[\"completed\"]],[31,418,6,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[]],\"completeTask\",[27,[26,0,\"Expression\"],[]]],null]]],null],[1,1,0,0,\"\\n        \"],[1,0,0,0,[27,[26,0,\"Expression\"],[\"task\"]]],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"actions\",null],[10],[1,1,0,0,\"\\n            \"],[9,\"a\",false],[23,\"href\",\"\",null],[23,\"class\",\"edit-todo\",null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[[27,[24,0],[]],\"editTodo\"],null],[10],[1,1,0,0,\"\\n                Edit\\n            \"],[11],[1,1,0,0,\"\\n            \"],[9,\"a\",false],[23,\"href\",\"\",null],[23,\"class\",\"remove-todo\",null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[[27,[24,0],[]],\"deleteTodo\",[27,[26,0,\"Expression\"],[]]],null],[10],[1,1,0,0,\"\\n                Delete\\n            \"],[11],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[11]],\"hasEval\":false,\"upvars\":[\"todo\",\"if\",\"action\",\"isEditing\"]}",
    "meta": {
      "moduleName": "ember-todo/components/todo/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-todo/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("ember-todo/helpers/app-version", ["exports", "ember-todo/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ember-todo/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-todo/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-todo/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-todo/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-todo/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("ember-todo/initializers/ember-data", ["exports", "ember-data/setup-container"], function (_exports, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-todo/initializers/export-application-global", ["exports", "ember-todo/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-todo/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("ember-todo/models/todo", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model,
    attr
  } = _emberData.default;

  var _default = Model.extend({
    task: attr("string"),
    completed: attr("boolean", {
      defaultValue: false
    })
  });

  _exports.default = _default;
});
;define("ember-todo/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("ember-todo/router", ["exports", "ember-todo/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {});
  var _default = Router;
  _exports.default = _default;
});
;define("ember-todo/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.findAll("todo");
    }

  });

  _exports.default = _default;
});
;define("ember-todo/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("ember-todo/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "pKOXGr9r",
    "block": "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"class\",\"container\",null],[10],[1,1,0,0,\"\\n    \"],[1,0,0,0,[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],null,null]],null]],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "ember-todo/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-todo/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FwK9+CoV",
    "block": "{\"symbols\":[\"todo\"],\"statements\":[[9,\"div\",true],[12,\"class\",\"row\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"add-todo\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"row\",null],[10],[1,1,0,0,\"\\n            \"],[9,\"h4\",true],[10],[9,\"b\",true],[10],[1,1,0,0,\"Add new task\"],[11],[11],[1,1,0,0,\"\\n            \"],[7,\"todo-form\",[],[[],[]],null],[1,1,0,0,\"\\n            \"],[9,\"div\",true],[12,\"class\",\"row\",null],[10],[1,1,0,0,\"\\n                \"],[9,\"div\",true],[12,\"class\",\"todo-list\",null],[10],[1,1,0,0,\"\\n                    \"],[9,\"h4\",true],[10],[9,\"b\",true],[10],[1,1,0,0,\"To Dos\"],[11],[11],[1,1,0,0,\"\\n                    \"],[9,\"ul\",true],[12,\"id\",\"todos\",null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,2,\"BlockHead\"],[]],[[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,1,\"CallHead\"],[]],[[27,[26,0,\"Expression\"],[]]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"                        \"],[7,\"todo\",[],[[\"@todo\"],[[27,[24,1],[]]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[1,1,0,0,\"                        \"],[9,\"h4\",true],[10],[1,1,0,0,\"No Tasks to do\"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"                    \"],[11],[1,1,0,0,\"\\n                \"],[11],[1,1,0,0,\"\\n            \"],[11],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"model\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "ember-todo/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('ember-todo/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("ember-todo/app")["default"].create({"hostURL":"http://localhost:3000/","name":"ember-todo","version":"0.0.0+cb6ea505"});
          }
        
//# sourceMappingURL=ember-todo.map
