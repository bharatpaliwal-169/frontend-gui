import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class ArticleForm extends Component {

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    console.log("Hi , dev");
    console.log(title,content);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10">
            <section className='fs-3'>
              <h3>Create New Article</h3>
            </section>

            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup>
                <Label for="article-title"> Title </Label>
                <Input type="text" name="title"  placeholder="Article Title" />
              </FormGroup>
              
              <FormGroup>
                <Label for="article-content">Content</Label>
                <Input type="textarea"  name="content" placeholder="Your thoughts here....."/>
              </FormGroup>

              <Button htmlType="submit">Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleForm;