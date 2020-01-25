import React from "react";
import "./style.css";
function Footer(props) {
  return (
    <div className="footer">
      <div>
        Powered By <a href="https://www.spiderlabweb.com">SpiderLabWeb</a>{" "}
        &copy; {new Date().getFullYear()}
      </div>
      <div>
        Made with &lt; &hearts; &gt; by{" "}
        <a href="http://www.instagram.com/IMGeorgianAmit/">GeorgianAmit</a>.
      </div>
    </div>
  );
}

export default Footer;
