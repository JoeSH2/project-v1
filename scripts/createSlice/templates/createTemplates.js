const fs = require('fs/promises');
const resolvePath = require('../resolvePath')
const createModel = require('./createModel')
const createUI = require('./createUI')
const publicApiTemplates = require('./publicApiTemplates')

module.exports = async (layer, sliceName) => {
    try {
        await fs.mkdir(resolvePath('src', layer, sliceName))
    } catch (e) {
        console.log(`не удалось создать директорию для слайса${sliceName}`);
    }

    await createModel(layer, sliceName);
    await createUI(layer, sliceName);
    await publicApiTemplates(layer, sliceName);
}
