import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const options = {
  damping: 0.1,
  thumbMinSize: 20,
  renderByPixels: true,
  alwaysShowTracks: false,
  continuousScrolling: true,
};

const Scroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);

  return null;
};

export default Scroll;
