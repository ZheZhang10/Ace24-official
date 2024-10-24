import "../../app/css/styles.scss"
import VideoThumb from '../../public/images/hero-image.png'
import Image from 'next/image'



// These functions can be moved into their own files
const RightSide= () => {
    return <div className="column">
        <Image  src={VideoThumb} width={600} height="500" alt="VideoThumb" />
    </div>
}

export default RightSide;