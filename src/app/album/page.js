import Image from "next/image"
import nextImage from "@/assets/img.jpg"

const AlbumPage = () => {
  return (
    <div>
    <h1>Using image component</h1>
        <Image src="https://source.unsplash.com/user/c_v_r/1600x900" alt="random image" width={1000} height={1200}/>
       {/*  <img src="https://source.unsplash.com/user/c_v_r/1600x900" alt="random image" width={1000} height={1200}/> */}
       <Image src={nextImage} alt="random image" width={1000} height={1200}/>
    </div>
  )
}

export default AlbumPage