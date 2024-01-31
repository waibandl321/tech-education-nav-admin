import {
  Box,
  Button,
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemButton,
  Divider,
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CreateLearningCenterInput,
  CreditCard,
  LearningCenter,
  PaymentMethod,
} from "@/API";
import useLearningCenterLogic from "@/hooks/components/learning-center/useLearningCenterLogic";
import { useLoading } from "@/contexts/LoadingContext";
import { useMessageAlert } from "@/contexts/MessageAlertContext";
import useLearningCenter from "@/hooks/api/useLearningCenter";
import LearningCenterEditPane from "./LearningCenterEditPane";

// LearningCenter 初期値
const initCreateLearningCenter: CreateLearningCenterInput = {
  name: "",
  memo: "",
  operatingCompany: "",
  headquartersLocation: "",
  websiteURL: "",
  logoImageURL: undefined,
  establishmentYear: 2000,
  representative: "",
  paymentOptions: null,
  creditCards: null,
  cancelPolicy: "",
  isDeleted: false,
};

export default function LearningCenterList({
  centers,
  paymentMethods,
  creditCards,
}: {
  centers: Array<LearningCenter>;
  paymentMethods: Array<PaymentMethod>;
  creditCards: Array<CreditCard>;
}) {
  const [searchText, setSearchText] = useState("");
  const [editItem, setEditItem] = useState<
    LearningCenter | CreateLearningCenterInput | null
  >(null);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  // 一覧
  const [learningCenters, setLearningCenters] =
    useState<Array<LearningCenter>>(centers);
  // hooks
  const { setLoading } = useLoading();
  const { setAlertMessage } = useMessageAlert();
  const {
    apiUpdateLearningCenter,
    apiGetLearningCenterById,
    apiGetLearningCenters,
    apiCreateLearningCenter,
    apiDeleteLearningCenter,
  } = useLearningCenter();
  const {
    fetchLearningCenters,
    // learningCenters,
    importLearningCenterCSV,
    exportCSV,
  } = useLearningCenterLogic();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // テキスト検索結果
  const computedLearningCenters: Array<LearningCenter> = useMemo(() => {
    return learningCenters.filter(
      (v) =>
        v.name?.includes(searchText) ||
        v.memo?.includes(searchText) ||
        v.operatingCompany?.includes(searchText)
    );
  }, [learningCenters, searchText]);

  // 一覧取得
  const getLearningCenters = async () => {
    setLoading(true);
    try {
      const result = await apiGetLearningCenters();
      setLearningCenters(result.data ?? []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // 編集画面遷移
  const onClickEdit = (item: LearningCenter) => {
    setEditItem(null);
    setEditItem(item);
    setIsOpenEdit(true);
  };
  const onClickCreate = () => {
    setEditItem(null);
    setEditItem(initCreateLearningCenter);
    setIsOpenEdit(true);
  };

  // データ削除
  const deleteLearningCenter = async (item: LearningCenter) => {
    setLoading(true);
    try {
      const result = await apiDeleteLearningCenter(item);
      if (result.isSuccess) {
        await getLearningCenters();
        setAlertMessage({
          type: "success",
          message: `${item.name}を削除しました。`,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // インポート登録
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    await importLearningCenterCSV(event);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Formの更新
  const handlerSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;
    setSearchText(value);
  };

  // 編集閉じる
  const handlerClose = async () => {
    setIsOpenEdit(false);
    setEditItem(null);
    await getLearningCenters();
  };

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <TextField
            size="small"
            variant="standard"
            placeholder="テキストで検索"
            value={searchText}
            onChange={(event) => handlerSearchInputChange(event)}
            InputProps={{
              endAdornment: <SearchIcon color="disabled"></SearchIcon>,
            }}
          />
        </Box>
        <Box>
          <input type="file" onChange={handleFileChange} ref={fileInputRef} />
          <Button onClick={exportCSV}>
            <GetAppIcon></GetAppIcon>
            <span>エクスポート</span>
          </Button>
          <Button onClick={onClickCreate}>新規作成</Button>
        </Box>
      </Box>

      <List>
        <Divider />
        {computedLearningCenters.map((item) => (
          <div key={item.id}>
            <ListItem dense sx={{ p: 0 }}>
              <ListItemButton onClick={() => onClickEdit(item)}>
                <ListItemText primary={`${item.name}: `} />
                <ListItemSecondaryAction>
                  <Button
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteLearningCenter(item);
                    }}
                  >
                    削除
                  </Button>
                </ListItemSecondaryAction>
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      {editItem && isOpenEdit && (
        <LearningCenterEditPane
          paymentMethods={paymentMethods}
          creditCards={creditCards}
          editItem={editItem}
          onClose={handlerClose}
          key={editItem.id}
        />
      )}
    </Container>
  );
}
