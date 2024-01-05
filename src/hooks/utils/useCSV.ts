import Papa from "papaparse";

export default function useCSV() {
  /**
   * CSVインポート
   * @param file インポートされたファイル
   * @returns csvのfieldとセルをマッピングしたオブジェクトの配列<T>
   * Array<{フィールド名: 値}>
   */
  const getImportedCSV = async <T>(file: File): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          // データをT型の配列として解釈して返す
          resolve(result.data as T[]);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  };

  /**
   * CSVデータ作成
   * @param csvFieldKeys CSVファイルのヘッダー
   * @param csvData CSVファイルのデータ
   * @returns CSVデータ
   */
  const convertStringToCSV = (
    csvFieldKeys: string[],
    csvData: Record<string, unknown>[]
  ) => {
    return Papa.unparse({
      fields: csvFieldKeys,
      data: csvData,
    });
  };

  /**
   * ダウンロード処理
   * @param csv csvデータ
   * @param fileName ダウンロードするファイル名
   */
  const download = (csv: string, fileName: string) => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return {
    getImportedCSV,
    download,
    convertStringToCSV,
  };
}
