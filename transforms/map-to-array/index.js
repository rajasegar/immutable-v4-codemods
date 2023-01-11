module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  root
    .find(j.CallExpression, {
      callee: {
        object: { callee: { name: 'Map' } },
        property: { name: 'toArray' },
      },
    })
    .forEach((path) => {
      const args = path.value.callee.object.arguments;
      const newNode = j.callExpression(
        j.memberExpression(
          j.callExpression(
            j.memberExpression(
              j.callExpression(j.identifier('Map'), args),
              j.identifier('toList'),
              false
            ),
            []
          ),
          j.identifier('toArray'),
          false
        ),
        []
      );
      j(path).replaceWith(newNode);
    });

  return root.toSource();
};

module.exports.type = 'js';
