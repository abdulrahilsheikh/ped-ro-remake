type Props = { text: string; link: string };
import "./external-link.scss";
const ExternalLink = ({ link, text }: Props) => {
  return (
    <a className="link" href={link} target="_blank">
      {text}
    </a>
  );
};

export default ExternalLink;
