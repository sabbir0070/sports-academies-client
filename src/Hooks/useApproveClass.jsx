import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useApproveClass = () => {
  const { user, loading } = useAuth();

  const {  data: allApprovedClasses = [],refetch } = useQuery({
    queryKey: ['allApprovedClasses'],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://sports-academies-server-nine.vercel.app/allApprovedClasses`);
      return res.json();
    },
  })
  return [allApprovedClasses, refetch]
};

export default useApproveClass;