const initialState = {
  projects: [
    {id: '1', title: 'Replace broken anchor', content: 'blah blah blah'},
    {id: '2', title: 'Remove overgrown foliage', content: 'blah blah blah'},
    {id: '3', title: 'Replace 3rd bolt', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state
    default: 
      return state
  }
}

export default projectReducer