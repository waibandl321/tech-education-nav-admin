import { Box, Container, Grid } from "@mui/material";
import LanguagePane from "./LanguagePane";
import FrameworkPane from "./FrameworkPane";
import { DevelopmentTool, Framework, ProgrammingLanguage } from "@/API";
import DevelopmentToolPane from "./DevelopmentToolPane";

export default function LanguagesFrameworksPane({
  languages,
  frameworks,
  developmentTools,
}: {
  languages: Array<ProgrammingLanguage>;
  frameworks: Array<Framework>;
  developmentTools: Array<DevelopmentTool>;
}) {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box sx={{ mb: 4 }}>
        <LanguagePane languages={languages} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <FrameworkPane languages={languages} frameworks={frameworks} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <DevelopmentToolPane developmentTools={developmentTools} />
      </Box>
    </Container>
  );
}
