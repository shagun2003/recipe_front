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
       const url=posts.picture?posts.picture:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
