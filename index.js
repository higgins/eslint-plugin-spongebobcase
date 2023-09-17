module.exports = {
  rules: {
    "sPoNgEbObCaSe": {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce variable naming in the format sPoNgEbOb...',
        },
      },
      create: function (context) {
        return {
          Identifier: function (node) {
            const name = node.name;

            // Check if the variable name matches the pattern.
            if (!/^[a-z]([A-Z][a-z])*[A-Z]?$/.test(name)) {
              context.report({
                node,
                message: 'Variable name is not in sPoNgEbObCaSe...',
              });
            }
          },
        };
      },
    }
  },
};
