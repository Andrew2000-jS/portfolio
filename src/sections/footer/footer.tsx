const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/Andrew2000-jS"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://x.com/AAAS2000?t=fROKUJLbxXEPhziw9iBHWQ&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/andrew__aa2000/profilecard/?igsh=MXB0enZkY2h5OWtnMg=="
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
