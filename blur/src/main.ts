import './style.css'
import $ from 'jquery'
import gsap, { Power4 } from 'gsap'

class BlurPage {
  topContainer: HTMLElement
  constructor() {
    this.topContainer = $("#app")[0]
    this.createPage()
    this.makeBoxFollowMouse()
  }
  makeBoxFollowMouse() {
    const blobElem = $("#blob")[0]
    window.addEventListener('mousemove', e => {
      gsap.to(blobElem, {rotation:"360", duration: 2, ease: 'none', repeat:-1});

      gsap.to("#blob", {
        duration: 0.5,
    overwrite: "auto",
    x: e.clientX-25,
    y: e.clientY-25,
    stagger: 0.15,
    keyframes:{
      "0%":   { },
    },
    ease: "none"
      })
    })
  }
  createPage(){
    this.topContainer.innerHTML = `
    <div class="container">
      <div id="blob"></div>
      <div id="container2"></div>
    </div>
    <div></div>
    `
  }
}

const blurPage = new BlurPage()
