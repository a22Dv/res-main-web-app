const LoginData = [
    ['user1', 'pass1'],
    ['user2', 'pass2'],
    ['user3', 'pass3'],
    ['admin1', 'adminpass1']
]
const Tasks = [
    ['RES3', 'T.Juezan', 'Performance Task # 3.1', 'Jan. 14, 2025', 'Jan. 21, 2025', '11:59PM',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti dicta ipsum reprehenderit fugit. Explicabo voluptates quod incidunt sint totam, tenetur numquam, quia, ipsam quae nulla sunt molestiae provident saepe.'
    ]
]

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const userCredentials = [
    [0, '25-2500-001', 'pass1'],
    [1, '25-2500-002', 'pass2'],
    [2, '25-2500-003', 'pass3'],
    [3, 'admin1', 'adminpass1']
]

const taskData = [
    [
        0,
        'RES3',
        'Performance Task # 3.1',
        'T. Juezan',
        'Jan. 14, 2025 - 9:00AM',
        'Jan. 17, 2025 - 11:59PM',
        'Submit a PDF file with your output on the Moodle Post.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    ]
]

const assignedTaskData = [
    ['25-2500-001', [0, 1, 2]],
    ['25-2500-002', [3, 4, 5]],
    ['25-2500-003', [6, 7, 8]]
]

export const AuthMockAPI = (studentID : string | undefined, password : string | undefined) : boolean => {
    if (studentID && password) {
        for (const userData of userCredentials) {
            if (studentID === userData[1] && password === userData[2]) {
                return true;
            }
        }
        return false;
    }
    return false;
}

export const TasksMockAPI = (studentID : string) => {
    for (const assignments of assignedTaskData) {
        if (studentID === assignments[0]) {
            return () => {
                const tasks = [];
                for (const taskID of assignments[1]) {
                    for (const task of taskData) {
                        if (taskID === task[0]) {
                            tasks.push(task);
                        }
                    }
                }
            }
        }
    }
    return false;
}
