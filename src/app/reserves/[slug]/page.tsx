import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from 'components';
import { ReserveInfo } from 'components';
import { reserves } from 'config/reserves';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const reserve = reserves.find(reserve => reserve.slug === props.params.slug);

  return {
    title: `${reserve?.name} - TackleBox`,
  };
}

export async function generateStaticParams() {
  return reserves.map(reserve => ({ slug: reserve.slug }));
}

const ReserveDetailsPage = (props: PageProps) => {
  const {
    params: { slug },
  } = props;

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
