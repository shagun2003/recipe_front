import { Box, Typography ,styled} from "@mui/material"
import { addellip } from "../../../utils/common-utils"
const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 370px;
     & > p {
        padding: 0 2px 2px 2px;
    }
`;

const Imae = styled("img")`
  width: 100%;
  height: 220px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;
const Text=styled(Typography)`
     color:#878787;
     font-size:12px;

`
const Eadin=styled(Typography)
`
{
    font-size:18px;
    font-weight:600;

}`
const Details=styled(Typography)
`
{
    font-size:14px;
    word-break:break-word;
  

}`
const Posts=({posts})=>
    {
       const url=posts.picture?posts.picture:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
        return (
            <Container>
                <Imae src={url} alt="blop"/>
                <Text>{posts.categories}</Text>
                <Eadin>{addellip(posts.title,20)}</Eadin>
                <Text>{posts.username}</Text>
                <Details>{addellip(posts.description,100)}</Details>
            </Container>
        )
    }
    export default Posts