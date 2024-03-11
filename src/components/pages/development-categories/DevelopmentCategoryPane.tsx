import {
  Box,
  IconButton,
  Typography,
  OutlinedInput,
  TextField,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import useDevelopmentCategory from "@/hooks/api/useDevelopmentCategory";
import { CreateDevelopmentCategoryInput, DevelopmentCategory } from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import useAPIRequest from "@/hooks/utils/useAPIRequest";

type InputType = {
  name: string;
  memo: string;
};

const initInput = {
  name: "",
  memo: "",
};

export default function DevelopmentCategoryPane({
  developmentCategories,
}: {
  developmentCategories: Array<DevelopmentCategory>;
}) {
  // hook
  const { getUpdateRequest } = useAPIRequest();
  const {
    apiCreateDevelopmentCategory,
    apiGetDevelopmentCategorys,
    apiUpdateDevelopmentCategory,
    apiDeleteDevelopmentCategory,
  } = useDevelopmentCategory();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();

  // state
  const [inputValue, setInputValue] = useState<InputType>(initInput);
  const [developmentCategoryList, setDevelopmentCategoryList] = useState<
    Array<DevelopmentCategory>
  >(developmentCategories);

  // form変更
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handlerCategoriesChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    item: DevelopmentCategory | null
  ) => {
    if (!item) return;
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setDevelopmentCategoryList((prevValue) => {
      // 更新されるべきプランの id が現在処理中のプランの id と一致するかどうかをチェック
      return prevValue.map((product) =>
        product?.id === item.id ? { ...product, [name]: value } : product
      );
    });
  };

  // 取得
  const getDevelopmentCategoryList = async () => {
    const getResult = await apiGetDevelopmentCategorys();
    setDevelopmentCategoryList(getResult.data ?? []);
  };

  // 作成
  const handleCreateDevelopmentCategory = async () => {
    // 同じ職種が登録されている場合はエラーにする
    const isExist = developmentCategoryList.some(
      (v) => v.name.toLowerCase() === inputValue.name.toLowerCase()
    );
    if (isExist) {
      setAlertMessage({
        type: "error",
        message: "同じ開発領域が登録されています。",
      });
      return;
    }
    setLoading(true);
    try {
      const request: CreateDevelopmentCategoryInput = {
        name: inputValue.name,
        memo: inputValue.memo,
      };
      await apiCreateDevelopmentCategory(request);
      await getDevelopmentCategoryList();
      setInputValue(initInput);
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
  const handleDelete = async (item: DevelopmentCategory) => {
    setLoading(true);
    try {
      await apiDeleteDevelopmentCategory(item);
      await getDevelopmentCategoryList();
    } catch (error) {
      setAlertMessage({
        type: "error",
        message: "登録に失敗しました。",
      });
    } finally {
      setLoading(false);
    }
  };

  // 更新
  const handleUpdate = async (item: DevelopmentCategory) => {
    setLoading(true);
    try {
      const request = getUpdateRequest(item);
      await apiUpdateDevelopmentCategory(request);
      await getDevelopmentCategoryList();
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
      <Typography>◾️ 開発領域マスタ</Typography>
      <Box display="flex" alignItems="flex-start">
        <OutlinedInput
          placeholder="名称"
          type="text"
          size="small"
          name="name"
          sx={{ width: 400 }}
          value={inputValue.name}
          onChange={handleInputChange}
        />
        <TextField
          placeholder="説明"
          multiline
          name="memo"
          minRows={1}
          size="small"
          value={inputValue.memo}
          onChange={handleInputChange}
          fullWidth
          sx={{ ml: 2 }}
        />
        <IconButton
          edge="end"
          color="primary"
          size="small"
          disabled={!inputValue.name}
          onClick={handleCreateDevelopmentCategory}
          sx={{ ml: 2 }}
        >
          <SendIcon></SendIcon>
        </IconButton>
      </Box>
      <TableContainer component={Paper} variant="outlined" sx={{ mt: 2 }}>
        <Table size="small" stickyHeader sx={{ overflow: "auto" }}>
          <TableHead sx={{ whiteSpace: "nowrap" }}>
            <TableRow>
              <TableCell
                sx={{ minWidth: 150, backgroundColor: "#f8f8f8" }}
                align="left"
              >
                名称
              </TableCell>
              <TableCell
                sx={{ minWidth: 150, backgroundColor: "#f8f8f8" }}
                align="left"
              >
                説明
              </TableCell>
              <TableCell
                sx={{ width: 100, backgroundColor: "#f8f8f8" }}
                align="center"
              >
                ---
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {developmentCategoryList.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="left" sx={{ verticalAlign: "bottom" }}>
                  <TextField
                    fullWidth
                    name="name"
                    value={item.name}
                    variant="standard"
                    onChange={(e) => handlerCategoriesChange(e, item)}
                    minRows={1}
                    multiline
                  />
                </TableCell>
                <TableCell align="left" sx={{ verticalAlign: "bottom" }}>
                  <TextField
                    fullWidth
                    name="memo"
                    value={item.memo}
                    variant="standard"
                    onChange={(e) => handlerCategoriesChange(e, item)}
                    minRows={1}
                    multiline
                  />
                </TableCell>
                <TableCell align="center">
                  <Box display="flex" alignItems="center">
                    <IconButton
                      edge="end"
                      color="error"
                      title="削除"
                      size="small"
                      onClick={async (e) => {
                        e.stopPropagation();
                        handleDelete(item);
                      }}
                      sx={{ ml: 2 }}
                    >
                      <DeleteIcon></DeleteIcon>
                    </IconButton>
                    <IconButton
                      edge="end"
                      color="primary"
                      title="保存"
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpdate(item);
                      }}
                      sx={{ ml: 1 }}
                    >
                      <SaveIcon></SaveIcon>
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
