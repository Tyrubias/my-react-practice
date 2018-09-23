import React, { Component } from 'react';
import { Grid, Message, Image, Form, Checkbox, Button } from 'semantic-ui-react';

export default class Pirates extends Component {
    render() {
        return (
            <div>
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image src='https://images-na.ssl-images-amazon.com/images/I/31PnKfZ7H0L.jpg' />
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Message>
                                <Message.Header>Restricted Access</Message.Header>
                                <p>
                                    This page is available on a need-to-know basis. If you don't need to know, get out.
                                </p>
                            </Message>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Pirate_Flag.svg/750px-Pirate_Flag.svg.png' />
                        </Grid.Column>

                        <Grid.Column width={10}>
                            <Form>
                                <Form.Field>
                                    <label>Pirate Ship Name</label>
                                    <input placeholder="Queen Anne's Revenge" />
                                </Form.Field>
                                <Form.Field>
                                    <label>Pirate Name</label>
                                    <input placeholder="Blackbeard" />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox label='I agree to plunder as many ships as possible' />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Image src='http://www.contestania.com/images/villena/tesoro.jpg' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

