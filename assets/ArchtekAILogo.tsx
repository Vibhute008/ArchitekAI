// Architek AI Logo Component
import logoImage from "./logo.png";

interface ArchtekAILogoProps {
  className?: string;
  alt?: string;
}

const ArchtekAILogo = ({
  className = "logo",
  alt = "Architek AI",
}: ArchtekAILogoProps) => {
  return (
    <img
      src={logoImage}
      alt={alt}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
};

export default ArchtekAILogo;
