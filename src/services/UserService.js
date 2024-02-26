import { Api } from './Api'
export const UserService = {

    registerUser: async function (username, email, password, roleId) {
        try {
            return await Api.post('Player/register', {
                email: email,
                login: username,
                password: password,
                roleId: roleId,
                isBanned: false,
                points: 0
            })
        } catch(e) {
             return Api.processError(e)
        }
    },
    loginUser: async function (email, password) {
        try {
            return await Api.post('Player/login', {
                email: email,
                password: password,
            })
        } catch(e) {
             return Api.processError(e)
        }
    }
}