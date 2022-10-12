import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main'
import NotFound from './components/NotFound/NotFound';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Blog from './components/Blog/Blog';


function App() {
  const router = createBrowserRouter([
      {
        path: '/', 
        element: <Main></Main>, 
        children: [
          { path: '/home',
          loader: async () =>{
              return fetch(`https://openapi.programming-hero.com/api/quiz`)
          } ,
          element: <Home></Home>},


          {
            path: '/quiz/:quizId',
            loader: async({params}) =>{
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
            },
            element: <QuizDetails></QuizDetails>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          }


          // { 
          //   path: '/friends',
          //   loader: async () => {
          //       return fetch('https://jsonplaceholder.typicode.com/users');
          //   } ,
          //   element: <Friends></Friends> },
            // {
            //   path: '/friend/:friendId',
            //   loader: async ({params}) =>{
                  
            //       return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
            //   },
            //   element: <FriendDetails></FriendDetails>
            // },
            // {
            //   path: 'quiz',
            //   element: <Posts></Posts>,
            //   loader: async() =>{
            //     return fetch(`https://jsonplaceholder.typicode.com/posts`)
            //   }
            // }           
           
        ] 
      },
      
     
      { path: '*', element: <NotFound></NotFound>}
  ])
  return (
    <div className="App">
       <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
