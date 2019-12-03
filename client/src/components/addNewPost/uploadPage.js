import React from 'react';

import './uploadPage.css'

export class Upload extends React.Component {

    onSubmitImg = async (e) => {
        e.preventDefault();

        let fileValue = document.getElementById('uploader').files[0];

        let formData = new FormData();
        formData.append('image', fileValue)

        let response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        let result = await response.json();

        document.getElementById('addressImg').innerHTML = result.content.imgs[0].slice(8);
    };

    render() {
        return (
            <div>

                <form id='uploadForm' onSubmit={this.onSubmitImg}>
                        Картинка: <input id='uploader' type="file" name="picture" accept="image/*" />
                        <input type="submit" />
                </form>

                <div id='addressImg'></div>
            </div>
        )
    }
}

export default Upload;
