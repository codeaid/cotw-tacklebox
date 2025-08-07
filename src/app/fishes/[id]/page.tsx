import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { Container, FishInfo } from 'components';
import { fishes } from 'config/fishes';
import { fishIdsGeneric, fishIdsLegendary } from 'types/fishes';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { id } = await props.params;
  const fish = fishes.find(f => f.id === id);

  return {
    title: `${fish?.name} - TackleBox`,
  };
}

export async function generateStaticParams() {
  return [...fishIdsGeneric, ...fishIdsLegendary].map(id => ({ id }));
}

const FishDetailsPage = (props: PageProps) => {
  const { id } = use(props.params);

  // Ensure the fish exists before continuing
  const fish = fishes.find(f => f.id === id);
  if (!fish) {
    return notFound();
  }

  return (
    <Container>
      <FishInfo fish={fish} />
    </Container>
  );
};

export default FishDetailsPage;
