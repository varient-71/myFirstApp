import '../pages/Level1.css'

interface ColorBoxParam {
    size?:string,
    hour:number,
    minute:number
}

const ColorBox: React.FC<ColorBoxParam> = ({size="",hour,minute}:ColorBoxParam)=> {
    return (
        <div className="layout-center">
            <div className={`color-block${size} color-${hour}`}></div>
            <p className='text-white'>:</p>
            <div className={`color-block${size} color-${minute}`}></div>
        </div>
    )
}

export default ColorBox;        