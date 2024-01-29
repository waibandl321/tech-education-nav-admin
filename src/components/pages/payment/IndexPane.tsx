import { Box, Container, Grid } from "@mui/material";
import PaymentMethodPane from "./PaymentMethodPane";
import CreditCardPanePane from "./CreditCardPane";
import { PaymentMethod, CreditCard } from "@/API";

export default function PaymentMethodIndexPane({
  paymentMethods,
  creditCards,
}: {
  paymentMethods: Array<PaymentMethod>;
  creditCards: Array<CreditCard>;
}) {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box sx={{ mb: 4 }}>
        <PaymentMethodPane paymentMethods={paymentMethods} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <CreditCardPanePane creditCards={creditCards} />
      </Box>
    </Container>
  );
}
