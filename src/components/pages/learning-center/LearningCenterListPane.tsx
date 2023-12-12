import { Button, Container, IconButton, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useLearningCenter from "@/hooks/api/useLearningCenter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LearningCenter } from "@/API";
import { useLoading } from "@/contexts/LoadingContext";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

const headers = [
  { key: "name", name: "スクール名" },
  { key: "memo", name: "スクール詳細情報" },
  { key: "operatingCompany", name: "運営会社" },
  { key: "headquartersLocation", name: "本社所在地" },
  { key: "websiteURL", name: "ホームページURL" },
  { key: "establishmentYear", name: "設立年" },
  { key: "representative", name: "代表者" },
  { key: "admin", name: "管理" },
];

export default function LearningCenterList() {
  const { apiGetLearningCenters, apiDeleteLearningCenter } =
    useLearningCenter();
  const router = useRouter();
  const { setLoading } = useLoading();
  const [learningCenters, setLearningCenters] = useState<Array<LearningCenter>>(
    []
  );

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await apiGetLearningCenters();
      setLearningCenters(result.data ?? []);
      console.log(learningCenters);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (item: LearningCenter) => {
    setLoading(true);
    try {
      await apiDeleteLearningCenter(item);
      await fetchData();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onClickCreate = () => {
    console.log("click");
    router.push("/learning-center/edit");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container sx={{ p: 4 }}>
      <Typography textAlign="right">
        <Button onClick={onClickCreate}>新規作成</Button>
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
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.memo}</TableCell>
                <TableCell>{item.operatingCompany}</TableCell>
                <TableCell>{item.headquartersLocation}</TableCell>
                <TableCell>{item.websiteURL}</TableCell>
                <TableCell>{item.establishmentYear}</TableCell>
                <TableCell>{item.representative}</TableCell>
                <TableCell>
                  <IconButton
                    type="button"
                    aria-label="search"
                    color="error"
                    onClick={() => deleteData(item)}
                  >
                    <DeleteOutline />
                  </IconButton>
                  <IconButton type="button" aria-label="search" color="error">
                    <EditOutlined />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
