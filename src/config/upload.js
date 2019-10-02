const multer = require('multer')
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {

            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext) //a passagem do ext como segundo param, retira a extensão do arquivo do nome

            callback(null, `${name}-${Date.now()}${ext}`) 
            //primeiro parâmetro é pra passar um erro; NOme do arquivo; Pegar data atual; Pegar a extensão do arquivo
        }
    })
}