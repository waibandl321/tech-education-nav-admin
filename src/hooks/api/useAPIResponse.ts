export default function useAPIResponse() {
  const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      return error.message;
    }
    return "Unknown error occurred";
  };
  return {
    getErrorMessage,
  };
}
