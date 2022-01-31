import React from 'react'
import { fabric } from 'fabric'

const BgCard = ({ image, canvas, process_align, setSideNavBackgroundImage, }) => {

    const addBg = (e) => {
        e.preventDefault()
        fabric.Image.fromURL(`${image.largeImageURL}`, function(oImg) {
            oImg.set({
                objectCaching: false,
                transparentCorners: false
            })
            process_align('center', oImg)
            process_align('middle', oImg)
            oImg.setCoords();
            canvas.setBackgroundImage(oImg, canvas.renderAll.bind(canvas)).renderAll();
            const obj = canvas.backgroundImage
            obj.scaleToWidth(canvas.width);
            obj.scaleToHeight(canvas.height);
            canvas.backgroundImage.strech = true;
            process_align('center', obj)
            process_align('middle', obj)
            canvas.renderAll()
        }, { crossOrigin: 'anonymous' })
        setSideNavBackgroundImage(false)
    }

    return (
        <img 
            src={image.previewURL} 
            alt={image.largeImageURL}
            className="w-full cursor-pointer" 
            onClick={addBg}
        />
    )
}

export default BgCard