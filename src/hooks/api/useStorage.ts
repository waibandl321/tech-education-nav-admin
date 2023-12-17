import {
  GetUrlOutput,
  UploadDataOutput,
  getUrl,
  uploadData,
  remove,
  RemoveOutput,
} from "aws-amplify/storage";
import useAPIResponse from "./useAPIResponse";

type UploadResultType = Awaited<UploadDataOutput["result"]>;
type GetURLResultType = Awaited<GetUrlOutput>;

export default function useStorage() {
  const { getErrorMessage } = useAPIResponse();

  // ファイルアップロード
  const apiUploadFile = async (
    file: File
  ): Promise<ApiResponse<UploadResultType>> => {
    try {
      const result = await uploadData({
        key: file.name,
        data: file,
      }).result;
      return {
        isSuccess: true,
        data: result,
      };
    } catch (error) {
      return {
        isSuccess: true,
        error: getErrorMessage(error),
      };
    }
  };

  // S3　URL取得
  const apiGetFileUrl = async (
    fileKey: string
  ): Promise<ApiResponse<GetURLResultType>> => {
    try {
      const getUrlResult = await getUrl({
        key: fileKey,
      });
      return {
        isSuccess: true,
        data: getUrlResult,
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: getErrorMessage(error),
      };
    }
  };

  // ファイル削除
  const apiRemoveFile = async (
    filename: string
  ): Promise<ApiResponse<RemoveOutput>> => {
    try {
      const result: RemoveOutput = await remove({ key: filename });
      return {
        isSuccess: true,
        data: result,
      };
    } catch (error) {
      return {
        isSuccess: true,
        error: getErrorMessage(error),
      };
    }
  };

  return {
    apiUploadFile,
    apiGetFileUrl,
    apiRemoveFile,
  };
}
