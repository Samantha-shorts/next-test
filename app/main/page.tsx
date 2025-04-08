'use client';

import {
  GetHomeScreensDocument,
  GetHomeScreensQuery,
} from '@/lib/graphql/generated/graphql';
import { useQuery } from '@apollo/client';
import { NextPage } from 'next';

const Page: NextPage = () => {
  const { data } = useQuery<GetHomeScreensQuery>(GetHomeScreensDocument);

  if (!data) return <div>Loading...</div>;

  return <div>fda{data.homeScreens[0].id}</div>;
};

export default Page;
