import React from 'react';
import { Grid } from 'semantic-ui-react';

import Search from './search/Search';
import AddDisk from './add-disk/AddDisk';
import TableDisk from './table-disk/TableDisk';
import './Colecao.css';

class Colecao extends React.Component {

  render() {
    return(
      <Grid container>
        <Grid.Row className="first-row" centered>
          <Grid.Column width={5}>
            <Search />
          </Grid.Column>
          <Grid.Column width={3}>
            <AddDisk />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <TableDisk />
        </Grid.Row>
      </Grid>
    );
  }

}

export default Colecao;