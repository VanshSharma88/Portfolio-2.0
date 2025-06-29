import React, { useState } from "react";
// import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const input = e.target.elements.userInput.value.trim();
    if (!input) return;

    const newMessages = [...messages, { type: "user", text: input }];
    const botReply = getBotResponse(input);
    setMessages([...newMessages, { type: "bot", text: botReply }]);
    e.target.reset();
  };

  const getBotResponse = (input) => {
    const msg = input.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) return "Hey there! 👋 This is Vansh's Personal AI BOT";
    if (msg.includes("your name")) return "I'm PortfolioBot 🤖.";
    if (msg.includes("project")) return "Check out my projects section above.";
    if (msg.includes("skills")) return "React, JavaScript, HTML, CSS, and Node.js!";
    if (msg.includes("contact")) return "Scroll to the Contact section or email me!";
    if (msg.includes("resume")) return "You’ll find my resume in the Resume tab. and you can download it easily...";
    if (msg.includes("thankyou")) return "Your most welcome feel free if you stuck anywhere";
    return "Sorry, I didn't catch that. Try asking about my skills or projects.";
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={handleToggle}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>Chat with Me</span>
            <button onClick={handleToggle}>✖</button>
          </div>

          <div className="chatbot-messages" id="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.type}`}>
                {msg.type === "user" ? "You" : "Bot"}: {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="chatbot-form">
            <input
              type="text"
              name="userInput"
              placeholder="Ask me something..."
              autoComplete="off"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
