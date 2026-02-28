import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  {
    Icon: <FiGithub />,
    path: "https://github.com/Bimasanjaya0704",
    label: "Bimasanjaya0704",
  },
  {
    Icon: <FiLinkedin />,
    path: "https://www.linkedin.com/in/bimasanjaya/",
    label: "bimasanjaya",
  },
  {
    Icon: <FiInstagram />,
    path: "https://www.instagram.com/bimsanss",
    label: "bimsanss",
  },
  {
    Icon: <FiMail />,
    path: "#",
    label: "bimasanjayawork@gmail.com",
  },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={`${iconStyles} group relative`}
            aria-label={item.label}
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {item.Icon}
            </span>
            <span className="absolute inset-0 bg-primary/10 rounded-xl scale-0 transition-transform duration-300 group-hover:scale-110" />

            {/* Tooltip */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-[10px] rounded opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-border shadow-sm">
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
