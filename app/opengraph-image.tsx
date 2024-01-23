import { ImageResponse } from "next/og"

export const alt = "Callum Rowston Portfolio"
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return (
    <section>
        <h1>Callum Rowsotn</h1>
        <p>Portfolio | Browse Projects, Experience, Skills and more.</p>
    </section>

  )
}
