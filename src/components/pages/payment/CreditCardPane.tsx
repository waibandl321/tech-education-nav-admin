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
import usePayment from "@/hooks/api/usePayment";
import { CreateCreditCardInput, CreditCard } from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";

export default function CreditCardPane({
  creditCards,
}: {
  creditCards: Array<CreditCard>;
}) {
  // hook
  const { apiGetCreditCards, apiCreateCreditCard, apiDeleteCreditCard } =
    usePayment();
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();

  // state
  const [inputValue, setInputValue] = useState("");
  const [creditCardList, setCreditCardList] =
    useState<Array<CreditCard>>(creditCards);

  // form変更
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 取得
  const getCreditCardList = async () => {
    const getResult = await apiGetCreditCards();
    setCreditCardList(getResult.data ?? []);
  };

  // 作成
  const handleCreateLanguage = async () => {
    // 同じ職種が登録されている場合はエラーにする
    const isExist = creditCardList.some(
      (v) => v.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (isExist) {
      setAlertMessage({
        type: "error",
        message: "同じ職種が登録されています。",
      });
      return;
    }
    setLoading(true);
    try {
      const request: CreateCreditCardInput = {
        name: inputValue,
      };
      await apiCreateCreditCard(request);
      await getCreditCardList();
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
  const handleDelete = async (e: Event, item: CreditCard) => {
    setLoading(true);
    try {
      await apiDeleteCreditCard(item);
      await getCreditCardList();
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
      <Typography>◾️ クレジットカードマスタ</Typography>
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
        {creditCardList.map((item) => (
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
