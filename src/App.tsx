import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [cnCount, setCncount] = useState(0);
  const [enCount, setEncount] = useState(0);
  const [nuCount, setNucount] = useState(0);
  const [enReCount, setEnrecount] = useState(0);
  const [cnReCount, setCnrecount] = useState(0);
  const [spCount, setSpcount] = useState(0);

  const reg = /[\u3002\uff1f\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\uff43\uff44\u3014\u3015\u2026\u2014\uff5e\uff4f\uffe5]/;


  return (
    <>
      <section id="center">
        {/* <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div> */}
        <div className='content_left'>
          <h2>标题字符统计</h2>
          <h5>
            <p>中文汉字标点符号占两个字符</p>
            <p>英文数字标点符号占一个字符</p>
          </h5>
          <textarea className='txtinput' rows={8} cols={50} name='myTextarea' autoFocus={true} onChange={e => {

            setCount(0);
            setCncount(0);
            setEncount(0);
            setNucount(0);
            setEnrecount(0);
            setCnrecount(0);
            setSpcount(0);

            const str = e.target.value;

            for (let i = 0; i < str.length; i++) {
              const ch = str.charAt(i);
              if (/[\u4e00-\u9fa5]/.test(ch)) {
                setCncount(a => a + 2);
                setCount(a => a + 2);
              } else if (/[a-zA-Z]/.test(ch)) {
                setEncount(a => a + 1);
                setCount(a => a + 1);
              } else if (/[0-9]/.test(ch)) {
                setNucount(a => a + 1);
                setCount(a => a + 1);
              } else if (reg.test(ch)) {
                setCnrecount(a => a + 2);
                setCount(a => a + +2);
              } else if (/\s/.test(ch)) {
                setSpcount(a => a + 1);
                setCount(a => a + 1);
              } else {
                setEnrecount(a => a + 1);
                setCount(a => a + 1);
              }
            }

          }} />
        </div>
        <div className='content_right'>
          <div className="counter">
            总长度： {count}
          </div>
          <div className="counter">
            中文：{cnCount}
          </div>
          <div className="counter">
            英文：{enCount}
          </div>
          <div className="counter">
            数字：{nuCount}
          </div>
          <div className="counter">
            中文符号：{cnReCount}
          </div>
          <div className="counter">
            英文符号：{enReCount}
          </div>
          <div className="counter">
            空格：{spCount}
          </div>
        </div>

      </section>

      {/* <div className="ticks"></div> */}

      {/* <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section> */}

      {/* <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  )
}

export default App
