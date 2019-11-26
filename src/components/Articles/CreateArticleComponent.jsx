import React from 'react';
import Navbar from '../NavBar';
import Input from '../Input';
import Editor from '../Articles/EditorComponent';

function CreateArticle(props){
    console.log(props)
    return(
        <div>
            <Navbar />
            <div className="editor container">
                <div className="publish-button">
                    <Input 
                        type="submit"
                        value= "Publish"
                        id="publish-btn"
                        className="submit-btn"
                    />
                </div>
                <Editor />
            </div>
        </div>
    )
}

export default CreateArticle;