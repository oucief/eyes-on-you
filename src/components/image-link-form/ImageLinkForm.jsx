import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className="ImageLinkForm">
            <p>
                {'Hey!, I will detect all faces in your picture. Try me!!'}
            </p>
            <div>
                <div>
                    <input type="text" />
                    <button>Detect</button>
                </div>
            </div> 
        </div>
    );
};


export default ImageLinkForm;