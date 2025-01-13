export const AuthenticationAPI = (studentID : string | undefined, password : string | undefined ) : boolean => {
    if (studentID && password) {
        for (const user of LoginData) {
            if (user[0] === studentID && user[1] === password) {
                return true;
            }
        }
        return false;
    }
    return false;
}
const LoginData = [
    ['user1', 'pass1'],
    ['user2', 'pass2'],
    ['user3', 'pass3']
]