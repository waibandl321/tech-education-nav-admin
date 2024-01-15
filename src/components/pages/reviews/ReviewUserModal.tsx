import { CourseReview } from "@/API";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const userHeaders = [
  { key: "userDisplayId", name: "表示ID" },
  { key: "userGender", name: "性別" },
  { key: "userAge", name: "年齢" },
  { key: "userPrefecture", name: "都道府県" },
];

export default function ReviewUserModal({
  isOpen,
  targetReview,
  closeModal,
}: {
  isOpen: boolean;
  targetReview: CourseReview | null;
  closeModal: () => void;
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="user-dialog-title"
      maxWidth="xl"
    >
      <DialogTitle id="alert-dialog-title">投稿ユーザー情報</DialogTitle>
      <DialogContent>
        <TableContainer component={Paper} sx={{ mt: 2 }} variant="outlined">
          <Table
            sx={{ overflow: "auto" }}
            aria-label="simple table"
            size="small"
          >
            <TableHead sx={{ backgroundColor: "#eee" }}>
              <TableRow>
                {userHeaders.map((item, index) => (
                  <TableCell key={index}>{item.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{targetReview?.userDisplayId}</TableCell>
                <TableCell>{targetReview?.userGender}</TableCell>
                <TableCell>{targetReview?.userAge}</TableCell>
                <TableCell>{targetReview?.userPrefecture}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
}
