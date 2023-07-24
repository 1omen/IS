import jwt from 'jsonwebtoken'


export default function (roles) {
    return (req, res, next) => {
        const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

        if (token) {
            try {
                const {roles: userRoles} = jwt.verify(token, 'secret123')
                let hasRole = false
                userRoles.forEach(role => {
                    if (roles.includes(role)) {
                        hasRole = true
                    }
                })

                if (hasRole) {
                    next()
                } else {
                    return res.status(403).json({
                        message: 'Отказано в доступе',
                    })
                }

            } catch (e) {
                console.log(e)
                return res.status(403).json({
                    message: 'Нет доступа',
                })
            }
        } else {
            console.log(e)
            return res.status(403).json({
                message: 'Нет доступа',
            })
        }
    }
}
