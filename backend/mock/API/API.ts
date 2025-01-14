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
export const TasksAPI = () => {
    return Tasks;
}
const LoginData = [
    ['user1', 'pass1'],
    ['user2', 'pass2'],
    ['user3', 'pass3'],
    ['admin1', 'adminpass1']
]
const Tasks = [
    ['RES3', 'T.Juezan', 'Performance Task # 3.1', 'Jan. 14, 2025', 'Jan. 21, 2025', '11:59PM'],
]