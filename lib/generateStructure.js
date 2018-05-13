const  Promise = require("bluebird")
const  fsExtra = require('fs-extra')
const  fs      = Promise.promisifyAll(fsExtra)

const generateStructure = project => {
    return fs
        .copyAsync('structure', project, {clobber: true})
        .then(function (err) {
            if (err) 
                return console.error(err)
        })
}
module.exports = generateStructure