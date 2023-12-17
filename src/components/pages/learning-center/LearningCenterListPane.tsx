import { Button, Container, IconButton, Typography } from "@mui/material";
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
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import Image from "next/image";
import useLearningCenterLogic from "@/hooks/components/learning-center/useLearningCenterLogic";

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

  // 編集画面遷移
  const onClickEdit = (item: LearningCenter) => {
    router.push(`/learning-center/edit?id=${item.id}`);
  };

  useEffect(() => {
    // 一覧取得
    fetchLearningCenters();
  }, []);

  return (
    <Container sx={{ p: 4 }}>
      <Typography textAlign="right">
        <Button onClick={() => router.push("/learning-center/create")}>
          新規作成
        </Button>
      </Typography>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, overflow: "auto" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {headers.map((item) => (
                <TableCell key={item.key} sx={{ whiteSpace: "nowrap" }}>
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
                  <IconButton
                    type="button"
                    aria-label="search"
                    color="error"
                    onClick={() => deleteLearningCenter(item)}
                  >
                    <DeleteOutline />
                  </IconButton>
                  <IconButton
                    type="button"
                    aria-label="search"
                    color="error"
                    onClick={() => onClickEdit(item)}
                  >
                    <EditOutlined />
                  </IconButton>
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
                <TableCell>{item.memo}</TableCell>
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
