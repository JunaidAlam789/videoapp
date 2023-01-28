"use client"
import ReactPlayer from "react-player"
import Link from "next/link"
export default function VideoPlayer(){

return (
<div>
<h1>VideoPlayer</h1>
<h2><Link href="https://www.youtube.com/watch?v=NB6ZS6US-hc">Ghuftam</Link></h2>
<ReactPlayer url='https://www.youtube.com/watch?v=NB6ZS6US-hc' />
</div>

)

}