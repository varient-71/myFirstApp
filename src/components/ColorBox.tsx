import '../pages/Level1.css'

const ColorBox: React.FC = ({size="",hour,minute}) => {
    return (
        <div className="layout-center">
            <div className={`color-block${size} color-${hour}`}></div>
            <p className='text-white'>:</p>
            <div className={`color-block${size} color-${minute+1}`}></div>
        </div>
    )
}

export default ColorBox;        