import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Main from './Main/Main';
import Friends from './Friends/Friends';
import FriendDetails from './FriendDetails/FriendDetails';
import Posts from './Posts/Posts';
import PostDetails from './PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [

        { path: '/home', element: <Home></Home> },

        { path: '/about', element: <About></About> },

        {
          path: '/friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>
        },

        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            // console.log(params.friendId)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },

        {
          path: '/posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },

        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
          },
          element: <PostDetails></PostDetails>
        },

        { path: '*', element: 'Error 404' }
      ]
    }



  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
