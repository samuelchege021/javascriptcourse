

let todos=[{name:"lunch",done:false},{name:"dinner",done:false},{name:"breakfast",done:false}  ];


let name="dinner"


const newtodos=todos.map((todo)=>todo.name===name?{...todo,done:!todo.done}:todo)


console.log(newtodos)