import './App.css';
import axios from 'axios';
import Card from './component/Card/Card';
import { useState } from 'react';


function App() {
  const [data, setData] = useState([]);

  axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
      setData(data.data.data);
    });

  return (
    <div className='bg-slate-100'>
      <h1 className='bg-slate-400 text-3xl font-semibold text-center mb-5 py-5'>Axios with Re-Chart</h1>
      <div className=' grid grid-cols-3 gap-4'>
        {
          data.map((data, idx) => <Card key={idx} data={data}></Card>)
        }
      </div>
    </div>
  );
}

export default App;
