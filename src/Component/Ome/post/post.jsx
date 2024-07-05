import { useState, useEffect } from "react";
import { API } from "../../../service/api";
import { Box,Grid} from "@mui/material";
import {useSearchParams,Link} from "react-router-dom";
//import { Margin } from "@mui/icons-material";
import Posts from "./posts";
const Post = () => {
  const [post, setPost] = useState([]);
  const [searchParams]=useSearchParams();
  const category=searchParams.get("category")
  useEffect(() => {
    const fetchData = async () => {
      let res = await API.allpost({category:category||""});
      if (res.isSuccess) {
        setPost(res.data);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
            {
                post?.length ? post.map(posts=> (
                    <Grid item lg={3} sm={4} xs={12}>
                      <Link to={`details/${posts._id}`} style={{textDecoration:"none",color:"inherit"}}>
                 <Posts posts={posts} />
                 </Link>  
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
  )
}

export default Post;
