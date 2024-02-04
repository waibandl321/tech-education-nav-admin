export default function useAPIRequest() {
  /**
   * 更新リクエスト生成
   * 不要なプロパティを除いたリクエストデータを返す
   * @returns
   */
  const getUpdateRequest = <T extends object>(
    data: T
  ): Omit<T, "__typename" | "createdAt" | "updatedAt" | "owner"> => {
    const { __typename, createdAt, updatedAt, owner, ...rest } = data as any;
    return rest;
  };
  /**
   * 複製リクエスト生成
   * 不要なプロパティを除いたリクエストデータを返す
   * @returns
   */
  const getDuplicateRequest = <T extends object>(
    data: T
  ): Omit<T, "__typename" | "id" | "createdAt" | "updatedAt" | "owner"> => {
    const { __typename, id, createdAt, updatedAt, owner, ...rest } =
      data as any;
    return rest;
  };
  return {
    getUpdateRequest,
    getDuplicateRequest,
  };

  return {
    getUpdateRequest,
    getDuplicateRequest,
  };
}
