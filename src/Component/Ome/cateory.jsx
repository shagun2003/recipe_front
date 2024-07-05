import React from 'react'
import { Button ,Table, TableBody, TableCell, TableHead, TableRow,styled} from '@mui/material'
//import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
import { Categories } from '../../constants/data'
import { Link,useSearchParams } from 'react-router-dom'
const Tab=styled(Table)`

   border:1px solid rgba(224,224,224,1);
`
const But=styled(Button)`
   margin:20px;
   width:85%;
  background-color:#FF6347;
   color:#ffffff;  

  `
  const StyledLink=styled(Link)`
  text-decoration: none;
  color:inherit;
  `
const Category = () => {
  const [searc]=useSearchParams();
  const category=searc.get('category');
  return (
   <>
 <Link to={`/create?category=${category ||'' }`}>
        <But variant='contained'>Share Recipes</But>
      </Link> 
   <Tab>
    <TableHead>
        <TableRow>
<TableCell>
  <StyledLink to='/'>
   All Categories
   </StyledLink>
</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {
            Categories.map((category)=>
              (
                <TableRow key={category.id}>
                    <TableCell>
                      <StyledLink to={`/?category=${category.type}`}>
                      {category.type}
                    
                      </StyledLink>
                    </TableCell>
                </TableRow>
              )
            )
        }
    </TableBody>
   </Tab>
   </>
  )
}

export default Category