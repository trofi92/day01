import { useState } from "react";

export const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const onMouseEnter = (e) => {
    setActiveMenu(true);
  };

  const onMouseLeave = (e) => {
    setActiveMenu(false);
  };

  return (
    <>
      {activeMenu ? (
        <div onMouseLeave={onMouseLeave}>
          <div style={{ display: "inline-block" }}>fuck</div>
          <ul>
            <li>
              <a href="/">1 하</a>
            </li>
            <li>
              <a href="/">2 아니</a>
            </li>
            <li>
              <a href="/">3 왜</a>
            </li>
            <li>
              <a href="/">4 뭐</a>
            </li>
            <li>
              <a href="/">5 ㅆ</a>
            </li>
          </ul>
        </div>
      ) : (
        <div
          style={{ display: "inline-block" }}
          onMouseEnter={onMouseEnter}
        >
          fuck
        </div>
      )}
    </>
  );
};
