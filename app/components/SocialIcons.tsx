import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

export function SocialIcons({ className = "", iconClassName = "" }: { className?: string; iconClassName?: string }) {
  const linkClasses = `inline-flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors`;
  const iconSize = 18;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${linkClasses} w-9 h-9`}>
        <FaFacebookF className={iconClassName} size={iconSize} />
      </a>
      <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${linkClasses} w-9 h-9`}>
        <FaInstagram className={iconClassName} size={iconSize} />
      </a>
      <a aria-label="TikTok" href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={`${linkClasses} w-9 h-9`}>
        <FaTiktok className={iconClassName} size={iconSize} />
      </a>
    </div>
  );
}
