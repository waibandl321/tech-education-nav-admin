export default function useAPIRequest() {
  /**
   * 更新リクエスト生成
   * 不要なプロパティを除いたリクエストデータを返す
   * @param user
   * @returns
   */
  const getUpdateRequest = <T extends object>(
    data: T
  ): Omit<T, "__typename" | "createdAt" | "updatedAt" | "owner"> => {
    const { __typename, createdAt, updatedAt, owner, ...rest } = data as any;
    return rest;
  };
  return {
    getUpdateRequest,
  };
}
