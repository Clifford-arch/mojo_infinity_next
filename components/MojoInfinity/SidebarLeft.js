const SidebarLeft = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`sidepanelleft ${isOpen ? "active" : ""}`}
        id="mySidepanelleft"
      >
        <div className="left-sec-top-wrap">
          <div className="left-sec-top-left">Sections</div>
          <div className="left-sec-top-right">
            <button
              className="closebtnleft"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <nav id="mob-lft-menu">
          <ul className="mob-lft-parent-menu">
            <li>
              <button className="flex items-center justify-between w-full">
                Stocks
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="arrow down"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <ul>
                <li>
                  <a href="#">Markets Today</a>
                </li>
                <li>
                  <a href="#">Stock Research</a>
                </li>
                <li>
                  <a href="#">Result Corner</a>
                </li>
                <li>
                  <a href="#">IPO</a>
                </li>
                <li>
                  <a href="#">LIVE Events</a>
                </li>
                <li>
                  <a href="#">Watchlist</a>
                </li>
                <li>
                  <a href="#">Global Stock Research</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && <div className="main-overlay" onClick={onClose}></div>}
    </>
  );
};

export default SidebarLeft;
