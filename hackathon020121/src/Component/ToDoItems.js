import React, { Component } from "react";


class ToDoItems extends Component {

    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    
    }

    delete (key) {
        this.props.delete(key);}

    deleteItems(key) {
            var filteredItems = this.state.items.filter(function (items) {
                return (items.key !== key);
            });
            this.setState({
                items: filteredItems
            });
        }

    createTasks(items) {
        return <li onClick={() => {
        this.deleteItems(items.key);
        }}
        key={items.key}>
            {items.text}</li>
    }


    render() {
        return (
            <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.addItem}>
            <input placeholder="enter task"> 
            </input>
            <button type="submit">add</button>
            </form>
            </div>
            <ToDoItems entries={this.state.items}
            delete={this.deleteItems}/>
            </div>
            );
        }


render() {
var todoEntries = this.props.entries;
var listItems = todoEntries.map(this.createTasks);

return (
<ul className="theList">
{listItems}
</ul>
);
} 
};

export default ToDoItems;

