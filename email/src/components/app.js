import React, { Component } from 'react';

import EmailService from '../services/email-service'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../styles/app.css';

export default class App extends Component {
  constructor() {
    super()
    this.emailService = new EmailService()
    this.state = {
      hasError: false,
      message: ''
    }
  }

  async send(event) {
    event.preventDefault()

    let data = {}
    data['to'] = document.getElementsByName('to')[0].value
    data['subject'] = document.getElementsByName('subject')[0].value
    data['text'] = document.getElementsByName('textUser')[0].value

    let res = await this.emailService.send(data)
    if (res.statusCode >= 400) {
      this.setState({ hasError: true, message: res.message })
    } else {
      this.setState({ hasError: false, message: res.message })
    }
  }

  render() {
    return (
      <div className='formTeste'>
        {(this.state.hasError) ? <div className='error'>{this.state.message}</div> : <div className='sucess'>{this.state.message}</div>}

        <Form id='email'>
          <Form.Group controlId=''>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Email do destinatário...' name='to' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Assunto</Form.Label>
            <Form.Control type='text' placeholder='Assunto...' name='subject' />
          </Form.Group>

          <Form.Group controlId=''>
            <Form.Label>Texto</Form.Label>
            <Form.Control as='textarea' rows='3' name='textUser' placeholder='Digite o texto aqui...' />
          </Form.Group>

          <Button variant='primary' type='submit' onClick={this.send.bind(this)}> Enviar </Button>
        </Form>
      </div>
    )
  }
}

