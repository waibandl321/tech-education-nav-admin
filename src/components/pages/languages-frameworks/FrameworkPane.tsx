import {
  Box,
  IconButton,
  Stack,
  Chip,
  Typography,
  InputAdornment,
  OutlinedInput,
  SelectChangeEvent,
  Select,
  Checkbox,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useMemo, useState } from "react";
import useFramework from "@/hooks/api/useFramework";
import { CreateFrameworkInput, Framework, ProgrammingLanguage } from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       width: 250,
//     },
//   },
// };

const initFrameworkInput: CreateFrameworkInput = {
  programmingLanguageId: null,
  name: "",
};

export default function FrameworkPane({
  languages,
  frameworks,
}: {
  languages: Array<ProgrammingLanguage>;
  frameworks: Array<Framework>;
}) {
  // hook
  const { apiCreateFramework, apiGetFrameworks, apiDeleteFramework } =
    useFramework();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();

  // state
  const [inputValue, setInputValue] =
    useState<CreateFrameworkInput>(initFrameworkInput);
  const [frameworkList, setFrameworkList] =
    useState<Array<Framework>>(frameworks);

  // form変更
  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string | null>
  ) => {
    const target = event.target;
    const { name, value } = target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // 取得
  const getFrameworks = async () => {
    const getResult = await apiGetFrameworks();
    setFrameworkList(getResult.data ?? []);
  };

  // 作成
  const handleCreateFramework = async () => {
    // 同じフレームワークが登録されている場合はエラーにする
    const isExist = frameworkList.some(
      (v) => v.name.toLowerCase() === inputValue.name.toLowerCase()
    );
    if (isExist) {
      setAlertMessage({
        type: "error",
        message: "同じフレームワークが登録されています。",
      });
      return;
    }
    setLoading(true);
    try {
      const request: CreateFrameworkInput = {
        ...inputValue,
      };
      const createResult = await apiCreateFramework(request);
      if (createResult.isSuccess && createResult.data) {
        setFrameworkList((prevItems) => [...prevItems, createResult.data]);
      }
      setInputValue(initFrameworkInput);
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
      const result = await apiDeleteFramework(item);
      if (result.isSuccess) {
        setFrameworkList(frameworkList.filter((v) => v.id !== item.id));
      }
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: "登録に失敗しました。",
      });
    } finally {
      setLoading(false);
    }
  };

  // ProgrammingLanguageのidをkeyにしたオブジェクト
  const languagesById = useMemo<{ [key: string]: ProgrammingLanguage }>(() => {
    return languages.reduce<{ [key: string]: ProgrammingLanguage }>(
      (acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      },
      {}
    );
  }, [languages]);

  // FrameworkのprogrammingLanguageIdをキーにしたオブジェクト
  const frameworksById = useMemo<{ [key: string]: Framework[] }>(() => {
    return frameworkList.reduce<{ [key: string]: Framework[] }>((acc, curr) => {
      // programmingLanguageIdがnullの場合は'other'をキーとして使用
      const key = curr.programmingLanguageId
        ? curr.programmingLanguageId
        : "other";

      // キーに対応する配列がまだ存在しない場合は、空の配列を初期値として設定
      if (!acc[key]) {
        acc[key] = [];
      }
      // 現在のFrameworkをキーに対応する配列に追加
      acc[key].push(curr);
      return acc;
    }, {});
  }, [frameworkList]);

  const getLanguageName = (id?: string | null) => {
    if (!id) return "";
    return languagesById[id].name;
  };

  return (
    <Box>
      <Typography>◾️ フレームワークマスタ</Typography>
      <Box flex="" alignItems="start" sx={{ mb: 2 }}>
        <FormControl sx={{ mt: 2, width: 300 }}>
          <InputLabel id="select-language-label">プログラミング言語</InputLabel>
          <Select
            labelId="select-language-label"
            id="select-language"
            name="programmingLanguageId"
            value={inputValue.programmingLanguageId ?? ""}
            onChange={(e) => handleFormChange(e)}
            input={<OutlinedInput label="プログラミング言語" />}
            renderValue={(selected) => getLanguageName(selected)}
          >
            {languages.map((language) => (
              <MenuItem key={language.id} value={language.id} dense>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="onSale"
                      checked={language.id === inputValue.programmingLanguageId}
                    />
                  }
                  label={language.name}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <OutlinedInput
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                color="primary"
                size="small"
                disabled={!inputValue.name}
                onClick={handleCreateFramework}
              >
                <SendIcon></SendIcon>
              </IconButton>
            </InputAdornment>
          }
          sx={{ mt: 2 }}
          name="name"
          value={inputValue.name}
          onChange={(e) => handleFormChange(e)}
        />
      </Box>
      {Object.entries(frameworksById).map(([key, frameworks]) => (
        <Box key={key} sx={{ mt: 1 }}>
          <Typography>
            {frameworks[0].programmingLanguageId
              ? getLanguageName(frameworks[0].programmingLanguageId)
              : "その他"}
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ mt: 0.5 }}>
            {frameworks.map((framework) => (
              <Chip
                key={framework.id}
                label={framework.name}
                variant="outlined"
                onDelete={(e) => handleDelete(e, framework)}
                sx={{ mt: 1, marginBottom: "8px!important" }}
              />
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
