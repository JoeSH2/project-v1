import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const pathSharedUi = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedDirectory = project.getDirectory(pathSharedUi);
const componentDirectories = sharedDirectory?.getDirectories();

componentDirectories?.forEach(directory => {
  const directoryName = directory.getBaseName();
  const indexFilePath = `${directory.getPath()}/index.ts`;
  const indexFile = directory.getSourceFile(indexFilePath);

  if (!indexFile) {
    let content: string = '';

    const filesInFolder = directory.getSourceFiles(['**/*.tsx', '!**/*.stories.*', '!**/*.test.*']);
    filesInFolder?.forEach(file => {
      const moduleName = file.getBaseNameWithoutExtension();
      const filePath = file.getFilePath().slice(0, -4).split(`ui/${directoryName}/`)[1];
      content += `export {${moduleName}} from './${filePath}';`;
    });

    const createFile = directory.createSourceFile(indexFilePath, content, { overwrite: true });
    createFile.save().then(() => console.log(`${directoryName} --> index.ts created!`));
  }
});
