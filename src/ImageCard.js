import React from 'react'
import { fabric } from 'fabric'

const ImageCard = ({ image, canvas }) => {

    const addImg = (e) => {
        e.preventDefault()
        fabric.Image.fromURL(`${image.largeImageURL}`, function(oImg) {
            oImg.set({
                objectCaching: false,
                transparentCorners: false
            })
            canvas.add(oImg).centerObject(oImg).setActiveObject(oImg).renderAll();
        }, { crossOrigin: 'anonymous' })
    }

    return (
        <img 
            src={image.previewURL} 
            alt={image.largeImageURL}
            className="w-full cursor-pointer" 
            onClick={addImg}
        />
    )
}

export default ImageCard