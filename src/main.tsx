import React, { lazy,Suspense  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import './index.css'
const App = lazy(() => import('./App.tsx'));
const Artists = lazy(() => import('./Artists.tsx'));
const OtherComponent = React.lazy(() => import('./Artists'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <App />
  //   <OtherComponent />
  // </React.StrictMode>,


//   <div >
//   <Suspense fallback={<h1>Still Loading…</h1>}>
//    <Artists />
//    <App />
//   </Suspense>
//  </div>
<BrowserRouter>
<Routes>
 

    <Route path="/" element={<App />} />
    <Route path="blogs" element={<App />} />
    <Route path="contact" element={<Artists />} />
    <Route path="*" element={<OtherComponent />} />
  
</Routes>
</BrowserRouter>
)
