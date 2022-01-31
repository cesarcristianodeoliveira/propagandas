import React, { useState, useEffect } from 'react'
import { fontsSansSerif, fontsSerif, fontsDisplay, fontsHandwriting } from './Fonts.js'
import FontFaceObserver from 'fontfaceobserver'
import ChangeBackGroundColor from './ChangeBackGroundColor.js'
import BgCard from './BgCard.js'
import BgSearch from './BgSearch.js'
import ChangeFillColor from './ChangeFillColor'
import ChangeShadowColor from './ChangeShadowColor.js'
import ChangeObjStroke from './ChangeObjStroke.js'
import { brandIcons, solidIcons } from './Icons'
import ImageSearch from './ImageSearch.js'
import ImageCard from './ImageCard.js'
import PatternSearch from './PatternSearch'
import PatternCard from './PatternCard'
import { fabric } from 'fabric'
import 'fabric-history'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import RedoRoundedIcon from '@mui/icons-material/RedoRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import TextFieldsRoundedIcon from '@mui/icons-material/TextFieldsRounded';
import HeightRoundedIcon from '@mui/icons-material/HeightRounded';
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import VerticalAlignCenterRoundedIcon from '@mui/icons-material/VerticalAlignCenterRounded';
import SpaceBarRoundedIcon from '@mui/icons-material/SpaceBarRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import OpacityRoundedIcon from '@mui/icons-material/OpacityRounded';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import FormatUnderlinedRoundedIcon from '@mui/icons-material/FormatUnderlinedRounded';
import FormatAlignLeftRoundedIcon from '@mui/icons-material/FormatAlignLeftRounded';
import FormatAlignCenterRoundedIcon from '@mui/icons-material/FormatAlignCenterRounded';
import FormatAlignRightRoundedIcon from '@mui/icons-material/FormatAlignRightRounded';
import FormatAlignJustifyRoundedIcon from '@mui/icons-material/FormatAlignJustifyRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import AlignVerticalTopRoundedIcon from '@mui/icons-material/AlignVerticalTopRounded';
import AlignVerticalCenterRoundedIcon from '@mui/icons-material/AlignVerticalCenterRounded';
import AlignVerticalBottomRoundedIcon from '@mui/icons-material/AlignVerticalBottomRounded';
import AlignHorizontalLeftRoundedIcon from '@mui/icons-material/AlignHorizontalLeftRounded';
import AlignHorizontalCenterRoundedIcon from '@mui/icons-material/AlignHorizontalCenterRounded';
import AlignHorizontalRightRoundedIcon from '@mui/icons-material/AlignHorizontalRightRounded';
import ControlCameraRoundedIcon from '@mui/icons-material/ControlCameraRounded';
import GroupWorkRoundedIcon from '@mui/icons-material/GroupWorkRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import effectPatternImg from './imgs/pattern.jpg'

