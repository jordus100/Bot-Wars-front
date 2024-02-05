import { Api } from './Api'
export const UserService = {

    registerUser: async function (username, login, password, roleId) {
        try {
            return await Api.post('Player/register', {
                email: username,
                login: login,
                password: password,
                roleId: roleId,
                isBanned: false,
                points: 0
            })
        } catch(e) {
             return Api.processError(e)
        }
    }
}