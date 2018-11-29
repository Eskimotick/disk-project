import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

class EditDisk extends React.Component {

  render() {
    return(
      <Modal size='mini' trigger={<Button icon='edit' primary />} closeIcon>
        <Modal.Header>Editar informações</Modal.Header>
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
          <Button primary>Salvar alterações</Button>
        </Modal.Actions>
      </Modal>
    );
  }

}

export default EditDisk;