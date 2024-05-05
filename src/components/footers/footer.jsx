import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const FooterIcon = ({ platform, link, image }) => {
  return (
    <li style={{ fontSize: "2rem" }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {image}
        {/* {platform} */}
      </a>
    </li>
  );
};

const Footer = () => {
  const socialIcons = [
    {
      id: 1,
      image: <FaXTwitter />,
      platform: "X",
      link: "https://twitter.com/",
    },
    {
      id: 2,
      image: <FaInstagram />,
      platform: "Instagram",
      link: "https://instagram.com/",
    },
    {
      id: 3,
      image: <FaGithub />,
      platform: "Github",
      link: "https://github.com/",
    },
    {
      id: 4,
      image: <BiLogoGmail />,
      platform: "gmail",
      link: "https://gmail.com/",
    },
  ];

  const renderFooterIcons = () => {
    return socialIcons.map((icon, index) => (
      <FooterIcon
        key={index}
        platform={icon.platform}
        link={icon.link}
        image={icon.image}
      />
    ));
  };

  return (
    <footer className=" text-start text-[var(--white)] w-full">
      <div className="background px-[1rem] py-[6rem]">
        <hr className="w-[90%] m-auto" />
        <p className="text-[1.997rem] px-[3rem] py-[1.8rem] coding ml-[2rem] mobile:ml-[2rem] sm:ml-[2.3rem]">
          CODE CRAFTERS
        </p>
        <ul className="flex flex-row items-start gap-6 text-[1.6rem] px-[3rem] py-[2rem] listItems ml-[2rem] mobile:ml-[2rem] sm:ml-[2.3rem]">
          {renderListItem()}
        </ul>
        <hr className="w-[90%] m-auto" />
        <ul className="flex mobile:flex-row py-[2rem] gap-6 mr-[4rem] mobile:ml-[5.3rem]">
          {renderFooterIcons()}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

//this function holds <li> items
const ListItem = ({ name, link }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </li>
  );
};

const renderListItem = () => {
  const items = [
    {
      id: 1,
      name: "About Us",
      link: "#",
    },
    {
      id: 2,
      name: "Skills",
      link: "#",
    },
    {
      id: 3,
      name: "Newsletter",
      link: "#",
    },
  ];
  return items.map((items, index) => (
    <ListItem key={index} name={items.name} link={items.link} />
  ));
};

//ends here.......
