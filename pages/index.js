import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
export default function Home() {
  const [productsInfo, setProductsInfo] = useState(init)
  useEffect(() => {
    fetch('api/products') 
    .then(response => response.join())
    .then(json => setProductsInfo(json));
  }, []);

  const categoryNames = new Set(productsInfo.map(p=> p.category));


  return (
   <div className='p-5'>
    <div>
      <h2 className='text-2xl'>Tshirts</h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src="/products/" alt=""/>
            </div>
            <div className="mt-2">
              <h3 className= "font-bold rext-lg">
                White Tees
              </h3>
            </div>
            <p className='text-sm mt-1 leading-4'>
              lorem ipsum 
            </p>
            <div className='flex mt-1'>
              <div className='text-2xl font-bo;d grow'>35000/-</div>
              <button className='bg-emerald-400 text-white py-1 px-3 rounded-xl'>+</button>
            </div>
          </div>
        </div>
    </div>
   </div>
  )
}
