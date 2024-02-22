import { ChangeEvent } from "react";

export class Helpers {
  static formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
  static handleFileSelected = async (
    e: ChangeEvent<HTMLInputElement>,
    enqueueSnackbar: any,
    setSize: any,
    setUserFile: any,
    setCurrFile: any,
    size: string
  ) => {
    const files = (e.target as HTMLInputElement).files;

    if (!files) return;
    const fileType = files[0].type;
    console.log(fileType);
    const acceptedFileTypes: string[] = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/png",
    ];
    if (!acceptedFileTypes.includes(fileType)) {
      enqueueSnackbar(
        "File type not supported. Kindly upload a valid pdf, jpeg or jpg",
        {
          variant: "error",
        }
      );
      return;
    }

    const sizes = parseFloat(String(files[0].size / (1024 * 1024))).toFixed(2);
    console.log(sizes);
    setSize(Helpers.formatBytes(files[0].size));
    setCurrFile(files[0].name + `, ${size}`);
    if (Number(sizes) > 2) {
      enqueueSnackbar("Max file size is 2MB", {
        variant: "error",
      });
      return;
    }

    setUserFile(files[0]);
  };
}
