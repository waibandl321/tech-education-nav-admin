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
import { useState } from "react";
import useFramework from "@/hooks/api/useFramework";
import { CreateFrameworkInput, Framework } from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";

export default function FrameworkPane({
  frameworks,
}: {
  frameworks: Array<Framework>;
}) {
  // hook
  const { apiCreateFramework, apiGetFrameworks, apiDeleteFramework } =
    useFramework();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();

  // state
  const [inputValue, setInputValue] = useState("");
  const [frameworkList, setFrameworkList] =
    useState<Array<Framework>>(frameworks);

  // form変更
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 取得
  const getFrameworks = async () => {
    const getResult = await apiGetFrameworks();
    setFrameworkList(getResult.data ?? []);
  };

  // 作成
  const handleCreateFramework = async () => {
    // 同じ言語が登録されている場合はエラーにする
    const isExist = frameworkList.some(
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
      const request: CreateFrameworkInput = {
        name: inputValue,
      };
      await apiCreateFramework(request);
      await getFrameworks();
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
  const handleDelete = async (e: Event, item: Framework) => {
    setLoading(true);
    try {
      await apiDeleteFramework(item);
      await getFrameworks();
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
      <Typography>フレームワークマスタ</Typography>
      <OutlinedInput
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              color="primary"
              size="small"
              disabled={!inputValue}
              onClick={handleCreateFramework}
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
        {frameworkList.map((item) => (
          <Chip
            key={item.id}
            label={item.name}
            variant="outlined"
            onDelete={(e) => handleDelete(e, item)}
            sx={{ mt: 1, mb: 1 }}
          />
        ))}
      </Stack>
    </Box>
  );
}
