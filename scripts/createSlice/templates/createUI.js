const fs = require('fs/promises')
const resolvePath = require('../resolvePath')
const firstCharToUppercase = require('../firstCharToUppercase')
const componentTemplates = require('./componentTemplates')
const styleTemplates = require('./styleTemplates')
const storiesTemplates = require('./storiesTemplates')

module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) => resolvePath('src', layer, sliceName, 'ui', ...segments);
    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath())
        } catch (e) {
            console.log('Не удалось создать UI директорию');
        }
    }

    const createComponent = async () => {
        try {
            const componentName = firstCharToUppercase(sliceName)
            await fs.mkdir(resolveUIPath(componentName))
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.tsx`),
                componentTemplates(componentName),
            )
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.stories.tsx`),
                storiesTemplates(layer, componentName),
            )
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.module.scss`),
                styleTemplates(componentName)
            )
        } catch (e) {
            console.log('Не удалось создать компонент');
        }
    }
    await createUIDir();
    await createComponent();
}


