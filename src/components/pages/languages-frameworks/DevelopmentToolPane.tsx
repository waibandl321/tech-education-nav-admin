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
import useDevelopmentTool from "@/hooks/api/useDevelopmentTool";
import { CreateDevelopmentToolInput, DevelopmentTool } from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";

export default function DevelopmentToolPane({
  developmentTools,
}: {
  developmentTools: Array<DevelopmentTool>;
}) {
  // hook
  const {
    apiCreateDevelopmentTool,
    apiGetDevelopmentTools,
    apiDeleteDevelopmentTool,
  } = useDevelopmentTool();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();

  // state
  const [inputValue, setInputValue] = useState("");
  const [developmentToolList, setDevelopmentToolList] =
    useState<Array<DevelopmentTool>>(developmentTools);

  // form変更
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 取得
  const getDevelopmentTools = async () => {
    const getResult = await apiGetDevelopmentTools();
    setDevelopmentToolList(getResult.data ?? []);
  };

  // 作成
  const handleCreateLanguage = async () => {
    // 同じツールが登録されている場合はエラーにする
    const isExist = developmentToolList.some(
      (v) => v.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (isExist) {
      setAlertMessage({
        type: "error",
        message: "同じツールが登録されています。",
      });
      return;
    }
    setLoading(true);
    try {
      const request: CreateDevelopmentToolInput = {
        name: inputValue,
      };
      await apiCreateDevelopmentTool(request);
      await getDevelopmentTools();
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
  const handleDelete = async (e: Event, item: DevelopmentTool) => {
    setLoading(true);
    try {
      await apiDeleteDevelopmentTool(item);
      await getDevelopmentTools();
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
      <Typography>開発ツールマスタ</Typography>
      <OutlinedInput
        type="text"
        size="small"
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
        {developmentToolList.map((item) => (
          <Chip
            key={item.id}
            label={item.name}
            variant="outlined"
            onDelete={(e) => handleDelete(e, item)}
            sx={{ marginBottom: "8px!important" }}
          />
        ))}
      </Stack>
    </Box>
  );
}
