// import React,{useState} from 'react';
// import { Input, Button, SegmentGroup, Message} from 'semantic-ui-react'
// import './App.css';

// const Home=({history})=>{

//     const[taskInp,setTaskInp]=useState("");
//     const[tasks,setTasks]=useState([]);

//     const funcTaskChng=(e)=>{
//         setTaskInp(e.target.value);
//     }

//     const funcAddTask=()=>{
//         if (taskInp.trim() === "") {
//             alert("Input Task is empty. Please enter a task.");
//             return;
//         }
//         setTasks([...tasks, taskInp]);
//         setTaskInp("");
//     }

//     const delAllTasks=()=>{
//         setTasks([]);
//     }

//     const one=()=>{
//         history.push('/Main');
//     }
//     return(
//         <div>
//             <center>
                
                
//                 <div>
//                 <h1>TodoInput</h1>
//                 <SegmentGroup/>
//                 <Input
//                     icon='tags'
//                     iconPosition='left'
//                     label={{ tag: true, content: 'New Todo', color: 'teal'}}
//                     labelPosition='right'
//                     placeholder='Enter task'
//                     value={taskInp}
//                     onChange={funcTaskChng}
//                 />
//                 </div>


//                 <div style={{ padding: '20px' }}>
//                 <Button onClick={funcAddTask} color='black'>Add New Task</Button>
//                 </div>
                

//                 <div style={{ padding: '20px' }}>       
//                     <div>
//                         {tasks.map((task, index) => (
//                             <div key={index} style={{ padding: '20px' }}>
//                                 <Message icon='hand point right outline' iconPosition='left' content={task} />
//                             </div>
//                         ))}
//                     </div>


//                 </div>

//                 <div>
//                  <Button onClick={delAllTasks} color='red'>Delete All Tasks</Button>
//                  <Button color='green'>Delete Done Tasks</Button>
//                 </div>
//             </center>
//         </div>
//     );
// }

// export default Home;








import React, { useState } from 'react';
import { Input, Button, SegmentGroup, Message, Checkbox } from 'semantic-ui-react'
import './App.css';

const Home = ({ history }) => {
    const [taskInp, setTaskInp] = useState(""); 
    const [tasks, setTasks] = useState([]); 

    const funcTaskChng = (e) => {
        setTaskInp(e.target.value);
    }

    const funcAddTask = () => {
        if (taskInp.trim() === "") {
            alert("Input Task is empty. Please enter a task.");
            return; 
        }
        setTasks([...tasks, { task: taskInp, completed: false }]);
        setTaskInp("");
    }

    const deleteAllTasks = () => {
        setTasks([]); 
    }

    const deleteCompletedTasks = () => {
        const updatedTasks = tasks.filter(task => !task.completed);
        setTasks(updatedTasks);
    }

    const toggleTaskCompleted = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    const one = () => {
        history.push('/Main');
    }

    return (
        <div id="app">
            <center>
                <div>
                    <h1>TO-DO-LIST</h1>
                    <SegmentGroup />
                    <Input
                        icon='tags'
                        iconPosition='left'
                        label={{ tag: true, content: 'New Todo', color: 'blue' }}
                        labelPosition='right'
                        placeholder='Enter task'
                        value={taskInp}
                        onChange={funcTaskChng}
                    />
                </div>

                <div style={{ padding: '20px' }}>
                    <Button onClick={funcAddTask} color='black'>Add New Task</Button>
                </div>

                <div style={{ padding: '20px' }}>
                    <div>
                        {tasks.map((task, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                                <Message
                                    icon='hand point right outline'
                                    iconPosition='left'
                                    content={task.task}
                                    style={{ marginLeft: '10px', textDecoration: task.completed ? 'line-through' : 'none' }}
                                />
                                <Checkbox
                                    style={{marginLeft:'10px'}}
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompleted(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <Button onClick={deleteAllTasks} color='red'>Delete All Tasks</Button>
                    <Button onClick={deleteCompletedTasks} color='green'>Delete Completed Tasks</Button>
                </div>
            </center>
        </div>
    );
}

export default Home;
