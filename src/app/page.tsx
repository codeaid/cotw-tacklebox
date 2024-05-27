import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Home - TackleBox',
};

const HomePage = () => redirect('/fishes');

export default HomePage;
