import {
  Box,
  IconButton,
  Stack,
  Chip,
  Typography,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import useProgrammingLanguage from "@/hooks/api/useProgrammingLanguage";
import { CreateProgrammingLanguageInput, ProgrammingLanguage } from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";

export default function LanguagePane({
  languages,
}: {
  languages: Array<ProgrammingLanguage>;
}) {
  // hook
  const {
    apiCreateProgrammingLanguage,
    apiGetProgrammingLanguages,
    apiDeleteProgrammingLanguage,
  } = useProgrammingLanguage();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();

  // state
  const [inputValue, setInputValue] = useState("");
  const [languageList, setLanguageList] =
    useState<Array<ProgrammingLanguage>>(languages);

  // form変更
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 取得
  const getLanguages = async () => {
    const getResult = await apiGetProgrammingLanguages();
    setLanguageList(getResult.data ?? []);
  };

  // 作成
  const handleCreateLanguage = async () => {
    // 同じ言語が登録されている場合はエラーにする
    const isExist = languageList.some(
      (v) => v.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (isExist) {
      setAlertMessage({
        type: "error",
        message: "同じ言語が登録されています。",
      });
      return;
    }
    setLoading(true);
    try {
      const request: CreateProgrammingLanguageInput = {
        name: inputValue,
      };
      await apiCreateProgrammingLanguage(request);
      await getLanguages();
      setInputValue("");
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: "登録に失敗しました。",
      });
    } finally {
      setLoading(false);
    }
  };

  // 削除
  const handleDelete = async (e: Event, item: ProgrammingLanguage) => {
    setLoading(true);
    try {
      await apiDeleteProgrammingLanguage(item);
      await getLanguages();
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: "登録に失敗しました。",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography>プログラミング言語マスタ</Typography>
      <OutlinedInput
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              color="primary"
              size="small"
              disabled={!inputValue}
              onClick={handleCreateLanguage}
            >
              <SendIcon></SendIcon>
            </IconButton>
          </InputAdornment>
        }
        sx={{ mt: 2 }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ mt: 4 }}>
        {languageList.map((item) => (
          <Chip
            key={item.id}
            label={item.name}
            variant="outlined"
            onDelete={(e) => handleDelete(e, item)}
          />
        ))}
      </Stack>
    </Box>
  );
}
