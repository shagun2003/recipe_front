import React from 'react'
import { useState,useEffect,useContext } from 'react';
import { Box,styled,FormControl,InputBase, Button,TextareaAutosize} from '@mui/material'
import {AddCircle as Add} from '@mui/icons-material'
import { useLocation,useNavigate} from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';
import { API } from '../../service/api';
import two from './two.jpg';
const Container = styled('img')`
  width: 100%;      
  height: 50vh;     
  object-fit:cover; 
 
`;
const Consta = styled(Box)(({theme})=>({
  margin: '50px 100px',
  [theme.breakpoints.down('md')]:{
      margin:0
  }
}));
const Styledform=styled(FormControl)`
margin:20px;
display:flex;
flex-direction:row;
font-size:25px;
`
const Inputte=styled(InputBase)`
flex:1;
margin:0 30px;
`
const Area=styled(TextareaAutosize)`
width:100%;
padding:15px;
font-size:20px;
border:none;
outline:none;
`
const initialPost=
{
     title:'',
     description:'',
     picture:'',
     username:'',
     categories:'',
     createdData:new Date()
}
const Createpost = () => {
   
   const [Post,setPost]=useState(initialPost);
   const [file,setfile]=useState('');
   const location=useLocation();
   const {account}=useContext(DataContext);
   const nav=useNavigate();
   const url=Post.picture?Post.picture:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
   const savepost=async()=>
    {
         let res= await API.createPost(Post);
         if(res.isSuccess)
          {
            nav('/');
          }

    }
   useEffect(()=>
{
    const getImage=async()=>
        {
           if(file)
            {
                const data=new FormData();
                data.append('name',file.name);
                data.append('file',file);
                const response=await API.uploadFile(data);
                setPost({...Post ,picture : response.data})
            }
        }
        getImage();
        Post.categories=location.search?.split('=')[1]|| 'All';

        Post.username=account.username;
},[file])
   const andle=(e)=>
    {
        setPost({...Post,[e.target.name]:e.target.value});
    }
  return (
     <Consta>
    <Container src={url} alt=''/>
    <Styledform>
        <label htmlFor='fileInput'>
          <Add fontSize='large' color='action'/>
        </label>
        <input type='file' id='fileInput' style={{display:'none'}} onChange={(e)=>setfile(e.target.files[0])}/>
        <Inputte  placeholder='Name of Recipe' onChange={(e)=>andle(e)} name='title'/>
        <Button variant='contained' onClick={(e)=>savepost(e)}>Post</Button>
    </Styledform>
    <Area minRows={7} placeholder='Share your Recipe with Everyone'  onChange={(e)=>andle(e)} name='description'/>
   </Consta>
  )
}

export default Createpost