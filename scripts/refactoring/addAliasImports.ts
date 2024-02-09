import { Project } from 'ts-morph';

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isAbsolute = (value: string) => {
  const directories = ['app', 'entity', 'features', 'pages', 'shared', 'widgets'];
  return directories.some(item => value.startsWith(item));
};

files.forEach(file => {
  const importDeclarations = file.getImportDeclarations();
  importDeclarations.forEach(item => {
    const value = item.getModuleSpecifierValue();
    if (isAbsolute(value)) {
      item.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
