"use client"
import ReactPlayer from "react-player"
export default function VideoPlayer(){

return (
<div>
<h1>VideoPlayer</h1>    
<ReactPlayer url='https://www.youtube.com/watch?v=NB6ZS6US-hc' />
<br/>
<ReactPlayer url='https://www.youtube.com/watch?v=XXYcQZI5DZA&t=1381s' />
</div>

)

}