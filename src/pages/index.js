import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const adjectives = ["boba addict", "aaron", "miklahyla", "brett", "mikayla"]

function IndexPage() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    setInterval(changeAdjective, 1000)
  }, [])

  function changeAdjective() {
    console.log("fire")
    setIdx((idx + 1) % adjectives.length)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex justify-between mt-32">
        <div className="mr-32">
          <h1 className="text-5xl">你好, I'm Mikayla!</h1>
          <br />
          <p>
            I'm a software engineer and social entrepreneur with a passion for
            creating value in the world and empowering others.
          </p>
          <p></p>
          <br />
          <p>
            I'm also a{" "}
            <span className="transform duration-500 ease-in-out text-red">
              {adjectives[idx]}
            </span>
          </p>
        </div>
        <div>
          <p>An image</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
