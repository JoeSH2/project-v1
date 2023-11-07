const firstCharToUppercase = require('../firstCharToUppercase')

module.exports = (sliceName) => `export interface ${firstCharToUppercase(sliceName)}Schema {

}`;