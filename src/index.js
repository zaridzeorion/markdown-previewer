import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import marked from 'marked';
const initialState = `
  Paragraph
# Heading 

## Heading 2

## Heading 3
 
- list item 1
- list item 2

[this is link](https://www.linkedin.com/in/zurab-zaridze/)

This is a inline element \`<div></div>\`

This is a block of code

\`\`\`
let x = 1;
let y = 2;
let z = x + y
\`\`\`

![React](https://miro.medium.com/max/2128/1*KN7zbaWkbm5E71zZWfTf7A.gif)

`;

class App extends React.Component {
  state = {
    text: initialState
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    const { text } = this.state

    return (
      <div>
        <h1 className="text-center m-4">Markdown Converter</h1>

        <div className="row">
          <div className="col-6">
            <h5 className="text-center">Enter Your Markdown</h5>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange}/>
          </div>
          <div className="col-6 preview" id="preview">
            <br />
            <h5 className="text-center">Result</h5>
            <hr />
            <div className="preview rounded" dangerouslySetInnerHTML={{__html: marked(text)}} />
          </div>
        </div>       
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));