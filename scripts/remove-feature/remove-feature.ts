import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const featureName = process.argv[2];
const featureWorking = process.argv[3]; // newFeature or defaultFeature

const newFeature = 'newFeature';
const defaultFeature = 'defaultFeature';
type SearchFeatureType = 'ToggleFeature' | 'toggleFeature';
if (!featureName) {
  throw new Error('Add the name of the feature');
}

if (!featureWorking) {
  throw new Error(`Add the flag ${newFeature} or ${defaultFeature}`);
}

const project = new Project({});
project.addSourceFilesAtPaths('src/**/**.ts');
project.addSourceFilesAtPaths('src/**/**.tsx');

const files = project.getSourceFiles();

const searchToggleFunc = (node: Node, typeFeature: SearchFeatureType): boolean => {
  let toggleFuncName = false;

  node.forEachChild(child => {
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === typeFeature) {
      toggleFuncName = true;
    }
  });
  return toggleFuncName;
};

const getAttributeByNodeName = (JsxAttribute: JsxAttribute[], name: string) => {
  const attribute = JsxAttribute.find(node => node.getNameNode().getText() === name)
    ?.getInitializer()
    ?.getText()
    .slice(1, -1);

  if (attribute?.startsWith('(')) {
    return attribute.slice(1, -1);
  }

  return attribute;
};

const toggleFeatureFunction = (node: Node) => {
  const objectProps = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

  if (!objectProps) return;

  const namePropKind = objectProps.getProperty('name');
  const onPropKind = objectProps.getProperty(newFeature);
  const offPropKind = objectProps.getProperty(defaultFeature);

  const nameProp = namePropKind
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getLiteralValue();
  const onProp = onPropKind?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
  const offProp = offPropKind?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

  if (nameProp !== featureName) {
    return;
  }
  if (featureWorking === 'newFeature') {
    node.replaceWithText(onProp?.getBody().getText() ?? '');
  }
  if (featureWorking === 'defaultFeature') {
    node.replaceWithText(offProp?.getBody().getText() ?? '');
  }
};

const toggleFeatureComponent = (node: Node) => {
  const JSXProps = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  if (!JSXProps) return;

  const featureNameAttribute = getAttributeByNodeName(JSXProps, 'name');
  const featureDefaultAttribute = getAttributeByNodeName(JSXProps, 'defaultFeature');
  const featureNewAttribute = getAttributeByNodeName(JSXProps, 'newFeature');

  if (featureNameAttribute !== featureName) {
    return;
  }
  if (featureWorking === 'newFeature') {
    return node.replaceWithText(featureNewAttribute ?? '');
  }
  if (featureWorking === 'defaultFeature') {
    return node.replaceWithText(featureDefaultAttribute ?? '');
  }
};

files.forEach(file => {
  file.forEachDescendant((node: Node) => {
    if (node.isKind(SyntaxKind.CallExpression) && searchToggleFunc(node, 'toggleFeature')) {
      toggleFeatureFunction(node);
    }
    if (node.isKind(SyntaxKind.JsxSelfClosingElement) && searchToggleFunc(node, 'ToggleFeature')) {
      toggleFeatureComponent(node);
    }
  });
});

project.save();
