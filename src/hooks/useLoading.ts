import { useState } from "react";

export const useLoading = (initialState: boolean = false) => {
  const [isLoading, setIsLoading] = useState<boolean>(initialState);
  const startLoading = (): void => setIsLoading(true);
  const stopLoading = (): void => setIsLoading(false);
  return { isLoading, startLoading, stopLoading };
};
