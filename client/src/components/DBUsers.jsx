import Avatar  from '../assets/img/avatar.png';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../api';
import { alertNull } from '../context/actions/alertActions';
import { setAllUserDetails } from '../context/actions/allUsersAction';
import DataTable from './DataTable';

const DBUsers = () => {
  const allUsers = useSelector((state)=> state.allUsers);

  const dispatch = useDispatch();

  useEffect(() =>{
    if(!allUsers){
      getAllUsers().then((data)=>{
         dispatch(setAllUserDetails(data));
         ///alert(allUsers);
      });
    }
  },[]);
  return <div className='flex items-center justify-self-center gap-4 pt-4 w-full'>
  <DataTable columns={[
    {title : "Image",
     field : "photoURL",
     render:(rowData)=>(
      <img src={rowData.photoURL ? rowData.photoURL : Avatar} alt="" className="w-42 h-16 object-contain rounded-full"/>
    ),},
    {
      title: "Name",
      field: "displayName",
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Verified",
      field: "emailVerified",
      // render : (rowData) => {
      //   <p className={`px-2 py-1 w-32 text-center text-primary
      //    rounded-md ${rowData.true ? "bg-emerald-500" : "bg-red-500"}`}>
      //    {rowData.true ? "Verified" : "Not Verified"}
      //   </p>
      // }
    },
   
  ]}
  data={allUsers}
  title="List of Users"
  // actions={[
  //   {
  //     icon: "edit",
  //     tooltip: "Edit Data",
  //       onClick: (event, rowData) =>{
  //         if(window.confirm(
  //           "Are you sure, you want to update this record"
  //         )){

  //         }else{

  //         }
  //        }
  //   },
  //   {
  //     icon: "delete",
  //     tooltip: "Delete Data",
  //     onClick: (event, rowData) =>{
  //       if(window.confirm("Are you sure, you want to delete this record")){
  //           // deleteAProducts(rowData.productId).then((res) =>{
  //           //     dispatch(alertSuccess("Product Deleted Successfully!"));
  //           //     setTimeout(()=>{
  //           //       dispatch(alertNull());
  //           //     },3000);
  //           //     getAllUsers().then((data)=>{
  //           //       dispatch(setAllUserDetails(data));
  //           //     });
  //           // });
  //       }else{
          
  //       };
  //     }
  //   }

  // ]}
  />
</div>
};

export default DBUsers;