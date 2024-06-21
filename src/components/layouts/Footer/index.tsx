import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterLayout = () => {
  return (
    <div
      id="contact-us"
      className="relative mx-auto w-full min-h-screen px-6 py-10 md:py-28 flex flex-col gap-y-20 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full gap-x-5 flex flex-row items-center justify-center z-10">
          <span className="w-28 md:w-64 h-0.5 bg-secondary rounded-full"></span>
          <h1 className="text-xl md:text-4xl font-bold">Contact Us</h1>
          <span className="w-28 md:w-64 h-0.5 bg-secondary rounded-full"></span>
        </div>
      </div>
      <div
        className={`relative flex flex-row overflow-hidden gap-40 select-none`}
      >
        <div
          className={`${styles.marquee} min-w-full gap-x-5 justify-around flex flex-row items-center shrink-0`}
        >
          <div className="marquee__part text-5xl lg:text-jumbo">
            LETS GET IN TOUCH
          </div>
        </div>
        <div
          className={`${styles.marquee} min-w-full gap-x-5 justify-around flex flex-row items-center shrink-0`}
        >
          <div className="marquee__part text-5xl lg:text-jumbo">
            LETS GET IN TOUCH
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[146rem] left-1/2 -translate-x-1/2 w-[150%] aspect-square flex justify-center rounded-full bg-tertiary">
        <div className="flex flex-row mt-40 gap-x-20">
          <div className="flex flex-col">
            <p className="text-xl font-medium">write me an email</p>
            <p>alantisderry@gmail.com</p>
          </div>
          <div className="">
            <h4 className="font-semibold text-5xl">OR</h4>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-medium">Find me here</p>
            <div className="w-full flex flex-row items-center justify-center gap-x-5 pt-1 text-3xl">
              <a target="_blank" href="https://github.com/ryalaan">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a target="_blank" href="https://instagram.com/ryalaann">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // -left-[50rem]
  );
};

export default FooterLayout;
