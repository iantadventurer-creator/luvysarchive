import type { Metadata } from 'next';
import { CommunityBottomNav } from '@/components/community/CommunityBottomNav';

// La página de /comunidad es un Client Component ('use client'), y los
// Client Components no pueden exportar `metadata` directamente — por eso
// vive en este layout, que sí es un Server Component.
export const metadata: Metadata = {
  title: 'Comunidad',
  description:
    'Comparte tus propias creaciones Monster High, dale like a las de otros fans y forma parte de la comunidad de LuvysArchive.',
  openGraph: {
    title: 'Comunidad · LuvysArchive',
    description:
      'Comparte tus propias creaciones Monster High, dale like a las de otros fans y forma parte de la comunidad.',
  },
  twitter: {
    title: 'Comunidad · LuvysArchive',
    description:
      'Comparte tus propias creaciones Monster High, dale like a las de otros fans y forma parte de la comunidad.',
  },
};

export default function ComunidadLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pb-16 md:pb-0">{children}</div>
      <CommunityBottomNav />
    </>
  );
}
