import React, {Component} from "react";

class ToDo extends Component {
    state = {
        tasksList: [
            {text: 'wash dishes', isDone: false, id: 11},
            {text: 'call mom', isDone: false, id: 2},
            {text: 'do cleaning', isDone: false, id: 3}
        ],
        value: ''
    }

    handleChange = (e) =>  {
        this.setState({value: e.target.value})
    }
    addTask = (e) => {
        e.preventDefault()
        if(this.state.value) {
            this.setState({
                value: '', taskList: this.state.tasksList.push(
                    {text: this.state.value, isDone: false, id: Date.now(), isEdit: false})
            })
        }
    }

    toggleCheckbox = (id) => {
        let task = this.state.tasksList.find(task => task.id === id)
        this.setState(task, () => {
            {task.isDone = !task.isDone}
        })

    }
    deleteTask = (e, id) => {
        e.preventDefault()
        let newArr = this.state.tasksList.filter(task => task.id !== id)
        this.setState({tasksList: newArr})
    }

    editTask = (e, id) => {
        e.preventDefault()
        let task = this.state.tasksList.find(task => task.id === id)
        this.setState({value: task.text})
    }

    showTaskList = () => {
       return this.state.tasksList.map((item => {
           return <li key={item.id}>
                    <input type='checkbox'
                      onClick={() => this.toggleCheckbox(item.id)}
                      className='check'
                      value={item.isDone}
                      />
               {item.text}
               <div className="btn-holder">
                   <button onClick={(e) => this.deleteTask(e, item.id)} className='tasksList-btn'>X</button>
               </div>
              </li>
       }))
    }

    clearInput = (e) => {
        e.preventDefault()
        this.setState({value: ''})
    }

    render() {
        let list = this.showTaskList()
        // console.log(this.state)
        return (
            <div className='task third'>
                <form>
                    <input type="text" placeholder='search...'/>
                </form>
                <div className='list'>
                    <ul className="tasksList">
                        {list}
                    </ul>
                </div>
                <form>
                    <input type="text" placeholder='New task' value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.addTask}>✓</button>
                    <button onClick={this.clearInput} className='clear-btn'>X</button>
                </form>
            </div>
        );
    }
}
export default ToDo