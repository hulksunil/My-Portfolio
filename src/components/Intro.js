import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const TypingThing = ({ toRotate }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let newText = isDeleting
      ? fullText.substring(0, text.length - 1) // if deleting, then remove one character
      : fullText.substring(0, text.length + 1); // if not deleting, then add one character

    setText(newText);

    // If deleting, we want to remove characters faster than adding them
    if (isDeleting) {
      // if statement to prevent from deleting too quickly (which would be almost instant and not look good)
      if (delta > 100) {
        setDelta((prevDelta) => prevDelta / 2);
      }
    }

    // If we are not deleting and newText is the same as fullText, then we want to start deleting (we also reset the speed to the slowest)
    if (!isDeleting && newText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }
    // If we are deleting and newText is empty, then we want to start typing the next word (we also reset the speed to the slowest)
    else if (isDeleting && newText === "") {
      setIsDeleting(false);
      setDelta(100);
      setLoopNum(loopNum + 1);
    }
  };
  return <span className="typingText">{text}</span>;
};

const Intro = () => {
  const toRotate = ["Full Stack Developer", "Programmer", "Computer Engineer"];
  return (
    // <header id="home">
    <Container id="home">
      <Row className="align-items-center">
        <Col xs={12} md={6} lg={7}>
          <div className="intro">
            <h1>
              Hi, its me, <span id="myName">Sunil </span>
            </h1>
            <TypingThing toRotate={toRotate} />
            <p className="bio">
              A passionate Computer Engineering student at Concordia University
              with a passion for technology and problem-solving. My focus is on
              software development, where I enjoy turning complex ideas into
              practical solutions. I’m driven by curiosity and a desire to
              innovate. My goal is to contribute to cutting-edge technologies
              that shape the future.
            </p>
          </div>
        </Col>
        <Col md={6} className="intro-img">
          {/* <img src={intro} alt="intro" /> */}
        </Col>
      </Row>
    </Container>
    // </header>
  );
};

export default Intro;
