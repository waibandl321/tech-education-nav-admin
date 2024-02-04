import { Box, Container, Grid } from "@mui/material";
import BenefitUserCategoryPane from "./BenefitUserCategoryPane";
import { BenefitUserCategory } from "@/API";

export default function UserCategoryIndexPane({
  benefitUserCategories,
}: {
  benefitUserCategories: Array<BenefitUserCategory>;
}) {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box sx={{ mb: 4 }}>
        <BenefitUserCategoryPane
          benefitUserCategories={benefitUserCategories}
        />
      </Box>
    </Container>
  );
}
