import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import { UserSchema } from '../types/schema';

export const useUser = (userId: string) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const { data } = await api.get(`/users/${userId}`);
      return UserSchema.parse(data);
    },
    enabled: !!userId,
  });
};
