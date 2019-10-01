const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email  }) //await serve para esperar a retorno da requisição.
        }

        return res.json(user)
    }
}