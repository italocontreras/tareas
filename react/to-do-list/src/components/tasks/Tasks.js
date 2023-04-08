import {useState} from 'react'
import './Tasks.css'

const Tasks = () => {

    const [taskList,setTaskList] = useState(
        [
            {
                name:"Get Python black belt",
                finished:true
            }

        ]
    );


    const [name,setName] = useState("");

    const addActivity = (e) => {
        
        e.preventDefault();

        var listTemp = [...taskList];

        var taskObj = {
            name:name,
            finished:false
        } 

        listTemp.push(taskObj);
        setTaskList(listTemp);
        
        // setTaskList([
        //     ...taskList,
        //     {nombre}
        // ])

        setName("");

    }

    const writing = (e) => {
        
        var value_input = e.target.value; 
        setName(value_input);
    }

    const deleteActivity = (index) => {

        var listTemp = [...taskList];

        listTemp.splice(index,1);
        setTaskList(listTemp)
    }

    const setCheck = (index) => {
        var listTemp =[...taskList];
        var newValue = (listTemp[index].finished == true) ? false : true;

        listTemp[index].finished = newValue;
        console.log(listTemp)
        setTaskList(listTemp)
    }

    return (
        <div>
            <form onSubmit={addActivity}>

                <div className='container'>
                    <input className="form-input" type = "text" name="name" id="name" required = {true} value={name} onChange = {writing}></input>
                    <button className="btn btn-primary" type="submit">Add</button>

                </div>


            </form>
 
            <div>
                {
                    taskList.map((task,index) => {
                        return <div key={index}>
                            
                            <div className='map-container'>
                                <div className={(task.finished) ? "crossedout":""}> {task.name}</div>
                                <input type="checkbox" checked={task.finished} onClick={() => setCheck(index)}></input>
                                
                                <button type="button" className="btn btn-dark" onClick={() => deleteActivity(index)}>Delete</button>
                            </div>
                        </div>
                    })
                }
            </div>


        </div>

    );

}

export default Tasks;