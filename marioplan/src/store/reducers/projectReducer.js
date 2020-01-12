const initState = {
   projects: [
     {id: '1', title: "collect all the star", content: "random random random"},
     {id: "2", title: "help me find peach", content: "random random random"},
     {id: "3", title: "Yo Boy!!", content: "random random random"}
   ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer;
