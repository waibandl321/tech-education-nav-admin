import {
  Paper,
  Box,
  Button,
  Container,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { LearningCenter } from "@/API";
import Image from "next/image";
import useLearningCenterLogic from "@/hooks/components/learning-center/useLearningCenterLogic";

export default function LearningCenterList() {
  const [searchText, setSearchText] = useState("");
  // hooks
  const {
    fetchLearningCenters,
    learningCenters,
    deleteLearningCenter,
    importLearningCenterCSV,
    exportCSV,
    headers,
  } = useLearningCenterLogic();
  const router = useRouter();
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

  // 編集画面遷移
  const onClickEdit = (item: LearningCenter) => {
    router.push(`/learning-center/edit?id=${item.id}`);
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

  useEffect(() => {
    // 一覧取得
    fetchLearningCenters();
  }, []);

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
          <Button onClick={() => router.push("/learning-center/create")}>
            新規作成
          </Button>
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ overflowX: "auto", mt: 1 }}
        variant="outlined"
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead sx={{ backgroundColor: "#eee" }}>
            <TableRow>
              {headers.map((item) => (
                <TableCell
                  key={item.key}
                  sx={{ minWidth: 120, whiteSpace: "nowrap" }}
                >
                  {item.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {computedLearningCenters.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Button
                      aria-label="save button"
                      color="primary"
                      onClick={() => onClickEdit(item)}
                    >
                      編集
                    </Button>
                    <Button
                      aria-label="delete button"
                      color="error"
                      onClick={() => deleteLearningCenter(item)}
                    >
                      削除
                    </Button>
                  </Box>
                </TableCell>
                <TableCell>
                  {item.logoImageURL ? (
                    <Image
                      src={item.logoImageURL ?? ""}
                      width={100}
                      height={100}
                      alt={`${item.name}ロゴ`}
                      style={{ objectFit: "contain" }}
                    ></Image>
                  ) : (
                    "ロゴ画像がありません"
                  )}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell sx={{ minWidth: 250 }}>{item.memo}</TableCell>
                <TableCell>{item.operatingCompany}</TableCell>
                <TableCell>{item.headquartersLocation}</TableCell>
                <TableCell>{item.websiteURL}</TableCell>
                <TableCell>{item.establishmentYear}</TableCell>
                <TableCell>{item.representative}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
