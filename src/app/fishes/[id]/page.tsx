import { notFound } from 'next/navigation';
import { FishInfo } from 'components';
import { fishes } from 'config/fishes';

const FishDetailsPage = (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;

  // Ensure the fish exists before continuing
  const fish = fishes.find(f => f.id === id);
  if (!fish) {
    return notFound();
  }

  return <FishInfo fish={fish} />;
};

export default FishDetailsPage;
