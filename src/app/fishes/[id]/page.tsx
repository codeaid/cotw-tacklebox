import { notFound } from 'next/navigation';
import { Container, FishInfo } from 'components';
import { fishes } from 'config/fishes';
import { fishIdsGeneric, fishIdsLegendary } from 'types/fishes';

export async function generateStaticParams() {
  return [...fishIdsGeneric, ...fishIdsLegendary].map(id => ({ id }));
}

const FishDetailsPage = (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;

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
