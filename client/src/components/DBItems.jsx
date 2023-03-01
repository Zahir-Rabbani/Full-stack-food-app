import React, { useEffect } from 'react';
import {DataTable} from '../components';
//import { HiCurrencyRupee } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAProducts, getAllProducts } from '../api';
import { setAllProducts } from '../context/actions/productActions';
import { alertNull, alertSuccess } from '../context/actions/alertActions';

const DBItems = () => {
  const products = useSelector((state)=> state.products);
  
  const dispatch = useDispatch();
  useEffect(() =>{
    if(products){
     getAllProducts().then((data)=>{
       dispatch(setAllProducts(data));
     })
    }
   },[products]);
  //alert(products);
  return <div className='flex items-center justify-self-center gap-4 pt-4 w-full'>
    <DataTable columns={[
      {title : "Image",
       field : "imageURL",
       render:(rowData)=>(
        <img src={rowData.imageURL} alt="" className="w-32 h-16 object-contain rounded-md"/>
      ),},
      {
        title: "Name",
        field: "product_name",
      },
      {
        title: "Category",
        field: "product_category",
      },
      {
        title: "Price",
        field: "product_price",
        render: (rowData) =>(
          <p className='text-xl font-semibold text-textColor flex items-center justify-center gap-2'>
            <span className='text-red-400'>Rs</span>{" "}
            {parseFloat(rowData.product_price).toFixed(2)}
          </p>
        )
      },
    ]}
    data={products}
    title="List of Products"
    actions={[
      {
        icon: "edit",
        tooltip: "Edit Data",
          onClick: (event, rowData) =>{
            if(window.confirm(
              "Are you sure, you want to update this record"
            )){

            }else{

            }
           }
      },
      {
        icon: "delete",
        tooltip: "Delete Data",
        onClick: (event, rowData) =>{
          if(window.confirm("Are you sure, you want to delete this record")){
              deleteAProducts(rowData.productId).then((res) =>{
                  dispatch(alertSuccess("Product Deleted Successfully!"));
                  setTimeout(()=>{
                    dispatch(alertNull());
                  },3000);
                  getAllProducts().then((data)=>{
                    dispatch(setAllProducts(data));
                  });
              });
          }else{
            
          };
        }
      }

    ]}
    />
</div>
};
export default DBItems;