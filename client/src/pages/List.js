import React, { Component } from "react"

import TodoItem from "../pages/components/TodoItem"

class List extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        API.getTodos()
        .then(res => this.setState({ todos:res.data }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-6 offset-sm-3 col-xs-12 mt-5">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control form-control-lg" placeholder="Add a todo" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Add</button>
                        </div>
                    </div>
                    {this.state.Todos.map(item => (
                        <TodoItem 
                            key={item._id}
                            id={item._id}
                            todo={item.todo}
                            deadline={item.deadline}
                            category={item.category}
                            completed={item.completed}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default List