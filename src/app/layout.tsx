import Header from "@/components/common/section/Header";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "normalize.css";
import "@/assets/css/style.css";
import MesageAlert from "@/components/common/parts/MesageAlert";
import LoadingOverlay from "@/components/common/LoadingOverlay";
import { Grid } from "@mui/material";
import Sidebar from "@/components/common/section/Sidebar";

Amplify.configure(config);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingOverlay />
      <MesageAlert />
      <Header />
      <Grid container>
        <Grid item width={200}>
          <Sidebar />
        </Grid>
        <Grid item width={"calc(100% - 200px)"}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
