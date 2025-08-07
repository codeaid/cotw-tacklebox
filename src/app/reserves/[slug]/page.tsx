import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { Container } from 'components';
import { ReserveInfo } from 'components';
import { reserves } from 'config/reserves';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const reserve = reserves.find(reserve => reserve.slug === slug);

  return {
    title: `${reserve?.name} - TackleBox`,
  };
}

export async function generateStaticParams() {
  return reserves.map(reserve => ({ slug: reserve.slug }));
}

const ReserveDetailsPage = (props: PageProps) => {
  const { slug } = use(props.params);

  // Ensure the reserve exists before continuing
  const reserve = reserves.find(r => r.slug === slug);
  if (!reserve) {
    return notFound();
  }

  return (
    <Container>
      <ReserveInfo reserve={reserve} />
    </Container>
  );
};

export default ReserveDetailsPage;
