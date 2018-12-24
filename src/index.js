const getDisplayName = require('./get-display-name');

Object.defineProperty(exports, '__esModule', {
  value: true,
});

function nameAttr(_ref) {
  const t = _ref.types;

  return {
    visitor: {
      Program: function Program(path, state) {
        const property = state.opts.property || 'data-name';

        path.traverse({
          JSXElement: function JSXElement(path2) {
            const displayName = getDisplayName(t)(path, state);
            path2.node.openingElement.attributes.push(
              t.jSXAttribute(t.jSXIdentifier(property), t.stringLiteral(displayName)),
            );
          },
        });
      },
    },
  };
}

exports.default = nameAttr;
