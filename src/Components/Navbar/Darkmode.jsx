import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ?
      localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add('dark')
      localStorage.setItem('theme', "dark");
    } else {
      element.classList.remove('dark')
      localStorage.setItem('theme', "light");
    }
  }, [element.classList, theme]);

  // nii gatau bener apa kagak

  return (
    <div className=" cursor-pointer">
      {theme === 'dark' ? (
        <BsSunFill onClick={() => setTheme ('light')} />
      ) : (
        <BsMoonFill onClick={() => setTheme ('dark')} />
      )}
    </div>
  );
};

export default Darkmode