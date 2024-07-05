import React from 'react'
import { Box,TextareaAutosize,Button,styled} from '@mui/material'
import { useState,useContext,useEffect } from 'react'
import { DataContext } from '../../../context/Dataprovider'
import { API } from '../../../service/api'
import Comment from './Comment'
const Cont=styled(Box)`
   margin-top:100px;
   display:flex;
`
const Imae=styled('img')`
    width:50px;
    height:50px;
    border-radius:50%;
   
    `
    const Styledarea=styled(TextareaAutosize)`
     height:100px;
     width:100%;
      margin:0 20px;
      padding:10px;

    `;
    const initialValues={
        name:'',
        postId:'',
        comments:'',
        date:new Date()
    }
const Comments = ({post}) => {
    const url = 'https://static.thenounproject.com/png/12017-200.png';
    const {account}=useContext(DataContext);
    const [comment,setcomment]=useState(initialValues);
    const [comments,setcomments]=useState([]);
    const[toggle,settoggle]=useState(false); 
    useEffect(() => {
     const getData=async()=>
        {
           const res=await API.getAllComments(post._id);
           if(res.isSuccess)
            {
                 setcomments(res.data);
            }
        }
            if(post._id)
                {
            getData();
                }
         
      
    }, [post,toggle])
    
 
    const andle=(e)=>
        {
            setcomment({...comment,
                name:account.username,
                postId:post._id,
                comments:e.target.value})
        }
        const Add=async(e)=>
            {
                let res=  await API.commentPost(comment);
                if(res.isSuccess)
                    {
                        setcomment(initialValues);
                    }
                    settoggle(prevState=>!prevState);
            }
  return (
   <Box>
      <Cont>
<Imae src={url} alt='dp'/>
<Styledarea
minRows={7} placeholder='Comment down your views' value={comment.comments} onChange={(e)=>andle(e)}/>
<Button onClick={(e)=>Add(e)}variant='contained' color='primary' size='medium' style={{ height:'40px'}}>Comment</Button>
      </Cont>
      <Box>
        {
        comments && comments.length>0 && comments.map(comment=> (
           <Comment comment={comment} settoggle={settoggle}/>
            )
        )
}
    </Box>
   </Box>
  )
}

export default Comments





