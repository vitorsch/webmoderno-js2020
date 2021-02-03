const bcrypt = require('bcrypt-nodejs')
const { reload } = require('pm2')
const { first, whereNull } = require('../config/db')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        if (req.params.id) user.id = req.params.id

        if (!req.originalUrl.startsWith('/users')) user.admin = false
        if (!req.user || !req.user.admin) user.admin = false

        if (user.id) {
            try {
                existsOrError(user.name, 'Nome não informado')
                existsOrError(user.email, 'E-mail não informado')
                equalsOrError(user.password, user.confirmPassword,
                    'Senhas não conferem')

                const userFromDB = await app.db('users')
                    .where({ email: user.email }).first()
                if (!user.id) {
                    notExistsOrError(userFromDB, 'Usuário já cadastrado')
                }
            } catch (msg) {
                return res.status(400).send(msg)
            }
        } else {
            try {
                existsOrError(user.name, 'Nome não informado')
                existsOrError(user.email, 'E-mail não informado')
                existsOrError(user.password, 'Senha não informada')
                existsOrError(user.confirmPassword, 'Confirmação de Senha inválida')
                equalsOrError(user.password, user.confirmPassword,
                    'Senhas não conferem')

                const userFromDB = await app.db('users')
                    .where({ email: user.email }).first()
                if (!user.id) {
                    notExistsOrError(userFromDB, 'Usuário já cadastrado')
                }
            } catch (msg) {
                return res.status(400).send(msg)
            }
        }


        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if (user.id && req.body.password) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .whereNull('deletedAt')
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else if (user.id && !req.body.password) {
            app.db('users')
                .update({
                    name: user.name,
                    email: user.email,
                    admin: user.admin
                })
                .where({ id: user.id })
                .whereNull('deletedAt')
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else if (!user.id) {
            app.db('users')
                .insert(user)
                .then(() => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .where({ id: req.params.id })
            .whereNull('deletedAt')
            .first()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const articles = await app.db('articles')
                .where({ userId: req.params.id })
            notExistsOrError(articles, 'Usuário possui artigos')

            const rowsUpdated = await app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })
            existsOrError(rowsUpdated, 'Usuário não foi encontrado!')

            res.status(204).send()
        } catch (e) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove }
}