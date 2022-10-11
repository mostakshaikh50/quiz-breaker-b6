import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Friends from './components/Friends/Friends';
import Main from './layout/Main'
import NotFound from './components/NotFound/NotFound';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  const router = createBrowserRouter([
      {
        path: '/', 
        element: <Main></Main>, 
        children: [
          { path: '/', element: <Home></Home>},
          { path: '/home',
          loader: async () =>{
              return fetch(`https://openapi.programming-hero.com/api/quiz`)
          } ,
          element: <Home></Home>},
          { 
            path: '/friends',
            loader: async () => {
                return fetch('https://jsonplaceholder.typicode.com/users');
            } ,
            element: <Friends></Friends> },
            {
              path: '/friend/:friendId',
              loader: async ({params}) =>{
                  
                  return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
              },
              element: <FriendDetails></FriendDetails>
            },
            {
              path: 'quiz',
              element: <Posts></Posts>,
              loader: async() =>{
                return fetch(`https://jsonplaceholder.typicode.com/posts`)
              }
            },
            {
              path: '/post/:postId',
              loader: async({params}) =>{
                return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
              },
              element: <PostDetails></PostDetails>
            },
            { path: 'contactUs', element: <ContactUs></ContactUs>}
        ] 
      },
      
      { path: 'blog', element: <About></About>},
      { path: '*', element: <NotFound></NotFound>}
  ])
  return (
    <div className="App">
       <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
