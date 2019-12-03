const fs = require('fs');

function mustBeInArray(array, id) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'ID is not good',
                status: 404
            });
        }
        resolve(row);
    })
}

const getNewId = (array) => {
    if (array.length > 0) {
        return array[0].id + 1
    } else {
        return 1
    }
}

function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {
    mustBeInArray,
    getNewId,
    writeJSONFile
}
