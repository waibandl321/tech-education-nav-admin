import { Container, Grid } from "@mui/material";
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
      <Grid container>
        <Grid
          item
          md={6}
          padding={2}
          sx={{ borderRight: 2, borderColor: "divider" }}
        >
          <LanguagePane languages={languages} />
        </Grid>
        <Grid item md={6} padding={2}>
          <FrameworkPane languages={languages} frameworks={frameworks} />
        </Grid>
      </Grid>
    </Container>
  );
}
