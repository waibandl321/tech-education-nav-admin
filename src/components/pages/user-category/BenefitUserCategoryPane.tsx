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
import useBenefitUserCategory from "@/hooks/api/useBenefitUserCategory";
import { CreateBenefitUserCategoryInput, BenefitUserCategory } from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";

export default function BenefitUserCategoryPane({
  benefitUserCategories,
}: {
  benefitUserCategories: Array<BenefitUserCategory>;
}) {
  // hook
  const {
    apiCreateBenefitUserCategory,
    apiGetBenefitUserCategories,
    apiDeleteBenefitUserCategory,
  } = useBenefitUserCategory();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();

  // state
  const [inputValue, setInputValue] = useState("");
  const [benefitUserCategoryList, setBenefitUserCategoryList] = useState<
    Array<BenefitUserCategory>
  >(benefitUserCategories);

  // form変更
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 取得
  const getBenefitUserCategoryList = async () => {
    const getResult = await apiGetBenefitUserCategories();
    setBenefitUserCategoryList(getResult.data ?? []);
  };

  // 作成
  const handleCreateLanguage = async () => {
    // 同じユーザー種別が登録されている場合はエラーにする
    const isExist = benefitUserCategoryList.some(
      (v) => v.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (isExist) {
      setAlertMessage({
        type: "error",
        message: "同じユーザー種別が登録されています。",
      });
      return;
    }
    setLoading(true);
    try {
      const request: CreateBenefitUserCategoryInput = {
        name: inputValue,
      };
      await apiCreateBenefitUserCategory(request);
      await getBenefitUserCategoryList();
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
  const handleDelete = async (e: Event, item: BenefitUserCategory) => {
    setLoading(true);
    try {
      await apiDeleteBenefitUserCategory(item);
      await getBenefitUserCategoryList();
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
      <Typography>◾️ 優待ユーザー種別マスタ</Typography>
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
        sx={{ mt: 2, width: 400 }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ mt: 4 }}>
        {benefitUserCategoryList.map((item) => (
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
