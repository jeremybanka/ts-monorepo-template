import { StrictMode } from "react"

import { createRoot } from "react-dom/client"
import { RecoilRoot } from "recoil"

import "./scss/index.scss"
import "./scss/font-face.scss"

import { App } from "./App"

const container = document.getElementById(`root`)
const root = createRoot(container as Element)
root.render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
)
