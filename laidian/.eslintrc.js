module.exports = {
  "extends": "airbnb/base",
  "plugins": [
    "babel",
    "import",
    "html"
  ],
  "rules": {
    "import/no-unresolved":"off",
    "import/extensions":"off",
    "import/first":"off",
    "import/no-dynamic-require":"off",
    "import/no-extraneous-dependencies":"off",
    "linebreak-style":"off",
    "global-require":"off",
    "no-unused-expressions":["error", { "allowShortCircuit": true, "allowTernary": true }],
    "comma-dangle": ["error", "only-multiline"],
    "no-param-reassign": ["error", { "props": false }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-restricted-syntax": "off",
     // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  "settings": {
    "import/extensions": [".js", ".vue", ".less"]
  },
  "env": {
    "browser": true,
    'node': true,
    'es6': true
  }
};
