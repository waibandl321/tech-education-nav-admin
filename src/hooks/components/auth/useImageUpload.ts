export default function useImageUpload() {
  // 画像サイズ圧縮処理
  const compressImage = (file: File, targetWidth: number): Promise<File> => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = () => {
        const scale = targetWidth / image.width;
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = image.height * scale;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas context is not available"));
          return;
        }
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Failed to create blob from canvas"));
            return;
          }
          resolve(new File([blob], file.name, { type: file.type }));
        }, file.type);
      };
      image.onerror = (error) => {
        reject(error);
      };
    });
  };

  // 署名付きURLからファイル名を抽出する
  const extractFilename = (url: string) => {
    // 'public/' と 'x-amz-content' の間の部分を抽出
    const startIndex = url.indexOf("public/") + "public/".length;
    const endIndex = url.indexOf("?x-amz-content");
    if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
      return decodeURIComponent(url.substring(startIndex, endIndex));
    } else {
      return null; // 適切なパターンが見つからない場合
    }
  };

  return {
    compressImage,
    extractFilename,
  };
}
