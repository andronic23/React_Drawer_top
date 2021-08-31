import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function App(props) {
  
   const[state, setState] = React.useState(false)
   const toggleDrawer =(open) => (event) =>{
     setState(open)
   }
   const list = ()=>(
     <div onClick={toggleDrawer(false)}>
      <List>
        <ListItem button> It works, hell yeah!!</ListItem>
      </List>
     </div>
   )

    return (
     <div>
       <Button onClick={toggleDrawer(true)}>One From Top</Button>
        <Drawer
        anchor={'top'}
        open={state}
        onClose={toggleDrawer(false)}
        >
         {list()}
       </Drawer>
     </div>
    )
}

export default App
