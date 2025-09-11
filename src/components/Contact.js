import { useEffect, useState } from "react";
import { Anchor, Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";

/**
 * Contact component
 * Displays the contact information and a form to send me a message
 *
 * TODO(sunil): Add other social media links under email (github, linkedin, etc.)
 */
const Contact = ({ theme }) => {
  const [result, setResult] = useState("");
  useEffect(() => {
    // Any side effects related to the theme can be handled here
  }, [theme]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6ba159bd-7e42-4013-bda1-82f8bd4dd954");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Container fluid id="contact" className="contact mainHeader">
      <h1>Contact</h1>
      <Row>
        {/* Contact Info */}

        <Col xs={12} md={6}>
          <h2>Let's Talk</h2>
          <p>
            I'm currently studying at school but send me a message and I'll be
            sure to get back to you!
          </p>

          <div className="d-flex contactInfo">
            <IoMail size={"30px"} />
            <p>sunil.kub17@gmail.com</p>
          </div>
          <div className="d-flex contactInfo">
            <TiLocationOutline size={"30px"} />
            <p>Montréal, Quebec, Canada</p>
          </div>

          <div className="socials">
            <Anchor
              className="text-reset"
              href="https://github.com/hulksunil"
              target="_blank"
            >
              <FaGithub size={"30px"} />
            </Anchor>
            <Anchor
              className="text-reset"
              href="https://www.linkedin.com/in/Sunil-Kublalsingh/"
              target="_blank"
            >
              <FaLinkedin size={"30px"} />
            </Anchor>
          </div>
        </Col>

        {/* Right column  */}
        <Col xs={12} md={6}>
          <Form data-bs-theme={theme === "dark" ? "dark" : "light"} onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                name="name"
                required
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailAddress">
              <Form.Label>Your Email Address</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                name="message"
                required
                as="textarea"
                placeholder="Enter your message"
                rows={8}
              />
            </Form.Group>
            <Button type="submit" variant={theme === "dark" ? "light" : "dark"}>
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
