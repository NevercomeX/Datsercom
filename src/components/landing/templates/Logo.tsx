import { AppConfig } from '../utils/AppConfig';


type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '32' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
<svg height={size} width={size}>
  <rect x="6" y="6" width="6" height="20" fill="black" />
  <path d="M12 6 Q26 16 12 26" stroke="black" strokeWidth="6" fill="none" />
</svg>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
