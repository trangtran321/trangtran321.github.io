import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router.tsx'
import { Provider } from './components/ui/provider.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Router> 
//       <App />
//     </Router>
//   </StrictMode>,
// )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider> 
      <RouterProvider router={router}/>
    </Provider>
    
  </StrictMode>
)
