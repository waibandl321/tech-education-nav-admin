import { Container, Grid } from "@mui/material";
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
      <Grid container>
        <Grid
          item
          md={4}
          padding={2}
          sx={{ borderRight: 2, borderColor: "divider" }}
        >
          <LanguagePane languages={languages} />
        </Grid>
        <Grid
          item
          md={4}
          padding={2}
          sx={{ borderRight: 2, borderColor: "divider" }}
        >
          <FrameworkPane languages={languages} frameworks={frameworks} />
        </Grid>
        <Grid item md={4} padding={2}>
          <DevelopmentToolPane developmentTools={developmentTools} />
        </Grid>
      </Grid>
    </Container>
  );
}
