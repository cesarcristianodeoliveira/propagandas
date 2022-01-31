import React from 'react'
import { fabric } from 'fabric'

const PatternCard = ({ image, canvas, setSidePattern, setIsTexture, setSideTexture }) => {

    const addPattern = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return

        fabric.util.loadImage(`${image.largeImageURL}`, function(img) {
            obj.set({
                objectCaching: false,
            })
            obj.set('fill', new fabric.Pattern({
                source: img,
                repeat: 'repeat'
            }));
            canvas.renderAll();
            document.getElementById('pattern-repeat').max = obj.fill.repeat
        }, { crossOrigin: 'anonymous' });
        canvas.requestRenderAll()

        setSidePattern(false)
        setIsTexture(false)
        document.getElementById('handle-texture').disabled = false
        setSideTexture(true)
    }

    return (
        <img 
            src={image.previewURL} 
            alt={image.user}
            className="w-full cursor-pointer" 
            onClick={() => {addPattern(); setSidePattern(false);}}
        />
    )
}

export default PatternCard