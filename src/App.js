import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main'
import NotFound from './components/NotFound/NotFound';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';


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
          },

          {
            path:'stat',
            loader: async () => {
                     return fetch('https://openapi.programming-hero.com/api/quiz');
                 } ,
            element: <Statistics></Statistics>
          }                
           
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
