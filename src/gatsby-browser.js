const injectScript = () => {
  const js = document.createElement(`script`)
  const firstScript = document.getElementsByTagName(`script`)[0]
  js.id = `gatsby-plugin-hn`
  js.src = `//cdn.jsdelivr.net/gh/theowenyoung/hn@1/build/bundle.js`
  firstScript.parentNode.insertBefore(js, firstScript)
  return true
}

let injected = false

const embedClasses = [`.hn-card`].join(`,`)

exports.onRouteUpdate = () => {
  if (document.querySelector(embedClasses) !== null) {
    if (!injected) {
      injectScript()
      injected = true
    }
  } else {
    console.log(`can not found embedClasses`)
  }
}
