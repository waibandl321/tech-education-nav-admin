export default function useConvertData() {
  const ensureString = (input: string | string[]): string => {
    if (Array.isArray(input)) {
      // 配列の場合、要素を連結
      return input.join(""); // ここでの区切り文字は任意
    }
    // 文字列の場合、そのまま返す
    return input;
  };
  return {
    ensureString,
  };
}
