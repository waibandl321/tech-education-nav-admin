import * as React from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[400] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  box-sizing: border-box;
  resize: none;
`
);

/**
 * props型
 */
interface TextareaProps {
  inputValue: string;
  placeholder?: string;
  name: string;
  onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * textareaコンポーネント
 * @param inputValue 入力値
 * @param placeholder placeholder属性値
 * @param name name属性
 * @param onInputChange changeイベントのコールバック関数
 * @returns
 */
export default function TextareaComponent({
  inputValue,
  placeholder,
  name,
  onInputChange,
}: TextareaProps) {
  return (
    <Textarea
      minRows={3}
      value={inputValue}
      placeholder={placeholder}
      name={name}
      onChange={onInputChange}
    />
  );
}
