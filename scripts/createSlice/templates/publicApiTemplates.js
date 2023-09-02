const fs = require('fs/promises');
const resolvePath = require('../resolvePath');
const firstCharToUppercase = require('../firstCharToUppercase');

module.exports = async (layer, sliceName) => {
    const componentName = firstCharToUppercase(sliceName)
    const schemaName = `${sliceName}Schema`

    try {
        await fs.writeFile(
            resolvePath('src', layer, sliceName, 'index.ts'),
            `
                    export { ${componentName} } from './ui/${componentName}/${componentName}';
                    export { ${firstCharToUppercase(schemaName)} } from './model/types/${schemaName}';
                `
        )
    } catch (e) {
        console.log('Не удалось создать PUBLIC API');
    }
}