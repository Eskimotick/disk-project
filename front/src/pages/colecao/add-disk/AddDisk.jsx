import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

class AddDisk extends React.Component {

  render() {
    return(
      <Modal size='mini' trigger={<Button color='violet' fluid>Adicione seu disco!</Button>} closeIcon>
        <Modal.Header>Adicione um disco na sua coleção</Modal.Header>
        <Modal.Content>
        <Form>
          <Form.Field>
            <label>Nome do Disco</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Artista</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Ano de Lançamento</label>
            <input type='number'/>
          </Form.Field>
          <Form.Field>
            <label>Gênero</label>
            <input />
          </Form.Field>
        </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>Adicionar</Button>
        </Modal.Actions>
      </Modal>
    );
  }

}

export default AddDisk;