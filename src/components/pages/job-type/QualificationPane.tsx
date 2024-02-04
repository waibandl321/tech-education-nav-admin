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
import useQualification from "@/hooks/api/useQualification";
import { CreateQualificationInput, Qualification } from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";

export default function QualificationPane({
  qualifications,
}: {
  qualifications: Array<Qualification>;
}) {
  // hook
  const {
    apiCreateQualification,
    apiGetQualifications,
    apiDeleteQualification,
  } = useQualification();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();

  // state
  const [inputValue, setInputValue] = useState("");
  const [qualificationList, setQualificationList] =
    useState<Array<Qualification>>(qualifications);

  // form変更
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 取得
  const getQualificationList = async () => {
    const getResult = await apiGetQualifications();
    setQualificationList(getResult.data ?? []);
  };

  // 作成
  const handleCreateQualification = async () => {
    // 同じ職種が登録されている場合はエラーにする
    const isExist = qualificationList.some(
      (v) => v.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (isExist) {
      setAlertMessage({
        type: "error",
        message: "同じ資格が登録されています。",
      });
      return;
    }
    setLoading(true);
    try {
      const request: CreateQualificationInput = {
        name: inputValue,
      };
      await apiCreateQualification(request);
      await getQualificationList();
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
  const handleDelete = async (e: Event, item: Qualification) => {
    setLoading(true);
    try {
      await apiDeleteQualification(item);
      await getQualificationList();
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
      <Typography>◾️ 資格マスタ</Typography>
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
              onClick={handleCreateQualification}
            >
              <SendIcon></SendIcon>
            </IconButton>
          </InputAdornment>
        }
        sx={{ mt: 2, width: 400 }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ mt: 4 }}>
        {qualificationList.map((item) => (
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
