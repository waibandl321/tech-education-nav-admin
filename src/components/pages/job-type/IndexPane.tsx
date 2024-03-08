import { Box, Container } from "@mui/material";
import JobTypePane from "./JobTypePane";
import { JobType } from "@/API";

export default function JobTypeIndexPane({
  jobTypes,
}: {
  jobTypes: Array<JobType>;
}) {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box sx={{ mb: 4 }}>
        <JobTypePane jobTypes={jobTypes} />
      </Box>
    </Container>
  );
}
