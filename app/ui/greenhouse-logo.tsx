import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

type Size = 'sm' | 'md' | 'lg' | 'xl';

export default function GreenhouseLogo({ size = 'md' }: { size?: Size }) {
  const sizeMap: Record<Size, { text: string; icon: string }> = {
    sm: { text: 'text-[24px]', icon: 'h-6 w-6' },
    md: { text: 'text-[40px]', icon: 'h-11 w-11' },
    lg: { text: 'text-[60px]', icon: 'h-16 w-16' },
    xl: { text: 'text-[80px]', icon: 'h-20 w-20' },
  };

  const { text, icon } = sizeMap[size];

  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-emerald-100`}
    >
      <GlobeAltIcon className={`${icon} rotate-[15deg]`} />
      <p className={text}>Greenhouse</p>
    </div>
  );
}
