import { Box, Container } from "@mui/material";
import LanguagePane from "./LanguagePane";
import FrameworkPane from "./FrameworkPane";
import { Framework, ProgrammingLanguage } from "@/API";

export default function LanguagesFrameworksPane({
  languages,
  frameworks,
}: {
  languages: Array<ProgrammingLanguage>;
  frameworks: Array<Framework>;
}) {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box sx={{ mb: 4 }}>
        <LanguagePane languages={languages} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <FrameworkPane languages={languages} frameworks={frameworks} />
      </Box>
    </Container>
  );
}
