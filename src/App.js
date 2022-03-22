import { Form } from './Components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form></Form>}></Route>
          <Route path="/create" element={}></Route>
          <Route path="*" element={}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
