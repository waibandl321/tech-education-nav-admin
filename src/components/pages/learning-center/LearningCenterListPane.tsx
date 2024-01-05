import { Box, Button, Container, Typography } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { LearningCenter } from "@/API";
import Image from "next/image";
import useLearningCenterLogic from "@/hooks/components/learning-center/useLearningCenterLogic";
import dayjs from "dayjs";
import useCSV from "@/hooks/utils/useCSV";

const headers = [
  { key: "admin", name: "管理" },
  { key: "logoImageURL", name: "ロゴ" },
  { key: "name", name: "スクール名" },
  { key: "memo", name: "スクール詳細情報" },
  { key: "operatingCompany", name: "運営会社" },
  { key: "headquartersLocation", name: "本社所在地" },
  { key: "websiteURL", name: "ホームページURL" },
  { key: "establishmentYear", name: "設立年" },
  { key: "representative", name: "代表者" },
];

export default function LearningCenterList() {
  // hooks
  const { fetchLearningCenters, learningCenters, deleteLearningCenter } =
    useLearningCenterLogic();
  const router = useRouter();
  const { convertStringToCSV, download } = useCSV();

  // 編集画面遷移
  const onClickEdit = (item: LearningCenter) => {
    router.push(`/learning-center/edit?id=${item.id}`);
  };

  // エクスポート
  const exportCSV = async () => {
    // 'admin' キーを持つ要素を除去し、'id' キーを先頭に追加
    const nonAdminHeaders = headers.filter((header) => header.key !== "admin");
    const csvHeaders = [{ key: "id", name: "ID" }, ...nonAdminHeaders];

    // CSVのフィールドキーを準備
    const csvFieldKeys = csvHeaders.map((header) => header.key);

    // LearningCenter型のデータをCSV用に変換
    const csvData = learningCenters.map((item) =>
      csvFieldKeys.reduce((obj, key) => {
        obj[key] = item[key as keyof LearningCenter] ?? "";
        return obj;
      }, {} as Record<string, unknown>)
    );

    // CSV文字列に変換
    const csv = convertStringToCSV(csvFieldKeys, csvData);
    const fileName = `learning-center-list-${dayjs().valueOf()}.csv`;
    download(csv, fileName);
  };

  useEffect(() => {
    // 一覧取得
    fetchLearningCenters();
  }, []);

  return (
    <Container sx={{ px: 4, pt: 2 }}>
      <Typography textAlign="right">
        <Button onClick={exportCSV}>
          <GetAppIcon></GetAppIcon>
          <span>エクスポート</span>
        </Button>
        <Button onClick={() => router.push("/learning-center/create")}>
          新規作成
        </Button>
      </Typography>

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
            {learningCenters.map((item) => (
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
