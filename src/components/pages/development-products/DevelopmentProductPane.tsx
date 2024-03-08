import {
  Box,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  Typography,
  OutlinedInput,
  TextField,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import useDevelopmentProduct from "@/hooks/api/useDevelopmentProduct";
import { CreateDevelopmentProductInput, DevelopmentProduct } from "@/API";
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

export default function DevelopmentProductPane({
  developmentProducts,
}: {
  developmentProducts: Array<DevelopmentProduct>;
}) {
  // hook
  const { getUpdateRequest } = useAPIRequest();
  const {
    apiCreateDevelopmentProduct,
    apiGetDevelopmentProducts,
    apiDeleteDevelopmentProduct,
    apiUpdateDevelopmentProduct,
  } = useDevelopmentProduct();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();

  // state
  const [inputValue, setInputValue] = useState<InputType>(initInput);
  const [developmentProductList, setDevelopmentProductList] =
    useState<Array<DevelopmentProduct>>(developmentProducts);

  // form変更
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handlerProductsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    item: DevelopmentProduct | null
  ) => {
    if (!item) return;
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setDevelopmentProductList((prevValue) => {
      // 更新されるべきプランの id が現在処理中のプランの id と一致するかどうかをチェック
      return prevValue.map((product) =>
        product?.id === item.id ? { ...product, [name]: value } : product
      );
    });
  };

  // 取得
  const getDevelopmentProductList = async () => {
    const getResult = await apiGetDevelopmentProducts();
    setDevelopmentProductList(getResult.data ?? []);
  };

  // 作成
  const handleCreateDevelopmentProduct = async () => {
    // 同じ職種が登録されている場合はエラーにする
    const isExist = developmentProductList.some(
      (v) => v.name.toLowerCase() === inputValue.name.toLowerCase()
    );
    if (isExist) {
      setAlertMessage({
        type: "error",
        message: "同じ開発プロダクトが登録されています。",
      });
      return;
    }
    setLoading(true);
    try {
      const request: CreateDevelopmentProductInput = {
        name: inputValue.name,
        memo: inputValue.memo,
      };
      await apiCreateDevelopmentProduct(request);
      await getDevelopmentProductList();
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
  const handleDelete = async (item: DevelopmentProduct) => {
    setLoading(true);
    try {
      await apiDeleteDevelopmentProduct(item);
      await getDevelopmentProductList();
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
  const handleUpdate = async (item: DevelopmentProduct) => {
    setLoading(true);
    try {
      const request = getUpdateRequest(item);
      await apiUpdateDevelopmentProduct(request);
      await getDevelopmentProductList();
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
      <Typography>◾️ 開発プロダクトマスタ</Typography>
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
          onClick={handleCreateDevelopmentProduct}
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
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {developmentProductList.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="left">
                  <TextField
                    fullWidth
                    name="name"
                    value={item.name}
                    variant="standard"
                    onChange={(e) => handlerProductsChange(e, item)}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    fullWidth
                    name="memo"
                    value={item.memo}
                    variant="standard"
                    onChange={(e) => handlerProductsChange(e, item)}
                  />
                </TableCell>
                <TableCell align="left">
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
                    sx={{ ml: 2 }}
                  >
                    <SaveIcon></SaveIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
