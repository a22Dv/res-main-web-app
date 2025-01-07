interface authenticationProps {
    studentID : string | null;
    password : string | null;
}

interface tasksProps {
    userData : string[] | null;
}
const userMockDatabase : string[][] = [
    ['user1', 'pass1', 'Alice', '25-2025-35'],
    ['user2', 'pass2', 'Bob', '25-2025-36'],
    ['user3', 'pass3', 'Charlie', '25-2025-37']
];
const tasksMockDatabase : string[][] = [
    ['activity1', 'RES1', 'T.Daisy', '01/01/2025', '01/11/2025', '8:00AM', '9:59PM',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    ['activity2', 'RES2', 'T.Elijah', '01/02/2025', '01/12/2025', '9:00AM', '10:59PM',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ],
    ['activity3', 'RES3', 'T.Faye', '01/03/2025', '01/13/2025', '10:00AM', '11:59PM',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ]
]
export const Authentication = ({studentID, password} : authenticationProps)  => {
    const validUser = userMockDatabase.find(user => {
        if (user[0] === studentID && user[1] === password) {
            return true;
        } else {
            return false;
        }
    });
    return validUser ? validUser : null;
};
export const Tasks = ({userData} : tasksProps) => {
    if (!userData) {
        return null;
    } else {
        const newTasksMockDatabase = tasksMockDatabase.map(element => {
            return [...element, userData[2]]; 
        });
        return newTasksMockDatabase;
    }
}