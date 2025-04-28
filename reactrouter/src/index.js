import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home.js'
import About from './components/About/About.js';
import Contact from './components/Contact.js/Contact.js';
import User from './components/User/User.js';
import Github from './components/Github/Github.js';
// import Github,{ GithubInfoLoader } from './components/Github/Github.js';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       },
      
//     ]
//   }
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route path="Github" element={<Github/>}/>
          {/* <Route
          loaders={GithubInfoLoader}
          path="/Github" 
          element={<Github/>}
          /> */}

    </Route>
    
  )
)
// const router = createBrowserRouter([
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
