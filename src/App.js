import './App.css';
import axios from 'axios';
import Card from './component/Card/Card';
import { useState } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, Treemap, XAxis, YAxis } from 'recharts';


function App() {
  const [data, setData] = useState([]);


  axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')

    .then(data => {
      const phoneData = data.data.data;


      const mobileData = phoneData.map(phone => {

        const part = phone.slug.split('-');
        const price = part[1];

        return {
          image: phone.image,
          brand: phone.brand,
          price: price,
          phone_name: part[0]
        }
      })


      setData(mobileData);

    })




  return (
    <div className='bg-slate-100 mx-auto'>

      <h1 className='bg-slate-400 text-3xl font-semibold text-center mb-5 py-5'>Axios with Re-Chart</h1>


      {/* Line Chart  Start */}
      <div className='mt-10 mb-10 w-10/12 mx-auto'>
        <ComposedChart className='mx-auto' width={1250} height={550} data={data}>
          <XAxis dataKey="phone_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="phone_name" stroke="#ff7300" />
        </ComposedChart>
      </div>
      {/* Line Chart  End*/}





      <div className=' grid grid-cols-3 gap-4 w-8/12 mx-auto'>
        {
          data.map((data, idx) => <Card key={idx} data={data}></Card>)
        }
      </div>

    </div>
  );
}

export default App;
