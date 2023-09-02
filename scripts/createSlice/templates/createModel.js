const fs = require('fs/promises')
const resolvePath = require('../resolvePath')
const reduxSliceTemplates = require('./reduxSliceTemplates')
const schemaTypeTemplate = require('./schemaTypeTemplate');

module.exports = async (layer, sliceName) => {
    const resolveModelPath = (...segments) => resolvePath('src', layer, sliceName, 'model', ...segments)
    const createModelStructure = async () => {
        try {
            await fs.mkdir(resolveModelPath());
            await fs.mkdir(resolveModelPath('types'));
            await fs.mkdir(resolveModelPath('services'));
            await fs.mkdir(resolveModelPath('slice'));
            await fs.mkdir(resolveModelPath('selectors'));
        } catch (e) {
            console.log(`Не удалось создать model сегмент для слайса ${sliceName}`, e);
        }
    }

    const createReduxSlice = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('slice', `${sliceName}Slice.ts`),
                reduxSliceTemplates(sliceName),
            );
        } catch (e) {
            console.log('Не удалось создать редакс слайс', e);
        }
    }

    const createSchemaType = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('types', `${sliceName}Schema.ts`),
                schemaTypeTemplate(sliceName),
            );
        } catch (e) {
            console.log('Не удалось создать тип схемы стейта', e);
        }
    };
    await createModelStructure();
    await createReduxSlice();
    await createSchemaType();
}