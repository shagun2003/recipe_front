
import { Grid } from "@mui/material";
import Banner from "../Banner/Banner";
import Cateory from "./cateory";
import Post from "./post/post";
const Ome = () => {
    return (
        <>
     <Banner/>
     <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
     <Cateory/>
     </Grid>
     <Grid container item xs={12} sm={10} lg={10}>
     <Post/>
     </Grid>
     </Grid>
     </>
    )
  }
  
  export default Ome