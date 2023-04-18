import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import { Header } from './components/molecules'
import { ReceitaDetails, ReceitaForm, ReceitaList, ReceitaItem } from "./components/organisms"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ReceitaList />} />
        <Route path='/create' element={<ReceitaForm />} />
        <Route path='/edit/:id' element={<ReceitaForm />} />
        <Route path='/details/:id' element={<ReceitaDetails />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App
