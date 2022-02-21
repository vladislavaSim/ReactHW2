import React, {Component} from "react";
import Task from "./Task";

class ToDo extends Component {
    state = {
        tasksList: [
            {text: 'wash dishes', isDone: false, isEdit: false, id: 1},
            {text: 'call mom', isDone: false, isEdit: false, id: 2},
            {text: 'buy milk', isDone: false, isEdit: false, id: 3},
        ],
        value: '',
        searchString: '',
        filterBy: 'allTasks'
    }

    returnTaskElem = (item) => {
        return <Task id={item.id}
                     key={item.id}
                     text={item.text}
                     isDone={item.isDone}
                     isEdit={item.isEdit}
                     toggleEditTask={(e) => this.toggleEditTask(e, item.id)}
                     changeDone={() => this.changeDone(item.id)}
                     deleteTask={(e) => this.deleteTask(e, item.id)}
                     handleChange={(e) => this.editTask(e, item.id)}
        />
}

    changeDone = (id) => {
        let res = this.state.tasksList.filter(task => task.id === id)
            .map(item => item.isDone = !item.isDone)
        this.setState(res)
    }

    handleChange = (e, field) => {
        this.setState({[field]: e.target.value})
    }

    editTask = (e, id) => {
       const updateTasks = this.state.tasksList.map(task => {
           if(task.id === id) {
               return {...task, text: e.target.value}
        }
       })
        this.setState({tasksList: updateTasks})
    }

    clearInput = (e) => {
        e.preventDefault()
        this.setState({value: ''})
    }

    addTask = (e) => {
        e.preventDefault()
        if(this.state.value) {
            this.setState({
                value: '', searchString: '', taskList: this.state.tasksList.push(
                    {text: this.state.value, isDone: false, id: Date.now(), isEdit: false})
            })
        }
    }
    deleteTask = (e, id) => {
        e.preventDefault()
        let newArr = this.state.tasksList.filter(task => task.id !== id)
        this.setState({tasksList: newArr})
    }

    toggleEditTask = (e, id) => {
        e.preventDefault()
        let res = this.state.tasksList.filter(task => task.id === id)
            .map(item => item.isEdit = !item.isEdit)
        this.setState(res)
    }

    searchTask = () => {
        return this.state.tasksList.filter(task => task.text.toLowerCase().includes(this.state.searchString.toLowerCase()))
            .map(item => {
                return this.returnTaskElem(item)
            })
    }

     elemList = (e) => {
         if (this.state.filterBy === 'allTasks') {
             return this.state.tasksList.map(item => this.returnTaskElem(item))
         } else if (this.state.filterBy === 'completedTasks') {
             return this.state.tasksList.filter(item => item.isDone)
                 .map(item => this.returnTaskElem(item))
         } else {
             return this.state.tasksList.filter(item => !item.isDone)
                 .map(item => this.returnTaskElem(item))
         }
     }

     radio = (e, filter) => {
        this.setState({filterBy: filter}, () => {
            return {filterBy: e.target.value}
        })
     }
    render() {
        let found = this.searchTask()
        let list = this.elemList()
        return (
            <div className='task third'>
                <form>
                    <input type="text"
                           placeholder='Search'
                           value={this.state.searchString}
                           onChange={(e) => this.handleChange(e, 'searchString')}
                    />
                </form>
                <form className='radio-holder'>
                    <input type="radio" id="activeTasks" name="filterTasks" value="activeTasks"  onChange={(e) => this.radio(e, 'activeTasks')}/>
                    <label htmlFor="activeTasks">Active</label>
                    <input type="radio" id="completedTasks" name="filterTasks" value="completedTasks"  onChange={(e) => this.radio(e, 'completedTasks')}/>
                    <label htmlFor="activeTasks">Completed</label>
                    <input type="radio" id="allTasks" name="filterTasks" value="allTasks" onChange={(e) => this.radio(e, 'allTasks')}/>
                    <label htmlFor="activeTasks">All</label>
                </form>
                <div className='list'>
                    <ul className="tasksList">
                        {this.state.searchString.length < 1 ? list : found}
                    </ul>
                </div>
                <form className='add-task-box'>
                    <input type="text"
                           placeholder='Add task'
                           value={this.state.value}
                           onChange={(e) => this.handleChange(e, 'value')}
                    />
                    {this.state.isEdit ?
                        <button onClick={this.addTask}>✓</button>
                        : <button onClick={this.addTask}>✓</button>
                    }
                    <button onClick={this.clearInput} className='clear-btn'>X</button>
                </form>
            </div>
        );
    }
}
export default ToDo
