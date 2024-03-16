import twit from "./../../../assets/x.png";
import insta from "./../../../assets/insta.png";
import git from "./../../../assets/git.png";
import mail from "./../../../assets/gmail.png";
import "./footer.css";

const FooterIcon = ({ platform, link, image }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt=""
          className="w-[2.2rem] h-[2.2rem] object-contain"
        />
        {/* {platform} */}
      </a>
    </li>
  );
};

const Footer = () => {
  const socialIcons = [
    {
      id: 1,
      image: twit,
      platform: "X",
      link: "https://twitter.com/",
    },
    {
      id: 2,
      image: insta,
      platform: "Instagram",
      link: "https://instagram.com/",
    },
    {
      id: 3,
      image: git,
      platform: "Github",
      link: "https://github.com/",
    },
    {
      id: 4,
      image: mail,
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
    <footer className="text-start text-[var(--white)] w-full">
      <div className="background px-[1rem] py-[6rem]">
        <hr className="w-[90%] m-auto" />
        <h2 className="text-[1.997rem] items-start px-[3rem] py-[1.8rem] coding m-auto">
          CODE CRAFTERS
        </h2>
        <ul className="flex flex-row items-start gap-6 text-[1.6rem] px-[3rem] py-[2rem] listItems">
          {renderListItem()}
        </ul>
        <hr className="w-[90%] m-auto" />
        <ul className="flex mobile:flex-row px-[2rem] py-[2rem] gap-6">
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
