import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { useParams, Link,useNavigate } from 'react-router-dom';
import { Edit, Delete } from '@mui/icons-material';
import { API } from '../../service/api';
import { DataContext } from '../../context/Dataprovider';
import Comments from './Comments/Comments';
const Cont = styled(Box)(({theme})=>({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}));

const Ima = styled('img')`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;

const Eadin = styled(Typography)`
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  margin: 50px 0 10px 0;
  word-break: break-word;
`;

const Editic = styled(Edit)`
  margin: 5px;
  padding: 3px;
  border: 1px solid #878787;
  border-radius: 5px;
`;

const Deleteic = styled(Delete)`
  margin: 5px;
  padding: 3px;
  border: 1px solid #878787;
  border-radius: 5px;
`;

const Con = styled(Box)`
  color: #878787;
  margin: 20px 0;
  display: flex;
`;

const Ead = styled(Typography)`
  word-break: break-word;
`;

const Details = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const { account } = useContext(DataContext);
    const nav=useNavigate();
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const deleteb=async()=>
        {
           let res=await API.deletePost(post._id);
           if(res.isSuccess)
            {
               nav('/');
            }
        }
    useEffect(() => {
        const fetchData = async () => {
            let res = await API.postId(id);
            if (res.isSuccess) {
                setPost(res.data);
            }
        }
        fetchData();
    }, [id]); // added dependency to useEffect

    return (
        <Cont>
            <Ima src={url} alt='' />
            <Box style={{ float: 'right' }}>
                {
                    account.username === post.username && 
                    <>
                        <Link to={`/update/${post._id}`}><Editic color='primary' /></Link>
                        <Deleteic onClick={()=>deleteb()}color='error' />
                    </>
                }
            </Box>
            <Eadin>{post.title}</Eadin>
            <Con>
                <Typography>Owner: <Box component='span' style={{ fontWeight: 600 }}>{post.username}</Box></Typography>
                <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createdDate).toLocaleDateString()}</Typography>
            </Con>
            <Ead>{post.description}</Ead>
            <Comments post={post}/>
        </Cont>
    )
}

export default Details;
