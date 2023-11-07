const createTemplates = require('./templates/createTemplates')

const layer = process.argv[2]
const sliceName = process.argv[3]

const layers = ['features', 'entity', 'pages']

if (!layers || !layers.includes(layer)) {
    throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!sliceName) {
    throw new Error('Укажите название слайса')
}

createTemplates(layer, sliceName);