module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.CallExpression, {
      callee: {
        object: {
          name: 'Seq',
        },

        property: {
          name: 'of',
        },
      },
    })
    .replaceWith((path) => {
      const args = path.value.arguments;
      return j.callExpression(j.identifier('Seq'), [j.arrayExpression(args)]);
    });

  return root.toSource();
};

module.exports.type = 'js';
