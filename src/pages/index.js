import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"

function IndexPage() {
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
          <div className="flex">
            <p className="inline mr-1">I'm also a</p>
            <TypistLoop className="inline " interval={2000}>
              {["boba addict", "violinist", "painfully cute"].map(text => (
                <Typist key={text} startDelay={1000}>
                  <span className="text-blue-500">{text}</span>
                </Typist>
              ))}
            </TypistLoop>
          </div>
        </div>
        <div>
          <p>An image</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
