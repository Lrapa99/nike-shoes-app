import { useRef, useEffect } from "react";
import anime from "animejs";
import "./App.css";

function App() {
  // referencias de los elementos
  const redShoe = useRef(null);
  const nike = useRef(null);
  const textSwipe = useRef(null);
  const swipeBag = useRef(null);
  const arrowDown = useRef(null);
  const bagScale = useRef(null);
  const bagCuantity = useRef(null);

  //cargar animaciones, al renderizar la app, por vez primera
  useEffect(() => {
    anime({
      targets: nike.current,
      translateY: ["100%", "-1%"],
      easing: "easeInOutQuad",
      duration: 1000,
    });
    anime({
      targets: redShoe.current,
      translateY: ["100%", "-1%"],
      easing: "easeInOutQuad",
      duration: 2000,
    });
    anime({
      targets: textSwipe.current,
      translateY: ["1000%", "-1%"],
      easing: "easeInOutQuad",
      duration: 2000,
    });
    anime({
      targets: swipeBag.current,
      translateY: ["100%", "-1%"],
      easing: "easeInOutQuad",
      duration: 2000,
    });
    anime({
      targets: arrowDown.current,
      translateY: ["-50%", "50%"],
      easing: "linear",
      duration: 1000,
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: bagScale.current,
      scale: [1, 1.2],
      easing: "linear",
      duration: 1000,
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: bagCuantity.current,
      translateX: [
        { value: "-5px", duration: 1000, easing: "easeInOutSine" },
        { value: "5px", duration: 1000, easing: "easeInOutSine" },
        { value: "0px", duration: 1000, easing: "easeInOutSine" },
        { value: "-5px", duration: 1000, easing: "easeInOutSine" },
        { value: "5px", duration: 1000, easing: "easeInOutSine" },
        { value: "0px", duration: 1000, easing: "easeInOutSine" },
      ],
      loop: true,
    });
  }, []);

  return (
    <div className="App">
      {/* section 1 */}
      <div className="sec-1">
        <div className="btn-back">
          <img src="images/fi-rr-arrow-small-left.png" alt="back" />
        </div>
        <h2 className="title">Air Max 200 SE</h2>
        <div className="btn-bag">
          <span ref={bagCuantity}>2</span>
          <img src="images/fi-rr-shopping-bag.png" alt="bag" />
        </div>
      </div>

      {/* section 2 */}
      <div className="sec-2">
        <div className="left">
          <div className="top">
            <span className="size">Size</span>
            <div className="variants-content">
              <div className="variant">
                <span>UK 6</span>
              </div>
              <div className="variant active">
                <span>UK 7</span>
              </div>
              <div className="variant">
                <span>UK 8</span>
              </div>
              <div className="variant">
                <span>UK 9</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <span className="price">$30.99</span>
            <small>10% OFF</small>
          </div>
        </div>
        <div className="center">
          <img
            ref={redShoe}
            className="red-shoe"
            src="images/Red Shoe.png"
            alt="red shoe"
          />
          <img ref={nike} className="nike" src="images/NIKE.png" alt="NIKE" />
        </div>
        <div className="right">
          <div className="btn-mark">
            <img src="images/fi-rr-bookmark.png" alt="mark" />
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="sec-3">
        <span ref={textSwipe} className="text-swipe">
          Swipe down to add
        </span>
        <div ref={swipeBag} className="swipe-bag">
          <img
            ref={bagScale}
            src="images/fi-rr-shopping-bag (1).png"
            alt="swipe-bag"
          />
          <img ref={arrowDown} src="images/Group 56.png" alt="arrow-down" />
        </div>
        <div className="kiss"></div>
      </div>
    </div>
  );
}

export default App;
