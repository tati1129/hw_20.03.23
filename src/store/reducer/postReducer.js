const ADD_POST = 'ADD_POST';
const DEL_POST = 'DEL_POST';
const defaultState = [
    { id: 1, title: 'Заголовок поста', descr: 'Текст поста', authorId: '1'},
    { id: 2, title: 'Заголовок поста', descr: 'Текст поста', authorId: '2' }
];

const posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : defaultState;


export const delete_post = (id) => {
    return { type: DEL_POST, payload: id}
};

export const add_post = (title, authorId, descr) => {
    return {
        type: ADD_POST,
        payload: {id: Date.now(), title, authorId, descr}}
}


export const postReduser = (state = posts, action) => {
    if(action.type === ADD_POST){
        const newPost = [...state, action.payload];
        localStorage.setItem('posts', JSON.stringify(newPost))
        return newPost
    } else if (action.type === DEL_POST) {
        const postNew = state.filter((item) => item.id !== action.payload)
        localStorage.setItem('posts', JSON.stringify(postNew))
        return postNew
    }
    return state
}