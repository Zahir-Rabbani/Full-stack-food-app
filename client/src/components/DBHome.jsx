import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllUsers } from '../api';
import { setAllUserDetails } from '../context/actions/allUsersAction';
import { setAllProducts } from '../context/actions/productActions';
import {CChart} from '@coreui/react-chartjs';
const DBHome = () => {
  const products = useSelector((state)=> state.products);
  const allUsers = useSelector((state)=> state.allUsers);
  const dispatch = useDispatch();

  const drinks = products?.filter((item)=> item.product_category === "drinks");
  const rice = products?.filter((item)=> item.product_category === "rice");
  const fruits = products?.filter((item)=> item.product_category === "fruits");
  const kabab = products?.filter((item)=> item.product_category === "kabab");
  const fish = products?.filter((item)=> item.product_category === "fish");
  
  useEffect(() =>{
   if(!products){
    getAllProducts().then((data)=>{
      dispatch(setAllProducts(data));
    })
   }
  },[products]);

  useEffect(() =>{
    if(!allUsers){
      getAllUsers().then((data)=>{
       dispatch(setAllUserDetails(data));
     })
    }
   },[allUsers]);
  return (
    <div className='flex items-center justify-center flex-col pt-6 w-full'>
       <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full'>
          <div className='flex items-center justify-center'>
           <div className='w-340 md:w-508'>
           <CChart
           type="bar"

           data={{

             labels: ['Drink', 'Rice', 'Fruits', 'Kabab', 'Fish'],

             datasets: [

               {

                 label: 'Category Wise Count',

                 backgroundColor: '#f87979',

                 data: [
                  drinks?.length,
                  rice?.length,
                  fruits?.length,
                  kabab?.length,
                  fish?.length,
                 ],

               },

             ],

           }}

           labels="months"

         />
           </div>
          </div>
          <div className='w-full h-full flex items-center justify-center'>
            <div className='w-275 md:w-460'>
            <CChart

            type="doughnut"
          
            data={{
          
              labels: [
                "Orders",
                "Delivered",
                "Cancelled",
                "Paid",
                "Not Paid",
              ],
          
              datasets: [
          
                {
          
                  backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          
                  data: [40, 20, 80, 10, 65],
          
                },
          
              ],
          
            }}
          
          />
            </div>
          </div>
       </div>
    </div>
  )
}

export default DBHome
