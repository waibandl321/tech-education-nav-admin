import { Box, Container } from "@mui/material";
import JobTypePane from "./JobTypePane";
import {
  JobType,
  Qualification,
  DevelopmentCategory,
  DevelopmentProduct,
} from "@/API";
import QualificationPane from "./QualificationPane";
import DevelopmentCategoryPane from "./DevelopmentCategoryPane";
import DevelopmentProductPane from "./DevelopmentProductPane";

export default function JobTypeIndexPane({
  jobTypes,
  qualifications,
  developmentCategories,
  developmentProducts,
}: {
  jobTypes: Array<JobType>;
  qualifications: Array<Qualification>;
  developmentCategories: Array<DevelopmentCategory>;
  developmentProducts: Array<DevelopmentProduct>;
}) {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box sx={{ mb: 4 }}>
        <JobTypePane jobTypes={jobTypes} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <QualificationPane qualifications={qualifications} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <DevelopmentCategoryPane
          developmentCategories={developmentCategories}
        />
      </Box>
      <Box sx={{ mb: 4 }}>
        <DevelopmentProductPane developmentProducts={developmentProducts} />
      </Box>
    </Container>
  );
}
