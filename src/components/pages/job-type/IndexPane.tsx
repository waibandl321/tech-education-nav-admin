import { Container, Grid } from "@mui/material";
import JobTypePane from "./JobTypePane";
import { JobType } from "@/API";

export default function JobTypeIndexPane({
  jobTypes,
}: {
  jobTypes: Array<JobType>;
}) {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Grid container>
        <Grid
          item
          md={12}
          padding={2}
          sx={{ borderRight: 2, borderColor: "divider" }}
        >
          <JobTypePane jobTypes={jobTypes} />
        </Grid>
      </Grid>
    </Container>
  );
}
