
function Todo() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Enter todo title" />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );

}

export default Todo;