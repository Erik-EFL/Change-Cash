import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Routing from './routes/export.routes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={Routing} />
    </React.StrictMode>
  </QueryClientProvider>
)