const App = () => {

    const [canvas, setCanvas] = useState('')

    useEffect(() => {
        setCanvas(initCanvas())
    }, [])
    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            width: 1080,
            height: 1080,
            backgroundColor: '#FFFFFF',
            preserveObjectStacking: true,
        })
    )

    const [sideFileMenu, setSideFileMenu] = useState(false)
    const [sideForm, setSideForm] = useState(false)
    const [sideCanvas, setSideCanvas] = useState(true)
    const [sideObj, setSideObj] = useState(false)
    const [sidePath, setSidePath] = useState(false)
    const [sideImg, setSideImg] = useState(false)
    const [sideText, setSideText] = useState(false)
    const [sideMultipleSelection, setSideMultipleSelection] = useState(false)
    const [sideSelectionGroup, setSideSelectionGroup] = useState(false)

    const [sideBackgroundColor, setSideBackgroundColor] = useState(false)

    const [sideIcons, setSideIcons] = useState(false)
    const [sideSolidIcons, setSideSolidIcons] = useState(false)
    const [sideBrandIcons, setSideBrandIcons] = useState(false)
    const [sideFillColor, setSideFillColor] = useState(false)

    const [sideFilters, setSideFilters] = useState(false)

    const [sideFontFamily, setSideFontFamily] = useState(false)
    const [sideTextSize, setSideTextSize] = useState(false)
    const [sideTextFormat, setSideTextFormat] = useState(false)
    const [sideTextSpace, setSideTextSpace] = useState(false)
    const [sideOpacity, setSideOpacity] = useState(false)
    const [sidePosition, setSidePosition] = useState(false)
    const [sideControlPosition, setSideControlPosition] = useState(false)

    const [sideNav, setSideNav] = useState(false)
    const [sideNavPosts, setSideNavPosts] = useState(false)
    const [sideNavObj, setSideNavObj] = useState(false)
    const [sideNavImg, setSideNavImg] = useState(false)
    const [sideNavText, setSideNavText] = useState(false)

    const handleFileMenu = () => {
        setSideFileMenu(!sideFileMenu)
    }

    const handleSideBackgroundColor = () => {
        setSideBackgroundColor(true)
    }

    const [sideNavBackgroundImage, setSideNavBackgroundImage] = useState(false)
    const [bg, setBg] = useState([])
    const [isLoadingBg, setIsLoadingBg] = useState(true)
    const [termBg, setTermBg] = useState('')
    const [bgOrder, setBgOrder] = useState('popular')
    const [bgType, setBgType] = useState('all')
    const [bgOrientation, setBgOrientation] = useState('all')
    const [bgCat, setBgCat] = useState()
    const [bgEditorsChoice, setBgEditorsChoice] = useState(false)
    const [bgSafeSearch, setBgSafeSearch] = useState(false)
    const [activePageBgs, setActivePageBgs] = useState(1)
    const [totalPagesBgs, setTotalPagesBgs] = useState(1)
    useEffect(() => {
        const bgsPerPage = 20
        fetch(`https://pixabay.com/api/?key=7152709-e8db2b65c8b70d586f502ca13&q=${termBg}&order=${bgOrder}&image_type=${bgType}&orientation=${bgOrientation}&category=${bgCat}&editors_choice=${bgEditorsChoice}&safesearch=${bgSafeSearch}&page=${activePageBgs}&safesearch=true&lang=pt`)
            .then(res => res.json())
            .then(data => {
            setBg(data.hits)
            const calcularTotalPaginaBgs = Math.ceil(
				data.totalHits / bgsPerPage
			)
			setTotalPagesBgs(calcularTotalPaginaBgs)
        })
        .catch(err => console.log(err))
    }, [termBg, bgType, bgOrientation, bgCat, bgOrder, bgEditorsChoice, bgSafeSearch, activePageBgs])
    const handleSideNavBackgroundImage = () => {
        setSideNavBackgroundImage(true)
        setIsLoadingBg(false)
    }
    const prevPageBgs = () => {
		const newActivePageBgs = activePageBgs - 1
		if (newActivePageBgs < 1) {
			return
		}
		setActivePageBgs(newActivePageBgs)
	}
	const nextPageBgs = () => {
		const newActivePageBgs = activePageBgs + 1
		if (newActivePageBgs > totalPagesBgs) {
			return
		}
		setActivePageBgs(newActivePageBgs)
	}
    const handleChangeBgOrder = (e) => {
        e.preventDefault();
        setBgOrder(e.target.value)
        setActivePageBgs(1)
        document.getElementById('bgOrder').value = e.target.value
    }
    const handleChangeBgType = (e) => {
        e.preventDefault();
        setBgType(e.target.value)
        setActivePageBgs(1)
        document.getElementById('bgType').value = e.target.value
    }
    const handleChangeBgOrientation = (e) => {
        e.preventDefault();
        setBgOrientation(e.target.value)
        setActivePageBgs(1)
        document.getElementById('bgOrientation').value = e.target.value
    }
    const handleChangeBgCat = (e) => {
        e.preventDefault();
        setBgCat(e.target.value)
        setActivePageBgs(1)
        document.getElementById('bgCat').value = e.target.value
    }
    const handleChangeBgEditorsChoice = (e) => {
        e.preventDefault();
        setBgEditorsChoice(e.target.value)
        setActivePageBgs(1)
        document.getElementById('bgEditorsChoice').value = e.target.value
    }
    const handleChangeBgSafeSearch = (e) => {
        e.preventDefault();
        setBgSafeSearch(e.target.value)
        setActivePageBgs(1)
        document.getElementById('bgSafeSearch').value = e.target.value
    }
    const handleResetBgFilters = () => {
        document.getElementById('bgOrder').value = 'popular'
        document.getElementById('bgType').value = 'photo'
        document.getElementById('bgOrientation').value = 'all'
        document.getElementById('bgCat').value = 'all'
        document.getElementById('bgEditorsChoice').value = 'false'
        document.getElementById('bgSafeSearch').value = 'false'
        setBgOrder('popular')
        setBgType('all')
        setBgOrientation('all')
        setBgCat('all')
        setBgEditorsChoice('false')
        setBgSafeSearch('false')
        document.getElementById('bg-search').value = ''
        setTermBg('')
        setActivePageBgs(1)
    }
    const handleBgFileReader = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (f) {
            const data = f.target.result;                    
            fabric.Image.fromURL(data, function (oImg) {
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
            });
        };
        reader.readAsDataURL(file)
        document.getElementById('bg-file-reader').value = ''
        setSideNavBackgroundImage(false)
    }
    const handleRemoveBackgroundImage = () => {
        canvas.setBackgroundImage(null, canvas.renderAll.bind(canvas)).renderAll();
    }

    const [isLoadingBrandIcons, setIsLoadingBrandIcons] = useState(true)
    const handleSideBrandIcons = () => {
        setSideNav(false)
        setSideSolidIcons(false)
        setSideIcons(true)
        setSideBrandIcons(true)
        setIsLoadingBrandIcons(false)
    }
    const [isLoadingSolidIcons, setIsLoadingSolidIcons] = useState(true)
    const handleSideSolidIcons = () => {
        setSideNav(false)
        setSideBrandIcons(false)
        setSideIcons(true)
        setSideSolidIcons(true)
        setIsLoadingSolidIcons(false)
    }
    const handleSideFillColor = () => {
        setSideFillColor(true)
    }
    const [activeFillColor, setActiveFillColor] = useState('#1F2937')
    const handleFillColor = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('fill', e.target.value)
        setActiveFillColor(e.target.value)
        setSideFillColor(false)
        document.getElementById('obj-color').style.backgroundColor = e.target.value
        document.getElementById('path-color').style.backgroundColor = e.target.value
        document.getElementById('text-color').style.backgroundColor = e.target.value
        canvas.renderAll()
    }
    const handleRemoveFillColor = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('fill', 'transparent')
        setActiveFillColor(null)
        setSideFillColor(false)
        canvas.renderAll()
        document.getElementById('obj-color').style.backgroundColor = ''
        document.getElementById('path-color').style.backgroundColor = ''
        document.getElementById('text-color').style.backgroundColor = ''
    }

    const [patterns, setPatterns] = useState([])
    const [isLoadingPatterns, setIsLoadingPatterns] = useState(true)
    const [termPattern, setTermPattern] = useState('')
    const [activePagePatterns, setActivePagePatterns] = useState(1)
    const [totalPagesPatterns, setTotalPagesPatterns] = useState(1)
    useEffect(() => {
        const patternsPerPage = 20
        fetch(`https://pixabay.com/api/?key=7152709-e8db2b65c8b70d586f502ca13&q=${termPattern}&image_type=all&order=popular&page=${activePagePatterns}&lang=pt`)
        .then(res => res.json())
        .then(data => {
            setPatterns(data.hits)
            const calcularTotalPaginaPatterns = Math.ceil(
				data.totalHits / patternsPerPage
			)
			setTotalPagesPatterns(calcularTotalPaginaPatterns)
        })
        .catch(err => console.log(err))
    }, [termPattern, activePagePatterns])
    const prevPagePatterns = () => {
		const newActivePagePatterns = activePagePatterns - 1
		if (newActivePagePatterns < 1) {
			return
		}
		setActivePagePatterns(newActivePagePatterns)
	}
	const nextPagePatterns = () => {
		const newActivePagePatterns = activePagePatterns + 1
		if (newActivePagePatterns > totalPagesPatterns) {
			return
		}
		setActivePagePatterns(newActivePagePatterns)
	}
    const [sidePattern,  setSidePattern] = useState(false)
    const handleSidePattern = () => {
        setSideNavEffects(false)
        setSidePattern(true)
        setIsLoadingPatterns(false)
    }
    const [sideTexture, setSideTexture] = useState(false)
    const [isTexture, setIsTexture] = useState(true)
    const handleTexture = () => {
        setSideNavEffects(false)
        setSideTexture(true)
        setIsTexture(false)
    }

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('')
    const [imageOrder, setImageOrder] = useState('popular')
    const [imageType, setImageType] = useState('all')
    const [imageOrientation, setImageOrientation] = useState('all')
    const [imageCat, setImageCat] = useState()
    const [imageEditorsChoice, setImageEditorsChoice] = useState(false)
    const [imageSafeSearch, setImageSafeSearch] = useState(false)
    const [activePageImages, setActivePageImages] = useState(1)
    const [totalPagesImages, setTotalPagesImages] = useState(1)
  
    useEffect(() => {
        const imagesPerPage = 20
        fetch(`https://pixabay.com/api/?key=7152709-e8db2b65c8b70d586f502ca13&q=${term}&order=${imageOrder}&image_type=${imageType}&orientation=${imageOrientation}&category=${imageCat}&editors_choice=${imageEditorsChoice}&safesearch=${imageSafeSearch}&page=${activePageImages}&safesearch=true&lang=pt`)
            .then(res => res.json())
            .then(data => {
            setImages(data.hits)
            const calcularTotalPaginaImages = Math.ceil(
				data.totalHits / imagesPerPage
			)
			setTotalPagesImages(calcularTotalPaginaImages)
        })
        .catch(err => console.log(err))
    }, [term, imageType, imageOrientation, imageCat, imageOrder, imageEditorsChoice, imageSafeSearch, activePageImages])
    const prevPageImages = () => {
		const newActivePageImages = activePageImages - 1
		if (newActivePageImages < 1) {
			return
		}
		setActivePageImages(newActivePageImages)
	}
	const nextPageImages = () => {
		const newActivePageImages = activePageImages + 1
		if (newActivePageImages > totalPagesImages) {
			return
		}
		setActivePageImages(newActivePageImages)
	}
    const handleChangeImageOrder = (e) => {
        e.preventDefault();
        setImageOrder(e.target.value)
        setActivePageImages(1)
        document.getElementById('imageOrder').value = e.target.value
    }
    const handleChangeImageType = (e) => {
        e.preventDefault();
        setImageType(e.target.value)
        setActivePageImages(1)
        document.getElementById('imageType').value = e.target.value
    }
    const handleChangeImageOrientation = (e) => {
        e.preventDefault();
        setImageOrientation(e.target.value)
        setActivePageImages(1)
        document.getElementById('imageOrientation').value = e.target.value
    }
    const handleChangeImageCat = (e) => {
        e.preventDefault();
        setImageCat(e.target.value)
        setActivePageImages(1)
        document.getElementById('imageCat').value = e.target.value
    }
    const handleChangeImageEditorsChoice = (e) => {
        e.preventDefault();
        setImageEditorsChoice(e.target.value)
        setActivePageImages(1)
        document.getElementById('imageEditorsChoice').value = e.target.value
    }
    const handleChangeImageSafeSearch = (e) => {
        e.preventDefault();
        setImageSafeSearch(e.target.value)
        setActivePageImages(1)
        document.getElementById('imageSafeSearch').value = e.target.value
    }
    const handleResetImageFilters = () => {
        document.getElementById('imageOrder').value = 'popular'
        document.getElementById('imageType').value = 'photo'
        document.getElementById('imageOrientation').value = 'all'
        document.getElementById('imageCat').value = 'all'
        document.getElementById('imageEditorsChoice').value = 'false'
        document.getElementById('imageSafeSearch').value = 'false'
        setImageOrder('popular')
        setImageType('all')
        setImageOrientation('all')
        setImageCat('all')
        setImageEditorsChoice('false')
        setImageSafeSearch('false')
        document.getElementById('pixabay-search').value = ''
        setTerm('')
        setActivePageImages(1)
    }

    const handlePatternFileReader = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (f) {
            const data = f.target.result; 
            fabric.util.loadImage(data, function(img) {
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
        };
        reader.readAsDataURL(file)
        document.getElementById('pattern-file-reader').value = ''

        setSidePattern(false)
        setIsTexture(false)
        document.getElementById('handle-texture').disabled = false
        setSideTexture(true)
    }
    const handlePatternRepeat = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.fill.repeat = e.target.value
        obj.dirty = true;
        canvas.requestRenderAll()
    }

    const handleSideFontFamily = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        setSideFontFamily(true)
        setActiveFont(obj.fontFamily)
    }
    const handleSideTextSize = () => {
        setSideTextSize(true)
    }
    const handleSideTextFormat = () => {
        setSideTextFormat(true)
    }
    const handleSideTextSpace = () => {
        setSideTextSpace(true)
    }
    const handleSideOpacity = () => {
        setSideOpacity(true)
    }
    const handleSidePosition = () => {
        setSidePosition(true)
    }
    const handleSideControlPosition = () => {
        setSideControlPosition(true)
    }

    const handleSideNav = () => {
        canvas.discardActiveObject()
        canvas.renderAll()
        setSideNavPosts(false)
        setSideNavImg(false)
        setSideNavText(false)
        setSideNav(true)
        setSideNavObj(true)
    }
    const handleSideNavPosts = () => {
        setSideNavObj(false)
        setSideNavImg(false)
        setSideNavText(false)
        setSideNavPosts(true)        
    }
    const handleSideNavObj = () => {
        setSideNavPosts(false)
        setSideNavImg(false)
        setSideNavText(false)
        setSideNavObj(true)
    }
    const handleSideNavImg = () => {
        setSideNavPosts(false)
        setSideNavObj(false)
        setSideNavText(false)
        setIsLoading(false)
        setSideNavImg(true)
    }
    const handleSideNavText = () => {
        setSideNavPosts(false)
        setSideNavObj(false)
        setSideNavImg(false)
        setSideNavText(true)
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const [activeBackgroundColor, setActiveBackgroundColor] = useState('white')
    const handleBackgroundColor = (e) => {
        canvas.setBackgroundColor(e.target.value)
        setActiveBackgroundColor(e.target.value)
        setSideBackgroundColor(false)
        canvas.renderAll()
    }
    const handleRemoveBackgroundColor = () => {
        canvas.setBackgroundColor('transparent')
        setActiveBackgroundColor('transparent')
        setSideBackgroundColor(false)
        canvas.renderAll() 
    }

    const addLine = () => {
        const line = new fabric.Line([canvas.width, 50, 0, 50], {
            strokeWidth: 10,
            objectCaching: false,
            transparentCorners: false
        })
        if(canvas.backgroundColor === '#FFFFFF' && canvas.backgroundImage === null) {
            line.set('stroke', '#000000')
        } else {
            line.set('stroke', '#FFFFFF')
        }
        canvas.add(line).centerObject(line).setActiveObject(line)
        canvas.renderAll()
    }

    const addRect = () => {
        const rect = new fabric.Rect({
            width: canvas.width / 4,
            height: canvas.height / 4,
            objectCaching: false,
            transparentCorners: false
        })
        if(canvas.backgroundColor === '#FFFFFF' && canvas.backgroundImage === null) {
            rect.set('fill', '#000000')
        } else {
            rect.set('fill', '#FFFFFF')
        }
        canvas.add(rect).centerObject(rect).setActiveObject(rect)
        canvas.renderAll()
    }
    const addCircle = () => {
        const circle = new fabric.Circle({
            radius: canvas.width / 4,
            objectCaching: false,
            transparentCorners: false
        })
        if(canvas.backgroundColor === '#FFFFFF' && canvas.backgroundImage === null) {
            circle.set('fill', '#000000')
        } else {
            circle.set('fill', '#FFFFFF')
        }
        canvas.add(circle).centerObject(circle).setActiveObject(circle)
        canvas.renderAll()
    }
    const addTriangle = () => {
        const triangle = new fabric.Triangle({
            width: canvas.width / 4,
            height: canvas.height / 4,
            objectCaching: false,
            transparentCorners: false
        })
        if(canvas.backgroundColor === '#FFFFFF' && canvas.backgroundImage === null) {
            triangle.set('fill', '#000000')
        } else {
            triangle.set('fill', '#FFFFFF')
        }
        canvas.add(triangle).centerObject(triangle).setActiveObject(triangle)
        canvas.renderAll()
    }

    function importAll(r) {
        return r.keys().map(r);
    }
    const solids = importAll(require.context('./svgs/solid', false, /\.(png|jpe?g|svg)$/))
    const brands = importAll(require.context('./svgs/brands', false, /\.(png|jpe?g|svg)$/))
    const addFontAwesome = (e) => {
        fabric.loadSVGFromURL(e.target.src, function(objects, options) {
            var obj = fabric.util.groupSVGElements(objects, options);
            if(canvas.backgroundColor === '#FFFFFF' && canvas.backgroundImage === null) {
                obj.set('fill', '#000000')
            } else {
                obj.set('fill', '#FFFFFF')
            }
            obj.set({
                objectCaching: false,
                transparentCorners: false
            })
            canvas.add(obj).centerObject(obj).setActiveObject(obj).renderAll();            
        })
    }

    const handleImgFileReader = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (f) {
            const data = f.target.result;                    
            fabric.Image.fromURL(data, function (img) {
                img.set({
                    objectCaching: false,
                    transparentCorners: false
                })
                canvas.add(img).centerObject(img).setActiveObject(img).renderAll()
            });
        };
        reader.readAsDataURL(file)
        document.getElementById('img-file-reader').value = ''
    }

    const handleSideFilters = () => {
        setSideFilters(true)

        var obj = canvas.getActiveObject()
        if(!obj) return
        var originalSource = obj._originalElement.currentSrc
        
        var canvasFilterNone = new fabric.StaticCanvas('canvas-filter-none', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            canvasFilterNone.setWidth(oImg.width)
            canvasFilterNone.setHeight(oImg.height)
            canvasFilterNone.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterNone.toDataURL('svg')
        canvasFilterNone.renderAll()

        var canvasFilterInvert = new fabric.StaticCanvas('canvas-filter-invert', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.Invert();
            oImg.applyFilters();
            canvasFilterInvert.setWidth(oImg.width)
            canvasFilterInvert.setHeight(oImg.height)
            canvasFilterInvert.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterInvert.toDataURL('svg')
        canvasFilterInvert.renderAll()

        var canvasFilterGrayscale = new fabric.StaticCanvas('canvas-filter-grayscale', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.Grayscale();
            oImg.applyFilters();
            canvasFilterGrayscale.setWidth(oImg.width)
            canvasFilterGrayscale.setHeight(oImg.height)
            canvasFilterGrayscale.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterGrayscale.toDataURL('svg')
        canvasFilterGrayscale.renderAll()

        var canvasFilterBlur = new fabric.StaticCanvas('canvas-filter-blur', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.Blur({
                blur: parseFloat(0.075)
            });
            oImg.applyFilters();
            canvasFilterBlur.setWidth(oImg.width)
            canvasFilterBlur.setHeight(oImg.height)
            canvasFilterBlur.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterBlur.toDataURL('svg')
        canvasFilterBlur.renderAll()

        var canvasFilterSepia = new fabric.StaticCanvas('canvas-filter-sepia', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.Sepia();
            oImg.applyFilters();
            canvasFilterSepia.setWidth(oImg.width)
            canvasFilterSepia.setHeight(oImg.height)
            canvasFilterSepia.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterSepia.toDataURL('svg')
        canvasFilterSepia.renderAll()
        
        var canvasFilterBlackAndWhite = new fabric.StaticCanvas('canvas-filter-blackandwhite', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.BlackWhite();
            oImg.applyFilters();
            canvasFilterBlackAndWhite.setWidth(oImg.width)
            canvasFilterBlackAndWhite.setHeight(oImg.height)
            canvasFilterBlackAndWhite.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterBlackAndWhite.toDataURL('svg')
        canvasFilterBlackAndWhite.renderAll()

        var canvasFilterBrownie = new fabric.StaticCanvas('canvas-filter-brownie', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.Brownie();
            oImg.applyFilters();
            canvasFilterBrownie.setWidth(oImg.width)
            canvasFilterBrownie.setHeight(oImg.height)
            canvasFilterBrownie.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterBrownie.toDataURL('svg')
        canvasFilterBrownie.renderAll()

        var canvasFilterVintage = new fabric.StaticCanvas('canvas-filter-vintage', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.Vintage();
            oImg.applyFilters();
            canvasFilterVintage.setWidth(oImg.width)
            canvasFilterVintage.setHeight(oImg.height)
            canvasFilterVintage.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterVintage.toDataURL('svg')
        canvasFilterVintage.renderAll()

        var canvasFilterKodachrome = new fabric.StaticCanvas('canvas-filter-kodachrome', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.Kodachrome();
            oImg.applyFilters();
            canvasFilterKodachrome.setWidth(oImg.width)
            canvasFilterKodachrome.setHeight(oImg.height)
            canvasFilterKodachrome.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterKodachrome.toDataURL('svg')
        canvasFilterKodachrome.renderAll()

        var canvasFilterTechnicolor = new fabric.StaticCanvas('canvas-filter-technicolor', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.Technicolor();
            oImg.applyFilters();
            canvasFilterTechnicolor.setWidth(oImg.width)
            canvasFilterTechnicolor.setHeight(oImg.height)
            canvasFilterTechnicolor.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterTechnicolor.toDataURL('svg')
        canvasFilterTechnicolor.renderAll()

        var canvasFilterPolaroid = new fabric.StaticCanvas('canvas-filter-polaroid', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.Polaroid();
            oImg.applyFilters();
            canvasFilterPolaroid.setWidth(oImg.width)
            canvasFilterPolaroid.setHeight(oImg.height)
            canvasFilterPolaroid.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterPolaroid.toDataURL('svg')
        canvasFilterPolaroid.renderAll()

        var canvasFilterPixelate = new fabric.StaticCanvas('canvas-filter-pixelate', {
            width: 128,
            height: 128,
            backgroundColor: null
        })
        fabric.Image.fromURL(originalSource, function(oImg) {
            oImg.set({
                objectCaching: false,
            })
            oImg.set({
                width: oImg.width,
                height: oImg.height,
            })
            oImg.filters[0] = new fabric.Image.filters.Pixelate({
                blocksize: parseInt(10)
            });
            oImg.applyFilters();
            canvasFilterPixelate.setWidth(oImg.width)
            canvasFilterPixelate.setHeight(oImg.height)
            canvasFilterPixelate.add(oImg).centerObject(oImg).renderAll()
        }, { crossOrigin: 'anonymous' })
        canvasFilterPixelate.toDataURL('svg')
        canvasFilterPixelate.renderAll()

    }
    const handleFilterNone = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterInvert = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters.push(new fabric.Image.filters.Invert());
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterGrayscale = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
        obj.filters.push(new fabric.Image.filters.Grayscale());
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterBlur = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
        obj.filters.push(new fabric.Image.filters.Blur({
            blur: parseFloat(0.15)
        }));
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterSepia = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
        obj.filters.push(new fabric.Image.filters.Sepia());
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterBlackAndWhite = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
        obj.filters.push(new fabric.Image.filters.BlackWhite());
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterBrownie = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
        obj.filters.push(new fabric.Image.filters.Brownie());
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterVintage = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
        obj.filters.push(new fabric.Image.filters.Vintage());
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterKodaChrome = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
        obj.filters.push(new fabric.Image.filters.Kodachrome());
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterTechinocolor = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
        obj.filters.push(new fabric.Image.filters.Technicolor());
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterPolaroid = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
        obj.filters.push(new fabric.Image.filters.Polaroid());
        obj.applyFilters();
        canvas.renderAll();
    }
    const handleFilterPixelate = () => {
        var obj = canvas.getActiveObject();
        if (!obj) return;
        obj.filters = [];
        obj.applyFilters();
        canvas.renderAll();
        obj.filters.push(new fabric.Image.filters.Pixelate({
            blocksize: parseInt(10)
        }));
        obj.applyFilters();
        canvas.renderAll();
    }

    const addTitle = () => {
        const text = new fabric.IText('Título', { 
            fontFamily: 'Roboto',
            fontSize: 128,
            lineHeight: 1,
            charSpacing: 0,
            textAlign: 'left',
            opacity: 1,
            objectCaching: false,
            transparentCorners: false
        })
        if(canvas.backgroundColor === '#FFFFFF' && canvas.backgroundImage === null) {
            text.set('fill', '#000000')
        } else {
            text.set('fill', '#FFFFFF')
        }
        canvas.add(text).centerObject(text).setActiveObject(text)
        canvas.renderAll()
        setSideNav(false)
    }
    const addSubTitle = () => {
        const text = new fabric.IText('Subtítulo', { 
            fontFamily: 'Roboto',
            fontSize: 72,
            fontWeight: 'normal',
            lineHeight: 1,
            charSpacing: 0,
            textAlign: 'left',
            opacity: 1,
            objectCaching: false,
            transparentCorners: false
        })
        if(canvas.backgroundColor === '#FFFFFF' && canvas.backgroundImage === null) {
            text.set('fill', '#000000')
        } else {
            text.set('fill', '#FFFFFF')
        }
        canvas.add(text).centerObject(text).setActiveObject(text)
        canvas.renderAll()
    }
    const addText = () => {
        const text = new fabric.IText('O que há de novo?', { 
            fontFamily: 'Roboto',
            fontSize: 32,
            fontWeight: 'normal',
            lineHeight: 1,
            charSpacing: 0,
            textAlign: 'left',
            opacity: 1,
            objectCaching: false,
            transparentCorners: false
        })
        if(canvas.backgroundColor === '#FFFFFF' && canvas.backgroundImage === null) {
            text.set('fill', '#000000')
        } else {
            text.set('fill', '#FFFFFF')
        }
        canvas.add(text).centerObject(text).setActiveObject(text)
        canvas.renderAll()
    }
    const handleTextEdit = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.enterEditing()
        obj.selectAll()
        canvas.renderAll()
    }
    function loadAndUse(font) {
        var myfont = new FontFaceObserver(font)
        myfont.load()
        .then(function() {
            // when font is loaded, use it.
            canvas.getActiveObject().set("fontFamily", font);
            canvas.requestRenderAll();
        }).catch(function(e) {
            console.log(`Erro com a fonte ${font}`)
        });
    }
    const [activeFont, setActiveFont] = useState('Roboto')
    const handleFontFamily = (e) => {
        e.preventDefault()
        if (e.target.value !== 'Roboto') {
            loadAndUse(e.target.value);
        } else {
            canvas.getActiveObject().set("fontFamily", e.target.value);
            canvas.requestRenderAll();
        }
        setActiveFont(e.target.value)
        setSideFontFamily(false)
        canvas.renderAll()
        canvas.requestRenderAll()
    }
    const handleTextSizeRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('text-size-number').value = e.target.value
        obj.set('fontSize', e.target.value)
        obj.set({
            'hasControls': false,
            'hasBorders': false
        })
        canvas.renderAll()
    }
    const handleTextSizeNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('text-size-range').value = e.target.value
        obj.set('fontSize', e.target.value)
        obj.set({
            'hasControls': false,
            'hasBorders': false
        })
        canvas.renderAll()
    }
    const [isBold, setIsBold] = useState('bold')
    const handleFontWeightBold = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('fontWeight', isBold === 'bold' ? '' : 'bold')
        setIsBold(obj.fontWeight)
        canvas.renderAll()
    }
    const [isItalic, setIsItalic] = useState('italic')
    const handleFontStyleItalic = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('fontStyle', isItalic === 'italic' ? '' : 'italic')
        setIsItalic(obj.fontStyle)
        canvas.renderAll()
    }
    const [isUnderline, setIsUnderline] = useState(true)
    const handleFontDecorationUnderline = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('underline', isUnderline === true ? '' : true)
        setIsUnderline(obj.underline)
        canvas.renderAll()
    }
    const [isTextCase, setIsTextCase] = useState(false)
    const handleTextCase = (e) => {
        const active = canvas.getActiveObject();
        if (!active) return;
        const text = active.text;
        setIsTextCase(!isTextCase)
        if(isTextCase === false) {
            active.text = text.toUpperCase();
        } else {
            active.text = text.toLowerCase();
        }
        canvas.requestRenderAll()
    }
    const [textAlign, setTextAlign] = useState('left')
    const handleTextAlignLeft = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('textAlign', 'left')
        setTextAlign('left')
        canvas.renderAll()
    }
    const handleTextAlignCenter = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('textAlign', 'center')
        setTextAlign('center')
        canvas.renderAll()
    }
    const handleTextAlignRight = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('textAlign', 'right')
        setTextAlign('right')
        canvas.renderAll()
    }
    const handleTextAlignJustify = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('textAlign', 'justify')
        setTextAlign('justify')
        canvas.renderAll()
    }
    const handleTextLineHeightRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('text-lineheight-number').value = e.target.value
        obj.set('lineHeight', e.target.value)
        obj.set({
            'hasControls': false,
            'hasBorders': false
        })
        canvas.renderAll()
    }
    const handleTextLineHeightNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('text-lineheight-range').value = e.target.value
        obj.set('lineHeight', e.target.value)
        obj.set({
            'hasControls': false,
            'hasBorders': false
        })
        canvas.renderAll()
    }
    const handleTextCharSpacingRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('text-charspacing-number').value = e.target.value
        obj.set('charSpacing', e.target.value)
        obj.set({
            'hasControls': false,
            'hasBorders': false
        })
        canvas.renderAll()
    }
    const handleTextCharSpacingNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('text-charspacing-range').value = e.target.value
        obj.set('charSpacing', e.target.value)
        obj.set({
            'hasControls': false,
            'hasBorders': false
        })
        canvas.renderAll()
    }
    const handleOpacityRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('opacity-number').value = e.target.value
        obj.set('opacity', e.target.value)
        canvas.renderAll()
    }
    const handleOpacityNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('opacity-range').value = e.target.value
        obj.set('opacity', e.target.value)
        canvas.renderAll()        
    }
    const handleSendBackwards = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        canvas.sendBackwards(obj)
        canvas.requestRenderAll()
    }
    const handleBringForward = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        canvas.bringForward(obj)
        canvas.requestRenderAll()
    }
    const handleSendToBack = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        canvas.sendToBack(obj)
        canvas.requestRenderAll()
    }
    const handleBringToFront = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        canvas.bringToFront(obj)
        canvas.requestRenderAll()
    }
    function process_align(val, activeObj) {
        switch (val) {

        case 'top':
            activeObj.set({
            top: 0
        });
        break;
        case 'center':
            activeObj.set({
            left: (canvas.width / 2) - ((activeObj.width * activeObj.scaleX) / 2)
        });
        break;
        case 'bottom':
            activeObj.set({
            top: canvas.height - (activeObj.height * activeObj.scaleY)
        });
        break;
        case 'left':
            activeObj.set({
            left: 0
        });
        break;
        case 'middle':
            activeObj.set({
            top: (canvas.height / 2) - ((activeObj.height * activeObj.scaleY) / 2)
        });
        break;
        case 'right':
            activeObj.set({
            left: canvas.width - (activeObj.width * activeObj.scaleX)
        });
        break;
        default:
        }
    }
    const handleAlignToTop = () => {
        var activeObj = canvas.getActiveObject() || canvas.getActiveGroup();
        if ('top' !== '' && activeObj) {
            process_align('top', activeObj);
            activeObj.setCoords();
            document.getElementById('position-x-number').value = activeObj.left
            document.getElementById('position-x-range').value = activeObj.left
            document.getElementById('position-y-number').value = activeObj.top
            document.getElementById('position-y-range').value = activeObj.top
            canvas.renderAll();
        } else {
            return false;
        }
    }
    const handleAlignToCenter = () => {
        var activeObj = canvas.getActiveObject() || canvas.getActiveGroup();
        if ('center' !== '' && activeObj) {
        process_align('center', activeObj);
            activeObj.setCoords();
            document.getElementById('position-x-number').value = activeObj.left
            document.getElementById('position-x-range').value = activeObj.left
            document.getElementById('position-y-number').value = activeObj.top
            document.getElementById('position-y-range').value = activeObj.top
            canvas.renderAll();
        } else {
            return false;
        }
    }
    const handleAlignToBottom = () => {
        var activeObj = canvas.getActiveObject() || canvas.getActiveGroup();
        if ('bottom' !== '' && activeObj) {
        process_align('bottom', activeObj);
            activeObj.setCoords();
            document.getElementById('position-x-number').value = activeObj.left
            document.getElementById('position-x-range').value = activeObj.left
            document.getElementById('position-y-number').value = activeObj.top
            document.getElementById('position-y-range').value = activeObj.top
            canvas.renderAll();
        } else {
            return false;
        }
    }
    const handleAlignToLeft = () => {
        var activeObj = canvas.getActiveObject() || canvas.getActiveGroup();
        if ('left' !== '' && activeObj) {
        process_align('left', activeObj);
            activeObj.setCoords();
            document.getElementById('position-x-number').value = activeObj.left
            document.getElementById('position-x-range').value = activeObj.left
            document.getElementById('position-y-number').value = activeObj.top
            document.getElementById('position-y-range').value = activeObj.top
            canvas.renderAll();
        } else {
            return false;
        }
    }
    const handleAlignToMiddle = () => {
        var activeObj = canvas.getActiveObject() || canvas.getActiveGroup();
        if ('middle' !== '' && activeObj) {
        process_align('middle', activeObj);
            activeObj.setCoords();
            document.getElementById('position-x-number').value = activeObj.left
            document.getElementById('position-x-range').value = activeObj.left
            document.getElementById('position-y-number').value = activeObj.top
            document.getElementById('position-y-range').value = activeObj.top
            canvas.renderAll();
        } else {
            return false;
        }
    }
    const handleAlignToRight = () => {
        var activeObj = canvas.getActiveObject() || canvas.getActiveGroup();
        if ('right' !== '' && activeObj) {
        process_align('right', activeObj);
            activeObj.setCoords();
            document.getElementById('position-x-number').value = activeObj.left
            document.getElementById('position-x-range').value = activeObj.left
            document.getElementById('position-y-number').value = activeObj.top
            document.getElementById('position-y-range').value = activeObj.top
            canvas.renderAll();
        } else {
            return false;
        }
    }
    const handlePositionAngleRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('angle', parseInt(e.target.value, 10)).setCoords();
        document.getElementById('position-angle-number').value = e.target.value
        canvas.requestRenderAll()
    }
    const handlePositionAngleNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('angle', parseInt(e.target.value, 10)).setCoords();
        document.getElementById('position-angle-range').value = e.target.value
        canvas.requestRenderAll()
    }
    const handlePositionXRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('position-x-number').value = e.target.value
        obj.set('left', parseInt(e.target.value, 10)).setCoords();
        obj.set({
            'hasControls': false,
            'hasBorders': false
        })
        canvas.requestRenderAll()
    }
    const handlePositionXNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('position-x-range').value = e.target.value
        obj.set('left', parseInt(e.target.value, 10)).setCoords();
        obj.set({
            'hasControls': false,
            'hasBorders': false
        })
        canvas.requestRenderAll()
    }
    const handlePositionYRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('position-y-number').value = e.target.value
        obj.set('top', parseInt(e.target.value, 10)).setCoords();
        obj.set({
            'hasControls': false,
            'hasBorders': false
        })
        canvas.requestRenderAll()
    }
    const handlePositionYNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        document.getElementById('position-y-range').value = e.target.value
        obj.set('top', parseInt(e.target.value, 10)).setCoords();
        obj.set({
            'hasControls': false,
            'hasBorders': false
        })
        canvas.requestRenderAll()
    }
    const handleScaleRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.scale(parseFloat(e.target.value)).setCoords();
        document.getElementById('scale-number').value = e.target.value
        canvas.requestRenderAll()
    }
    const handleScaleNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.scale(parseFloat(e.target.value)).setCoords();
        document.getElementById('scale-range').value = e.target.value
        canvas.requestRenderAll()
    }
    const handleSkewXRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('skewX', parseInt(e.target.value, 10)).setCoords();
        document.getElementById('skew-x-number').value = e.target.value
        canvas.requestRenderAll();
    }
    const handleSkewXNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('skewX', parseInt(e.target.value, 10)).setCoords();
        document.getElementById('skew-x-range').value = e.target.value
        canvas.requestRenderAll();
    }
    const handleSkewYRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('skewY', parseInt(e.target.value, 10)).setCoords();
        document.getElementById('skew-y-number').value = e.target.value
        canvas.requestRenderAll();
    }
    const handleSkewYNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('skewY', parseInt(e.target.value, 10)).setCoords();
        document.getElementById('skew-y-number').value = e.target.value
        canvas.requestRenderAll();
    }

    const addGroup = () => {
        if (!canvas.getActiveObject()) {
            return;
        }
        if (canvas.getActiveObject().type !== 'activeSelection') {
            return;
        }
        canvas.getActiveObject().toGroup();
        setSideMultipleSelection(false)
        setSideSelectionGroup(true)
        canvas.requestRenderAll();
    }
    const removeGroup = () => {
        if (!canvas.getActiveObject()) {
            return;
        }
        if (canvas.getActiveObject().type !== 'group') {
            return;
        }
        canvas.getActiveObject().toActiveSelection()
        setSideCanvas(false)
        setSideSelectionGroup(false)
        setSideMultipleSelection(true)
        canvas.requestRenderAll();
    }

    const handleDelete = (event) => {
        const activeObjects = canvas.getActiveObjects()
        if(!activeObjects) return
        canvas.discardActiveObject()
        if (activeObjects.length) {
            canvas.remove.apply(canvas, activeObjects)
        }
        canvas.renderAll()
    }

    const handleOpenJSONFile = (e) => {
        canvas.clear()
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(f) {
          var data = f.target.result;
          data = JSON.parse(data);
          canvas.loadFromJSON(data);
        };
        reader.readAsText(file)
        e.target.value = ''
        setSideFileMenu(false)
        canvas.renderAll()
    }
    function downloadJSONFile(filename, text) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }
    const handleSaveJSONFile = () => {
        const toJSON = JSON.stringify(canvas.toJSON())
        document.getElementById("text-val").value = toJSON
        const text = document.getElementById("text-val").value;
        const filename = `${new Date().getTime()}.txt`;
        downloadJSONFile(filename, text)
    }

    var _clipboard = false
    function Copy() {
        if(canvas.getActiveObject() === null){
        return;
    }
        canvas.getActiveObject().clone(function(cloned) {
        //push cloned object into clipboard
        _clipboard = cloned;
    });
    }
    function Paste() {

        if(_clipboard === false){
            return;
        }
        // clone again, so you can do multiple copies.
        _clipboard.clone(function(clonedObj) {
            canvas.discardActiveObject();
            clonedObj.set({
                left: clonedObj.left,
                top: clonedObj.top,
                evented: true,
                objectCaching: false,
                transparentCorners: false
            });
            if (clonedObj.type === 'activeSelection') {
                // active selection needs a reference to the canvas.
                clonedObj.canvas = canvas;
                clonedObj.forEachObject(function(obj) {
                canvas.add(obj);
            });
            // this should solve the unselectability
            clonedObj.setCoords();
            } else {
                canvas.add(clonedObj);
            }
            _clipboard.top += 10;
            _clipboard.left += 10;
            canvas.setActiveObject(clonedObj);
            canvas.requestRenderAll();
        });
    }
    const handleDuplicate = () => {
        Copy()
        Paste()
    }

    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = canvas.toDataURL()
        link.download = `${new Date().getTime()}.png`
        link.click()
    }

    const backSelection = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set({
            'hasControls': true,
            'hasBorders': true
        })
        canvas.renderAll()
    }

    const [sideNavEffects, setSideNavEffects] = useState(false)
    const handleSideNavEffects = () => {
        setSideNavEffects(true)
    }
    const handleEffectNone = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set({
            stroke: null,
            shadow: null
        })
        if(canvas.backgroundColor === '#FFFFFF' && canvas.backgroundImage === null) {
            obj.set('fill', '#000000')
        } else {
            obj.set('fill', '#FFFFFF')
        }
        canvas.renderAll()
        document.getElementById('shadow-color').style.backgroundColor = null
        setActiveShadowColor(null)
        document.getElementById('shadow-offset-x-number').disabled = true
        document.getElementById('shadow-offset-x-range').disabled = true
        document.getElementById('shadow-offset-y-number').disabled = true
        document.getElementById('shadow-offset-y-range').disabled = true
        document.getElementById('shadow-blur-number').disabled = true
        document.getElementById('shadow-blur-range').disabled = true
        document.getElementById('stroke-width-number').disabled = true
        document.getElementById('stroke-width-range').disabled = true
        document.getElementById('shadow-offset-x-range').value = 0
        document.getElementById('shadow-offset-x-number').value = 0
        document.getElementById('shadow-offset-y-range').value = 0
        document.getElementById('shadow-offset-y-number').value = 0
        document.getElementById('shadow-blur-number').value = 0
        document.getElementById('shadow-blur-range').value = 0
    }
    const [sideEffectShadow, setSideEffectShadow] = useState(false)
    const handleEffectShadow = () => {
        setSideNavEffects(false)
        setSideEffectShadow(true)
    }
    const [activeShadowColor, setActiveShadowColor] = useState(null)
    const [sideShadowColor, setSideShadowColor] = useState(false)
    const handleSideShadowColor = () => {
        setSideShadowColor(true)
    }
    function setActiveShadow(name, value) {
        var object = canvas.getActiveObject();
        if (!object) return;
        if(object.shadow)
            object.shadow[name] = value;
        else {
            var ob = {};
            ob[name] = value;
            object.set('shadow', new fabric.Shadow(ob))
        }
        object.setCoords();
    }
    var setShadowColor = function (e) {
        setSideShadowColor(false)
        setActiveShadow('color', e.target.value);
        document.getElementById('shadow-offset-x-number').disabled = false
        document.getElementById('shadow-offset-x-range').disabled = false
        document.getElementById('shadow-offset-y-number').disabled = false
        document.getElementById('shadow-offset-y-range').disabled = false
        document.getElementById('shadow-blur-number').disabled = false
        document.getElementById('shadow-blur-range').disabled = false
        canvas.renderAll();
        const obj = canvas.getActiveObject()
        if(!obj) return
        if(obj.shadow) {
            setActiveShadowColor(e.target.value)
            document.getElementById('shadow-color').style.backgroundColor = e.target.value
        } else {
            setActiveShadowColor(null)
            document.getElementById('shadow-color').style.backgroundColor = '#FFFFFF'
        }
    }
    var setShadowOffsetXRange = function (e) {
        const obj = canvas.getActiveObject()
        if(!obj) return
        setActiveShadow('offsetX', e.target.value);
        document.getElementById('shadow-offset-x-number').value = e.target.value
        canvas.renderAll();
    }
    var setShadowOffsetXNumber = function (e) {
        const obj = canvas.getActiveObject()
        if(!obj) return
        setActiveShadow('offsetX', e.target.value);
        document.getElementById('shadow-offset-x-range').value = e.target.value
        canvas.renderAll();
    }
    var setShadowOffsetYRange = function (e) {
        const obj = canvas.getActiveObject()
        if(!obj) return
        setActiveShadow('offsetY', e.target.value);
        document.getElementById('shadow-offset-y-number').value = e.target.value
        canvas.renderAll();
    }
    var setShadowOffsetYNumber = function (e) {
        const obj = canvas.getActiveObject()
        if(!obj) return
        setActiveShadow('offsetY', e.target.value);
        document.getElementById('shadow-offset-y-range').value = e.target.value
        canvas.renderAll();
    }
    var setShadowBlurRange = function (e) {
        const obj = canvas.getActiveObject()
        if(!obj) return
        setActiveShadow('blur', e.target.value);
        document.getElementById('shadow-blur-number').value = e.target.value
        canvas.renderAll();
    }
    var setShadowBlurNumber = function (e) {
        const obj = canvas.getActiveObject()
        if(!obj) return
        setActiveShadow('blur', e.target.value);
        document.getElementById('shadow-blur-range').value = e.target.value
        canvas.renderAll();
    }
    const [sideEffectStroke, setSideEffectStroke] = useState(false)
    const handleEffectStroke = () => {
        setSideNavEffects(false)
        setSideEffectStroke(true)
    }
    const [activeStrokeColor, setActiveStrokeColor] = useState(null)
    const [sideStrokeColor, setSideStrokeColor] = useState(false)
    const handleSideStrokeColor = () => {
        setSideStrokeColor(true)
    }
    const handleStrokeColor = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('stroke', e.target.value)
        setActiveStrokeColor(e.target.value);
        setSideStrokeColor(false)
        document.getElementById('stroke-width-number').disabled = false
        document.getElementById('stroke-width-range').disabled = false
        document.getElementById('stroke-color').style.backgroundColor = e.target.value
        canvas.renderAll();
    }
    const setStrokeWidthNumber = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('strokeWidth', parseInt(e.target.value, 10))
        document.getElementById('stroke-width-range').value = e.target.value
        canvas.renderAll();
    }
    const setStrokeWidthRange = (e) => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        obj.set('strokeWidth', parseInt(e.target.value, 10))
        document.getElementById('stroke-width-number').value = e.target.value
        canvas.renderAll();
    }
    const setGradient = () => {
        const obj = canvas.getActiveObject()
        if(!obj) return
        var gradient = new fabric.Gradient({
            type: 'linear',
            gradientUnits: 'pixels', // or 'percentage'
            coords: { x1: 0, y1: 0, x2: 0, y2: obj.height },
            colorStops:[
                { offset: 0, color: getRandomColor() },
                { offset: 1, color: getRandomColor() }
            ]
        })
        obj.set('fill', gradient)
        canvas.renderAll()
        console.log(gradient)
    }

    useEffect(() => {
        if(!canvas) {
            return
        }

        var canvasEffectNone = new fabric.StaticCanvas('canvas-effects-none', {
            width: 96,
            height: 96,
            backgroundColor: null
        })
        var textEffectNone = new fabric.Text('Aa', { 
            fontFamily: 'Roboto',
            fontSize: 64,
            objectCaching: false
        });
        canvasEffectNone.add(textEffectNone).centerObject(textEffectNone)
        canvasEffectNone.toDataURL('svg')
        canvasEffectNone.renderAll()

        var canvasEffectShadow = new fabric.StaticCanvas('canvas-effects-shadow', {
            width: 96,
            height: 96,
            backgroundColor: null
        })
        var textEffectShadow = new fabric.Text('Aa', { 
            fontFamily: 'Roboto',
            fontSize: 64,
            objectCaching: false
        });
        textEffectShadow.set({
            shadow: 'rgba(0,0,0,0.3) 5px 5px 5px'
        })
        canvasEffectShadow.add(textEffectShadow).centerObject(textEffectShadow)
        canvasEffectShadow.toDataURL('svg')
        canvasEffectShadow.renderAll()

        var canvasEffectBorder = new fabric.StaticCanvas('canvas-effects-border', {
            width: 96,
            height: 96,
            backgroundColor: null
        })
        var textEffectBorder = new fabric.Text('Aa', { 
            fontFamily: 'Roboto',
            fontSize: 64,
            fill: null,
            stroke: '#000000',
            strokeWidth: 1,
            objectCaching: false
        });
        canvasEffectBorder.add(textEffectBorder).centerObject(textEffectBorder)
        canvasEffectBorder.toDataURL('svg')
        canvasEffectBorder.renderAll()

        var canvasEffectGradient = new fabric.StaticCanvas('canvas-effects-gradient', {
            width: 96,
            height: 96,
            backgroundColor: null
        })
        var textEffectGradient = new fabric.Text('Aa', { 
            fontFamily: 'Roboto',
            fontSize: 64,
            objectCaching: false
        });
        var gradient = new fabric.Gradient({
            type: 'linear',
            gradientUnits: 'pixels', // or 'percentage'
            coords: { x1: 0, y1: 0, x2: 0, y2: textEffectGradient.height },
            colorStops:[
                { offset: 0, color: '#000' },
                { offset: 1, color: '#fff'}
            ]
        })
        textEffectGradient.set('fill', gradient)
        canvasEffectGradient.add(textEffectGradient).centerObject(textEffectGradient)
        canvasEffectGradient.toDataURL('svg')
        canvasEffectGradient.renderAll()

        var canvasEffectPattern = new fabric.StaticCanvas('canvas-effects-pattern', {
            width: 96,
            height: 96,
            backgroundColor: null
        })
        var textEffectPattern = new fabric.Text('Aa', { 
            fontFamily: 'Roboto',
            fontSize: 64,
            objectCaching: false
        });
        fabric.util.loadImage(effectPatternImg, function(img) {
            textEffectPattern.set('fill', new fabric.Pattern({
                source: img,
                repeat: 'repeat'
            }));
            canvasEffectPattern.renderAll();
        }, { crossOrigin: 'anonymous' });
        canvasEffectPattern.add(textEffectPattern).centerObject(textEffectPattern)
        canvasEffectPattern.toDataURL('svg')
        canvasEffectPattern.renderAll()

        canvas.on('selection:created', function(options) {
            if (options.target) {
                if(options.target.type === 'line') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideObj(true)
                    document.getElementById('position-x-range').value = options.target.left
                    document.getElementById('position-x-number').value = options.target.left
                    document.getElementById('position-y-range').value = options.target.top
                    document.getElementById('position-y-number').value = options.target.top
                    document.getElementById('opacity-range').value = options.target.opacity
                    document.getElementById('opacity-number').value = options.target.opacity

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    if(options.target.stroke) {
                        document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                        document.getElementById('stroke-width-number').value = options.target.strokeWidth
                        document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    } else {
                        document.getElementById('stroke-width-number').disabled = true
                        document.getElementById('stroke-width-range').disabled = true
                        document.getElementById('stroke-width-number').value = 1
                        document.getElementById('stroke-width-range').value = 1
                    }
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'rect') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideObj(true)

                    document.getElementById('obj-color').style.backgroundColor = options.target.fill
                    setActiveFillColor(options.target.fill)

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    if(options.target.stroke) {
                        document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                        document.getElementById('stroke-width-number').value = options.target.strokeWidth
                        document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    } else {
                        document.getElementById('stroke-width-number').disabled = true
                        document.getElementById('stroke-width-range').disabled = true
                        document.getElementById('stroke-width-number').value = 1
                        document.getElementById('stroke-width-range').value = 1
                    }
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'circle') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideObj(true)

                    document.getElementById('obj-color').style.backgroundColor = options.target.fill
                    setActiveFillColor(options.target.fill)

                    document.getElementById('opacity-range').value = options.target.opacity
                    document.getElementById('opacity-number').value = options.target.opacity

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    if(options.target.stroke) {
                        document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                        document.getElementById('stroke-width-number').value = options.target.strokeWidth
                        document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    } else {
                        document.getElementById('stroke-width-number').disabled = true
                        document.getElementById('stroke-width-range').disabled = true
                        document.getElementById('stroke-width-number').value = 1
                        document.getElementById('stroke-width-range').value = 1
                    }
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'triangle') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideObj(true)

                    document.getElementById('obj-color').style.backgroundColor = options.target.fill
                    setActiveFillColor(options.target.fill)

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    if(options.target.stroke) {
                        document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                        document.getElementById('stroke-width-number').value = options.target.strokeWidth
                        document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    } else {
                        document.getElementById('stroke-width-number').disabled = true
                        document.getElementById('stroke-width-range').disabled = true
                        document.getElementById('stroke-width-number').value = 1
                        document.getElementById('stroke-width-range').value = 1
                    }
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'path') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSideObj(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideIcons(false)
                    setSidePath(true)
                    document.getElementById('path-color').style.backgroundColor = options.target.fill
                    setActiveFillColor(options.target.fill)
                    document.getElementById('opacity-range').value = options.target.opacity
                    document.getElementById('opacity-number').value = options.target.opacity

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    if(options.target.stroke) {
                        document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                        document.getElementById('stroke-width-number').value = options.target.strokeWidth
                        document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    } else {
                        document.getElementById('stroke-width-number').disabled = true
                        document.getElementById('stroke-width-range').disabled = true
                        document.getElementById('stroke-width-number').value = 1
                        document.getElementById('stroke-width-range').value = 1
                    }
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'image') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSideObj(false)
                    setSidePath(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideImg(true)

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    if(options.target.stroke) {
                        document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                        document.getElementById('stroke-width-number').value = options.target.strokeWidth
                        document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    } else {
                        document.getElementById('stroke-width-number').disabled = true
                        document.getElementById('stroke-width-range').disabled = true
                        document.getElementById('stroke-width-number').value = 1
                        document.getElementById('stroke-width-range').value = 1
                    }
                    document.getElementById('opacity-range').value = options.target.opacity
                    document.getElementById('opacity-number').value = options.target.opacity
                    document.getElementById('canvasEffectGradient').style.display = 'none'
                    document.getElementById('canvasEffectPattern').style.display = 'none'
                }
                if(options.target.type === 'i-text') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideText(true)
                    setActiveFillColor(options.target.fill)
                    document.getElementById('text-color').style.backgroundColor = options.target.fill
                    document.getElementById('text-size-range').value = options.target.fontSize
                    document.getElementById('text-size-number').value = options.target.fontSize
                    setIsBold(options.target.fontWeight)
                    setIsItalic(options.target.fontStyle)
                    setIsUnderline(options.target.underline)
                    const active = canvas.getActiveObject();
                    const text = active.text;
                    if(text === text.toUpperCase()) {
                        setIsTextCase(true)
                    } else {
                        setIsTextCase(false)
                    }
                    document.getElementById('scale-range').value = options.target.scaleX
                    document.getElementById('position-x-range').value = options.target.left
                    document.getElementById('position-x-number').value = options.target.left
                    document.getElementById('position-y-range').value = options.target.top
                    document.getElementById('position-y-number').value = options.target.top
                    document.getElementById('text-charspacing-range').value = options.target.charSpacing
                    document.getElementById('text-charspacing-number').value = options.target.charSpacing
                    document.getElementById('text-lineheight-range').value = options.target.lineHeight
                    document.getElementById('text-lineheight-number').value = options.target.lineHeight
                    setTextAlign(options.target.textAlign)
                    document.getElementById('opacity-range').value = options.target.opacity
                    document.getElementById('opacity-number').value = options.target.opacity
                    
                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    if(options.target.stroke) {
                        document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                        document.getElementById('stroke-width-number').value = options.target.strokeWidth
                        document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    } else {
                        document.getElementById('stroke-width-number').disabled = true
                        document.getElementById('stroke-width-range').disabled = true
                        document.getElementById('stroke-width-number').value = 1
                        document.getElementById('stroke-width-range').value = 1
                    }
                    if(options.target.fill instanceof fabric.Pattern) {
                        document.getElementById('handle-texture').disabled = false
                        document.getElementById('pattern-repeat').value = options.target.fill.repeat
                        setIsTexture(false)
                    } else {
                        document.getElementById('handle-texture').disabled = true
                        setIsTexture(true)
                    }
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'activeSelection') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideSelectionGroup(false)
                    setSideMultipleSelection(true)
                }
                if(options.target.type === 'group') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(true)
                }
            }
        })
        canvas.on('selection:updated', function(options) {
            if (options.target) {
                if(options.target.type === 'line') {
                    setSideCanvas(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideObj(true)
                    
                    document.getElementById('position-x-range').value = options.target.left
                    document.getElementById('position-x-number').value = options.target.left
                    document.getElementById('position-y-range').value = options.target.top
                    document.getElementById('position-y-number').value = options.target.top
                    document.getElementById('opacity-range').value = options.target.opacity
                    document.getElementById('opacity-number').value = options.target.opacity

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    document.getElementById('stroke-width-number').value = options.target.strokeWidth
                    document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'rect') {
                    setSideCanvas(false)
                    setSideObj(true)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    document.getElementById('obj-color').style.backgroundColor = options.target.fill
                    setActiveFillColor(options.target.fill)

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    document.getElementById('stroke-width-number').value = options.target.strokeWidth
                    document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'circle') {
                    setSideCanvas(false)
                    setSideObj(true)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    document.getElementById('obj-color').style.backgroundColor = options.target.fill
                    setActiveFillColor(options.target.fill)

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    document.getElementById('stroke-width-number').value = options.target.strokeWidth
                    document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'triangle') {
                    setSideCanvas(false)
                    setSidePath(false)
                    setSideObj(true)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    document.getElementById('obj-color').style.backgroundColor = options.target.fill
                    setActiveFillColor(options.target.fill)

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    document.getElementById('stroke-width-number').value = options.target.strokeWidth
                    document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'path') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSideObj(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSidePath(true)
                    document.getElementById('path-color').style.backgroundColor = options.target.fill
                    setActiveFillColor(options.target.fill)
                    document.getElementById('opacity-range').value = options.target.opacity
                    document.getElementById('opacity-number').value = options.target.opacity

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    document.getElementById('stroke-width-number').value = options.target.strokeWidth
                    document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'image') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSideObj(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSidePath(false)
                    setSideImg(true)

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    document.getElementById('stroke-width-number').value = options.target.strokeWidth
                    document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                    document.getElementById('opacity-range').value = options.target.opacity
                    document.getElementById('opacity-number').value = options.target.opacity
                    document.getElementById('canvasEffectGradient').style.display = 'none'
                    document.getElementById('canvasEffectPattern').style.display = 'none'
                }
                if(options.target.type === 'i-text') {
                    setSideCanvas(false)
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideText(true)
                    document.getElementById('text-color').style.backgroundColor = options.target.fill
                    setActiveFillColor(options.target.fill)
                    document.getElementById('text-size-range').value = options.target.fontSize
                    document.getElementById('text-size-number').value = options.target.fontSize
                    setIsBold(options.target.fontWeight)
                    setIsItalic(options.target.fontStyle)
                    setIsUnderline(options.target.underline)
                    const active = canvas.getActiveObject();
                    const text = active.text;
                    if(text === text.toUpperCase()) {
                        setIsTextCase(true)
                    } else {
                        setIsTextCase(false)
                    }
                    document.getElementById('position-x-range').value = options.target.left
                    document.getElementById('position-x-number').value = options.target.left
                    document.getElementById('position-y-range').value = options.target.top
                    document.getElementById('position-y-number').value = options.target.top
                    document.getElementById('text-charspacing-range').value = options.target.charSpacing
                    document.getElementById('text-charspacing-number').value = options.target.charSpacing
                    document.getElementById('text-lineheight-range').value = options.target.lineHeight
                    document.getElementById('text-lineheight-number').value = options.target.lineHeight
                    setTextAlign(options.target.textAlign)
                    document.getElementById('opacity-range').value = options.target.opacity
                    document.getElementById('opacity-number').value = options.target.opacity

                    if(options.target.shadow) {
                        document.getElementById('shadow-color').style.backgroundColor = options.target.shadow.color
                        setActiveShadowColor(options.target.shadow.color)
                        document.getElementById('shadow-offset-x-number').disabled = false
                        document.getElementById('shadow-offset-x-range').disabled = false
                        document.getElementById('shadow-offset-y-number').disabled = false
                        document.getElementById('shadow-offset-y-range').disabled = false
                        document.getElementById('shadow-blur-number').disabled = false
                        document.getElementById('shadow-blur-range').disabled = false
                        document.getElementById('shadow-offset-x-range').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-x-number').value = options.target.shadow.offsetX
                        document.getElementById('shadow-offset-y-range').value = options.target.shadow.offsetY
                        document.getElementById('shadow-offset-y-number').value = options.target.shadow.offsetY
                        document.getElementById('shadow-blur-number').value = options.target.shadow.blur
                        document.getElementById('shadow-blur-range').value = options.target.shadow.blur
                    } else {
                        document.getElementById('shadow-color').style.backgroundColor = null
                        setActiveShadowColor(null)
                        document.getElementById('shadow-offset-x-number').disabled = true
                        document.getElementById('shadow-offset-x-range').disabled = true
                        document.getElementById('shadow-offset-x-number').value = 0
                        document.getElementById('shadow-offset-x-range').value = 0
                        document.getElementById('shadow-offset-y-number').disabled = true
                        document.getElementById('shadow-offset-y-range').disabled = true
                        document.getElementById('shadow-offset-y-number').value = 0
                        document.getElementById('shadow-offset-y-range').value = 0
                        document.getElementById('shadow-blur-number').disabled = true
                        document.getElementById('shadow-blur-range').disabled = true
                        document.getElementById('shadow-blur-number').value = 0
                        document.getElementById('shadow-blur-range').value = 0
                    }
                    document.getElementById('stroke-width-number').value = options.target.strokeWidth
                    document.getElementById('stroke-width-range').value = options.target.strokeWidth
                    document.getElementById('stroke-color').style.backgroundColor = options.target.stroke
                    if(options.target.fill instanceof fabric.Pattern) {
                        document.getElementById('handle-texture').disabled = false
                        document.getElementById('pattern-repeat').value = options.target.fill.repeat
                        setIsTexture(false)
                    } else {
                        document.getElementById('handle-texture').disabled = true
                        setIsTexture(true)
                    }
                    document.getElementById('canvasEffectGradient').style.display = 'block'
                    document.getElementById('canvasEffectPattern').style.display = 'block'
                }
                if(options.target.type === 'group') {
                    setSideNav(false)
                    setSideCanvas(false)
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(true)
                }
            }
        })
        canvas.on('before:selection:cleared', function(options) {
            if (options.target) {
                if(options.target.type === 'line') {
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideCanvas(true)
                }
                if(options.target.type === 'rect') {
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideCanvas(true)
                }
                if(options.target.type === 'circle') {
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideCanvas(true)
                }
                if(options.target.type === 'triangle') {
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideCanvas(true)
                }
                if(options.target.type === 'path') {
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideCanvas(true)
                }
                if(options.target.type === 'image') {
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideCanvas(true)
                }
                if(options.target.type === 'i-text') {
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideCanvas(true)
                }
                if(options.target.type === 'activeSelection') {
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideSelectionGroup(false)
                    setSideMultipleSelection(false)
                    setSideCanvas(true)
                }
                if(options.target.type === 'group') {
                    setSideObj(false)
                    setSidePath(false)
                    setSideImg(false)
                    setSideText(false)
                    setSideMultipleSelection(false)
                    setSideSelectionGroup(false)
                    setSideCanvas(true)
                }
            }
        })
    }, [canvas])

    return (
        <>
            <div className='flex flex-col w-full h-screen overflow-hidden'>
                <div className='fixed flex items-center justify-between w-full px-4 h-14 bg-truegray-800 text-white z-50'>
                    <a href='/' className='rounded p-2 hover:bg-white hover:bg-opacity-10'>
                        <HomeRoundedIcon className='block w-6 h-6' />
                    </a>
                    <div className='relative'>
                    <button
                        onClick={handleFileMenu}
                        className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                    >
                        <span className='font-medium text-sm font-roboto'>Arquivo</span>
                    </button>

                    <div className={`${sideFileMenu ? 'block' : 'hidden'} origin-top-right absolute left-0 mt-2 w-48 rounded-b shadow-lg py-1 bg-truegray-800 ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        <button
                            className='w-full flex px-4 py-2 text-sm text-white text-opacity-75 hover:bg-white hover:bg-opacity-10'
                        >
                            Novo
                        </button>
                        <hr className='opacity-30 my-1' />
                        <input type="file" id='open-json-file' onChange={handleOpenJSONFile} className='hidden' />
                        <label
                            htmlFor='open-json-file'
                            className='cursor-pointer w-full flex px-4 py-2 text-sm text-white text-opacity-75 hover:bg-white hover:bg-opacity-10'
                        >
                            Abrir JSON
                        </label>
                        <button
                            onClick={handleSaveJSONFile}
                            className='w-full flex px-4 py-2 text-sm text-white text-opacity-75 hover:bg-white hover:bg-opacity-10'
                        >
                            Salvar JSON
                        </button>
                    </div>
                    
                    </div>
                    <button
                        onClick={() => canvas.undo()}
                        className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                    >
                        <UndoRoundedIcon className='block w-6 h-6' />
                    </button>
                    <button
                        onClick={() => canvas.redo()}
                        className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                    >
                        <RedoRoundedIcon className='block w-6 h-6' />
                    </button>
                    <div className='ml-auto flex items-center'>
                        <button
                            onClick={() => { handleDownload(); setSideFileMenu(false); }}
                            className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                        >
                            <DownloadRoundedIcon className='block w-6 h-6' />
                        </button>
                        <button 
                            className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                            onClick={() => { setSideForm(true); setSideFileMenu(false); }}
                        >
                            <MoreHorizRoundedIcon className='block w-6 h-6' />
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full h-full overflow-hidden bg-truegray-200 p-4 sm:p-32 md:p-64 z-10' onClick={() => setSideFileMenu(false)}>
                    <div className='-mt-2 editor'><canvas id='canvas' className='shadow-xl' /></div>
                    {canvas && null}
                </div>
                <div className='fixed top-auto bottom-0 flex items-center w-full pr-4 h-16 bg-truegray-800 text-white z-50' onClick={() => setSideFileMenu(false)}>
                    
                    <div className={`${sideCanvas ? 'flex items-center' : 'hidden'}`}>
                        <button
                            onClick={handleSideBackgroundColor}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideBackgroundColor ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <div 
                                className='p-2.5 border border-white' 
                                style={{
                                    background: canvas.backgroundColor
                                }}    
                            />
                            <span className='mt-1 font-medium text-xs'>Cor</span>
                        </button>
                        <button
                            onClick={handleSideNavBackgroundImage}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideNavBackgroundImage ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <ImageRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Imagem</span>
                        </button>
                    </div>

                    <div className={`${sideMultipleSelection ? 'flex items-center' : 'hidden'}`}>
                        <button
                            onClick={handleDelete}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5`}
                        >
                            <DeleteRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Excluir</span>
                        </button>
                        <button
                            onClick={handleDuplicate}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5 focus:bg-transparent`}
                        >
                            <FileCopyRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Duplicar</span>
                        </button>
                        <button
                            onClick={addGroup}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5 focus:bg-transparent`}
                        >
                            <GroupWorkRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Agrupar</span>
                        </button>
                    </div>

                    <div className={`${sideSelectionGroup ? 'flex items-center' : 'hidden'}`}>
                        <button
                            onClick={handleDelete}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5`}
                        >
                            <DeleteRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Excluir</span>
                        </button>
                        <button
                            onClick={handleDuplicate}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5 focus:bg-transparent`}
                        >
                            <FileCopyRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Duplicar</span>
                        </button>
                        <button
                            onClick={removeGroup}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5 focus:bg-transparent`}
                        >
                            <WorkspacesRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs truncate w-3/4'>Desagrupar</span>
                        </button>
                        <button
                            onClick={handleSidePosition}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideFontFamily ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <VerticalAlignCenterRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Posição</span>
                        </button>
                        <button
                            onClick={handleSideControlPosition}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideControlPosition ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <ControlCameraRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Ajustar</span>
                        </button>
                        <button
                            onClick={handleSideOpacity}
                            className={`flex flex-col items-center justify-center py-2 h-16 ${sideOpacity ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <OpacityRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs truncate w-3/4`}>Transparência</span>
                        </button>
                    </div>

                    <div className={`${sideObj ? 'flex' : 'hidden'} overflow-x-auto`}>
                        <button
                            onClick={handleDelete}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5`}
                        >
                            <DeleteRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Excluir</span>
                        </button>
                        <button
                            onClick={handleDuplicate}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5 focus:bg-transparent`}
                        >
                            <FileCopyRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Duplicar</span>
                        </button>
                        <button
                            onClick={handleSideFillColor}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideFillColor ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <div 
                                id='obj-color'
                                className='p-2.5 border border-white' 
                            />
                            <span className='mt-1 font-medium text-xs'>Cor</span>
                        </button>
                        <button
                            onClick={handleSidePosition}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideFontFamily ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <VerticalAlignCenterRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Posição</span>
                        </button>
                        <button
                            onClick={handleSideControlPosition}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideControlPosition ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <ControlCameraRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Ajustar</span>
                        </button>
                        <button
                            onClick={handleSideNavEffects}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideTextSpace ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <AutoAwesomeRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Efeitos</span>
                        </button>
                        <button
                            onClick={handleSideOpacity}
                            className={`flex flex-col items-center justify-center py-2 h-16 ${sideOpacity ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <OpacityRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs truncate w-3/4`}>Transparência</span>
                        </button>
                    </div>

                    <div className={`${sidePath ? 'flex' : 'hidden'} overflow-x-auto`}>
                    <button
                            onClick={handleDelete}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5`}
                        >
                            <DeleteRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Excluir</span>
                        </button>
                        <button
                            onClick={handleDuplicate}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5 focus:bg-transparent`}
                        >
                            <FileCopyRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Duplicar</span>
                        </button>
                        <button
                            onClick={handleSideFillColor}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideFillColor ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <div 
                                id='path-color'
                                className='p-2.5 border border-white' 
                            />
                            <span className='mt-1 font-medium text-xs'>Cor</span>
                        </button>
                        <button
                            onClick={handleSidePosition}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideFontFamily ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <VerticalAlignCenterRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Posição</span>
                        </button>
                        <button
                            onClick={handleSideControlPosition}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideControlPosition ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <ControlCameraRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Ajustar</span>
                        </button>
                        <button
                            onClick={handleSideNavEffects}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideNavEffects ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <AutoAwesomeRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Efeitos</span>
                        </button>
                        <button
                            onClick={handleSideOpacity}
                            className={`flex flex-col items-center justify-center py-2 h-16 ${sideOpacity ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <OpacityRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs truncate w-3/4`}>Transparência</span>
                        </button>
                    </div>

                    <div className={`${sideImg ? 'flex' : 'hidden'} overflow-x-auto`}>
                        <button
                            onClick={handleSideFilters}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideFilters ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <FilterAltRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Filtros</span>
                        </button>
                        <button
                            onClick={handleDelete}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5`}
                        >
                            <DeleteRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Excluir</span>
                        </button>
                        <button
                            onClick={handleDuplicate}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5 focus:bg-transparent`}
                        >
                            <FileCopyRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Duplicar</span>
                        </button>
                        <button
                            onClick={handleSidePosition}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideFontFamily ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <VerticalAlignCenterRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Posição</span>
                        </button>
                        <button
                            onClick={handleSideControlPosition}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideControlPosition ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <ControlCameraRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Ajustar</span>
                        </button>
                        <button
                            onClick={handleSideNavEffects}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideNavEffects ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <AutoAwesomeRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Efeitos</span>
                        </button>
                        <button
                            onClick={handleSideOpacity}
                            className={`flex flex-col items-center justify-center py-2 h-16 ${sideOpacity ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <OpacityRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs truncate w-3/4`}>Transparência</span>
                        </button>
                    </div>

                    <div className={`${sideText ? 'flex' : 'hidden'} overflow-x-auto`}>
                        <button
                            onClick={handleTextEdit}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5 focus:bg-transparent`}
                        >
                            <EditRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Editar</span>
                        </button>
                        <button
                            onClick={handleDelete}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5`}
                        >
                            <DeleteRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Excluir</span>
                        </button>
                        <button
                            onClick={handleDuplicate}
                            className={`flex flex-col items-center justify-center p-2 h-16 hover:bg-white hover:bg-opacity-5 focus:bg-transparent`}
                        >
                            <FileCopyRoundedIcon className='block w-6 h-6' />
                            <span className='mt-1 font-medium text-xs'>Duplicar</span>
                        </button>
                        <button
                            onClick={handleSideFillColor}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideFillColor ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <div 
                                id='text-color'
                                className='p-2.5 border border-white' 
                            />
                            <span className='mt-1.5 font-medium text-xs'>Cor</span>
                        </button>
                        <button
                            onClick={handleSideFontFamily}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideFontFamily ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <TextFieldsRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Fonte</span>
                        </button>
                        <button
                            onClick={handleSideTextSize}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideTextSize ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <HeightRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Tamanho</span>
                        </button>
                        <button
                            onClick={handleSideTextFormat}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideTextFormat ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <FormatBoldRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Formato</span>
                        </button>
                        <button
                            onClick={handleSidePosition}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideFontFamily ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <VerticalAlignCenterRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Posição</span>
                        </button>
                        <button
                            onClick={handleSideControlPosition}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideControlPosition ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <ControlCameraRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Ajustar</span>
                        </button>
                        <button
                            onClick={handleSideTextSpace}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideTextSpace ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <SpaceBarRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Espaço</span>
                        </button>
                        <button
                            onClick={handleSideNavEffects}
                            className={`flex flex-col items-center justify-center p-2 h-16 ${sideTextSpace ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <AutoAwesomeRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs`}>Efeitos</span>
                        </button>
                        <button
                            onClick={handleSideOpacity}
                            className={`flex flex-col items-center justify-center py-2 h-16 ${sideOpacity ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        >
                            <OpacityRoundedIcon className='block w-6 h-6' />
                            <span className={`mt-1 font-medium text-xs truncate w-3/4`}>Transparência</span>
                        </button>
                    </div>
                    
                    <div className='ml-auto flex items-center'>
                        <div className='flex items-center ml-4'>
                            <button
                                onClick={handleSideNav}
                                className='animate-pulse rounded-full p-3 text-truegray-800 bg-white hover:bg-white hover:bg-opacity-75'
                            >
                                <AddRoundedIcon className='block w-6 h-6' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${sideForm ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sideform" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sideform" aria-hidden="true" onClick={() => setSideForm(false)} />
                    <div className="fixed inset-y-0 max-w-full flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Propagandas 0.8</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => setSideForm(false)}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="h-full flex flex-col overflow-y-scroll p-4">
                                <span>A Versão 1.0 em breve estará finalizada!</span>
                                <span>Obrigado pela visita e paciência!</span>
                                <span className='mt-5 text-3xl font-great-vibes'>Cesar Oliveira</span>
                                <textarea id='text-val' className='mt-5 border rounded hidden' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideBackgroundColor ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidebackgroundcolor" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidebackgroundcolor" aria-hidden="true" onClick={() => setSideBackgroundColor(false)} />
                    <div className="fixed inset-y-0 max-w-full flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Cor de Fundo</span>
                                <div className='ml-auto flex items-center'>
                                    <button 
                                        className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                        onClick={handleRemoveBackgroundColor}
                                    >
                                        <DeleteRoundedIcon className='block w-6 h-6' />
                                    </button>
                                    <button 
                                        className='ml-2 rounded p-2 hover:bg-black hover:bg-opacity-10'
                                        onClick={() => setSideBackgroundColor(false)}
                                    >
                                        <CloseRoundedIcon className='block w-6 h-6' />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full h-full overflow-y-scroll p-4">
                                <ChangeBackGroundColor handleBackgroundColor={handleBackgroundColor} activeBackgroundColor={activeBackgroundColor} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideNavBackgroundImage ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidenav" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidenav" aria-hidden="true" onClick={() => setSideNavBackgroundImage(false)} />
                    <div className="fixed inset-y-0 w-full flex">
                        <div className="flex flex-col relative w-screen bg-truegray-800 text-white text-opacity-75">
                            <div className='flex items-center justify-between w-full px-4 h-20'>
                                <span className='font-medium text-lg'>
                                    {sideNavBackgroundImage && 'Imagem de Fundo'}
                                </span>
                                <div className='ml-auto'>
                                    {sideNavBackgroundImage && (
                                        <>
                                            <input 
                                                id="bg-file-reader" 
                                                type="file" 
                                                accept="image/*" 
                                                className='hidden'
                                                onChange={handleBgFileReader} 
                                            />
                                            <label
                                                htmlFor='bg-file-reader'
                                                className='cursor-pointer rounded p-2 hover:bg-white hover:bg-opacity-10'
                                            >
                                                <AddPhotoAlternateRoundedIcon className='block w-6 h-6' />
                                            </label>
                                        </>
                                    )}
                                    {canvas.backgroundImage && (
                                        <button 
                                            className='ml-2 rounded p-2 hover:bg-black hover:bg-opacity-10'
                                            onClick={handleRemoveBackgroundImage}
                                        >
                                            <DeleteRoundedIcon className='block w-6 h-6' />
                                        </button>
                                    )}
                                    <button 
                                        className='ml-2 rounded p-2 hover:bg-white hover:bg-opacity-10'
                                        onClick={() => setSideNavBackgroundImage(false)}
                                    >
                                        <CloseRoundedIcon className='block w-6 h-6' />
                                    </button>
                                </div>
                            </div>
                            {sideNavBackgroundImage && (
                                <>
                                    <div className='mt-3 px-4'>
                                        <BgSearch searchTextBg={(text) => setTermBg(text)} setActivePageBgs={setActivePageBgs} />
                                    </div>
                                    <div className='mb-3 px-4 flex items-center'>
                                        <div className='flex items-center overflow-x-auto'>
                                            <select 
                                                id='bgOrder'
                                                value={bgOrder}
                                                onChange={handleChangeBgOrder} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option disabled className='text-truegray-800'>Ordem</option>
                                                <option value='popular' className='text-truegray-800'>Popular</option>
                                                <option value='latest' className='text-truegray-800'>Recentes</option>
                                            </select>
                                            <select  
                                                id='bgType'
                                                value={bgType}
                                                onChange={handleChangeBgType} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option disabled className='text-truegray-800'>Imagens</option>
                                                <option value='all' className='text-truegray-800'>Todas</option>
                                                <option value='photo' className='text-truegray-800'>Fotos</option>
                                                <option value='vector' className='text-truegray-800'>Vetores</option>
                                                <option value='illustration' className='text-truegray-800'>Ilustrações</option>
                                            </select>
                                            <select  
                                                id='bgOrientation'
                                                value={bgOrientation}
                                                onChange={handleChangeBgOrientation} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option disabled className='text-truegray-800'>Orientação</option>
                                                <option value='all' className='text-truegray-800'>Qualquer</option>
                                                <option value='horizontal' className='text-truegray-800'>Horizontal</option>
                                                <option value='vertical' className='text-truegray-800'>Vertical</option>
                                            </select>
                                            <select  
                                                id='bgCat'
                                                value={bgCat}
                                                onChange={handleChangeBgCat} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option value='' disabled className='text-truegray-800'>Categoria</option>
                                                <option value='all' className='text-truegray-800'>Todas</option>
                                                <option value='food' className='text-truegray-800'>Alimentos/Bebidas</option>
                                                <option value='animals' className='text-truegray-800'>Animais</option>
                                                <option value='buildings' className='text-truegray-800'>Arquitetura/Edifícios</option>
                                                <option value='fashion' className='text-truegray-800'>Beleza/Moda</option>
                                                <option value='science' className='text-truegray-800'>Ciência/Tecnologia</option>
                                                <option value='computer' className='text-truegray-800'>Computação/Comunicação</option>
                                                <option value='education' className='text-truegray-800'>Educação</option>
                                                <option value='feelings' className='text-truegray-800'>Emoções</option>
                                                <option value='sports' className='text-truegray-800'>Esportes</option>
                                                <option value='industry' className='text-truegray-800'>Indústria/Ofício</option>
                                                <option value='places' className='text-truegray-800'>Lugares/Monumentos</option>
                                                <option value='music' className='text-truegray-800'>Música</option>
                                                <option value='nature' className='text-truegray-800'>Natureza/Paisagens</option>
                                                <option value='business' className='text-truegray-800'>Negócios/Finanças</option>
                                                <option value='people' className='text-truegray-800'>Pessoas</option>
                                                <option value='backgrounds' className='text-truegray-800'>Fundo/Texturas</option>
                                                <option value='religion' className='text-truegray-800'>Religião</option>
                                                <option value='health' className='text-truegray-800'>Saúde/Medicinal</option>
                                                <option value='transportation' className='text-truegray-800'>Transporte/Tráfego</option>
                                                <option value='travel' className='text-truegray-800'>Viagem/Férias</option>
                                            </select>
                                            <select  
                                                id='bgEditorsChoice'
                                                value={bgEditorsChoice}
                                                onChange={handleChangeBgEditorsChoice} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option value='' disabled className='text-truegray-800'>Destaques</option>
                                                <option value='true' className='text-truegray-800'>Sim</option>
                                                <option value='false' className='text-truegray-800'>Não</option>
                                            </select>
                                            <select  
                                                id='bgSafeSearch'
                                                value={bgSafeSearch}
                                                onChange={handleChangeBgSafeSearch} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option value='' disabled className='text-truegray-800'>+ 18</option>
                                                <option value='true' className='text-truegray-800'>Sim</option>
                                                <option value='false' className='text-truegray-800'>Não</option>
                                            </select>
                                            <button
                                                onClick={handleResetBgFilters}
                                                className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                                            >
                                                Resetar
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="px-4 h-full flex flex-col overflow-y-auto">
                                <div className={`${sideNavBackgroundImage ? 'flex flex-col' : 'hidden'}`}>
                                    <div className="w-full">
                                        {!isLoadingBg && bg.length === 0 && <h1 className="text-sm font-medium">Nenhuma imagem encontrada.</h1>}
                                        {isLoadingBg ? (
                                                <span className="text-sm font-medium">Carregando...</span> 
                                            ) : (
                                                <>
                                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                        {bg.map(image => <BgCard key={image.id} image={image} canvas={canvas} process_align={process_align} setSideNavBackgroundImage={setSideNavBackgroundImage} />)}
                                                    </div>
                                                    <div className='w-full flex items-center justify-center my-5'>
                                                        {activePageBgs > 1 && (
                                                            <button 
                                                                className='rounded p-2 mr-2 text-truegray-800 bg-white hover:bg-white hover:bg-opacity-75' 
                                                                onClick={prevPageBgs}
                                                            >
                                                                <ArrowBackIosRoundedIcon className='block w-6 h-6' />
                                                            </button>
                                                        )}

                                                        {activePageBgs < totalPagesBgs && (
                                                            <button 
                                                                className='rounded p-2 text-truegray-800 bg-white hover:bg-white hover:bg-opacity-75' 
                                                                onClick={nextPageBgs}
                                                            >
                                                                <ArrowForwardIosRoundedIcon className='block w-6 h-6' />
                                                            </button>
                                                        )}
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideIcons ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sideicons" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sideicons" aria-hidden="true" onClick={() => setSideIcons(false)} />
                    <div className="fixed inset-y-0 w-full flex">
                        <div className="flex flex-col relative w-screen bg-truegray-800 text-white text-opacity-75">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>
                                    {sideBrandIcons && 'Ícones de Marca'}
                                    {sideSolidIcons && 'Ícones Sólidos'}
                                </span>
                                <button 
                                    className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                                    onClick={() => {setSideIcons(false); setSideNav(true); setSideNavObj(true)}}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="p-4 h-full flex flex-col overflow-y-auto">
                                <div className={`${sideBrandIcons ? 'flex' : 'hidden'}`}>
                                    {!isLoadingBrandIcons && brands.length === 0 && <h1 className="text-sm font-medium">Nenhum ícone encontrado.</h1>}
                                    {isLoadingBrandIcons ? (
                                        <>
                                            <span className="text-sm font-medium">Carregando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <div className='w-full grid grid-cols-6 items-center'>
                                                {brands.map((icon, index) => (
                                                    <div key={index} className='p-2 md:p-5 flex items-center justify-center'>
                                                        <img 
                                                            alt=''
                                                            src={icon.default}
                                                            onClick={addFontAwesome}
                                                            className='w-full h-16 filter invert hover:opacity-75 cursor-pointer'
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className={`${sideSolidIcons ? 'flex' : 'hidden'}`}>
                                    {!isLoadingSolidIcons && solids.length === 0 && <h1 className="text-sm font-medium">Nenhum ícone encontrado.</h1>}
                                    {isLoadingSolidIcons ? (
                                        <>
                                            <span className="text-sm font-medium">Carregando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <div className='w-full grid grid-cols-6 items-center'>
                                                {solids.map((icon, index) => (
                                                    <div key={index} className='p-2 md:p-5 flex items-center justify-center'>
                                                        <img 
                                                            alt=''
                                                            src={icon.default}
                                                            onClick={addFontAwesome}
                                                            className='w-full h-16 filter invert hover:opacity-75 cursor-pointer'
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideFilters ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidefilters" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidefilters" aria-hidden="true" onClick={() => {setSideFilters(false);}} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Filtros</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => setSideFilters(false)}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex items-center overflow-x-auto p-4">
                                    <div className='flex flex-col items-center filters'>
                                        <button onClick={handleFilterNone}>
                                            <canvas id='canvas-filter-none' className='w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Normal</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterInvert}>
                                            <canvas id='canvas-filter-invert' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Inverter</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterGrayscale}>
                                            <canvas id='canvas-filter-grayscale' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Desaturação</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterBlur}>
                                            <canvas id='canvas-filter-blur' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Desfocar</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterSepia}>
                                            <canvas id='canvas-filter-sepia' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Sepia</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterBlackAndWhite}>
                                            <canvas id='canvas-filter-blackandwhite' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Preto e Branco</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterBrownie}>
                                            <canvas id='canvas-filter-brownie' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Chocolate</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterVintage}>
                                            <canvas id='canvas-filter-vintage' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Vintage</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterKodaChrome}>
                                            <canvas id='canvas-filter-kodachrome' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>KodaChrome</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterTechinocolor}>
                                            <canvas id='canvas-filter-technicolor' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Techinocolor</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterPolaroid}>
                                            <canvas id='canvas-filter-polaroid' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Polaroid</span>
                                        </button>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button onClick={handleFilterPixelate}>
                                            <canvas id='canvas-filter-pixelate' className='ml-2 w-full h-full m-auto cursor-pointer' />
                                            <span className='mt-1 font-medium text-xs'>Pixels</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideFillColor ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidefillcolor" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidefillcolor" aria-hidden="true" onClick={() => setSideFillColor(false)} />
                    <div className="fixed inset-y-0 max-w-full flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Cor</span>
                                <div className='ml-auto'>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={handleRemoveFillColor}
                                >
                                    <DeleteRoundedIcon className='block w-6 h-6' />
                                </button>
                                <button 
                                    className='ml-2 rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => setSideFillColor(false)}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                                </div>
                            </div>
                            <div className="h-full flex flex-col overflow-y-scroll p-4">
                                <ChangeFillColor handleFillColor={handleFillColor} activeFillColor={activeFillColor} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sidePattern ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidepattern" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidepattern" aria-hidden="true" onClick={() => setSidePattern(false)} />
                    <div className="fixed inset-y-0 w-full flex">
                        <div className="flex flex-col relative w-screen bg-truegray-800 text-white text-opacity-75">
                            <div className='flex items-center justify-between w-full px-4 h-20'>
                                <span className='font-medium text-lg'>
                                    {sidePattern && 'Textura'}
                                </span>
                                <button 
                                    className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                                    onClick={() => {setSidePattern(false); setSideNavEffects(true)}}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            {sidePattern && (
                                <>
                                    <div className='mt-3 px-4'>
                                        <PatternSearch searchPattern={(textPattern) => setTermPattern(textPattern)} setActivePagePatterns={setActivePagePatterns} />
                                    </div>
                                </>
                            )}
                            <div className="px-4 h-full flex flex-col overflow-y-auto">
                                <div className={`${sidePattern ? 'flex flex-col' : 'hidden'}`}>
                                    <input 
                                        id="pattern-file-reader" 
                                        type="file" 
                                        accept="image/*" 
                                        className='w-full truncate'
                                        onChange={handlePatternFileReader} 
                                    />
                                    <hr className='my-3' />
                                    <div className="w-full">
                                        {!isLoadingPatterns && images.length === 0 && <h1 className="text-sm font-medium">Nenhuma imagem encontrada.</h1>}
                                        {isLoadingPatterns ? (
                                                <span className="text-sm font-medium">Carregando...</span> 
                                            ) : (
                                                <>
                                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                        {patterns.map(image => (
                                                            <PatternCard 
                                                                key={image.id} 
                                                                image={image} 
                                                                canvas={canvas} 
                                                                setSidePattern={setSidePattern} 
                                                                setIsTexture={setIsTexture} 
                                                                setSideTexture={setSideTexture} 
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className='w-full flex items-center justify-center my-5'>
                                                        {activePagePatterns > 1 && (
                                                            <button 
                                                                className='rounded p-2 mr-2 text-truegray-800 bg-white hover:bg-white hover:bg-opacity-75' 
                                                                onClick={prevPagePatterns}
                                                            >
                                                                <ArrowBackIosRoundedIcon className='block w-6 h-6' />
                                                            </button>
                                                        )}

                                                        {activePagePatterns < totalPagesPatterns && (
                                                            <button 
                                                                className='rounded p-2 text-truegray-800 bg-white hover:bg-white hover:bg-opacity-75' 
                                                                onClick={nextPagePatterns}
                                                            >
                                                                <ArrowForwardIosRoundedIcon className='block w-6 h-6' />
                                                            </button>
                                                        )}
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideFontFamily ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidefontfamily" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidefontfamily" aria-hidden="true" onClick={() => setSideFontFamily(false)} />
                    <div className="fixed inset-y-0 max-w-full flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Fontes</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => setSideFontFamily(false)}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="h-full flex flex-col overflow-y-scroll p-4">
                                <span className='font-medium font-sans text-sm text-truegray-500 pb-2 border-b'>Sans Serif</span>
                                {fontsSansSerif.map((font, index) => (
                                    <button
                                        key={font.id} 
                                        type='button' 
                                        className={`flex items-center justify-between w-full py-3 font-medium text-xl font-${font.family} cursor-pointer bg-transparent`}
                                        value={font.value} 
                                        onClick={handleFontFamily}
                                    >
                                        {font.value}
                                        {activeFont === font.value ? <CheckRoundedIcon className='block w-6 h-6 text-green-600' /> : undefined}
                                    </button>
                                ))}

                                <span className='mt-3 font-medium font-serif text-sm text-truegray-500 pb-2 border-b'>Serif</span>
                                {fontsSerif.map((font, id) => (
                                    <button
                                        key={font.id} 
                                        type='button' 
                                        className={`flex items-center justify-between w-full py-3 font-medium text-xl font-${font.family} cursor-pointer bg-transparent`}
                                        value={font.value} 
                                        onClick={handleFontFamily}
                                    >
                                        {font.value}
                                        {activeFont === font.value ? <CheckRoundedIcon className='block w-6 h-6 text-green-600' /> : undefined}
                                    </button>
                                ))}

                                <span className='mt-3 font-medium font-serif text-sm text-truegray-500 pb-2 border-b'>Display</span>
                                {fontsDisplay.map((font, id) => (
                                    <button
                                        key={font.id} 
                                        type='button' 
                                        className={`flex items-center justify-between w-full py-3 font-medium text-xl font-${font.family} cursor-pointer bg-transparent`}
                                        value={font.value} 
                                        onClick={handleFontFamily}
                                    >
                                        {font.value}
                                        {activeFont === font.value ? <CheckRoundedIcon className='block w-6 h-6 text-green-600' /> : undefined}
                                    </button>
                                ))}

                                <span className='mt-3 font-medium font-serif text-sm text-truegray-500 pb-2 border-b'>Handwriting</span>
                                {fontsHandwriting.map((font, id) => (
                                    <button
                                        key={font.id} 
                                        type='button' 
                                        className={`flex items-center justify-between w-full py-3 font-medium text-xl font-${font.family} cursor-pointer bg-transparent`}
                                        value={font.value} 
                                        onClick={handleFontFamily}
                                    >
                                        {font.value}
                                        {activeFont === font.value ? <CheckRoundedIcon className='block w-6 h-6 text-green-600' /> : undefined}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideTextSize ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidetextsize" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidetextsize" aria-hidden="true" onClick={() => {setSideTextSize(false); backSelection()}} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Tamanho do Texto</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => {setSideTextSize(false); backSelection()}}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex items-center overflow-hidden p-4">
                                <input id='text-size-range' type='range' min='14' max='512' onChange={handleTextSizeRange} className='w-full' />
                                <input id='text-size-number' type='number' min='14' max='512' onChange={handleTextSizeNumber} className='w-auto ml-2 outline-none p-1 rounded border border-truegray-200' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideTextFormat ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidetextformat" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidetextformat" aria-hidden="true" onClick={() => setSideTextFormat(false)} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Formato</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => setSideTextFormat(false)}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex flex-col overflow-hidden p-4">
                                <div className="w-full grid grid-cols-4 mb-3">
                                    <button
                                        id='font-weight-bold'
                                        value='bold'
                                        className={`flex items-center justify-center rounded-l border border-l p-2 font-bold ${isBold === 'bold' ? 'bg-black bg-opacity-10' : 'hover:bg-black hover:bg-opacity-5'}`}
                                        onClick={handleFontWeightBold}
                                    >
                                        <FormatBoldRoundedIcon className='block w-6 h-6' />
                                    </button>
                                    <button
                                        id='font-weight-italic'
                                        value='italic'
                                        className={`border border-l-0 p-2 font-medium italic ${isItalic === 'italic' ? 'bg-black bg-opacity-10' : 'hover:bg-black hover:bg-opacity-5'}`}
                                        onClick={handleFontStyleItalic}
                                    >
                                        <FormatItalicRoundedIcon className='block w-6 h-6' />
                                    </button>
                                    <button
                                        value='underline'
                                        className={`border rounded-r border-l-0 p-2 font-medium underline ${isUnderline === true ? 'bg-black bg-opacity-10' : 'hover:bg-black hover:bg-opacity-5'}`}
                                        onClick={handleFontDecorationUnderline}
                                    >
                                        <FormatUnderlinedRoundedIcon className='block w-6 h-6' />
                                    </button>
                                    <button
                                        className={`ml-2 border rounded p-2 font-medium ${isTextCase === true ? 'bg-black bg-opacity-10' : 'hover:bg-black hover:bg-opacity-5'}`}
                                        onClick={handleTextCase}
                                    >
                                        <TextFieldsRoundedIcon className='block w-6 h-6' />
                                    </button>
                                </div>
                                
                                <div className="w-full grid grid-cols-4">
                                    <button
                                        value='left'
                                        className={`flex items-center justify-center p-2 rounded-l border border-l ${textAlign === 'left' ? 'bg-black bg-opacity-10' : 'hover:bg-black hover:bg-opacity-5'}`}
                                        onClick={handleTextAlignLeft}
                                    >
                                        <FormatAlignLeftRoundedIcon className='block w-6 h-6' />
                                    </button>
                                    <button
                                        value='center'
                                        className={`flex items-center justify-center p-2 border border-l-0 ${textAlign === 'center' ? 'bg-black bg-opacity-10' : 'hover:bg-black hover:bg-opacity-5'}`}
                                        onClick={handleTextAlignCenter}
                                    >
                                        <FormatAlignCenterRoundedIcon className='block w-6 h-6' />
                                    </button>
                                    <button
                                        value='right'
                                        className={`flex items-center justify-center p-2 border border-l-0 ${textAlign === 'right' ? 'bg-black bg-opacity-10' : 'hover:bg-black hover:bg-opacity-5'}`}
                                        onClick={handleTextAlignRight}
                                    >
                                        <FormatAlignRightRoundedIcon className='block w-6 h-6' />
                                    </button>
                                    <button
                                        value='justify'
                                        className={`flex items-center justify-center p-2 border rounded-r border-l-0 ${textAlign === 'justify' ? 'bg-black bg-opacity-10' : 'hover:bg-black hover:bg-opacity-5'}`}
                                        onClick={handleTextAlignJustify}
                                    >
                                        <FormatAlignJustifyRoundedIcon className='block w-6 h-6' />
                                    </button>
                                </div>
                                   
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideTextSpace ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidetextspace" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidetextspace" aria-hidden="true" onClick={() => {setSideTextSpace(false); backSelection()}} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Espaçamento do Texto</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => {setSideTextSpace(false); backSelection()}}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex flex-col overflow-hidden p-4">
                                <div className='flex items-center'>
                                    <span className='mr-2 font-medium text-truegray-500 text-xs w-auto'>Letras</span>
                                    <input id='text-charspacing-range' type='range' step='1' min='-200' max='800' onChange={handleTextCharSpacingRange} className='w-full' />
                                    <input id='text-charspacing-number' type='number' step='1' min='-200' max='800' onChange={handleTextCharSpacingNumber} className='w-12 sm:w-16 ml-2 outline-none p-1 rounded border border-truegray-200' />
                                </div>
                                <div className='mt-2 flex items-center'>
                                    <span className='mr-2 font-medium text-truegray-500 text-xs w-auto'>Linha</span>
                                    <input id='text-lineheight-range' type='range' step='0.1' min='0.5' max='2.5' onChange={handleTextLineHeightRange} className='w-full' />
                                    <input id='text-lineheight-number' type='number' step='0.1' min='0.5' max='2.5' onChange={handleTextLineHeightNumber} className='w-12 sm:w-16 ml-2 outline-none p-1 rounded border border-truegray-200' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideOpacity ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sideopacity" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sideopacity" aria-hidden="true" onClick={() => setSideOpacity(false)} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Transparência</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => setSideOpacity(false)}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex items-center overflow-hidden p-4">
                                <input id='opacity-range' type='range' step='0.1' min='0' max='1' onChange={handleOpacityRange} className='w-full' />
                                <input id='opacity-number' type='number' step='0.1' min='0' max='1' onChange={handleOpacityNumber} className='w-auto ml-2 outline-none p-1 rounded border border-truegray-200' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sidePosition ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sideposition" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sideposition" aria-hidden="true" onClick={() => setSidePosition(false)} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Posição</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => setSidePosition(false)}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex flex-col overflow-hidden p-4">
                                <div className='flex items-center mb-3'>
                                    <button
                                        onClick={handleSendBackwards}
                                        className={`w-full flex items-center justify-center rounded-l p-2 border hover:bg-black hover:bg-opacity-5 focus:bg-transparent`}
                                    >
                                        <ArrowDownwardRoundedIcon className='block w-6 h-6 p-0.5' />
                                    </button>
                                    <button
                                        onClick={handleBringForward}
                                        className={`w-full flex items-center justify-center rounded-r p-2 border border-l-0 border-r hover:bg-black hover:bg-opacity-5 focus:bg-transparent`}
                                    >
                                        <ArrowUpwardRoundedIcon className='block w-6 h-6 p-0.5' />
                                    </button>
                                    <button
                                        onClick={handleSendToBack}
                                        className={`ml-2 w-full flex items-center justify-center rounded-l p-2 border hover:bg-black hover:bg-opacity-5 focus:bg-transparent`}
                                    >
                                        <ArrowDownwardRoundedIcon className='block w-6 h-6' />
                                    </button>
                                    <button
                                        onClick={handleBringToFront}
                                        className={`w-full flex items-center justify-center rounded-r p-2 border border-l-0 border-r hover:bg-black hover:bg-opacity-5 focus:bg-transparent`}
                                    >
                                        <ArrowUpwardRoundedIcon className='block w-6 h-6' />
                                    </button>
                                </div>
                                <div className='flex items-center'>
                                    <button
                                        value='top'
                                        onClick={handleAlignToTop}
                                        className={`w-full flex items-center justify-center rounded-l border border-l p-2 hover:bg-black hover:bg-opacity-5 focus:bg-transparent`}
                                    >
                                        <AlignVerticalTopRoundedIcon value='top' className='block w-6 h-6 p-0.5' />
                                    </button>

                                    <button
                                        value='middle'
                                        onClick={handleAlignToMiddle}
                                        className={`w-full flex items-center justify-center border border-l-0 p-2 hover:bg-black hover:bg-opacity-5 focus:bg-transparent`}
                                    >
                                        <AlignVerticalCenterRoundedIcon className='block w-6 h-6 p-0.5' />
                                    </button>
                                    <button
                                        value='bottom'
                                        onClick={handleAlignToBottom}
                                        className={`w-full flex items-center justify-center border rounded-r border-l-0 p-2 hover:bg-black hover:bg-opacity-5 focus:bg-transparent`}
                                    >
                                        <AlignVerticalBottomRoundedIcon className='block w-6 h-6 p-0.5' />
                                    </button>

                                    <button
                                        value='left'
                                        onClick={handleAlignToLeft}
                                        className={`ml-2 w-full flex items-center justify-center rounded-l border border-l p-2 hover:bg-black hover:bg-opacity-5 focus:bg-transparent`}
                                    >
                                        <AlignHorizontalLeftRoundedIcon className='block w-6 h-6 p-0.5' />
                                    </button>
                                    <button
                                        value='center'
                                        onClick={handleAlignToCenter}
                                        className={`w-full flex items-center justify-center border border-l-0 p-2 hover:bg-black hover:bg-opacity-5 focus:bg-transparent`}
                                    >
                                        <AlignHorizontalCenterRoundedIcon className='block w-6 h-6 p-0.5' />
                                    </button>
                                    <button
                                        value='right'
                                        onClick={handleAlignToRight}
                                        className={`w-full flex items-center justify-center border rounded-r border-l-0 p-2 hover:bg-black hover:bg-opacity-5 focus:bg-transparent`}
                                    >
                                        <AlignHorizontalRightRoundedIcon className='block w-6 h-6 p-0.5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideControlPosition ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidecontrolposition" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidecontrolposition" aria-hidden="true" onClick={() => {setSideControlPosition(false); backSelection()}} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Ajustar</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => {setSideControlPosition(false); backSelection()}}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex flex-col overflow-hidden p-4">
                                <div className='flex items-center'>
                                    <span className='mr-2 font-medium text-truegray-500 text-xs w-auto'>Ângulo</span>
                                    <input id='position-angle-range' type='range' defaultValue='0' min='-360' max='360' onChange={handlePositionAngleRange} className='w-full' />
                                    <input id='position-angle-number' type='number' defaultValue='0' min='-360' max='360' onChange={handlePositionAngleNumber} className='w-16 sm:w-20 ml-2 outline-none p-1 rounded border border-truegray-200' />
                                </div>
                                <div className='mt-2 flex items-center'>
                                    <span className='mr-2 font-medium text-truegray-500 text-xs w-auto'>X</span>
                                    <input id='position-x-range' type='range' min='0' max={canvas.width} onChange={handlePositionXRange} className='w-full' />
                                    <input id='position-x-number' type='number' min='0' max={canvas.width} onChange={handlePositionXNumber} className='w-16 sm:w-20 ml-2 outline-none p-1 rounded border border-truegray-200' />
                                </div>
                                <div className='mt-2 flex items-center'>
                                    <span className='mr-2 font-medium text-truegray-500 text-xs w-auto'>Y</span>
                                    <input id='position-y-range' type='range' min='0' max={canvas.height} onChange={handlePositionYRange} className='w-full' />
                                    <input id='position-y-number' type='number' min='0' max={canvas.width} onChange={handlePositionYNumber} className='w-16 sm:w-20 ml-2 outline-none p-1 rounded border border-truegray-200' />
                                </div>
                                <div className='mt-2 flex items-center'>
                                    <span className='mr-2 font-medium text-truegray-500 text-xs w-auto'>Tamanho</span>
                                    <input id='scale-range' type='range' step='0.1' min='0.1' max='10' onChange={handleScaleRange} className='w-full' />
                                    <input id='scale-number' type='number' step='0.1' min='0.1' max='10' onChange={handleScaleNumber} className='w-16 sm:w-20 ml-2 outline-none p-1 rounded border border-truegray-200' />
                                </div>
                                <div className='mt-2 flex items-center'>
                                    <span className='mr-2 font-medium text-truegray-500 text-xs w-auto'>DistorcerX</span>
                                    <input id='skew-x-range' type='range' defaultValue='0' min='-100' max='100' onChange={handleSkewXRange} className='w-full' />
                                    <input id='skew-x-number' type='number' defaultValue='0' step='1' min='-100' max='100' onChange={handleSkewXNumber} className='w-16 sm:w-20 ml-2 outline-none p-1 rounded border border-truegray-200' />
                                </div>
                                <div className='mt-2 flex items-center'>
                                    <span className='mr-2 font-medium text-truegray-500 text-xs w-auto'>DistorcerY</span>
                                    <input id='skew-y-range' type='range' defaultValue='0' min='-100' max='100' onChange={handleSkewYRange} className='w-full' />
                                    <input id='skew-y-number' type='number' defaultValue='0' step='1' min='-100' max='100' onChange={handleSkewYNumber} className='w-16 sm:w-20 ml-2 outline-none p-1 rounded border border-truegray-200' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideNavEffects ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidenaveffects" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidenaveffects" aria-hidden="true" onClick={() => {setSideNavEffects(false);}} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Efeitos</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => {setSideNavEffects(false);}}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex flex-col overflow-x-auto p-4 mr-4">
                                <div className='flex items-center'>
                                    <canvas 
                                        id='canvas-effects-none' 
                                        className='w-full h-full m-auto p-2 border rounded cursor-pointer'
                                        onClick={handleEffectNone}
                                    />
                                    <canvas 
                                        id='canvas-effects-shadow' 
                                        className='ml-2 w-full h-full m-auto p-2 border rounded cursor-pointer' 
                                        onClick={handleEffectShadow}
                                    />
                                    <canvas
                                        id='canvas-effects-border' 
                                        className='ml-2 w-full h-full m-auto p-2 border rounded cursor-pointer' 
                                        onClick={handleEffectStroke}
                                    />
                                    <div id='canvasEffectGradient' className='ml-2 m-auto'>
                                        <canvas
                                            id='canvas-effects-gradient' 
                                            className='p-2 border rounded cursor-pointer'
                                            onClick={setGradient}
                                        />
                                    </div>
                                    <div
                                        id='canvasEffectPattern'
                                        className='ml-2 mr-2 border rounded cursor-pointer relative'
                                    >
                                        <canvas
                                            id='canvas-effects-pattern' 
                                            className='w-full h-full m-auto p-2 z-10'
                                            onClick={handleSidePattern}
                                        />
                                        <button
                                            id='handle-texture'
                                            onClick={handleTexture}
                                            className={`z-20 absolute top-0 right-0 ${isTexture ? 'opacity-30' : ''}`}
                                            disabled={isTexture}
                                        >
                                            <SettingsSuggestRoundedIcon className='block w-6 h-6' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideEffectShadow ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sideeffectshadow" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sideeffectshadow" aria-hidden="true" onClick={() => {setSideEffectShadow(false); setSideNavEffects(true)}} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Sombra</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => {setSideEffectShadow(false); setSideNavEffects(true)}}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex flex-col overflow-hidden px-4">
                                <div className='flex items-center justify-between mb-3'>
                                    <span className='font-medium'>Cor</span>
                                    <button
                                        onClick={handleSideShadowColor}
                                        className={`flex flex-col items-center justify-center p-2 ${sideShadowColor ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                                    >
                                        <div 
                                            id='shadow-color'
                                            className='p-2.5 border border-black' 
                                        />
                                    </button>
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <div className='flex items-center justify-between mb-1'>
                                        <span className='font-medium'>Horizontal</span>
                                        <input id='shadow-offset-x-number' type='number' min={`-${canvas.width}`} max={canvas.width} onChange={setShadowOffsetXNumber} className='w-auto ml-2 outline-none p-1 rounded border border-truegray-200' />
                                    </div>
                                    <input id='shadow-offset-x-range' type='range' step='1' min={`-${canvas.width}`} max={canvas.width} onChange={setShadowOffsetXRange} className='w-full' />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <div className='flex items-center justify-between mb-1'>
                                        <span className='font-medium'>Vertical</span>
                                        <input id='shadow-offset-y-number' type='number' min={`-${canvas.height}`} max={canvas.height} onChange={setShadowOffsetYNumber} className='w-auto ml-2 outline-none p-1 rounded border border-truegray-200' />
                                    </div>
                                    <input id='shadow-offset-y-range' type='range' step='1' min={`-${canvas.height}`} max={canvas.height} onChange={setShadowOffsetYRange} className='w-full' />
                                </div>
                                <div className='flex flex-col pb-4'>
                                    <div className='flex items-center justify-between mb-1'>
                                        <span className='font-medium'>Desfoque</span>
                                        <input id='shadow-blur-number' type='number' min='0' max='100' onChange={setShadowBlurNumber} className='w-auto ml-2 outline-none p-1 rounded border border-truegray-200' />
                                    </div>
                                    <input id='shadow-blur-range' type='range' step='1' min='0' max='100' onChange={setShadowBlurRange} className='w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideShadowColor ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sideshadowcolor" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sideshadowcolor" aria-hidden="true" onClick={() => setSideShadowColor(false)} />
                    <div className="fixed inset-y-0 max-w-full flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Cor da sombra</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => setSideShadowColor(false)}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="h-full flex flex-col overflow-y-scroll p-4">
                                <ChangeShadowColor setShadowColor={setShadowColor} activeShadowColor={activeShadowColor} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideEffectStroke ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sideeffectstroke" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sideeffectstroke" aria-hidden="true" onClick={() => {setSideEffectStroke(false); setSideNavEffects(true)}} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Contorno</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => {setSideEffectStroke(false); setSideNavEffects(true)}}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex flex-col overflow-hidden px-4">
                                <div className='flex items-center justify-between mb-3'>
                                    <span className='font-medium'>Cor</span>
                                    <button
                                        onClick={handleSideStrokeColor}
                                        className={`flex flex-col items-center justify-center p-2 ${sideShadowColor ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                                    >
                                        <div 
                                            id='stroke-color'
                                            className='p-2.5 border border-black' 
                                        />
                                    </button>
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <div className='flex items-center justify-between mb-1'>
                                        <span className='font-medium'>Tamanho</span>
                                        <input id='stroke-width-number' type='number' min='1' max='30' onChange={setStrokeWidthNumber} className='w-auto ml-2 outline-none p-1 rounded border border-truegray-2100' disabled />
                                    </div>
                                    <input id='stroke-width-range' type='range' step='1' min='1' max='30' onChange={setStrokeWidthRange} className='w-full' disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideStrokeColor ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidestrokecolor" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidestrokecolor" aria-hidden="true" onClick={() => setSideStrokeColor(false)} />
                    <div className="fixed inset-y-0 max-w-full flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Cor da sombra</span>
                                <button 
                                    className='rounded p-2 hover:bg-black hover:bg-opacity-10'
                                    onClick={() => setSideStrokeColor(false)}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            <div className="h-full flex flex-col overflow-y-scroll p-4">
                                <ChangeObjStroke handleStrokeColor={handleStrokeColor} activeStrokeColor={activeStrokeColor} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideTexture ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidetexture" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidetexture" aria-hidden="true" onClick={() => setSideTexture(false)} />
                    <div className="fixed inset-y-0 max-w-full top-auto bottom-0 flex">
                        <div className="flex flex-col relative w-screen bg-white">
                            <div className='flex items-center justify-between w-full px-4 h-14'>
                                <span className='font-medium text-lg'>Textura</span>
                                <div className='ml-auto flex items-center'>
                                    <div className='flex items-center'>
                                        <select id='pattern-repeat' onChange={handlePatternRepeat} className='rounded p-2 border'>
                                            <option value='repeat'>Repetir</option>
                                            <option value='repeat-x'>Repetir X</option>
                                            <option value='repeat-y'>Repetir Y</option>
                                            <option value='no-repeat'>Não Repetir</option>
                                        </select>
                                    </div>
                                    <button 
                                        className='ml-2 rounded p-2 hover:bg-black hover:bg-opacity-10'
                                        onClick={() => {setSideTexture(false); setSideNavEffects(true)}}
                                    >
                                        <CloseRoundedIcon className='block w-6 h-6' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${sideNav ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-50`} id="sidenav" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-truegray-500 bg-opacity-75 transition-opacity" id="sidenav" aria-hidden="true" onClick={() => setSideNav(false)} />
                    <div className="fixed inset-y-0 w-full flex">
                        <div className="flex flex-col relative w-screen bg-truegray-800 text-white text-opacity-75">
                            <div className='flex items-center justify-between w-full px-4 h-20'>
                                <span className='font-medium text-lg'>
                                    {sideNavPosts && 'Posts'}
                                    {sideNavObj && 'Objetos'}
                                    {sideNavImg && 'Imagens'}
                                    {sideNavText && 'Texto'}
                                </span>
                                {sideNavImg && (
                                    <>
                                        <input 
                                            id="img-file-reader" 
                                            type="file" 
                                            accept="image/*" 
                                            className='hidden'
                                            onChange={handleImgFileReader} 
                                        />
                                        <label
                                            htmlFor='img-file-reader'
                                            className='ml-auto cursor-pointer rounded p-2 hover:bg-white hover:bg-opacity-10 mr-2'
                                        >
                                            <AddPhotoAlternateRoundedIcon className='block w-6 h-6' />
                                        </label>
                                    </>
                                )}
                                <button 
                                    className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                                    onClick={() => setSideNav(false)}
                                >
                                    <CloseRoundedIcon className='block w-6 h-6' />
                                </button>
                            </div>
                            {sideNavImg && (
                                <>
                                    <div className='mt-3 px-4'>
                                        <ImageSearch searchText={(text) => setTerm(text)} setActivePageImages={setActivePageImages} imageType={imageType} />
                                    </div>
                                    <div className='mb-3 px-4 flex items-center'>
                                        <div className='flex items-center overflow-x-auto'>
                                            <select 
                                                id='imageOrder'
                                                value={imageOrder}
                                                onChange={handleChangeImageOrder} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option disabled className='text-truegray-800'>Ordem</option>
                                                <option value='popular' className='text-truegray-800'>Popular</option>
                                                <option value='latest' className='text-truegray-800'>Recentes</option>
                                            </select>
                                            <select  
                                                id='imageType'
                                                value={imageType}
                                                onChange={handleChangeImageType} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option disabled className='text-truegray-800'>Imagens</option>
                                                <option value='all' className='text-truegray-800'>Todas</option>
                                                <option value='photo' className='text-truegray-800'>Fotos</option>
                                                <option value='vector' className='text-truegray-800'>Vetores</option>
                                                <option value='illustration' className='text-truegray-800'>Ilustrações</option>
                                            </select>
                                            <select  
                                                id='imageOrientation'
                                                value={imageOrientation}
                                                onChange={handleChangeImageOrientation} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option disabled className='text-truegray-800'>Orientação</option>
                                                <option value='all' className='text-truegray-800'>Qualquer</option>
                                                <option value='horizontal' className='text-truegray-800'>Horizontal</option>
                                                <option value='vertical' className='text-truegray-800'>Vertical</option>
                                            </select>
                                            <select  
                                                id='imageCat'
                                                value={imageCat}
                                                onChange={handleChangeImageCat} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option value='' disabled className='text-truegray-800'>Categoria</option>
                                                <option value='all' className='text-truegray-800'>Todas</option>
                                                <option value='food' className='text-truegray-800'>Alimentos/Bebidas</option>
                                                <option value='animals' className='text-truegray-800'>Animais</option>
                                                <option value='buildings' className='text-truegray-800'>Arquitetura/Edifícios</option>
                                                <option value='fashion' className='text-truegray-800'>Beleza/Moda</option>
                                                <option value='science' className='text-truegray-800'>Ciência/Tecnologia</option>
                                                <option value='computer' className='text-truegray-800'>Computação/Comunicação</option>
                                                <option value='education' className='text-truegray-800'>Educação</option>
                                                <option value='feelings' className='text-truegray-800'>Emoções</option>
                                                <option value='sports' className='text-truegray-800'>Esportes</option>
                                                <option value='industry' className='text-truegray-800'>Indústria/Ofício</option>
                                                <option value='places' className='text-truegray-800'>Lugares/Monumentos</option>
                                                <option value='music' className='text-truegray-800'>Música</option>
                                                <option value='nature' className='text-truegray-800'>Natureza/Paisagens</option>
                                                <option value='business' className='text-truegray-800'>Negócios/Finanças</option>
                                                <option value='people' className='text-truegray-800'>Pessoas</option>
                                                <option value='backgrounds' className='text-truegray-800'>Fundo/Texturas</option>
                                                <option value='religion' className='text-truegray-800'>Religião</option>
                                                <option value='health' className='text-truegray-800'>Saúde/Medicinal</option>
                                                <option value='transportation' className='text-truegray-800'>Transporte/Tráfego</option>
                                                <option value='travel' className='text-truegray-800'>Viagem/Férias</option>
                                            </select>
                                            <select  
                                                id='imageEditorsChoice'
                                                value={imageEditorsChoice}
                                                onChange={handleChangeImageEditorsChoice} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option value='' disabled className='text-truegray-800'>Destaques</option>
                                                <option value='true' className='text-truegray-800'>Sim</option>
                                                <option value='false' className='text-truegray-800'>Não</option>
                                            </select>
                                            <select  
                                                id='imageSafeSearch'
                                                value={imageSafeSearch}
                                                onChange={handleChangeImageSafeSearch} 
                                                className='rounded p-2 border bg-transparent mr-2'
                                            >
                                                <option value='' disabled className='text-truegray-800'>+ 18</option>
                                                <option value='true' className='text-truegray-800'>Sim</option>
                                                <option value='false' className='text-truegray-800'>Não</option>
                                            </select>
                                            <button
                                                onClick={handleResetImageFilters}
                                                className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                                            >
                                                Resetar
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="px-4 h-full flex flex-col overflow-y-auto">
                                <div className={`${sideNavPosts ? 'flex' : 'hidden'}`}>
                                    Nenhum post encontrado.
                                </div>
                                <div className={`${sideNavObj ? 'flex flex-col' : 'hidden'}`}>
                                    <span className='font-medium font-sans text-sm text-truegray-400 flex w-full mb-3 pb-2 border-b'>Formas</span>
                                    <div className="w-full grid grid-cols-4 mb-5">
                                        <button
                                            onClick={addLine}
                                            className={`flex items-center justify-center group`}
                                        >
                                            <div className='w-full h-1 bg-white group-hover:bg-white group-hover:bg-opacity-75' />
                                        </button>
                                        <button
                                            onClick={addRect}
                                            className={`ml-2 flex items-center justify-center group`}
                                        >
                                            <div className='w-12 h-12 sm:w-24 sm:h-24 bg-white group-hover:bg-white group-hover:bg-opacity-75' />
                                        </button>
                                        <button
                                            onClick={addCircle}
                                            className={`flex items-center justify-center group`}
                                        >
                                            <div className='flex w-12 h-12 sm:w-24 sm:h-24 rounded-full bg-white group-hover:bg-white group-hover:bg-opacity-75' />
                                        </button>
                                        <button
                                            onClick={addTriangle}
                                            className={`flex items-center justify-center btn-triangle`}
                                        >
                                            <div className='flex triangle' />
                                        </button>
                                    </div>
                                    
                                    <div className='flex items-center justify-between font-medium font-sans text-sm text-truegray-400 mb-3 pb-2 border-b'>
                                        <span>Ícones de Marcas</span>
                                        <button
                                            onClick={handleSideBrandIcons}
                                            className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                                        >
                                            Ver todos
                                        </button>
                                    </div>
                                    <div className='w-full grid grid-cols-6 items-center mb-5'>
                                        {brandIcons.map((icon, index) => (
                                            <div key={index} className='p-2 md:p-5 flex items-center justify-center'>
                                                <img 
                                                    alt=''
                                                    src={icon.code}
                                                    onClick={addFontAwesome}
                                                    className='w-full h-16 filter invert hover:opacity-75 cursor-pointer'
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex items-center justify-between font-medium font-sans text-sm text-truegray-400 mb-3 pb-2 border-b'>
                                        <span>Ícones Sólidos</span>
                                        <button
                                            onClick={handleSideSolidIcons}
                                            className='rounded p-2 hover:bg-white hover:bg-opacity-10'
                                        >
                                            Ver todos
                                        </button>
                                    </div>
                                    <div className='w-full grid grid-cols-6 items-center mb-5'>
                                        {solidIcons.map((icon, index) => (
                                            <div key={index} className='p-2 md:p-5 flex items-center justify-center'>
                                                <img 
                                                    alt=''
                                                    src={icon.code}
                                                    onClick={addFontAwesome}
                                                    className='w-full h-16 filter invert hover:opacity-75 cursor-pointer'
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`${sideNavImg ? 'flex flex-col' : 'hidden'}`}>
                                    <div className="w-full">
                                        {!isLoading && images.length === 0 && <h1 className="text-sm font-medium">Nenhuma imagem encontrada.</h1>}
                                        {isLoading ? (
                                                <span className="text-sm font-medium">Carregando...</span> 
                                            ) : (
                                                <>
                                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                        {images.map(image => <ImageCard key={image.id} image={image} canvas={canvas} />)}
                                                    </div>
                                                    <div className='w-full flex items-center justify-center my-5'>
                                                        {activePageImages > 1 && (
                                                            <button 
                                                                className='rounded p-2 mr-2 text-truegray-800 bg-white hover:bg-white hover:bg-opacity-75' 
                                                                onClick={prevPageImages}
                                                            >
                                                                <ArrowBackIosRoundedIcon className='block w-6 h-6' />
                                                            </button>
                                                        )}

                                                        {activePageImages < totalPagesImages && (
                                                            <button 
                                                                className='rounded p-2 text-truegray-800 bg-white hover:bg-white hover:bg-opacity-75' 
                                                                onClick={nextPageImages}
                                                            >
                                                                <ArrowForwardIosRoundedIcon className='block w-6 h-6' />
                                                            </button>
                                                        )}
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>

                                </div>
                                <div className={`${sideNavText ? 'flex flex-col' : 'hidden'}`}>
                                    <button
                                        onClick={addTitle}
                                        className={`w-full rounded p-3 flex items-center text-4xl font-roboto border border-truegray-200 hover:bg-white hover:bg-opacity-10`}
                                    >
                                        Inserir título
                                    </button>
                                    <button
                                        onClick={() => {setSideNav(false); addSubTitle()}}
                                        className={`mt-3 w-full rounded p-3 flex items-center text-2xl font-roboto border border-truegray-200 hover:bg-white hover:bg-opacity-10`}
                                    >
                                        Inserir subtítulo
                                    </button>
                                    <button
                                        onClick={() => {setSideNav(false); addText()}}
                                        className={`mt-3 w-full rounded p-3 flex items-center font-roboto border border-truegray-200 hover:bg-white hover:bg-opacity-10`}
                                    >
                                        Inserir texto
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-center w-full'>
                                <button
                                    onClick={handleSideNavPosts}
                                    className={`flex flex-col items-center justify-center p-2 h-16 ${sideNavPosts ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                                >
                                    <DashboardRoundedIcon className='block w-6 h-6' />
                                    <span className='mt-1 font-medium text-xs'>Posts</span>
                                </button>
                                <button
                                    onClick={handleSideNavObj}
                                    className={`flex flex-col items-center justify-center p-2 h-16 ${sideNavObj ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                                >
                                    <CategoryRoundedIcon className='block w-6 h-6' />
                                    <span className='mt-1 font-medium text-xs'>Objetos</span>
                                </button>
                                <button
                                    onClick={handleSideNavImg}
                                    className={`flex flex-col items-center justify-center p-2 h-16 ${sideNavImg ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                                >
                                    <ImageRoundedIcon className='block w-6 h-6' />
                                    <span className='mt-1 font-medium text-xs'>Imagens</span>
                                </button>
                                <button
                                    onClick={handleSideNavText}
                                    className={`flex flex-col items-center justify-center p-2 h-16 ${sideNavText ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                                >
                                    <TextFieldsRoundedIcon className='block w-6 h-6' />
                                    <span className={`mt-1 font-medium text-xs`}>Texto</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default App