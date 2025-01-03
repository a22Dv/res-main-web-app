import { useState, useEffect } from "react";
import { Tasks } from "../../../../backend/mock/mockAPI";
interface DashboardProps {
    userInfo : string[] | null;
    handleIsLoggedIn : (isLoggedIn : boolean) => void;
}
const Dashboard = ({userInfo, handleIsLoggedIn} : DashboardProps) => {
    if (!userInfo) {
        handleIsLoggedIn(false);
    } 
    const [tasks, setTasks] = useState<string[][] | null>(null);
    useEffect(() => {
      const userTasks = Tasks({userData : userInfo});
      setTasks(userTasks); 
    }, [userInfo]); 

    return (
        <div>
            <h1>CIT-TMS | Student Dashboard</h1>
            {userInfo != null ? <h3>Welcome, {userInfo[2]}</h3> : <h3>Welcome.</h3>}
            {tasks && tasks.map((taskArray) => {
               return (<div style={{border : "2px solid black", padding : "5px"}}>
                        {taskArray.map((task) => {
                            return (<p>{task}</p>)
                        })}
                    </div>)
                })
            }
        </div>
    );   
}
export default Dashboard;