import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';

export default function SideBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <>
      <TopBarList>
        <div className="helloUser">Olá, Alessandra</div>
      </TopBarList>
      <Test>
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {[
              { nameIcon: 'logout', nameText: 'Sair' },
              { nameIcon: 'favorite', nameText: 'Meus favoritos' },

              { nameIcon: 'emoji_events', nameText: 'Mais pedidos' },
              { nameIcon: 'fingerprint', nameText: 'Minhas informações' },
              { nameIcon: 'shopping_cart', nameText: 'Meu carrinho' }
            ].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <span className="material-icons-round">{text.nameIcon}</span>
                  </ListItemIcon>
                  <ListItemText primary={text.nameText} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              { nameIcon: 'done', nameText: 'Açaí 700ml' },
              { nameIcon: 'done', nameText: 'Açaí 300ml' },
              { nameIcon: 'done', nameText: 'Açaí 1 Litro' }
            ].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <span className="material-icons-round">{text.nameIcon}</span>
                  </ListItemIcon>
                  <ListItemText primary={text.nameText} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Test>
    </>
  );

  return (
    <Container>
      {['right'].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {<span className="material-icons-round">menu_open</span>}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Container>
  );
}

const Test = styled.div`
  margin-top: 88px;
`;
const Container = styled.div`
  background-color: #1c2156;
  height: 77px;
  width: 77px;
  position: fixed;
  right: 0;
  top: 0;
  border-radius: 0 0 0 10px;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 4;

  button {
    width: 100%;
    height: 100%;
  }
  .material-icons-round {
    font-size: 40px;
    color: white;
  }
`;

const TopBarList = styled.div`
  background-color: #1c2156;
  min-height: 88px;
  width: 250px;
  position: fixed;
  z-index: 2;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: end;
  justify-content: end;
  padding: 15px;

  .helloUser {
    color: white;
  }
`;
